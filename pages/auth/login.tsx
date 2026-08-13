import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const res = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Identifiants invalides");
      router.push(data.role === "admin" ? "/admin" : "/dashboard");
    } catch (e: any) { setError(e.message); } finally { setLoading(false); }
  }

  return (
    <>
      <Head><title>Connexion — Agir sur sa Foi</title></Head>
      <NavBar />
      <div style={{ minHeight: "calc(100vh - 56px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
        <div className="card" style={{ width: "100%", maxWidth: 420 }}>
          <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
            <h1 style={{ fontSize: "1.5rem", marginBottom: 6 }}>Bienvenue</h1>
            <p style={{ fontSize: 14, color: "var(--text-muted)" }}>Connectez-vous pour continuer votre parcours</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="votre@email.com" /></div>
            <div className="form-group"><label className="form-label">Mot de passe</label><input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" /></div>
            {error && <p className="form-error" style={{ marginBottom: 12 }}>{error}</p>}
            <button type="submit" className="btn-primary" disabled={loading} style={{ width: "100%", marginTop: 4 }}>{loading ? "Connexion..." : "Se connecter"}</button>
          </form>
          <p style={{ textAlign: "center", marginTop: "1.25rem", fontSize: 14, color: "var(--text-muted)" }}>
            Pas de compte ?{" "}
            <Link href="/auth/signup" style={{ color: "var(--text-primary)", textDecoration: "underline" }}>S'inscrire gratuitement</Link>
          </p>
        </div>
      </div>
    </>
  );
}
