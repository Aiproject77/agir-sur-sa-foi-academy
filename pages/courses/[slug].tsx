import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCourseBySlug, COURSES } from "../../lib/courses";
import NavBar from "../../components/NavBar";

export default function CoursePage() {
  const router = useRouter();
  const { slug } = router.query;
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const course = typeof slug === "string" ? getCourseBySlug(slug) : null;

  useEffect(() => {
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
      {loading ? "Loading..." : "Course not found."}
    </div>
  );

  const progress = user?.progress?.[course.id];
  const completedChapters: string[] = progress?.completedChapters || [];
  const courseIndex = COURSES.findIndex((c) => c.id === course.id);

  // Lock check
  function canAccess(): boolean {
    if (courseIndex === 0) return true;
    const prev = COURSES[courseIndex - 1];
    return !!user?.progress?.[prev.id]?.completedAt;
  }

  if (user && !canAccess()) {
    return (
      <>
        <NavBar user={user} />
        <div style={{ maxWidth: 600, margin: "4rem auto", padding: "2rem 1.5rem", textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Course Locked</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            Please complete <strong>{COURSES[courseIndex - 1]?.title}</strong> before starting this course.
          </p>
          <Link href="/dashboard" className="btn-primary">Back to Dashboard</Link>
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
        <title>{course.title} — ASF Academy</title>
        <meta name="description" content={course.description} />
      </Head>
      <NavBar user={user} />

      {/* Hero */}
      <div style={{
        background: "var(--black)",
        color: "#fff",
        padding: "2.5rem 1.5rem",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Link href="/dashboard" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", display: "inline-flex", alignItems: "center", gap: 4, marginBottom: "1rem" }}>
            ← Dashboard
          </Link>
          <p style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>
            Course {courseIndex + 1} of {COURSES.length}
          </p>
          <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", color: "#fff", marginBottom: "0.75rem" }}>
            {course.title}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, maxWidth: 580, lineHeight: 1.7 }}>
            {course.longDescription}
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: "1.25rem", flexWrap: "wrap", fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
            <span>{course.chapters.length} chapters</span>
            <span>·</span>
            <span>{completedChapters.length} completed</span>
            {isCompleted && <span className="badge badge-done" style={{ marginLeft: 4 }}>Completed</span>}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {/* Progress bar */}
        {progress && !isCompleted && (
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-muted)", marginBottom: 6 }}>
              <span>{completedChapters.length} of {course.chapters.length} chapters complete</span>
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
              {completedChapters.length === 0 ? "Ready to begin? Start with Chapter 1." : "Pick up where you left off."}
            </p>
            <Link href={`/courses/${course.slug}/${nextChapterId}`} className="btn-primary" style={{ fontSize: 14, padding: "10px 22px" }}>
              {completedChapters.length === 0 ? "Start Course" : "Continue"}
            </Link>
          </div>
        )}

        {isCompleted && (
          <div style={{ marginBottom: "2rem", padding: "1.25rem 1.5rem", background: "#dcfce7", border: "1px solid #86efac", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <p style={{ margin: 0, color: "#15803d", fontSize: 15, fontWeight: 500 }}>
              You have completed this course!
            </p>
            <Link href={`/courses/${course.slug}/certificate`} className="btn-primary" style={{ fontSize: 14, padding: "10px 22px" }}>
              View Certificate
            </Link>
          </div>
        )}

        {/* Chapter list */}
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Chapters</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {course.chapters.map((ch, i) => {
            const isDone = completedChapters.includes(ch.id);
            const isCurrent = ch.id === nextChapterId;

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
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: isCurrent ? 600 : 400, color: "var(--text-primary)" }}>{ch.title}</p>
                  <p style={{ margin: 0, fontSize: 12, color: "var(--text-muted)" }}>{ch.duration} · Quiz included</p>
                </div>
                {isDone && <span style={{ fontSize: 12, color: "var(--green)", fontWeight: 500 }}>Done</span>}
                {isCurrent && <span style={{ fontSize: 12, color: "#92700e", fontWeight: 500 }}>Up next</span>}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
