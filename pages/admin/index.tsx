import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import { COURSES } from "../../lib/courses";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [students, setStudents] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [unread, setUnread] = useState(0);
  const [tab, setTab] = useState<"overview" | "messages">("overview");
  const [loading, setLoading] = useState(true);
  const [replyId, setReplyId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [replySending, setReplySending] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then(async (d) => {
        if (!d.user || d.user.role !== "admin") { router.push("/auth/login"); return; }
        setUser(d.user);
        const [statsRes, studentsRes, msgRes] = await Promise.all([
          fetch("/api/admin/stats").then((r) => r.json()),
          fetch("/api/admin/students").then((r) => r.json()),
          fetch("/api/messages/admin").then((r) => r.json()),
        ]);
        setStats(statsRes);
        setStudents(studentsRes.students || []);
        setMessages(msgRes.messages || []);
        setUnread(msgRes.unread || 0);
      })
      .finally(() => setLoading(false));
  }, []);

  async function sendReply(msgId: string) {
    if (!replyText.trim()) return;
    setReplySending(true);
    await fetch("/api/messages/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: msgId, reply: replyText }),
    });
    setMessages((prev) => prev.map((m) => m.id === msgId ? { ...m, reply: replyText, replied_at: new Date().toISOString(), read_by_admin: true } : m));
    setUnread((u) => Math.max(0, u - 1));
    setReplyId(null);
    setReplyText("");
    setReplySending(false);
  }

  async function markRead(msgId: string) {
    await fetch("/api/messages/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: msgId, action: "read" }),
    });
    setMessages((prev) => prev.map((m) => m.id === msgId ? { ...m, read_by_admin: true } : m));
    setUnread((u) => Math.max(0, u - 1));
  }

  if (loading) return <div style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>Chargement...</div>;
  if (!user) return null;

  return (
    <>
      <Head><title>Administration — Agir sur sa Foi</title></Head>
      <NavBar user={user} />

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "1.75rem" }}>
          <h1 style={{ fontSize: "1.75rem", marginBottom: 4 }}>Tableau de bord Admin</h1>
          <p style={{ color: "var(--text-muted)" }}>Vue d'ensemble, étudiants et messages</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: "2rem", borderBottom: "1px solid var(--border)", paddingBottom: 0 }}>
          {[
            { key: "overview", label: "Vue d'ensemble" },
            { key: "messages", label: `Messages${unread > 0 ? ` (${unread})` : ""}` },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key as any)}
              style={{
                padding: "10px 20px",
                border: "none",
                background: "none",
                fontSize: "0.9375rem",
                fontWeight: tab === t.key ? 600 : 400,
                color: tab === t.key ? "var(--text-primary)" : "var(--text-muted)",
                borderBottom: `2px solid ${tab === t.key ? "var(--black)" : "transparent"}`,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                position: "relative",
                marginBottom: -1,
              }}
            >
              {t.label}
              {t.key === "messages" && unread > 0 && (
                <span style={{ position: "absolute", top: 6, right: 6, width: 8, height: 8, borderRadius: "50%", background: "#dc2626" }} />
              )}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: "2.5rem" }}>
              {[
                { label: "Total étudiants", value: stats?.totalStudents || 0 },
                { label: "Total dons", value: `$${(stats?.totalDonations || 0).toFixed(2)}` },
                { label: "Messages non lus", value: unread },
                ...COURSES.map((c) => ({ label: `Inscrits — C${c.order}`, value: stats?.courseEnrollments?.[c.id] || 0 })),
                ...COURSES.map((c) => ({ label: `Terminés — C${c.order}`, value: stats?.courseCompletions?.[c.id] || 0 })),
              ].slice(0, 8).map((s) => (
                <div key={s.label} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1rem" }}>
                  <p style={{ fontSize: "0.6875rem", color: "var(--text-muted)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</p>
                  <p style={{ fontSize: "1.375rem", fontWeight: 700, color: "var(--text-primary)", margin: 0, fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* Students table */}
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--border)" }}>
                <h2 style={{ fontSize: "1rem", margin: 0 }}>Étudiants ({students.length})</h2>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
                  <thead>
                    <tr style={{ background: "var(--cream)" }}>
                      {["Nom", "Email", "Inscrit le", "C1", "C2", "C3", "Dons"].map((h) => (
                        <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid var(--border)", whiteSpace: "nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {students.length === 0 ? (
                      <tr><td colSpan={7} style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)", fontSize: "0.875rem" }}>Aucun étudiant inscrit.</td></tr>
                    ) : students.map((s) => (
                      <tr key={s.id} style={{ borderBottom: "1px solid var(--border)" }}>
                        <td style={{ padding: "10px 12px", fontSize: "0.875rem", fontWeight: 500 }}>{s.name}</td>
                        <td style={{ padding: "10px 12px", fontSize: "0.8125rem", color: "var(--text-muted)" }}>{s.email}</td>
                        <td style={{ padding: "10px 12px", fontSize: "0.8125rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                          {new Date(s.createdAt || s.created_at).toLocaleDateString("fr-FR")}
                        </td>
                        {COURSES.map((c) => {
                          const p = s.progress?.[c.id];
                          const pct = p ? Math.round((p.completedChapters.length / c.chapters.length) * 100) : 0;
                          return (
                            <td key={c.id} style={{ padding: "10px 12px" }}>
                              {p ? (
                                <div>
                                  <div style={{ fontSize: "0.75rem", color: p.completedAt ? "var(--green)" : "var(--text-muted)" }}>{p.completedAt ? "✓" : `${pct}%`}</div>
                                  <div className="progress-bar" style={{ width: 50, marginTop: 3 }}><div className="progress-fill" style={{ width: pct + "%" }} /></div>
                                </div>
                              ) : <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>—</span>}
                            </td>
                          );
                        })}
                        <td style={{ padding: "10px 12px", fontSize: "0.875rem" }}>
                          ${(s.donations || []).reduce((sum: number, d: any) => sum + d.amount, 0).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {tab === "messages" && (
          <div>
            {messages.length === 0 ? (
              <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>
                Aucun message pour le moment.
              </div>
            ) : messages.map((msg) => (
              <div key={msg.id} className="card" style={{ marginBottom: 16, borderLeft: `4px solid ${msg.read_by_admin ? "var(--border)" : "var(--black)"}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      {!msg.read_by_admin && (
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#dc2626", flexShrink: 0, display: "inline-block" }} />
                      )}
                      <strong style={{ fontSize: "0.9375rem" }}>{msg.student_name}</strong>
                      <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>{msg.student_email}</span>
                    </div>
                    <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", margin: 0 }}>
                      {msg.course_title} · {msg.chapter_title}
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      {new Date(msg.created_at).toLocaleDateString("fr-FR", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                    </span>
                    {!msg.read_by_admin && !msg.reply && (
                      <button onClick={() => markRead(msg.id)} className="btn-secondary" style={{ fontSize: "0.75rem", padding: "4px 10px" }}>
                        Marquer lu
                      </button>
                    )}
                  </div>
                </div>

                {/* Message de l'étudiant */}
                <div style={{ background: "var(--cream)", borderRadius: "var(--radius)", padding: "12px 14px", marginBottom: 12 }}>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", margin: 0, whiteSpace: "pre-wrap" }}>{msg.body}</p>
                </div>

                {/* Réponse existante */}
                {msg.reply && (
                  <div style={{ background: "#dcfce7", border: "1px solid #86efac", borderRadius: "var(--radius)", padding: "12px 14px", marginBottom: 8 }}>
                    <p style={{ fontSize: "0.75rem", color: "#15803d", fontWeight: 600, marginBottom: 4 }}>Votre réponse :</p>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", margin: 0, whiteSpace: "pre-wrap" }}>{msg.reply}</p>
                  </div>
                )}

                {/* Zone de réponse */}
                {!msg.reply && (
                  replyId === msg.id ? (
                    <div>
                      <textarea
                        className="form-input"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Votre réponse à l'étudiant..."
                        rows={4}
                        style={{ resize: "vertical", marginBottom: 8 }}
                      />
                      <div style={{ display: "flex", gap: 8 }}>
                        <button className="btn-secondary" onClick={() => { setReplyId(null); setReplyText(""); }} style={{ fontSize: "0.875rem" }}>Annuler</button>
                        <button className="btn-primary" onClick={() => sendReply(msg.id)} disabled={replySending || !replyText.trim()} style={{ fontSize: "0.875rem" }}>
                          {replySending ? "Envoi..." : "Envoyer la réponse"}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button className="btn-primary" style={{ fontSize: "0.875rem" }} onClick={() => { setReplyId(msg.id); setReplyText(""); if (!msg.read_by_admin) markRead(msg.id); }}>
                      Répondre
                    </button>
                  )
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
