import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState<"en" | "fr">("en");

  useEffect(() => {
    const s = typeof window !== "undefined" ? localStorage.getItem("asf_lang") : null;
    if (s === "fr" || s === "en") setLang(s);
  }, []);

  const t = {
    title: lang === "fr" ? "Bienvenue" : "Welcome back",
    subtitle: lang === "fr" ? "Connectez-vous pour continuer" : "Sign in to continue your journey",
    password: lang === "fr" ? "Mot de passe" : "Password",
    signin: lang === "fr" ? "Se connecter" : "Sign In",
    loading: lang === "fr" ? "Connexion..." : "Signing in...",
    noAccount: lang === "fr" ? "Pas de compte ?" : "No account?",
    enroll: lang === "fr" ? "S'inscrire gratuitement" : "Enroll free",
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Identifiants invalides");
      // Admin → /admin, students → /dashboard
      router.push(data.role === "admin" ? "/admin" : "/dashboard");
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head><title>{lang === "fr" ? "Connexion — Agir sur sa Foi" : "Sign In — ASF Academy"}</title></Head>
      <NavBar lang={lang} setLang={setLang} />
      <div style={{ minHeight: "calc(100vh - 56px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
        <div className="card" style={{ width: "100%", maxWidth: 420 }}>
          <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
            <h1 style={{ fontSize: "1.5rem", marginBottom: 6 }}>{t.title}</h1>
            <p style={{ fontSize: 14, color: "var(--text-muted)" }}>{t.subtitle}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="votre@email.com" autoComplete="email" />
            </div>
            <div className="form-group">
              <label className="form-label">{t.password}</label>
              <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" autoComplete="current-password" />
            </div>
            {error && <p className="form-error" style={{ marginBottom: 12 }}>{error}</p>}
            <button type="submit" className="btn-primary" disabled={loading} style={{ width: "100%", marginTop: 4 }}>
              {loading ? t.loading : t.signin}
            </button>
          </form>
          <p style={{ textAlign: "center", marginTop: "1.25rem", fontSize: 14, color: "var(--text-muted)" }}>
            {t.noAccount}{" "}
            <Link href="/auth/signup" style={{ color: "var(--text-primary)", textDecoration: "underline" }}>{t.enroll}</Link>
          </p>
        </div>
      </div>
    </>
  );
}
