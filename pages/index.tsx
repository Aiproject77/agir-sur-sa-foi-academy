import Head from "next/head";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { COURSES } from "../lib/courses";
import DonationWidget from "../components/DonationWidget";
import NavBar from "../components/NavBar";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [lang, setLang] = useState<"en" | "fr">("en");
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

  const t = {
    tagline: lang === "en"
      ? "Acting on His Word Academy"
      : "Agir sur sa Foi Academy",
    subtitle: lang === "en"
      ? "An e-learning platform to spread the knowledge of God's Word"
      : "Une plateforme d'apprentissage en ligne pour propager la connaissance de la Parole de Dieu",
    hero: lang === "en"
      ? "Walk in the Power of God"
      : "Marchez dans la Puissance de Dieu",
    heroDesc: lang === "en"
      ? "Three complete biblical courses on the manifestations of Holy Spirit — revelation, worship, and power. Learn at your own pace, earn a certificate."
      : "Trois cours bibliques complets sur les manifestations du Saint-Esprit — révélation, adoration et puissance. Apprenez à votre rythme, obtenez un certificat.",
    enroll: lang === "en" ? "Enroll Free" : "S'inscrire gratuitement",
    dashboard: lang === "en" ? "Go to Dashboard" : "Mon espace",
    support: lang === "en" ? "Support This Ministry" : "Soutenir ce ministère",
    notice: lang === "en"
      ? "We recommend starting in order. Each course builds on the previous one. You may only take one course at a time — completing a course unlocks the next."
      : "Nous recommandons de commencer dans l'ordre. Chaque cours s'appuie sur le précédent. Vous ne pouvez suivre qu'un seul cours à la fois — terminer un cours déverrouille le suivant.",
    seriesTitle: lang === "en" ? "The Four Powers Series" : "La Série des Quatre Puissances",
    seriesDesc: lang === "en"
      ? "Three courses available now — take them in sequence."
      : "Trois cours disponibles maintenant — à suivre dans l'ordre.",
    whyTitle: lang === "en" ? "Our Mission" : "Notre Mission",
    whyDesc: lang === "en"
      ? "Agir sur sa Foi is an e-learning platform dedicated to spreading the knowledge of God's Word. We offer complete biblical courses to equip believers who want to grow in their understanding of Holy Spirit manifestations and walk in God's power."
      : "Agir sur sa Foi est une plateforme d'apprentissage en ligne dédiée à propager la connaissance de la Parole de Dieu. Nous proposons des cours bibliques complets pour équiper les croyants qui souhaitent grandir dans leur compréhension des manifestations du Saint-Esprit et marcher dans la puissance de Dieu.",
    whySub: lang === "en"
      ? "All courses are offered free of charge. Your generous donations make this possible."
      : "Tous les cours sont offerts gratuitement. Vos dons généreux rendent cela possible.",
    giveNow: lang === "en" ? "Give Now" : "Donner maintenant",
    footer: lang === "en"
      ? "© 2026 Acting on His Word Academy — Agir sur sa Foi"
      : "© 2026 Agir sur sa Foi Academy — Acting on His Word",
    completed: lang === "en" ? "Completed" : "Terminé",
    inProgress: lang === "en" ? "In Progress" : "En cours",
    startHere: lang === "en" ? "Start Here" : "Commencer ici",
    completePrev: (n: number) => lang === "en"
      ? `Complete Course ${n} First`
      : `Terminer le Cours ${n} d'abord`,
    reviewCourse: lang === "en" ? "Review Course" : "Revoir le cours",
    continueCourse: lang === "en" ? "Continue" : "Continuer",
    viewCourse: lang === "en" ? "View Course" : "Voir le cours",
  };

  return (
    <>
      <Head>
        <title>{t.tagline} — {lang === "en" ? "Walk in God's Power" : "Marchez dans la Puissance de Dieu"}</title>
        <meta name="description" content={t.subtitle} />
        <meta property="og:title" content={t.tagline} />
        <meta property="og:description" content={t.heroDesc} />
      </Head>

      <NavBar user={user} onDonate={scrollToDonation} lang={lang} setLang={setLang} />

      {/* Hero */}
      <section style={{
        background: "var(--cream)",
        borderBottom: "1px solid var(--border)",
        padding: "4rem 1.5rem 3rem",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {/* Real logo image */}
          <div style={{ width: 150, height: 150, margin: "0 auto 2rem", borderRadius: "50%", overflow: "hidden", border: "2px solid var(--border)" }}>
            <img
              src="/logo.jpg"
              alt="Agir sur sa Foi Academy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <p style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
            {t.subtitle}
          </p>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
            {t.hero}
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: 540, margin: "0 auto 2rem", lineHeight: 1.7 }}>
            {t.heroDesc}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={user ? "/dashboard" : "/auth/signup"} className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
              {user ? t.dashboard : t.enroll}
            </Link>
            <button className="btn-secondary" onClick={scrollToDonation} style={{ fontSize: 16, padding: "14px 28px" }}>
              {t.support}
            </button>
          </div>
        </div>
      </section>

      {/* Course Order Notice */}
      <section style={{ background: "var(--cream-dark)", borderBottom: "1px solid var(--border)", padding: "1rem 1.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", alignItems: "flex-start", gap: 12 }}>
          <div style={{ width: 20, height: 20, flexShrink: 0, background: "var(--black)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
            <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>i</span>
          </div>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: 0 }}>
            <strong style={{ color: "var(--text-primary)" }}>
              {lang === "en" ? "We recommend starting in order." : "Nous recommandons de commencer dans l'ordre."}
            </strong>{" "}
            {lang === "en"
              ? "Each course builds on the previous one. You may only take one course at a time — completing a course unlocks the next."
              : "Chaque cours s'appuie sur le précédent. Vous ne pouvez suivre qu'un seul cours à la fois — terminer un cours déverrouille le suivant."}
          </p>
        </div>
      </section>

      {/* Courses */}
      <section style={{ padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{t.seriesTitle}</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: 15 }}>{t.seriesDesc}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {COURSES.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} user={user} lang={lang} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Donation section */}
      <div ref={donationRef}>
        <DonationWidget user={user} lang={lang} />
      </div>

      {/* Mission section */}
      <section style={{ background: "var(--black)", color: "#fff", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: "1.75rem", marginBottom: "1rem" }}>{t.whyTitle}</h2>
          <p style={{ color: "#ccc", fontSize: 16, lineHeight: 1.8, marginBottom: "2rem" }}>
            {t.whyDesc}
          </p>
          <p style={{ color: "#aaa", fontSize: 14 }}>{t.whySub}</p>
          <button
            className="btn-secondary"
            style={{ marginTop: "1.5rem", borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}
            onClick={scrollToDonation}
          >
            {t.giveNow}
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
          {t.footer}<br />
          <Link href="/admin" style={{ color: "var(--text-muted)", textDecoration: "underline", fontSize: 12 }}>Admin</Link>
          {" · "}
          <a href="mailto:contact@asfacademy.com" style={{ color: "var(--text-muted)", textDecoration: "underline", fontSize: 12 }}>Contact</a>
        </p>
      </footer>
    </>
  );
}

