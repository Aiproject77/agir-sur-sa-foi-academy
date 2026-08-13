import Link from "next/link";
import { useRouter } from "next/router";

interface NavBarProps {
  user?: any;
}

export default function NavBar({ user }: NavBarProps) {
  const router = useRouter();
  const isAdmin = user?.role === "admin";

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  }

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        Agir sur sa Foi
      </Link>
      <div className="nav-links" style={{ display: "flex" }}>
        {user ? (
          <>
            <Link href="/dashboard" className="nav-link">Tableau de bord</Link>
            {isAdmin && <Link href="/admin" className="nav-link">Admin</Link>}
            <button
              onClick={logout}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
            >
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <Link href="/auth/login" className="nav-link">Connexion</Link>
            <Link href="/auth/signup" className="btn-primary" style={{ padding: "7px 16px", fontSize: 13 }}>
              S'inscrire
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
