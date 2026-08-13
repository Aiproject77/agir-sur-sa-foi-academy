import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password.length < 8) { setError("Le mot de passe doit contenir au moins 8 caractères."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, password }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur lors de l'inscription");
      router.push("/dashboard");
    } catch (e: any) { setError(e.message); } finally { setLoading(false); }
  }

  return (
    <>
      <Head><title>S'inscrire — Agir sur sa Foi</title></Head>
      <NavBar />
      <div style={{ minHeight: "calc(100vh - 56px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
        <div className="card" style={{ width: "100%", maxWidth: 420 }}>
          <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
            <h1 style={{ fontSize: "1.5rem", marginBottom: 6 }}>Commencez votre parcours</h1>
            <p style={{ fontSize: 14, color: "var(--text-muted)" }}>Inscription gratuite — trois cours bibliques complets</p>
          </div>
          <div style={{ background: "var(--cream-dark)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "12px 16px", marginBottom: "1.5rem" }}>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0 }}>✓ Accès gratuit aux 3 cours &nbsp;·&nbsp; ✓ Quiz après chaque chapitre &nbsp;·&nbsp; ✓ Certificat</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group"><label className="form-label">Nom complet</label><input className="form-input" type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Votre nom" /></div>
            <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="votre@email.com" /></div>
            <div className="form-group"><label className="form-label">Mot de passe</label><input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Min. 8 caractères" /></div>
            {error && <p className="form-error" style={{ marginBottom: 12 }}>{error}</p>}
            <button type="submit" className="btn-primary" disabled={loading} style={{ width: "100%", marginTop: 4 }}>{loading ? "Création..." : "Créer mon compte gratuit"}</button>
          </form>
          <p style={{ textAlign: "center", marginTop: "1.25rem", fontSize: 14, color: "var(--text-muted)" }}>
            Déjà un compte ?{" "}
            <Link href="/auth/login" style={{ color: "var(--text-primary)", textDecoration: "underline" }}>Se connecter</Link>
          </p>
        </div>
      </div>
    </>
  );
}
