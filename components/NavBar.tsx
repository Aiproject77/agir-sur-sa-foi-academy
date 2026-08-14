import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar({ user }: { user?: any }) {
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  }

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">Agir sur sa Foi</Link>
      <div className="nav-links">
        {user ? (
          <>
            <Link href="/dashboard" className="nav-link">Tableau de bord</Link>
            {user.role === "admin" && <Link href="/admin" className="nav-link">Admin</Link>}
            <button onClick={logout} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.875rem", color: "var(--text-secondary)", fontFamily: "Inter, sans-serif", whiteSpace: "nowrap" }}>
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <Link href="/auth/login" className="nav-link">Connexion</Link>
            <Link href="/auth/signup" className="btn-primary" style={{ padding: "7px 14px", fontSize: "0.8125rem" }}>
              S'inscrire
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
