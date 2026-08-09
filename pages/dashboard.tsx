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
  const [lang, setLang] = useState<"en" | "fr">("en");

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

  if (loading) return <div style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>
    {lang === "fr" ? "Chargement..." : "Loading..."}
  </div>;
  if (!user) return null;

  function canAccess(i: number): boolean {
    if (i === 0) return true;
    return !!user?.progress?.[COURSES[i - 1].id]?.completedAt;
  }

  const totalChapters = COURSES.reduce((s, c) => s + c.chapters.length, 0);
  const completedChapters = COURSES.reduce((s, c) => s + (user?.progress?.[c.id]?.completedChapters?.length || 0), 0);
  const completedCourses = COURSES.filter((c) => user?.progress?.[c.id]?.completedAt).length;

  const t = {
    welcome: lang === "fr" ? `Bienvenue, ${user.name}` : `Welcome, ${user.name}`,
    subtitle: lang === "fr"
      ? "Continuez votre parcours — un chapitre à la fois."
      : "Continue your learning journey — one chapter at a time.",
    tip: lang === "fr"
      ? "Conseil : Pour une meilleure assimilation, nous recommandons de ne pas dépasser 2 chapitres par jour. Prenez le temps de méditer et d'appliquer chaque enseignement."
      : "Tip: For better retention, we recommend studying no more than 2 chapters per day. Take time to meditate on and apply each teaching.",
    courses: lang === "fr" ? "Vos cours" : "Your Courses",
    coursesCompleted: lang === "fr" ? "Cours terminés" : "Courses Completed",
    chaptersDone: lang === "fr" ? "Chapitres complétés" : "Chapters Done",
    overallProgress: lang === "fr" ? "Progression globale" : "Overall Progress",
    completed: lang === "fr" ? "Terminé" : "Completed",
    certEarned: lang === "fr" ? "Certificat obtenu" : "Certificate Earned",
    inProgress: lang === "fr" ? "En cours" : "In Progress",
    locked: lang === "fr" ? "Verrouillé" : "Locked",
    chapters: lang === "fr" ? "chapitres" : "chapters",
    of: lang === "fr" ? "sur" : "of",
    complete: (n: number) => lang === "fr"
      ? `Terminez le Cours ${n} pour débloquer ce cours.`
      : `Complete Course ${n} to unlock this course.`,
    review: lang === "fr" ? "Revoir" : "Review",
    start: lang === "fr" ? "Commencer" : "Start Course",
    continue: lang === "fr" ? "Continuer" : "Continue",
    viewCert: lang === "fr" ? "Voir le certificat" : "View Certificate",
  };

  return (
    <>
      <Head>
        <title>{lang === "fr" ? "Tableau de bord — Agir sur sa Foi" : "Dashboard — ASF Academy"}</title>
      </Head>
      <NavBar user={user} lang={lang} setLang={setLang} />

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <h1 style={{ fontSize: "1.75rem", marginBottom: 4 }}>{t.welcome}</h1>
          <p style={{ color: "var(--text-muted)", fontSize: 15 }}>{t.subtitle}</p>
        </div>

        {/* 2-chapter daily recommendation */}
        <div style={{
          background: "var(--cream-dark)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          padding: "12px 16px",
          marginBottom: "1.75rem",
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
        }}>
          <div style={{
            width: 20, height: 20, flexShrink: 0,
            background: "var(--black)", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1,
          }}>
            <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>i</span>
          </div>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0 }}>{t.tip}</p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: "2.5rem" }}>
          {[
            { label: t.coursesCompleted, value: `${completedCourses} / ${COURSES.length}` },
            { label: t.chaptersDone, value: `${completedChapters} / ${totalChapters}` },
            { label: t.overallProgress, value: `${Math.round((completedChapters / totalChapters) * 100)}%` },
          ].map((s) => (
            <div key={s.label} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1rem" }}>
              <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</p>
              <p style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", margin: 0, fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>{t.courses}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: "3rem" }}>
          {COURSES.map((course, i) => {
            const progress = user?.progress?.[course.id];
            const completedCount = progress?.completedChapters?.length || 0;
            const pct = Math.round((completedCount / course.chapters.length) * 100);
            const accessible = canAccess(i);
            const done = !!progress?.completedAt;
            const started = !!progress?.startedAt;
            const title = lang === "fr" ? (course as any).titleFr || course.title : course.title;

            return (
              <div key={course.id} className="card" style={{ opacity: accessible ? 1 : 0.6 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{
                    width: 44, height: 44, flexShrink: 0,
                    background: done ? "var(--green)" : accessible ? "var(--black)" : "var(--border)",
                    color: "#fff", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 700, fontFamily: "'Playfair Display', serif",
                  }}>
                    {done ? "✓" : i + 1}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, flexWrap: "wrap" }}>
                      <div>
                        <h3 style={{ fontSize: "1.05rem", fontFamily: "'Playfair Display', serif", marginBottom: 2 }}>{title}</h3>
                        <p style={{ fontSize: 13, color: "var(--text-muted)" }}>{course.chapters.length} {t.chapters}</p>
                      </div>
                      {done && <span className="badge badge-done">{t.certEarned}</span>}
                      {started && !done && <span className="badge badge-new">{t.inProgress}</span>}
                      {!accessible && <span className="badge badge-locked">{t.locked}</span>}
                    </div>

                    {accessible && (
                      <div style={{ marginTop: 10 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>
                          <span>{completedCount} {t.of} {course.chapters.length} {t.chapters}</span>
                          <span>{pct}%</span>
                        </div>
                        <div className="progress-bar"><div className="progress-fill" style={{ width: pct + "%" }} /></div>
                      </div>
                    )}

                    {!accessible && (
                      <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 8 }}>
                        {t.complete(i)}
                      </p>
                    )}

                    <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {accessible && (
                        <Link href={`/courses/${course.slug}`} className={done ? "btn-secondary" : "btn-primary"} style={{ fontSize: 13, padding: "8px 18px" }}>
                          {done ? t.review : started ? t.continue : t.start}
                        </Link>
                      )}
                      {done && (
                        <Link href={`/courses/${course.slug}/certificate`} className="btn-secondary" style={{ fontSize: 13, padding: "8px 18px" }}>
                          {t.viewCert}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <DonationWidget user={user} compact lang={lang} />
      </div>
    </>
  );
}
