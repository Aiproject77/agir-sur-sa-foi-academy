import { useState } from "react";

const STRIPE_LINKS: Record<string, string> = {
  "5":  "https://buy.stripe.com/dRm00j3WJ7LVahIdSHbfO02",
  "10": "https://buy.stripe.com/00wfZh9h3fen89AbKzbfO01",
  "15": "https://buy.stripe.com/cNi3cv0Kx8PZ0H8eWLbfO00",
  "custom": "https://buy.stripe.com/5kQ00j0Kxd6fblM7ujbfO03",
};

const PRESET_AMOUNTS = [5, 10, 15];

export default function DonationWidget({ user, compact }: { user?: any; compact?: boolean }) {
  const [selected, setSelected] = useState<number | null>(10);
  const [isCustom, setIsCustom] = useState(false);

  function handleDonate() {
    const key = isCustom ? "custom" : String(selected);
    const link = STRIPE_LINKS[key];
    if (link) window.open(link, "_blank");
  }

  const containerStyle = compact
    ? { padding: "1.5rem", background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }
    : { background: "var(--cream-dark)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "3.5rem 1.5rem" };

  const canDonate = isCustom || selected !== null;

  return (
    <section style={containerStyle}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        {!compact && (
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <p style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700, marginBottom: 8 }}>
              Soutenir ce ministère
            </p>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
              Aidez-nous à équiper plus de croyants
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 15, maxWidth: 460, margin: "0 auto" }}>
              Tous les cours sont gratuits. Votre générosité rend cela possible et nous aide à atteindre plus de personnes avec la Parole de Dieu.
            </p>
          </div>
        )}
        {compact && (
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", marginBottom: "1rem" }}>
            Soutenir ce ministère
          </h3>
        )}

        {/* Montants prédéfinis */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 10 }}>
          {PRESET_AMOUNTS.map((a) => (
            <button
              key={a}
              className={`donation-amount-btn ${selected === a && !isCustom ? "active" : ""}`}
              onClick={() => { setSelected(a); setIsCustom(false); }}
            >
              ${a}
            </button>
          ))}
        </div>

        {/* Bouton montant libre */}
        <button
          onClick={() => { setIsCustom(true); setSelected(null); }}
          style={{
            width: "100%",
            padding: "12px",
            border: `2px solid ${isCustom ? "var(--black)" : "var(--border)"}`,
            borderRadius: "var(--radius)",
            background: isCustom ? "var(--black)" : "#fff",
            color: isCustom ? "#fff" : "var(--text-secondary)",
            fontSize: 14,
            cursor: "pointer",
            marginBottom: 16,
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            transition: "all 0.15s",
          }}
        >
          {isCustom ? "✓ Montant libre sélectionné" : "Autre montant (libre)"}
        </button>

        {isCustom && (
          <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 12, textAlign: "center" }}>
            Vous pourrez entrer le montant de votre choix sur la page Stripe.
          </p>
        )}

        {/* Bouton donner → ouvre Stripe */}
        <button
          className="btn-primary"
          style={{ width: "100%", fontSize: 16, padding: "14px" }}
          onClick={handleDonate}
          disabled={!canDonate}
        >
          {isCustom
            ? "Donner un montant libre →"
            : selected
            ? `Donner $${selected}.00 USD →`
            : "Choisir un montant"}
        </button>

        {/* Signaux de confiance */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 14, flexWrap: "wrap" }}>
          {["Paiement sécurisé", "Via Stripe", "Reçu par email"].map((s, i, arr) => (
            <span key={s} style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 8 }}>
              {s}
              {i < arr.length - 1 && <span style={{ opacity: 0.4 }}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
