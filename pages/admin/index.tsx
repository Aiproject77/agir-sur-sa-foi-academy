import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import { COURSES } from "../../lib/courses";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  if (loading) return <div style={{ padding: "3rem", textAlign: "center" }}>Loading...</div>;
  if (!user) return null;

  return (
    <>
      <Head><title>Admin Dashboard — ASF Academy</title></Head>
      <NavBar user={user} />

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "1.75rem", marginBottom: 4 }}>Admin Dashboard</h1>
          <p style={{ color: "var(--text-muted)" }}>Overview and student management</p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: "2.5rem" }}>
          {[
            { label: "Total Students", value: stats?.totalStudents || 0 },
            { label: "Total Donations", value: `$${(stats?.totalDonations || 0).toFixed(2)} USD` },
            ...COURSES.map((c) => ({
              label: `${c.title} Enrolled`,
              value: stats?.courseEnrollments?.[c.id] || 0,
            })),
            ...COURSES.map((c) => ({
              label: `${c.title} Completed`,
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
            <h2 style={{ fontSize: "1rem", margin: 0 }}>Students ({students.length})</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--cream)" }}>
                  {["Name", "Email", "Joined", "Course 1", "Course 2", "Course 3", "Donations"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid var(--border)" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {students.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)", fontSize: 14 }}>
                      No students enrolled yet.
                    </td>
                  </tr>
                ) : students.map((s) => (
                  <tr key={s.id} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "10px 14px", fontSize: 14, fontWeight: 500 }}>{s.name}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13, color: "var(--text-muted)" }}>{s.email}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13, color: "var(--text-muted)" }}>
                      {new Date(s.createdAt).toLocaleDateString()}
                    </td>
                    {COURSES.map((c) => {
                      const p = s.progress?.[c.id];
                      const pct = p ? Math.round((p.completedChapters.length / c.chapters.length) * 100) : 0;
                      return (
                        <td key={c.id} style={{ padding: "10px 14px" }}>
                          {p ? (
                            <div>
                              <div style={{ fontSize: 12, color: p.completedAt ? "var(--green)" : "var(--text-muted)" }}>
                                {p.completedAt ? "Completed" : `${pct}%`}
                              </div>
                              <div className="progress-bar" style={{ width: 60, marginTop: 3 }}>
                                <div className="progress-fill" style={{ width: pct + "%" }} />
                              </div>
                            </div>
                          ) : (
                            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Not started</span>
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
