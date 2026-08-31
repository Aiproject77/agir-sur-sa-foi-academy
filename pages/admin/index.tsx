import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import { PUBLIC_COURSES, ADMIN_ONLY_COURSES } from "../../lib/courses";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState<"en" | "fr">("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("asf_lang") : null;
    if (saved === "fr" || saved === "en") setLang(saved);

    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => {
        if (!d.user || d.user.role !== "admin") { router.push("/"); return; }
        setUser(d.user);
        return Promise.all([
          fetch("/api/admin/stats").then((r) => r.json()),
          fetch("/api/admin/students").then((r) => r.json()),
        ]);
      })
      .then((results) => {
        if (!results) return;
        const [statsData, studentsData] = results;
        setStats(statsData);
        setStudents(studentsData.students || []);
      })
      .finally(() => setLoading(false));
  }, []);

  const t = {
    loading: lang === "fr" ? "Chargement..." : "Loading...",
    pageTitle: lang === "fr" ? "Tableau de bord Admin — Agir sur sa Foi" : "Admin Dashboard — ASF Academy",
    heading: lang === "fr" ? "Tableau de bord Admin" : "Admin Dashboard",
    subheading: lang === "fr" ? "Vue d'ensemble et gestion des apprenants" : "Overview and student management",
    myPersonalCourses: lang === "fr" ? "Mes cours personnels" : "My Personal Courses",
    personalCoursesNote: lang === "fr"
      ? "Visibles uniquement ici, dans votre tableau de bord Admin — masqués du site public et des tableaux de bord des apprenants."
      : "Visible only here in your Admin Dashboard — hidden from the public site and from student dashboards.",
    completedWord: lang === "fr" ? "Terminé" : "Completed",
    notStarted: lang === "fr" ? "Non commencé" : "Not started",
    chaptersWord: lang === "fr" ? "chapitres" : "chapters",
    review: lang === "fr" ? "Revoir" : "Review",
    continueBtn: lang === "fr" ? "Continuer" : "Continue",
    start: lang === "fr" ? "Commencer" : "Start",
    certificate: lang === "fr" ? "Certificat" : "Certificate",
    totalStudents: lang === "fr" ? "Total apprenants" : "Total Students",
    totalDonations: lang === "fr" ? "Total des dons" : "Total Donations",
    enrolled: lang === "fr" ? "inscrits" : "Enrolled",
    completedStat: lang === "fr" ? "terminés" : "Completed",
    studentsHeading: (n: number) => lang === "fr" ? `Apprenants (${n})` : `Students (${n})`,
    thName: lang === "fr" ? "Nom" : "Name",
    thEmail: lang === "fr" ? "E-mail" : "Email",
    thJoined: lang === "fr" ? "Inscrit le" : "Joined",
    thDonations: lang === "fr" ? "Dons" : "Donations",
    noStudentsYet: lang === "fr" ? "Aucun apprenant inscrit pour le moment." : "No students enrolled yet.",
  };

  if (loading) return <div style={{ padding: "3rem", textAlign: "center" }}>{t.loading}</div>;
  if (!user) return null;

  return (
    <>
      <Head><title>{t.pageTitle}</title></Head>
      <NavBar user={user} lang={lang} setLang={setLang} />

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "1.5rem 1rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "1.75rem", marginBottom: 4 }}>{t.heading}</h1>
          <p style={{ color: "var(--text-muted)" }}>{t.subheading}</p>
        </div>

        {/* Personal courses — visible only here, only to the admin */}
        {ADMIN_ONLY_COURSES.length > 0 && (
          <div className="card" style={{ marginBottom: "2.5rem", padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", marginBottom: 4 }}>{t.myPersonalCourses}</h2>
            <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: "1.25rem" }}>
              {t.personalCoursesNote}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {ADMIN_ONLY_COURSES.map((c) => {
                const p = user?.progress?.[c.id];
                const completedChapters = p?.completedChapters?.length || 0;
                const pct = Math.round((completedChapters / c.chapters.length) * 100);
                const isDone = !!p?.completedAt;
                const cTitle = lang === "fr" && c.titleFr ? c.titleFr : c.title;
                return (
                  <div key={c.id} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap",
                    padding: "12px 16px", background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "var(--radius)",
                  }}>
                    <div>
                      <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>{cTitle}</p>
                      <p style={{ margin: 0, fontSize: 12, color: "var(--text-muted)" }}>
                        {c.certTrack} · {isDone ? t.completedWord : p ? `${pct}% (${completedChapters}/${c.chapters.length} ${t.chaptersWord})` : t.notStarted}
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <Link href={`/courses/${c.slug}`} className="btn-secondary" style={{ fontSize: 13, padding: "6px 14px" }}>
                        {isDone ? t.review : p ? t.continueBtn : t.start}
                      </Link>
                      {isDone && (
                        <Link href={`/courses/${c.slug}/certificate`} className="btn-primary" style={{ fontSize: 13, padding: "6px 14px" }}>
                          {t.certificate}
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: "2.5rem" }}>
          {[
            { label: t.totalStudents, value: stats?.totalStudents || 0 },
            { label: t.totalDonations, value: `$${(stats?.totalDonations || 0).toFixed(2)} USD` },
            ...PUBLIC_COURSES.map((c) => ({
              label: `${lang === "fr" && c.titleFr ? c.titleFr : c.title} — ${t.enrolled}`,
              value: stats?.courseEnrollments?.[c.id] || 0,
            })),
            ...PUBLIC_COURSES.map((c) => ({
              label: `${lang === "fr" && c.titleFr ? c.titleFr : c.title} — ${t.completedStat}`,
              value: stats?.courseCompletions?.[c.id] || 0,
            })),
          ].slice(0, 8).map((s) => (
            <div key={s.label} style={{
              background: "#fff",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "1rem",
            }}>
              <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</p>
              <p style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", margin: 0, fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Students table */}
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--border)" }}>
            <h2 style={{ fontSize: "1rem", margin: 0 }}>{t.studentsHeading(students.length)}</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--cream)" }}>
                  {[
                    t.thName,
                    t.thEmail,
                    t.thJoined,
                    ...PUBLIC_COURSES.map((c) => lang === "fr" && c.titleFr ? c.titleFr : c.title),
                    t.thDonations,
                  ].map((h, i) => (
                    <th key={`${h}-${i}`} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid var(--border)", whiteSpace: "nowrap" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {students.length === 0 ? (
                  <tr>
                    <td colSpan={4 + PUBLIC_COURSES.length} style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)", fontSize: 14 }}>
                      {t.noStudentsYet}
                    </td>
                  </tr>
                ) : students.map((s) => (
                  <tr key={s.id} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "10px 14px", fontSize: 14, fontWeight: 500 }}>{s.name}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13, color: "var(--text-muted)" }}>{s.email}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13, color: "var(--text-muted)" }}>
                      {new Date(s.createdAt).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US")}
                    </td>
                    {PUBLIC_COURSES.map((c) => {
                      const p = s.progress?.[c.id];
                      const pct = p ? Math.round((p.completedChapters.length / c.chapters.length) * 100) : 0;
                      return (
                        <td key={c.id} style={{ padding: "10px 14px" }}>
                          {p ? (
                            <div>
                              <div style={{ fontSize: 12, color: p.completedAt ? "var(--green)" : "var(--text-muted)" }}>
                                {p.completedAt ? t.completedWord : `${pct}%`}
                              </div>
                              <div className="progress-bar" style={{ width: 60, marginTop: 3 }}>
                                <div className="progress-fill" style={{ width: pct + "%" }} />
                              </div>
                            </div>
                          ) : (
                            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{t.notStarted}</span>
                          )}
                        </td>
                      );
                    })}
                    <td style={{ padding: "10px 14px", fontSize: 14 }}>
                      ${s.donations?.reduce((sum: number, d: any) => sum + d.amount, 0).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
