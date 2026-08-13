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
    fetch("/api/auth/me").then((r) => r.json()).then((d) => {
      if (!d.user) { router.push("/auth/login"); return; }
      setUser(d.user);
    }).catch(() => router.push("/auth/login")).finally(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>Chargement...</div>;
  if (!user) return null;

  const totalChapters = COURSES.reduce((s, c) => s + c.chapters.length, 0);
  const completedChapters = COURSES.reduce((s, c) => s + (user?.progress?.[c.id]?.completedChapters?.length || 0), 0);
  const completedCourses = COURSES.filter((c) => user?.progress?.[c.id]?.completedAt).length;

  function canAccess(i: number) {
    if (i === 0) return true;
    return !!user?.progress?.[COURSES[i - 1].id]?.completedAt;
  }

  return (
    <>
      <Head><title>Tableau de bord — Agir sur sa Foi</title></Head>
      <NavBar user={user} />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <h1 style={{ fontSize: "1.75rem", marginBottom: 4 }}>Bienvenue, {user.name}</h1>
          <p style={{ color: "var(--text-muted)", fontSize: 15 }}>Continuez votre parcours — un chapitre à la fois.</p>
        </div>

        {/* 2-chapter recommendation */}
        <div style={{ background: "var(--cream-dark)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "12px 16px", marginBottom: "1.75rem", display: "flex", alignItems: "flex-start", gap: 10 }}>
          <div style={{ width: 20, height: 20, flexShrink: 0, background: "var(--black)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
            <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>i</span>
          </div>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0 }}>
            <strong>Conseil :</strong> Pour une meilleure assimilation, nous recommandons de ne pas dépasser <strong>2 chapitres par jour</strong>. Prenez le temps de méditer et d'appliquer chaque enseignement avant de continuer.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: "2.5rem" }}>
          {[
            { label: "Cours terminés", value: `${completedCourses} / ${COURSES.length}` },
            { label: "Chapitres complétés", value: `${completedChapters} / ${totalChapters}` },
            { label: "Progression globale", value: `${Math.round((completedChapters / totalChapters) * 100)}%` },
          ].map((s) => (
            <div key={s.label} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1rem" }}>
              <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</p>
              <p style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", margin: 0, fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Vos cours</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: "3rem" }}>
          {COURSES.map((course, i) => {
            const progress = user?.progress?.[course.id];
            const completedCount = progress?.completedChapters?.length || 0;
            const pct = Math.round((completedCount / course.chapters.length) * 100);
            const accessible = canAccess(i);
            const done = !!progress?.completedAt;
            const started = !!progress?.startedAt;
            return (
              <div key={course.id} className="card" style={{ opacity: accessible ? 1 : 0.6 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ width: 44, height: 44, flexShrink: 0, background: done ? "var(--green)" : accessible ? "var(--black)" : "var(--border)", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>
                    {done ? "✓" : i + 1}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, flexWrap: "wrap" }}>
                      <div>
                        <h3 style={{ fontSize: "1.05rem", fontFamily: "'Playfair Display', serif", marginBottom: 2 }}>{course.title}</h3>
                        <p style={{ fontSize: 13, color: "var(--text-muted)" }}>{course.chapters.length} chapitres</p>
                      </div>
                      {done && <span className="badge badge-done">Certificat obtenu</span>}
                      {started && !done && <span className="badge badge-new">En cours</span>}
                      {!accessible && <span className="badge badge-locked">Verrouillé</span>}
                    </div>
                    {accessible && (
                      <div style={{ marginTop: 10 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>
                          <span>{completedCount} sur {course.chapters.length} chapitres</span>
                          <span>{pct}%</span>
                        </div>
                        <div className="progress-bar"><div className="progress-fill" style={{ width: pct + "%" }} /></div>
                      </div>
                    )}
                    {!accessible && <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 8 }}>Terminez le Cours {i} pour débloquer.</p>}
                    <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {accessible && (
                        <Link href={`/courses/${course.slug}`} className={done ? "btn-secondary" : "btn-primary"} style={{ fontSize: 13, padding: "8px 18px" }}>
                          {done ? "Revoir" : started ? "Continuer" : "Commencer"}
                        </Link>
                      )}
                      {done && <Link href={`/courses/${course.slug}/certificate`} className="btn-secondary" style={{ fontSize: 13, padding: "8px 18px" }}>Voir le certificat</Link>}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <DonationWidget user={user} compact />
      </div>
    </>
  );
}
