import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCourseBySlug, COURSES, PUBLIC_COURSES } from "../../lib/courses";
import NavBar from "../../components/NavBar";

export default function CoursePage() {
  const router = useRouter();
  const { slug } = router.query;
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState<"en" | "fr">("en");

  const course = typeof slug === "string" ? getCourseBySlug(slug) : null;

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("asf_lang") : null;
    if (saved === "fr" || saved === "en") setLang(saved);

    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => {
        if (!d.user) { router.push("/auth/login"); return; }
        setUser(d.user);
      })
      .catch(() => router.push("/auth/login"))
      .finally(() => setLoading(false));
  }, []);

  if (loading || !course) return (
    <div style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>
      {loading ? (lang === "fr" ? "Chargement..." : "Loading...") : (lang === "fr" ? "Cours introuvable." : "Course not found.")}
    </div>
  );

  const showFr = lang === "fr" && (course.titleFr || course.longDescriptionFr);
  const courseTitle = showFr && course.titleFr ? course.titleFr : course.title;
  const courseLongDesc = showFr && course.longDescriptionFr ? course.longDescriptionFr : course.longDescription;
  const courseDesc = showFr && course.descriptionFr ? course.descriptionFr : course.description;

  const t = {
    loading: lang === "fr" ? "Chargement..." : "Loading...",
    dashboard: lang === "fr" ? "Tableau de bord" : "Dashboard",
    personalCourse: lang === "fr" ? "Cours personnel" : "Personal Course",
    courseXOfY: (i: number, n: number) => lang === "fr" ? `Cours ${i} sur ${n}` : `Course ${i} of ${n}`,
    unofficialPrep: lang === "fr" ? "— préparation indépendante et non officielle." : "— independent, unofficial prep material.",
    chaptersWord: lang === "fr" ? "chapitres" : "chapters",
    completedWord: lang === "fr" ? "terminés" : "completed",
    completedBadge: lang === "fr" ? "Terminé" : "Completed",
    chaptersCompleteOf: (done: number, total: number) => lang === "fr" ? `${done} sur ${total} chapitres terminés` : `${done} of ${total} chapters complete`,
    readyToBegin: lang === "fr" ? "Prêt à commencer ? Débutez par le chapitre 1." : "Ready to begin? Start with Chapter 1.",
    pickUpWhere: lang === "fr" ? "Reprenez là où vous vous étiez arrêté." : "Pick up where you left off.",
    startCourse: lang === "fr" ? "Commencer le cours" : "Start Course",
    continueBtn: lang === "fr" ? "Continuer" : "Continue",
    youCompleted: lang === "fr" ? "Vous avez terminé ce cours !" : "You have completed this course!",
    viewCertificate: lang === "fr" ? "Voir le certificat" : "View Certificate",
    chaptersHeading: lang === "fr" ? "Chapitres" : "Chapters",
    timedFinalExam: (pct?: number) => lang === "fr"
      ? `Examen final chronométré${pct ? ` · ${pct}% pour réussir` : ""}`
      : `Timed final exam${pct ? ` · ${pct}% to pass` : ""}`,
    quizIncluded: lang === "fr" ? "Quiz inclus" : "Quiz included",
    done: lang === "fr" ? "Terminé" : "Done",
    upNext: lang === "fr" ? "À suivre" : "Up next",
    courseLocked: lang === "fr" ? "Cours verrouillé" : "Course Locked",
    pleaseComplete: lang === "fr" ? "Veuillez terminer" : "Please complete",
    beforeStarting: lang === "fr" ? "avant de commencer ce cours." : "before starting this course.",
    backToDashboard: lang === "fr" ? "Retour au tableau de bord" : "Back to Dashboard",
    courseNotFound: lang === "fr" ? "Cours introuvable" : "Course Not Found",
  };

  const progress = user?.progress?.[course.id];
  const completedChapters: string[] = progress?.completedChapters || [];
  const isAdminOnlyCourse = course.visibility === "admin";
  const listForCourse = isAdminOnlyCourse ? COURSES.filter((c) => c.visibility === "admin") : PUBLIC_COURSES;
  const courseIndex = listForCourse.findIndex((c) => c.id === course.id);
  const prevCourse = listForCourse[courseIndex - 1];
  const prevCourseTitle = showFr && prevCourse?.titleFr ? prevCourse.titleFr : prevCourse?.title;

  // Admin-only personal courses are never visible to non-admin accounts.
  if (user && isAdminOnlyCourse && user.role !== "admin") {
    return (
      <>
        <NavBar user={user} lang={lang} setLang={setLang} />
        <div style={{ maxWidth: 600, margin: "4rem auto", padding: "2rem 1.5rem", textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>{t.courseNotFound}</h2>
          <Link href="/dashboard" className="btn-primary">{t.backToDashboard}</Link>
        </div>
      </>
    );
  }

  // Lock check — admin-only courses are standalone and are not gated by the public sequence.
  function canAccess(): boolean {
    if (isAdminOnlyCourse) return true;
    if (courseIndex === 0) return true;
    return !!user?.progress?.[prevCourse.id]?.completedAt;
  }

  if (user && !canAccess()) {
    return (
      <>
        <NavBar user={user} lang={lang} setLang={setLang} />
        <div style={{ maxWidth: 600, margin: "4rem auto", padding: "2rem 1.5rem", textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>{t.courseLocked}</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            {t.pleaseComplete} <strong>{prevCourseTitle}</strong> {t.beforeStarting}
          </p>
          <Link href="/dashboard" className="btn-primary">{t.backToDashboard}</Link>
        </div>
      </>
    );
  }

  function getNextChapterId(): string | null {
    for (const ch of course!.chapters) {
      if (!completedChapters.includes(ch.id)) return ch.id;
    }
    return null;
  }

  const nextChapterId = getNextChapterId();
  const isCompleted = !!progress?.completedAt;

  return (
    <>
      <Head>
        <title>{courseTitle} — ASF Academy</title>
        <meta name="description" content={courseDesc} />
      </Head>
      <NavBar user={user} lang={lang} setLang={setLang} />

      {/* Hero */}
      <div style={{
        background: "var(--black)",
        color: "#fff",
        padding: "2.5rem 1.5rem",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Link href="/dashboard" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", display: "inline-flex", alignItems: "center", gap: 4, marginBottom: "1rem" }}>
            ← {t.dashboard}
          </Link>
          <p style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>
            {isAdminOnlyCourse ? t.personalCourse : t.courseXOfY(courseIndex + 1, listForCourse.length)}
          </p>
          <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", color: "#fff", marginBottom: "0.75rem" }}>
            {courseTitle}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, maxWidth: 580, lineHeight: 1.7 }}>
            {courseLongDesc}
          </p>
          {course.certTrack && (
            <p style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,0.55)", maxWidth: 580 }}>
              {course.certTrack} {t.unofficialPrep}
            </p>
          )}
          <div style={{ display: "flex", gap: 16, marginTop: "1.25rem", flexWrap: "wrap", fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
            <span>{course.chapters.length} {t.chaptersWord}</span>
            <span>·</span>
            <span>{completedChapters.length} {t.completedWord}</span>
            {isCompleted && <span className="badge badge-done" style={{ marginLeft: 4 }}>{t.completedBadge}</span>}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {/* Progress bar */}
        {progress && !isCompleted && (
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-muted)", marginBottom: 6 }}>
              <span>{t.chaptersCompleteOf(completedChapters.length, course.chapters.length)}</span>
              <span>{Math.round((completedChapters.length / course.chapters.length) * 100)}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${Math.round((completedChapters.length / course.chapters.length) * 100)}%` }} />
            </div>
          </div>
        )}

        {/* Start / Continue CTA */}
        {!isCompleted && nextChapterId && (
          <div style={{ marginBottom: "2rem", padding: "1.25rem 1.5rem", background: "var(--gold-light)", border: "1px solid #e0c87a", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <p style={{ margin: 0, color: "#7a5c00", fontSize: 15 }}>
              {completedChapters.length === 0 ? t.readyToBegin : t.pickUpWhere}
            </p>
            <Link href={`/courses/${course.slug}/${nextChapterId}`} className="btn-primary" style={{ fontSize: 14, padding: "10px 22px" }}>
              {completedChapters.length === 0 ? t.startCourse : t.continueBtn}
            </Link>
          </div>
        )}

        {isCompleted && (
          <div style={{ marginBottom: "2rem", padding: "1.25rem 1.5rem", background: "#dcfce7", border: "1px solid #86efac", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <p style={{ margin: 0, color: "#15803d", fontSize: 15, fontWeight: 500 }}>
              {t.youCompleted}
            </p>
            <Link href={`/courses/${course.slug}/certificate`} className="btn-primary" style={{ fontSize: 14, padding: "10px 22px" }}>
              {t.viewCertificate}
            </Link>
          </div>
        )}

        {/* Chapter list */}
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>{t.chaptersHeading}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {course.chapters.map((ch, i) => {
            const isDone = completedChapters.includes(ch.id);
            const isCurrent = ch.id === nextChapterId;
            const chTitle = showFr && ch.titleFr ? ch.titleFr : ch.title;

            return (
              <Link
                key={ch.id}
                href={`/courses/${course.slug}/${ch.id}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "12px 16px",
                  background: isCurrent ? "var(--gold-light)" : "var(--cream)",
                  border: `1px solid ${isCurrent ? "#e0c87a" : "var(--border)"}`,
                  borderRadius: "var(--radius)",
                  textDecoration: "none",
                  transition: "background 0.15s",
                }}
              >
                <div style={{
                  width: 28, height: 28, flexShrink: 0,
                  background: isDone ? "var(--green)" : isCurrent ? "var(--gold)" : "var(--border)",
                  color: isDone || isCurrent ? "#fff" : "var(--text-muted)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 600,
                }}>
                  {isDone ? "✓" : i + 1}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: isCurrent ? 600 : 400, color: "var(--text-primary)" }}>{chTitle}</p>
                  <p style={{ margin: 0, fontSize: 12, color: "var(--text-muted)" }}>
                    {ch.duration} · {ch.isFinalExam ? t.timedFinalExam(ch.passingScorePercent) : t.quizIncluded}
                  </p>
                </div>
                {isDone && <span style={{ fontSize: 12, color: "var(--green)", fontWeight: 500 }}>{t.done}</span>}
                {isCurrent && <span style={{ fontSize: 12, color: "#92700e", fontWeight: 500 }}>{t.upNext}</span>}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
