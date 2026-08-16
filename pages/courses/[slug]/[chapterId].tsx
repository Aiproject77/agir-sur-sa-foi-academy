import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { getCourseBySlug, type QuizQuestion as QuizQuestionType } from "../../../lib/courses";
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
  const [fontSize, setFontSize] = useState(16);
  const intervalRef = useRef<any>(null);
  const scrollRef = useRef<any>(null);
  const elapsedRef = useRef(0);

  const course = typeof slug === "string" ? getCourseBySlug(slug) : null;
  const chapter = course?.chapters.find((c) => c.id === chapterId);
  const chapterIndex = course?.chapters.findIndex((c) => c.id === chapterId) ?? -1;
  const nextChapter = chapterIndex >= 0 ? course?.chapters[chapterIndex + 1] : null;
  const prevChapter = chapterIndex > 0 ? course?.chapters[chapterIndex - 1] : null;

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => {
        if (!d.user) { router.push("/auth/login"); return; }
        setUser(d.user);
        if (typeof window !== "undefined" && chapter) {
          const stored = localStorage.getItem(`asf_timer_${chapter.id}`);
          if (stored) { const v = parseInt(stored, 10); elapsedRef.current = v; setElapsed(v); }
        }
      })
      .catch(() => router.push("/auth/login"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      elapsedRef.current += 1;
      setElapsed(elapsedRef.current);
      if (typeof window !== "undefined" && chapter)
        localStorage.setItem(`asf_timer_${chapter.id}`, String(elapsedRef.current));
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [chapter]);

  useEffect(() => {
    if (autoScroll) {
      scrollRef.current = setInterval(() => window.scrollBy({ top: 1.5, behavior: "auto" }), 50);
    } else {
      clearInterval(scrollRef.current);
    }
    return () => clearInterval(scrollRef.current);
  }, [autoScroll]);

  function formatTime(secs: number) {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  async function completeChapter() {
    if (!course || !chapter || !user) return;
    const currentCompleted = user?.progress?.[course.id]?.completedChapters || [];
    const newCompleted = currentCompleted.includes(chapter.id) ? currentCompleted : [...currentCompleted, chapter.id];
    const allCompleted = course.chapters.every((c) => newCompleted.includes(c.id));
    await fetch("/api/courses/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId: course.id, chapterId: chapter.id, timeSpent: elapsedRef.current, completedAt: allCompleted ? new Date().toISOString() : undefined }),
    });
    if (typeof window !== "undefined") localStorage.removeItem(`asf_timer_${chapter.id}`);
    setUser((prev: any) => {
      const pp = prev?.progress?.[course.id] || {};
      return { ...prev, progress: { ...(prev?.progress || {}), [course.id]: { ...pp, completedChapters: newCompleted, completedAt: allCompleted ? new Date().toISOString() : pp.completedAt } } };
    });
    setPhase("correct");
  }

  function startQuiz() { window.scrollTo({ top: 0, behavior: "smooth" }); setPhase("quiz"); setQuizAnswers({}); setFailedQuestions([]); }

  function submitQuiz() {
    if (!chapter) return;
    const failed: number[] = [];
    chapter.quiz.forEach((q, i) => { if (quizAnswers[i] !== q.correct) failed.push(i); });
    if (failed.length === 0) completeChapter();
    else { setFailedQuestions(failed); setPhase("failed"); }
  }

  if (loading) return <div style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>Chargement...</div>;
  if (!course || !chapter) return (
    <div style={{ padding: "3rem", textAlign: "center" }}>
      <p>Chapitre introuvable.</p>
      <Link href="/dashboard" className="btn-primary" style={{ marginTop: "1rem" }}>Tableau de bord</Link>
    </div>
  );

  const allAnswered = chapter.quiz.every((_, i) => quizAnswers[i] !== undefined);

  return (
    <>
      <Head><title>{chapter.title} — {course.title} — Agir sur sa Foi</title></Head>
      <NavBar user={user} />

      {/* Barre de navigation chapitre */}
      <div style={{ background: "var(--cream-dark)", borderBottom: "1px solid var(--border)", padding: "0.5rem 1rem", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <Link href={`/courses/${slug}`} style={{ fontSize: "0.8125rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
          ← {course.title}
        </Link>
        <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
          Chapitre {chapterIndex + 1} sur {course.chapters.length}
        </span>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          {/* Timer */}
          <span style={{ background: "var(--black)", color: "#fff", padding: "3px 10px", borderRadius: 20, fontSize: "0.8125rem", fontFamily: "monospace", whiteSpace: "nowrap" }}>
            {formatTime(elapsed)}
          </span>

          {/* Taille police */}
          <div style={{ display: "flex", alignItems: "center", gap: 4, background: "var(--cream)", border: "1px solid var(--border)", borderRadius: 20, padding: "3px 8px" }}>
            <button onClick={() => setFontSize(f => Math.max(f - 2, 14))} style={{ width: 24, height: 24, borderRadius: "50%", border: "1px solid var(--border)", background: "#fff", cursor: "pointer", fontSize: "0.75rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>A-</button>
            <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", minWidth: 18, textAlign: "center" }}>{fontSize}</span>
            <button onClick={() => setFontSize(f => Math.min(f + 2, 24))} style={{ width: 24, height: 24, borderRadius: "50%", border: "1px solid var(--border)", background: "#fff", cursor: "pointer", fontSize: "0.75rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>A+</button>
          </div>

          {/* Défilement auto */}
          <button onClick={() => setAutoScroll(!autoScroll)} style={{ fontSize: "0.75rem", padding: "4px 10px", borderRadius: 20, border: `1px solid ${autoScroll ? "var(--black)" : "var(--border)"}`, background: autoScroll ? "var(--black)" : "transparent", color: autoScroll ? "#fff" : "var(--text-secondary)", cursor: "pointer", whiteSpace: "nowrap" }}>
            {autoScroll ? "Arrêter" : "Défilement auto"}
          </button>

          {/* Contact instructeur */}
          <button onClick={() => setShowContact(true)} style={{ fontSize: "0.75rem", padding: "4px 10px", borderRadius: 20, border: "1px solid var(--border)", background: "transparent", color: "var(--text-secondary)", cursor: "pointer", whiteSpace: "nowrap" }}>
            Contacter l'instructeur
          </button>
        </div>
      </div>

      {/* Modal contact */}
      {showContact && (
        <ContactModal
          chapter={chapter}
          course={course}
          user={user}
          onClose={() => setShowContact(false)}
        />
      )}

      {/* Contenu principal */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "1.5rem 1rem" }}>
        <div className="chapter-layout">
          {/* Colonne principale */}
          <div style={{ minWidth: 0 }}>
            {phase === "reading" && (
              <>
                <h1 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", marginBottom: "0.4rem" }}>{chapter.title}</h1>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                  {chapter.duration} · Chapitre {chapterIndex + 1}
                </p>
                <div
                  className="chapter-content"
                  dangerouslySetInnerHTML={{ __html: chapter.content }}
                  style={{ fontSize, lineHeight: 1.8, color: "var(--text-secondary)" }}
                />
                <div style={{ marginTop: "2.5rem", padding: "1.25rem", background: "var(--cream-dark)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", marginBottom: "0.5rem" }}>Prêt pour le quiz ?</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                    {chapter.quiz.length} questions — toutes doivent être correctes pour avancer.
                  </p>
                  <button className="btn-primary" onClick={startQuiz}>Passer le quiz</button>
                </div>
                {prevChapter && (
                  <div style={{ marginTop: "1.5rem" }}>
                    <Link href={`/courses/${slug}/${prevChapter.id}`} className="btn-secondary" style={{ fontSize: "0.875rem" }}>
                      ← {prevChapter.title}
                    </Link>
                  </div>
                )}
              </>
            )}

            {phase === "quiz" && (
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", marginBottom: "0.5rem" }}>Quiz du chapitre</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "2rem" }}>
                  {chapter.title} · {chapter.quiz.length} questions
                </p>
                {chapter.quiz.map((q, i) => (
                  <QuizCard key={i} question={q} index={i} selected={quizAnswers[i]} onSelect={(v) => setQuizAnswers((p) => ({ ...p, [i]: v }))} />
                ))}
                <button className="btn-primary" onClick={submitQuiz} disabled={!allAnswered} style={{ marginTop: "1.5rem", opacity: allAnswered ? 1 : 0.5 }}>
                  Soumettre mes réponses
                </button>
              </div>
            )}

            {phase === "failed" && (
              <div>
                <div style={{ marginBottom: "1.5rem", padding: "1.25rem", background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: "var(--radius-lg)" }}>
                  <h3 style={{ color: "#b91c1c", marginBottom: "0.5rem" }}>
                    {failedQuestions.length} question{failedQuestions.length > 1 ? "s" : ""} à revoir
                  </h3>
                  <p style={{ color: "#dc2626", fontSize: "0.875rem", margin: 0 }}>
                    Consultez les explications, puis relisez le chapitre avant de réessayer.
                  </p>
                </div>
                {chapter.quiz.map((q, i) => {
                  const failed = failedQuestions.includes(i);
                  return failed ? (
                    <div key={i} style={{ marginBottom: 20, padding: "1rem", background: "#fff", border: "2px solid #fca5a5", borderRadius: "var(--radius-lg)" }}>
                      <p style={{ fontSize: "0.9375rem", fontWeight: 600, marginBottom: 8 }}>Question {i + 1} : {q.question}</p>
                      <p style={{ fontSize: "0.875rem", color: "#b91c1c", marginBottom: 8 }}>Votre réponse : <em>{q.options[quizAnswers[i]] || "Sans réponse"}</em></p>
                      <p style={{ fontSize: "0.875rem", color: "#15803d", marginBottom: 8 }}>Bonne réponse : <strong>{q.options[q.correct]}</strong></p>
                      <div style={{ background: "#fffbf0", padding: "10px 14px", borderRadius: "var(--radius)", border: "1px solid #f0e0a0" }}>
                        <p style={{ fontSize: "0.875rem", color: "#7a5c00", margin: 0 }}><strong>Explication :</strong> {q.explanation}</p>
                      </div>
                    </div>
                  ) : (
                    <div key={i} style={{ marginBottom: 12, padding: "12px 16px", background: "#dcfce7", border: "1px solid #86efac", borderRadius: "var(--radius)" }}>
                      <p style={{ fontSize: "0.875rem", color: "#15803d", margin: 0 }}>✓ Question {i + 1} : Correct !</p>
                    </div>
                  );
                })}
                <div style={{ display: "flex", gap: 10, marginTop: "1.5rem", flexWrap: "wrap" }}>
                  <button className="btn-primary" onClick={() => { setPhase("reading"); setQuizAnswers({}); setFailedQuestions([]); window.scrollTo({ top: 0 }); }}>
                    Relire le chapitre
                  </button>
                  <button className="btn-secondary" onClick={startQuiz}>Réessayer le quiz</button>
                </div>
              </div>
            )}

            {phase === "correct" && (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: 56, marginBottom: "1rem" }}>🎉</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", marginBottom: "0.75rem" }}>Chapitre terminé !</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>Vous avez obtenu 100% au quiz. Bravo !</p>
                {nextChapter ? (
                  <div>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "0.75rem" }}>Prochain chapitre :</p>
                    <p style={{ fontWeight: 600, marginBottom: "1.5rem" }}>{nextChapter.title}</p>
                    <button className="btn-primary" onClick={() => router.push(`/courses/${slug}/${nextChapter.id}`)} style={{ fontSize: "1rem", padding: "14px 32px" }}>
                      Chapitre suivant →
                    </button>
                  </div>
                ) : (
                  <div>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem", marginBottom: "1.5rem" }}>Vous avez complété <strong>{course.title}</strong> !</p>
                    <Link href={`/courses/${slug}/certificate`} className="btn-primary" style={{ fontSize: "1rem", padding: "14px 32px" }}>
                      Obtenir mon certificat
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Liste chapitres */}
            <div className="card" style={{ padding: "1rem" }}>
              <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Chapitres</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {course.chapters.map((ch, i) => {
                  const isDone = user?.progress?.[course.id]?.completedChapters?.includes(ch.id);
                  const isCurrent = ch.id === chapter.id;
                  return (
                    <Link key={ch.id} href={`/courses/${slug}/${ch.id}`} style={{ fontSize: "0.8125rem", padding: "6px 8px", borderRadius: 6, background: isCurrent ? "var(--black)" : "transparent", color: isCurrent ? "#fff" : isDone ? "var(--green)" : "var(--text-secondary)", display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
                      <span style={{ flexShrink: 0, fontSize: "0.6875rem" }}>{isDone ? "✓" : i + 1}</span>
                      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ch.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* Don */}
            <DonationWidget user={user} compact />
          </div>
        </div>
      </div>
    </>
  );
}

function QuizCard({ question, index, selected, onSelect }: { question: QuizQuestionType; index: number; selected: number | undefined; onSelect: (v: number) => void }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "1rem" }}>
        {index + 1}. {question.question}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {question.options.map((opt, i) => (
          <button key={i} onClick={() => onSelect(i)} style={{ padding: "12px 16px", borderRadius: "var(--radius)", border: `2px solid ${selected === i ? "var(--black)" : "var(--border)"}`, background: selected === i ? "var(--black)" : "#fff", color: selected === i ? "#fff" : "var(--text-secondary)", textAlign: "left", fontSize: "0.875rem", cursor: "pointer", transition: "all 0.15s" }}>
            <span style={{ fontWeight: 600, marginRight: 8 }}>{String.fromCharCode(65 + i)}.</span>{opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function ContactModal({ chapter, course, user, onClose }: { chapter: any; course: any; user: any; onClose: () => void }) {
  const [body, setBody] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!body.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseTitle: course.title,
          chapterTitle: chapter.title,
          subject: `Question — ${chapter.title}`,
          body: body.trim(),
        }),
      });
      if (!res.ok) throw new Error("Erreur envoi");
      setSent(true);
    } catch {
      setError("Erreur lors de l'envoi. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: "1rem" }}>
      <div style={{ background: "#fff", borderRadius: "var(--radius-lg)", padding: "1.75rem", maxWidth: 480, width: "100%" }}>
        {sent ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: "0.75rem" }}>✓</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", marginBottom: "0.5rem" }}>Message envoyé !</h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
              L'instructeur vous répondra sous 2-3 jours. Consultez vos réponses dans votre tableau de bord.
            </p>
            <button className="btn-secondary" onClick={onClose}>Fermer</button>
          </div>
        ) : (
          <>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", marginBottom: "0.25rem" }}>Contacter l'instructeur</h3>
            <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
              Chapitre : <strong>{chapter.title}</strong>
            </p>
            <form onSubmit={handleSend}>
              <div className="form-group">
                <label className="form-label">Votre message</label>
                <textarea className="form-input" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Décrivez votre question..." rows={5} required style={{ resize: "vertical" }} />
              </div>
              {error && <p className="form-error" style={{ marginBottom: 10 }}>{error}</p>}
              <div style={{ display: "flex", gap: 10 }}>
                <button type="button" className="btn-secondary" onClick={onClose} style={{ flex: 1 }}>Annuler</button>
                <button type="submit" className="btn-primary" style={{ flex: 2 }} disabled={loading || !body.trim()}>
                  {loading ? "Envoi..." : "Envoyer"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

