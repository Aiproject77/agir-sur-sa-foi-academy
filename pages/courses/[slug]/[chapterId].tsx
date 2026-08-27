import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { getCourseBySlug, COURSES, type Chapter, type QuizQuestion as QuizQuestionType } from "../../../lib/courses";
import NavBar from "../../../components/NavBar";
import DonationWidget from "../../../components/DonationWidget";

export default function ChapterPage() {
  const router = useRouter();
  const { slug, chapterId } = router.query;

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [phase, setPhase] = useState<"reading" | "quiz" | "correct" | "failed">("reading");
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [failedQuestions, setFailedQuestions] = useState<number[]>([]);
  const [autoScroll, setAutoScroll] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [examSecondsLeft, setExamSecondsLeft] = useState<number | null>(null);
  const [lastScorePercent, setLastScorePercent] = useState<number | null>(null);
  const examIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const elapsedRef = useRef(0);

  const course = typeof slug === "string" ? getCourseBySlug(slug) : null;
  const chapter = course?.chapters.find((c) => c.id === chapterId);
  const chapterIndex = course?.chapters.findIndex((c) => c.id === chapterId) ?? -1;
  const nextChapter = chapterIndex >= 0 ? course?.chapters[chapterIndex + 1] : null;
  const prevChapter = chapterIndex > 0 ? course?.chapters[chapterIndex - 1] : null;

  const isBilingual = !!chapter?.contentFr;
  const displayContent = lang === "fr" && chapter?.contentFr ? chapter.contentFr : chapter?.content || "";
  const displayQuiz: QuizQuestionType[] = (lang === "fr" && chapter?.quizFr ? chapter.quizFr : chapter?.quiz) || [];
  const passingScorePercent = chapter?.passingScorePercent ?? 100;
  const isExam = !!chapter?.isFinalExam;

  // French-only courses (no English variant) always render their UI copy in French.
  useEffect(() => {
    if (course?.language === "fr") setLang("fr");
  }, [course?.language]);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => {
        if (!d.user) { router.push("/auth/login"); return; }
        if (course?.visibility === "admin" && d.user.role !== "admin") {
          router.push("/dashboard");
          return;
        }
        setUser(d.user);
        // Restore elapsed time from localStorage
        if (typeof window !== "undefined" && chapter) {
          const stored = localStorage.getItem(`asf_timer_${chapter.id}`);
          if (stored) {
            const val = parseInt(stored, 10);
            elapsedRef.current = val;
            setElapsed(val);
          }
        }
      })
      .catch(() => router.push("/auth/login"))
      .finally(() => setLoading(false));
  }, []);

  // Timer
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      elapsedRef.current += 1;
      setElapsed(elapsedRef.current);
      if (typeof window !== "undefined" && chapter) {
        localStorage.setItem(`asf_timer_${chapter.id}`, String(elapsedRef.current));
      }
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [chapter]);

  // Auto-scroll
  useEffect(() => {
    if (autoScroll) {
      scrollIntervalRef.current = setInterval(() => {
        window.scrollBy({ top: 1.5, behavior: "auto" });
      }, 50);
    } else {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    }
    return () => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    };
  }, [autoScroll]);

  function formatTime(secs: number) {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  async function completeChapter() {
    if (!course || !chapter || !user) return;

    const currentCompleted = user?.progress?.[course.id]?.completedChapters || [];
    const newCompleted = currentCompleted.includes(chapter.id)
      ? currentCompleted
      : [...currentCompleted, chapter.id];

    const allCompleted = course.chapters.every((c) => newCompleted.includes(c.id));

    await fetch("/api/courses/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        courseId: course.id,
        chapterId: chapter.id,
        timeSpent: elapsedRef.current,
        completedAt: allCompleted ? new Date().toISOString() : undefined,
      }),
    });

    // Clear timer
    if (typeof window !== "undefined") {
      localStorage.removeItem(`asf_timer_${chapter.id}`);
    }

    // Update local user state
    setUser((prev: any) => {
      const prevProgress = prev?.progress?.[course.id] || {};
      return {
        ...prev,
        progress: {
          ...(prev?.progress || {}),
          [course.id]: {
            ...prevProgress,
            completedChapters: newCompleted,
            completedAt: allCompleted ? new Date().toISOString() : prevProgress.completedAt,
          },
        },
      };
    });

    setPhase("correct");
  }

  function startQuiz() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPhase("quiz");
    setQuizAnswers({});
    setFailedQuestions([]);
    setLastScorePercent(null);
    setExamSecondsLeft(chapter?.examDurationMinutes ? chapter.examDurationMinutes * 60 : null);
  }

  const submitQuizRef = useRef<() => void>(() => {});

  function submitQuiz() {
    if (!chapter) return;
    if (examIntervalRef.current) clearInterval(examIntervalRef.current);
    const failed: number[] = [];
    displayQuiz.forEach((q, i) => {
      if (quizAnswers[i] !== q.correct) failed.push(i);
    });
    const total = displayQuiz.length || 1;
    const scorePercent = Math.round(((total - failed.length) / total) * 100);
    setLastScorePercent(scorePercent);
    if (scorePercent >= passingScorePercent) {
      completeChapter();
    } else {
      setFailedQuestions(failed);
      setPhase("failed");
    }
  }
  submitQuizRef.current = submitQuiz;

  // Exam countdown — ticks while in the quiz phase of a timed final exam, auto-submits at zero.
  useEffect(() => {
    if (phase === "quiz" && examSecondsLeft !== null) {
      examIntervalRef.current = setInterval(() => {
        setExamSecondsLeft((prev) => {
          if (prev === null) return prev;
          if (prev <= 1) {
            if (examIntervalRef.current) clearInterval(examIntervalRef.current);
            submitQuizRef.current();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (examIntervalRef.current) clearInterval(examIntervalRef.current);
    };
  }, [phase, examSecondsLeft !== null]);

  function goToNextChapter() {
    if (nextChapter) {
      router.push(`/courses/${slug}/${nextChapter.id}`);
    } else {
      router.push(`/courses/${slug}/certificate`);
    }
  }

  function retryChapter() {
    setPhase("reading");
    setQuizAnswers({});
    setFailedQuestions([]);
    setLastScorePercent(null);
    setExamSecondsLeft(null);
    window.scrollTo({ top: 0 });
  }

  if (loading) return <div style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>Loading...</div>;
  if (!course || !chapter) return (
    <div style={{ padding: "3rem", textAlign: "center" }}>
      <p>Chapter not found.</p>
      <Link href="/dashboard" className="btn-primary" style={{ marginTop: "1rem" }}>Back to Dashboard</Link>
    </div>
  );

  const allAnswered = displayQuiz.every((_, i) => quizAnswers[i] !== undefined);

  function formatCountdown(secs: number) {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  return (
    <>
      <Head>
        <title>{chapter.title} — {course.title} — ASF Academy</title>
      </Head>
      <NavBar user={user} />

      {/* Chapter nav bar */}
      <div style={{
        background: "var(--cream-dark)",
        borderBottom: "1px solid var(--border)",
        padding: "0.6rem 1.5rem",
        display: "flex",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
      }}>
        <Link href={`/courses/${slug}`} style={{ fontSize: 13, color: "var(--text-muted)" }}>
          ← {course.title}
        </Link>
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
          Chapter {chapterIndex + 1} of {course.chapters.length}
        </span>
        {/* Timer */}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{
            background: "var(--black)",
            color: "#fff",
            padding: "3px 10px",
            borderRadius: 20,
            fontSize: 13,
            fontFamily: "monospace",
          }}>
            {formatTime(elapsed)}
          </span>
          <button
            onClick={() => setAutoScroll(!autoScroll)}
            style={{
              fontSize: 12,
              padding: "4px 12px",
              borderRadius: 20,
              border: `1px solid ${autoScroll ? "var(--gold)" : "var(--border)"}`,
              background: autoScroll ? "var(--gold-light)" : "transparent",
              color: autoScroll ? "#7a5c00" : "var(--text-secondary)",
              cursor: "pointer",
            }}
          >
            {autoScroll ? "Stop Scroll" : "Auto-Scroll"}
          </button>
          <button
            onClick={() => setShowContact(!showContact)}
            style={{
              fontSize: 12,
              padding: "4px 12px",
              borderRadius: 20,
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--text-secondary)",
              cursor: "pointer",
            }}
          >
            Contact Instructor
          </button>
        </div>
      </div>

      {/* Contact instructor modal */}
      {showContact && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 200, padding: "1rem",
        }}>
          <div style={{ background: "#fff", borderRadius: "var(--radius-lg)", padding: "2rem", maxWidth: 440, width: "100%" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", marginBottom: "0.75rem" }}>Contact Your Instructor</h3>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: "1.25rem" }}>
              Have a question about <strong>{chapter.title}</strong>? Send us a message and your instructor will reply within 2-3 business days.
            </p>
            <ContactForm
              subject={`Question about: ${chapter.title}`}
              user={user}
              onClose={() => setShowContact(false)}
            />
          </div>
        </div>
      )}

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1.5rem", display: "grid", gridTemplateColumns: "1fr min(280px, 30%)", gap: "2rem" }}>
        {/* Main content */}
        <div style={{ minWidth: 0 }}>
          {phase === "reading" && (
            <>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div>
                  <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", marginBottom: "0.5rem" }}>
                    {chapter.title}
                  </h1>
                  <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: "1.75rem" }}>
                    {chapter.duration} · Chapter {chapterIndex + 1}
                  </p>
                </div>
                {isBilingual && (
                  <div style={{ display: "flex", gap: 4 }}>
                    <button
                      onClick={() => setLang("en")}
                      style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, border: `1px solid ${lang === "en" ? "var(--black)" : "var(--border)"}`, background: lang === "en" ? "var(--black)" : "transparent", color: lang === "en" ? "#fff" : "var(--text-secondary)", cursor: "pointer" }}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLang("fr")}
                      style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, border: `1px solid ${lang === "fr" ? "var(--black)" : "var(--border)"}`, background: lang === "fr" ? "var(--black)" : "transparent", color: lang === "fr" ? "#fff" : "var(--text-secondary)", cursor: "pointer" }}
                    >
                      FR
                    </button>
                  </div>
                )}
              </div>
              <div
                ref={contentRef}
                className="chapter-content"
                dangerouslySetInnerHTML={{ __html: displayContent }}
                style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)" }}
              />
              <div style={{ marginTop: "2.5rem", padding: "1.5rem", background: isExam ? "#fff3cd" : "var(--gold-light)", border: `1px solid ${isExam ? "#ffe69c" : "#e0c87a"}`, borderRadius: "var(--radius-lg)" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  {isExam ? (lang === "fr" ? "Prêt pour l'examen ?" : "Ready for the Exam?") : "Ready for the Quiz?"}
                </h3>
                <p style={{ fontSize: 14, color: "#7a5c00", marginBottom: "1rem" }}>
                  {isExam
                    ? (lang === "fr"
                        ? `${displayQuiz.length} questions · ${chapter.examDurationMinutes} min chronométrées · ${passingScorePercent}% requis pour réussir. Le chronomètre démarre dès que vous cliquez ci-dessous.`
                        : `${displayQuiz.length} questions · ${chapter.examDurationMinutes} min timed · ${passingScorePercent}% required to pass. The timer starts as soon as you click below.`)
                    : `${displayQuiz.length} questions — you need ${passingScorePercent}% correct to advance. Explanations provided for any missed answers.`}
                </p>
                <button className="btn-primary" onClick={startQuiz}>
                  {isExam ? (lang === "fr" ? "Commencer l'examen" : "Start the Exam") : "Take the Quiz"}
                </button>
              </div>
              {/* Chapter nav */}
              <div style={{ marginTop: "2rem", display: "flex", justifyContent: "space-between", gap: 12 }}>
                {prevChapter ? (
                  <Link href={`/courses/${slug}/${prevChapter.id}`} className="btn-secondary" style={{ fontSize: 13 }}>
                    ← {prevChapter.title}
                  </Link>
                ) : <div />}
              </div>
            </>
          )}

          {phase === "quiz" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: "0.5rem" }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", margin: 0 }}>
                  {isExam ? (lang === "fr" ? "Examen final" : "Final Exam") : "Chapter Quiz"}
                </h2>
                {examSecondsLeft !== null && (
                  <span style={{
                    background: examSecondsLeft < 60 ? "#b91c1c" : "var(--black)",
                    color: "#fff", padding: "4px 12px", borderRadius: 20, fontSize: 13, fontFamily: "monospace",
                  }}>
                    ⏱ {formatCountdown(examSecondsLeft)}
                  </span>
                )}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: "2rem" }}>
                {chapter.title} · Answer all {displayQuiz.length} questions{isExam ? ` · ${passingScorePercent}% to pass` : ""}
              </p>
              {displayQuiz.map((q, i) => (
                <QuizQuestion
                  key={i}
                  question={q}
                  index={i}
                  selected={quizAnswers[i]}
                  onSelect={(val) => setQuizAnswers((prev) => ({ ...prev, [i]: val }))}
                />
              ))}
              <button
                className="btn-primary"
                onClick={submitQuiz}
                disabled={!allAnswered}
                style={{ marginTop: "1.5rem", opacity: allAnswered ? 1 : 0.5 }}
              >
                Submit Answers
              </button>
            </div>
          )}

          {phase === "failed" && (
            <div>
              <div style={{ marginBottom: "2rem", padding: "1.25rem 1.5rem", background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: "var(--radius-lg)" }}>
                <h3 style={{ color: "#b91c1c", marginBottom: "0.5rem" }}>
                  {lastScorePercent !== null
                    ? `${lang === "fr" ? "Score" : "Score"}: ${lastScorePercent}% (${passingScorePercent}% ${lang === "fr" ? "requis" : "required"})`
                    : `${failedQuestions.length} question${failedQuestions.length > 1 ? "s" : ""} need review`}
                </h3>
                <p style={{ color: "#dc2626", fontSize: 14, margin: 0 }}>
                  {isExam
                    ? (lang === "fr"
                        ? "Vous n'avez pas atteint le seuil de réussite. Révisez les explications ci-dessous et retentez l'examen."
                        : "You didn't reach the passing threshold. Review the explanations below, then retry the exam.")
                    : "Review the explanations below, then re-read the chapter to reinforce these concepts."}
                </p>
              </div>
              {displayQuiz.map((q, i) => {
                const failed = failedQuestions.includes(i);
                if (!failed) return (
                  <div key={i} style={{ marginBottom: 16, padding: "12px 16px", background: "#dcfce7", border: "1px solid #86efac", borderRadius: "var(--radius)" }}>
                    <p style={{ fontSize: 14, color: "#15803d", margin: 0 }}>
                      ✓ Question {i + 1}: Correct!
                    </p>
                  </div>
                );
                return (
                  <div key={i} style={{ marginBottom: 20, padding: "1rem 1.25rem", background: "#fff", border: "2px solid #fca5a5", borderRadius: "var(--radius-lg)" }}>
                    <p style={{ fontSize: 14, color: "var(--text-primary)", fontWeight: 600, marginBottom: 8 }}>
                      Question {i + 1}: {q.question}
                    </p>
                    <p style={{ fontSize: 13, color: "#b91c1c", marginBottom: 8 }}>
                      Your answer: <em>{q.options[quizAnswers[i]] || "Not answered"}</em>
                    </p>
                    <p style={{ fontSize: 13, color: "#15803d", marginBottom: 8 }}>
                      Correct answer: <strong>{q.options[q.correct]}</strong>
                    </p>
                    <div style={{ background: "#fffbf0", padding: "10px 14px", borderRadius: "var(--radius)", border: "1px solid #f0e0a0" }}>
                      <p style={{ fontSize: 13, color: "#7a5c00", margin: 0 }}>
                        <strong>Explanation:</strong> {q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div style={{ display: "flex", gap: 12, marginTop: "1.5rem", flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={retryChapter}>
                  Re-read Chapter &amp; Retry
                </button>
                <button className="btn-secondary" onClick={startQuiz}>
                  Retry Quiz
                </button>
              </div>
            </div>
          )}

          {phase === "correct" && (
            <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
              <div style={{ fontSize: 64, marginBottom: "1rem" }}>🎉</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", marginBottom: "0.75rem" }}>
                Chapter Complete!
              </h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
                {lastScorePercent !== null
                  ? (lang === "fr"
                      ? `Vous avez obtenu ${lastScorePercent}% à ${isExam ? "l'examen" : "au quiz"}. Bravo !`
                      : `You scored ${lastScorePercent}% on the ${isExam ? "exam" : "quiz"}. Well done!`)
                  : "Well done!"}
              </p>
              {nextChapter ? (
                <div>
                  <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: "1rem" }}>Next up:</p>
                  <p style={{ fontWeight: 600, marginBottom: "1.5rem" }}>{nextChapter.title}</p>
                  <button className="btn-primary" onClick={goToNextChapter} style={{ fontSize: 16, padding: "14px 32px" }}>
                    Continue to Next Chapter
                  </button>
                </div>
              ) : (
                <div>
                  <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: "1.5rem" }}>
                    You have completed <strong>{course.title}</strong>! Your certificate is ready.
                  </p>
                  <Link href={`/courses/${slug}/certificate`} className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
                    Get Your Certificate
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Chapter list */}
          <div className="card" style={{ padding: "1rem" }}>
            <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
              Chapters
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {course.chapters.map((ch, i) => {
                const isDone = user?.progress?.[course.id]?.completedChapters?.includes(ch.id);
                const isCurrent = ch.id === chapter.id;
                return (
                  <Link
                    key={ch.id}
                    href={`/courses/${slug}/${ch.id}`}
                    style={{
                      fontSize: 13,
                      padding: "6px 8px",
                      borderRadius: 6,
                      background: isCurrent ? "var(--black)" : "transparent",
                      color: isCurrent ? "#fff" : isDone ? "var(--green)" : "var(--text-secondary)",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      textDecoration: "none",
                    }}
                  >
                    <span style={{ flexShrink: 0, fontSize: 11 }}>{isDone ? "✓" : i + 1}</span>
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ch.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Donation - strategic placement after chapter content */}
          <DonationWidget user={user} compact />
        </div>
      </div>

      {/* Mobile-only: collapse sidebar */}
      <style>{`
        @media (max-width: 640px) {
          .grid-chapter { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function QuizQuestion({ question, index, selected, onSelect }: {
  question: QuizQuestionType;
  index: number;
  selected: number | undefined;
  onSelect: (val: number) => void;
}) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: "1rem" }}>
        {index + 1}. {question.question}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            style={{
              padding: "12px 16px",
              borderRadius: "var(--radius)",
              border: `2px solid ${selected === i ? "var(--black)" : "var(--border)"}`,
              background: selected === i ? "var(--black)" : "#fff",
              color: selected === i ? "#fff" : "var(--text-secondary)",
              textAlign: "left",
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            <span style={{ fontWeight: 600, marginRight: 8 }}>{String.fromCharCode(65 + i)}.</span>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function ContactForm({ subject, user, onClose }: { subject: string; user: any; onClose: () => void }) {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    // In production: send via email API
    setSent(true);
  }

  if (sent) return (
    <div style={{ textAlign: "center" }}>
      <p style={{ color: "var(--green)", fontWeight: 500, marginBottom: "1rem" }}>Message sent! We will reply within 2-3 days.</p>
      <button className="btn-secondary" onClick={onClose}>Close</button>
    </div>
  );

  return (
    <form onSubmit={handleSend}>
      <div className="form-group">
        <label className="form-label">Subject</label>
        <input className="form-input" value={subject} readOnly style={{ background: "var(--cream)" }} />
      </div>
      <div className="form-group">
        <label className="form-label">Your Message</label>
        <textarea
          className="form-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your question or concern..."
          rows={4}
          required
          style={{ resize: "vertical" }}
        />
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <button type="button" className="btn-secondary" onClick={onClose} style={{ flex: 1 }}>Cancel</button>
        <button type="submit" className="btn-primary" style={{ flex: 2 }} disabled={!message.trim()}>
          Send Message
        </button>
      </div>
    </form>
  );
}
