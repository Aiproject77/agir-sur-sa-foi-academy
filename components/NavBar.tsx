import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function NavBar({ user, onDonate }: { user?: any; onDonate?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  }

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        ASF Academy
      </Link>
      {/* Desktop */}
      <div className="nav-links" style={{ display: "flex" }}>
        {onDonate && (
          <button
            onClick={onDonate}
            className="btn-gold"
            style={{ padding: "7px 16px", fontSize: 13 }}
          >
            Give
          </button>
        )}
        {user ? (
          <>
            <Link href="/dashboard" className="nav-link">Dashboard</Link>
            {user.role === "admin" && (
              <Link href="/admin" className="nav-link">Admin</Link>
            )}
            <button
              onClick={logout}
              className="nav-link"
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "var(--text-secondary)" }}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link href="/auth/login" className="nav-link">Sign In</Link>
            <Link href="/auth/signup" className="btn-secondary" style={{ padding: "7px 16px", fontSize: 13 }}>
              Enroll Free
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
