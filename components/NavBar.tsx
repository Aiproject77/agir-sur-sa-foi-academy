import Link from "next/link";
import { useRouter } from "next/router";

interface NavBarProps {
  user?: any;
  onDonate?: () => void;
  lang?: "en" | "fr";
  setLang?: (l: "en" | "fr") => void;
}

export default function NavBar({ user, onDonate, lang = "en", setLang }: NavBarProps) {
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  }

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        {lang === "fr" ? "Agir sur sa Foi" : "ASF Academy"}
      </Link>
      <div className="nav-links" style={{ display: "flex" }}>
        {/* Language toggle */}
        {setLang && (
          <div style={{ display: "flex", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden", fontSize: 12, height: 30 }}>
            <button
              onClick={() => setLang("en")}
              style={{
                padding: "0 10px",
                background: lang === "en" ? "var(--black)" : "transparent",
                color: lang === "en" ? "#fff" : "var(--text-muted)",
                border: "none",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLang("fr")}
              style={{
                padding: "0 10px",
                background: lang === "fr" ? "var(--black)" : "transparent",
                color: lang === "fr" ? "#fff" : "var(--text-muted)",
                border: "none",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
              }}
            >
              FR
            </button>
          </div>
        )}

        {onDonate && (
          <button
            onClick={onDonate}
            className="btn-primary"
            style={{ padding: "7px 16px", fontSize: 13 }}
          >
            {lang === "fr" ? "Donner" : "Give"}
          </button>
        )}

        {user ? (
          <>
            <Link href="/dashboard" className="nav-link">
              {lang === "fr" ? "Tableau de bord" : "Dashboard"}
            </Link>
            {user.role === "admin" && (
              <Link href="/admin" className="nav-link">Admin</Link>
            )}
            <button
              onClick={logout}
              className="nav-link"
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "var(--text-secondary)" }}
            >
              {lang === "fr" ? "Déconnexion" : "Sign Out"}
            </button>
          </>
        ) : (
          <>
            <Link href="/auth/login" className="nav-link">
              {lang === "fr" ? "Connexion" : "Sign In"}
            </Link>
            <Link href="/auth/signup" className="btn-primary" style={{ padding: "7px 16px", fontSize: 13 }}>
              {lang === "fr" ? "S'inscrire" : "Enroll Free"}
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
