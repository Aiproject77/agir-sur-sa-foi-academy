import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import DonationWidget from "../components/DonationWidget";
import { COURSES } from "../lib/courses";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>Loading...</div>;
  if (!user) return null;

  // Determine which courses user can access
  function canAccess(courseIndex: number): boolean {
    if (courseIndex === 0) return true;
    const prevCourse = COURSES[courseIndex - 1];
    return !!user?.progress?.[prevCourse.id]?.completedAt;
  }

  function isActive(courseId: string): boolean {
    return !!user?.progress?.[courseId]?.startedAt && !user?.progress?.[courseId]?.completedAt;
  }

  // Total stats
  const totalChapters = COURSES.reduce((sum, c) => sum + c.chapters.length, 0);
  const completedChapters = COURSES.reduce((sum, c) => {
    return sum + (user?.progress?.[c.id]?.completedChapters?.length || 0);
  }, 0);
  const completedCourses = COURSES.filter((c) => user?.progress?.[c.id]?.completedAt).length;

  return (
    <>
      <Head>
        <title>My Dashboard — ASF Academy</title>
      </Head>
      <NavBar user={user} />

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {/* Welcome */}
        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "1.75rem", marginBottom: 4 }}>Welcome, {user.name}</h1>
          <p style={{ color: "var(--text-muted)", fontSize: 15 }}>
            Continue your learning journey — one chapter at a time.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: "2.5rem" }}>
          {[
            { label: "Courses Completed", value: `${completedCourses} / ${COURSES.length}` },
            { label: "Chapters Done", value: `${completedChapters} / ${totalChapters}` },
            { label: "Overall Progress", value: `${Math.round((completedChapters / totalChapters) * 100)}%` },
          ].map((s) => (
            <div key={s.label} style={{
              background: "#fff",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "1rem",
            }}>
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</p>
              <p style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", margin: 0, fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Courses */}
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Your Courses</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: "3rem" }}>
          {COURSES.map((course, i) => {
            const progress = user?.progress?.[course.id];
            const completedCount = progress?.completedChapters?.length || 0;
            const pct = Math.round((completedCount / course.chapters.length) * 100);
            const accessible = canAccess(i);
            const active = isActive(course.id);
            const done = !!progress?.completedAt;

            return (
              <div key={course.id} className="card" style={{ opacity: accessible ? 1 : 0.65 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{
                    width: 44, height: 44, flexShrink: 0,
                    background: done ? "var(--green)" : accessible ? "var(--black)" : "var(--border)",
                    color: "#fff",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 700, fontFamily: "'Playfair Display', serif",
                  }}>
                    {done ? "✓" : i + 1}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, flexWrap: "wrap" }}>
                      <div>
                        <h3 style={{ fontSize: "1.05rem", fontFamily: "'Playfair Display', serif", marginBottom: 2 }}>{course.title}</h3>
                        <p style={{ fontSize: 13, color: "var(--text-muted)" }}>{course.chapters.length} chapters</p>
                      </div>
                      {done && <span className="badge badge-done">Certificate Earned</span>}
                      {active && !done && <span className="badge badge-new">In Progress</span>}
                      {!accessible && <span className="badge badge-locked">Locked</span>}
                    </div>

                    {accessible && (
                      <div style={{ marginTop: 10 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>
                          <span>{completedCount} of {course.chapters.length} chapters</span>
                          <span>{pct}%</span>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: pct + "%" }} />
                        </div>
                      </div>
                    )}

                    {!accessible && (
                      <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 8 }}>
                        Complete <em>{COURSES[i - 1]?.title}</em> to unlock this course.
                      </p>
                    )}

                    <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {accessible && (
                        <Link
                          href={`/courses/${course.slug}`}
                          className={done ? "btn-secondary" : "btn-primary"}
                          style={{ fontSize: 13, padding: "8px 18px" }}
                        >
                          {done ? "Review" : active ? "Continue" : "Start Course"}
                        </Link>
                      )}
                      {done && (
                        <Link
                          href={`/courses/${course.slug}/certificate`}
                          className="btn-gold"
                          style={{ fontSize: 13, padding: "8px 18px" }}
                        >
                          View Certificate
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Donation nudge */}
        <DonationWidget user={user} compact />
      </div>
    </>
  );
}
