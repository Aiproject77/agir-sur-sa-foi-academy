import Head from "next/head";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { COURSES } from "../lib/courses";
import DonationWidget from "../components/DonationWidget";
import NavBar from "../components/NavBar";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const donationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => { if (d.user) setUser(d.user); })
      .catch(() => {});
  }, []);

  return (
    <>
      <Head>
        <title>Agir sur sa Foi Academy — Marchez dans la Puissance de Dieu</title>
        <meta name="description" content="Une plateforme d'apprentissage en ligne pour propager la connaissance de la Parole de Dieu. Trois cours bibliques complets sur les manifestations du Saint-Esprit." />
        <meta property="og:title" content="Agir sur sa Foi Academy" />
      </Head>

      <NavBar user={user} />

      {/* Hero */}
      <section style={{ background: "var(--cream)", borderBottom: "1px solid var(--border)", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ width: 150, height: 150, margin: "0 auto 2rem", borderRadius: "50%", overflow: "hidden", border: "2px solid var(--border)" }}>
            <img src="/logo.jpg" alt="Agir sur sa Foi Academy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <p style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
            Une plateforme d'apprentissage en ligne pour propager la connaissance de la Parole de Dieu
          </p>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
            Marchez dans la Puissance de Dieu
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: 540, margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Trois cours bibliques complets sur les manifestations du Saint-Esprit — révélation, adoration et puissance. Apprenez à votre rythme, obtenez un certificat.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={user ? "/dashboard" : "/auth/signup"} className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
              {user ? "Mon tableau de bord" : "S'inscrire gratuitement"}
            </Link>
            <button className="btn-secondary" onClick={() => donationRef.current?.scrollIntoView({ behavior: "smooth" })} style={{ fontSize: 16, padding: "14px 28px" }}>
              Soutenir ce ministère
            </button>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section style={{ background: "var(--cream-dark)", borderBottom: "1px solid var(--border)", padding: "1rem 1.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", alignItems: "flex-start", gap: 12 }}>
          <div style={{ width: 20, height: 20, flexShrink: 0, background: "var(--black)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
            <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>i</span>
          </div>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: 0 }}>
            <strong style={{ color: "var(--text-primary)" }}>Nous recommandons de commencer dans l'ordre.</strong>{" "}
            Chaque cours s'appuie sur le précédent. Vous ne pouvez suivre qu'un seul cours à la fois — terminer un cours déverrouille le suivant.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section style={{ padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>La Série des Quatre Puissances</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: 15 }}>Trois cours disponibles — à suivre dans l'ordre.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {COURSES.map((course, i) => {
              const progress = user?.progress?.[course.id];
              const done = !!progress?.completedAt;
              const started = !!progress?.startedAt;
              const completedCount = progress?.completedChapters?.length || 0;
              const pct = Math.round((completedCount / course.chapters.length) * 100);
              return (
                <div key={course.id} className="card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, flexShrink: 0, background: "var(--black)", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20 }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                      <div>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", marginBottom: 2 }}>{course.title}</h3>
                        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 8 }}>{course.subtitle}</p>
                      </div>
                      {done && <span className="badge badge-done">Terminé</span>}
                      {started && !done && <span className="badge badge-new">En cours</span>}
                      {!started && i === 0 && <span className="badge badge-gold">Commencer ici</span>}
                      {!started && i > 0 && <span className="badge badge-locked">Terminer le cours {i} d'abord</span>}
                    </div>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 12 }}>{course.description}</p>
                    {started && (
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>
                          <span>{completedCount} sur {course.chapters.length} chapitres</span>
                          <span>{pct}%</span>
                        </div>
                        <div className="progress-bar"><div className="progress-fill" style={{ width: pct + "%" }} /></div>
                      </div>
                    )}
                    <Link href={`/courses/${course.slug}`} className="btn-primary" style={{ fontSize: 14, padding: "9px 20px" }}>
                      {done ? "Revoir le cours" : started ? "Continuer" : "Voir le cours"}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation */}
      <div ref={donationRef}>
        <DonationWidget user={user} />
      </div>

      {/* Mission */}
      <section style={{ background: "var(--black)", color: "#fff", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: "1.75rem", marginBottom: "1rem" }}>Notre Mission</h2>
          <p style={{ color: "#ccc", fontSize: 16, lineHeight: 1.8, marginBottom: "2rem" }}>
            Agir sur sa Foi est une plateforme d'apprentissage en ligne dédiée à propager la connaissance de la Parole de Dieu. Nous proposons des cours bibliques complets pour équiper les croyants qui souhaitent grandir dans leur compréhension des manifestations du Saint-Esprit et marcher dans la puissance de Dieu.
          </p>
          <p style={{ color: "#aaa", fontSize: 14 }}>Tous les cours sont offerts gratuitement. Vos dons généreux rendent cela possible.</p>
          <button className="btn-secondary" style={{ marginTop: "1.5rem", borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}
            onClick={() => donationRef.current?.scrollIntoView({ behavior: "smooth" })}>
            Donner maintenant
          </button>
        </div>
      </section>

      <footer style={{ background: "var(--cream-dark)", borderTop: "1px solid var(--border)", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
          © 2026 Agir sur sa Foi Academy<br />
          <Link href="/admin" style={{ color: "var(--text-muted)", textDecoration: "underline", fontSize: 12 }}>Admin</Link>
          {" · "}
          <a href="mailto:contact@asfacademy.com" style={{ color: "var(--text-muted)", textDecoration: "underline", fontSize: 12 }}>Contact</a>
        </p>
      </footer>
    </>
  );
}
