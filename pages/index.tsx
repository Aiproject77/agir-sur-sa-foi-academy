import Head from "next/head";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { COURSES } from "../lib/courses";
import DonationWidget from "../components/DonationWidget";
import NavBar from "../components/NavBar";

const TAGLINE_FR = "Agir Sur Sa Foi Academy";
const TAGLINE_EN = "Acting on His Word Academy";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const donationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => { if (d.user) setUser(d.user); })
      .catch(() => {});
  }, []);

  function scrollToDonation() {
    donationRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Head>
        <title>Acting on His Word Academy — Walk in God's Power</title>
        <meta name="description" content="Three biblical courses on the manifestations of Holy Spirit. Free to enroll. Learn at your own pace. Certificate upon completion." />
        <meta property="og:title" content="Acting on His Word Academy" />
        <meta property="og:description" content="Walk in revelation, worship, and power manifestations of Holy Spirit. Three courses, bilingual EN/FR." />
      </Head>

      <NavBar user={user} onDonate={scrollToDonation} />

      {/* Hero */}
      <section style={{
        background: "var(--cream)",
        borderBottom: "1px solid var(--border)",
        padding: "4rem 1.5rem 3rem",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {/* Logo circle */}
          <div style={{
            width: 140, height: 140,
            border: "2px solid var(--black)",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 2rem",
            position: "relative",
            userSelect: "none",
          }}>
            <div style={{
              position: "absolute",
              width: 126, height: 126,
              border: "1px solid var(--black)",
              borderRadius: "50%",
            }} />
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-primary)", fontWeight: 700, lineHeight: 1.2, textAlign: "center", padding: "0 20px", zIndex: 1 }}>
              ACTING ON HIS WORD
            </p>
            <p style={{ fontSize: 22, fontWeight: 900, color: "var(--text-primary)", fontFamily: "'Playfair Display', serif", zIndex: 1, margin: "2px 0" }}>ACADEMY</p>
          </div>

          <p style={{ fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
            Christian Family Fellowship Ministry
          </p>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
            Walk in the Power of God
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: 520, margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Three complete biblical courses on the manifestations of Holy Spirit — revelation, worship, and power. Learn at your own pace, earn a certificate.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={user ? "/dashboard" : "/auth/signup"} className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
              {user ? "Go to Dashboard" : "Enroll Free"}
            </Link>
            <button className="btn-secondary" onClick={scrollToDonation} style={{ fontSize: 16, padding: "14px 28px" }}>
              Support This Ministry
            </button>
          </div>
        </div>
      </section>

      {/* Course Order Notice */}
      <section style={{ background: "#fff8e8", borderBottom: "1px solid #f0e0a0", padding: "1rem 1.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 20 }}>💡</span>
          <p style={{ fontSize: 14, color: "#7a5c00", margin: 0 }}>
            <strong>We recommend starting in order.</strong> Each course builds on the previous one. You may only take one course at a time — completing a course unlocks the next.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section style={{ padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>The Four Powers Series</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: 15 }}>
            Three courses available now — take them in sequence.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {COURSES.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} user={user} />
            ))}
          </div>
        </div>
      </section>

      {/* Donation section */}
      <div ref={donationRef}>
        <DonationWidget user={user} />
      </div>

      {/* Why this ministry */}
      <section style={{ background: "var(--black)", color: "#fff", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: "1.75rem", marginBottom: "1rem" }}>Why This Ministry Exists</h2>
          <p style={{ color: "#ccc", fontSize: 16, lineHeight: 1.8, marginBottom: "2rem" }}>
            Christian Family Fellowship Ministry has been equipping believers to walk in the simplicity of God's power since the 1970s. These teaching materials are offered as tools for believers who want to believe — to better know their heavenly Father and walk in the manifestations of Holy Spirit.
          </p>
          <p style={{ color: "#aaa", fontSize: 14 }}>
            All courses are offered free of charge. Your generous donations make this possible.
          </p>
          <button className="btn-gold" style={{ marginTop: "1.5rem" }} onClick={scrollToDonation}>
            Give Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "var(--cream-dark)",
        borderTop: "1px solid var(--border)",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}>
        <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
          © 2024 Acting on His Word Academy · Christian Family Fellowship Ministry<br />
          <Link href="/admin" style={{ color: "var(--text-muted)", textDecoration: "underline", fontSize: 12 }}>Admin</Link>
          {" · "}
          <a href="mailto:contact@asfacademy.com" style={{ color: "var(--text-muted)", textDecoration: "underline", fontSize: 12 }}>Contact</a>
        </p>
      </footer>
    </>
  );
}


function CourseCard({ course, index, user }: { course: any; index: number; user: any }) {
  const progress = user?.progress?.[course.id];
  const completedCount = progress?.completedChapters?.length || 0;
  const totalChapters = course.chapters.length;
  const pct = Math.round((completedCount / totalChapters) * 100);
  const isCompleted = !!progress?.completedAt;
  const isStarted = !!progress?.startedAt;

  return (
    <div className="card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
      {/* Number */}
      <div style={{
        width: 48, height: 48, flexShrink: 0,
        background: "var(--black)", color: "#fff",
        borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700, fontSize: 20,
      }}>
        {index + 1}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", marginBottom: 2 }}>
              {course.title}
            </h3>
            <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 8 }}>{course.subtitle}</p>
          </div>
          {isCompleted && <span className="badge badge-done">Completed</span>}
          {isStarted && !isCompleted && <span className="badge badge-new">In Progress</span>}
          {!isStarted && index === 0 && <span className="badge badge-gold">Start Here</span>}
          {!isStarted && index > 0 && <span className="badge badge-locked">Complete Course {index} First</span>}
        </div>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 12 }}>{course.description}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", gap: 16, fontSize: 13, color: "var(--text-muted)" }}>
            <span>{totalChapters} chapters</span>
            <span>·</span>
            <span>{course.chapters.length > 10 ? "Advanced" : "Intermediate"}</span>
          </div>
          {isStarted && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-muted)" }}>
              <div className="progress-bar" style={{ width: 100 }}>
                <div className="progress-fill" style={{ width: pct + "%" }} />
              </div>
              <span>{pct}%</span>
            </div>
          )}
        </div>
        <div style={{ marginTop: 14 }}>
          <Link href={`/courses/${course.slug}`} className={index === 0 || user?.progress ? "btn-primary" : "btn-secondary"} style={{ fontSize: 14, padding: "9px 20px" }}>
            {isCompleted ? "Review Course" : isStarted ? "Continue" : "View Course"}
          </Link>
        </div>
      </div>
    </div>
  );
}
