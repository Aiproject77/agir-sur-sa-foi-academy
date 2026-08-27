import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { getCourseBySlug, COURSES, PUBLIC_COURSES } from "../../../lib/courses";
import NavBar from "../../../components/NavBar";

export default function CertificatePage() {
  const router = useRouter();
  const { slug } = router.query;
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const printRef = useRef<HTMLDivElement>(null);

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

  if (loading || !course) return <div style={{ padding: "3rem", textAlign: "center" }}>Loading...</div>;

  const isAdminOnlyCourse = course.visibility === "admin";
  if (user && isAdminOnlyCourse && user.role !== "admin") {
    return (
      <>
        <NavBar user={user} />
        <div style={{ maxWidth: 600, margin: "4rem auto", padding: "2rem", textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Certificate Not Found</h2>
          <Link href="/dashboard" className="btn-primary">Back to Dashboard</Link>
        </div>
      </>
    );
  }

  const progress = user?.progress?.[course.id];

  if (!progress?.completedAt) {
    return (
      <>
        <NavBar user={user} />
        <div style={{ maxWidth: 600, margin: "4rem auto", padding: "2rem", textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Certificate Not Yet Earned</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            Complete all chapters and quizzes in this course to earn your certificate.
          </p>
          <Link href={`/courses/${course.slug}`} className="btn-primary">Back to Course</Link>
        </div>
      </>
    );
  }

  const completedDate = new Date(progress.completedAt).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  const listForCourse = isAdminOnlyCourse ? COURSES.filter((c) => c.visibility === "admin") : PUBLIC_COURSES;
  const courseIndex = listForCourse.findIndex((c) => c.id === course.id);
  const nextCourse = listForCourse[courseIndex + 1];

  function handlePrint() {
    window.print();
  }

  return (
    <>
      <Head>
        <title>Certificate — {course.title} — ASF Academy</title>
        <style>{`
          @media print {
            nav, .no-print { display: none !important; }
            body { background: white; }
            .certificate-wrap { box-shadow: none !important; }
          }
        `}</style>
      </Head>
      <div className="no-print">
        <NavBar user={user} />
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div className="no-print" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: 12 }}>
          <Link href="/dashboard" style={{ fontSize: 14, color: "var(--text-muted)" }}>← Dashboard</Link>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn-secondary" onClick={handlePrint} style={{ fontSize: 14 }}>
              Print / Save PDF
            </button>
            {nextCourse && (
              <Link href={`/courses/${nextCourse.slug}`} className="btn-primary" style={{ fontSize: 14 }}>
                Start {nextCourse.title} →
              </Link>
            )}
          </div>
        </div>

        {/* Certificate */}
        <div
          ref={printRef}
          className="certificate-wrap"
          style={{
            background: "#fff",
            border: "2px solid var(--black)",
            borderRadius: "var(--radius-lg)",
            padding: "3.5rem 3rem",
            textAlign: "center",
            boxShadow: "var(--shadow-lg)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative corner lines */}
          <div style={{ position: "absolute", top: 12, left: 12, width: 48, height: 48, borderTop: "2px solid var(--gold)", borderLeft: "2px solid var(--gold)" }} />
          <div style={{ position: "absolute", top: 12, right: 12, width: 48, height: 48, borderTop: "2px solid var(--gold)", borderRight: "2px solid var(--gold)" }} />
          <div style={{ position: "absolute", bottom: 12, left: 12, width: 48, height: 48, borderBottom: "2px solid var(--gold)", borderLeft: "2px solid var(--gold)" }} />
          <div style={{ position: "absolute", bottom: 12, right: 12, width: 48, height: 48, borderBottom: "2px solid var(--gold)", borderRight: "2px solid var(--gold)" }} />

          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: "1rem" }}>
            Acting on His Word Academy
          </p>

          <p style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            Certificate of Completion
          </p>

          <div style={{ width: 1, height: 30, background: "var(--border)", margin: "0 auto 1.5rem" }} />

          <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
            Acting on His Word Academy
          </h1>

          <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: "2rem" }}>
            This is to certify that
          </p>

          <p style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "var(--text-primary)", marginBottom: "2rem", borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem" }}>
            {user?.name}
          </p>

          <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: "0.75rem" }}>
            has successfully completed
          </p>

          <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 1.6rem)", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
            {course.title}
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", fontStyle: "italic", marginBottom: "2rem" }}>
            {course.subtitle}
          </p>

          <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            Completed on
          </p>
          <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: "2.5rem" }}>
            {completedDate}
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 120, height: 1, background: "var(--black)", marginBottom: 6 }} />
              <p style={{ fontSize: 12, color: "var(--text-muted)" }}>John F. Shroyer<br />Acting on His Word Academy</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 120, height: 1, background: "var(--black)", marginBottom: 6 }} />
              <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Wayne G. Clapp<br />Acting on His Word Academy</p>
            </div>
          </div>

          <div style={{ marginTop: "2rem", padding: "10px", background: "var(--cream)", borderRadius: "var(--radius)" }}>
            <p style={{ fontSize: 11, color: "var(--text-muted)", margin: 0 }}>
              {course.chapters.length} chapters completed · All quizzes passed · ASF Academy
            </p>
          </div>
        </div>

        {course.certTrack && (
          <p className="no-print" style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center", marginTop: "1rem", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            This is a certificate of completion issued by this platform for personal study purposes. It references {course.certTrack.split("—")[0].trim()} as its subject matter, but it is not produced, endorsed, or issued by that certification body, and it does not itself confer that official credential.
          </p>
        )}

        {/* Next steps */}
        {nextCourse && (
          <div className="no-print card" style={{ marginTop: "2rem", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", marginBottom: "0.5rem" }}>Continue Your Journey</h3>
            <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: "1rem" }}>
              You are now ready for the next course in the series.
            </p>
            <p style={{ fontWeight: 600, marginBottom: "1.25rem" }}>{nextCourse.title}</p>
            <Link href={`/courses/${nextCourse.slug}`} className="btn-primary">
              Start {nextCourse.title}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