function CourseCard({ course, index, user, lang, t }: { course: any; index: number; user: any; lang: string; t: any }) {
  const progress = user?.progress?.[course.id];
  const completedCount = progress?.completedChapters?.length || 0;
  const totalChapters = course.chapters.length;
  const pct = Math.round((completedCount / totalChapters) * 100);
  const isCompleted = !!progress?.completedAt;
  const isStarted = !!progress?.startedAt;

  const title = lang === "fr" ? (course.titleFr || course.title) : course.title;
  const subtitle = lang === "fr" ? (course.subtitleFr || course.subtitle) : course.subtitle;
  const description = lang === "fr" ? (course.descriptionFr || course.description) : course.description;

  return (
    <div className="card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
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
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", marginBottom: 2 }}>{title}</h3>
            <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 8 }}>{subtitle}</p>
          </div>
          {isCompleted && <span className="badge badge-done">{t.completed}</span>}
          {isStarted && !isCompleted && <span className="badge badge-new">{t.inProgress}</span>}
          {!isStarted && index === 0 && <span className="badge badge-gold">{t.startHere}</span>}
          {!isStarted && index > 0 && <span className="badge badge-locked">{t.completePrev(index)}</span>}
        </div>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 12 }}>{description}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", gap: 16, fontSize: 13, color: "var(--text-muted)" }}>
            <span>{totalChapters} {lang === "fr" ? "chapitres" : "chapters"}</span>
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
          <Link href={`/courses/${course.slug}`} className="btn-primary" style={{ fontSize: 14, padding: "9px 20px" }}>
            {isCompleted ? t.reviewCourse : isStarted ? t.continueCourse : t.viewCourse}
          </Link>
        </div>
      </div>
    </div>
  );
}
