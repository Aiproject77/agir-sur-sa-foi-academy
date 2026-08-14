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
    const link = isCustom ? STRIPE_LINKS["custom"] : STRIPE_LINKS[String(selected)];
    if (link) window.open(link, "_blank");
  }

  const canDonate = isCustom || selected !== null;

  return (
    <section style={compact
      ? { padding: "1.25rem", background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }
      : { background: "var(--cream-dark)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "3rem 1rem" }
    }>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        {!compact && (
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700, marginBottom: 8 }}>
              Soutenir ce ministère
            </p>
            <h2 style={{ fontSize: "clamp(1.4rem, 4vw, 1.75rem)", marginBottom: "0.75rem" }}>
              Aidez-nous à équiper plus de croyants
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", maxWidth: 440, margin: "0 auto" }}>
              Tous les cours sont gratuits. Votre générosité rend cela possible.
            </p>
          </div>
        )}
        {compact && (
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", marginBottom: "0.75rem" }}>
            Soutenir ce ministère
          </h3>
        )}

        {/* Montants fixes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 8 }}>
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

        {/* Montant libre */}
        <button
          onClick={() => { setIsCustom(!isCustom); setSelected(null); }}
          style={{
            width: "100%", padding: "12px",
            border: `2px solid ${isCustom ? "var(--black)" : "var(--border)"}`,
            borderRadius: "var(--radius)",
            background: isCustom ? "var(--black)" : "#fff",
            color: isCustom ? "#fff" : "var(--text-secondary)",
            fontSize: "0.9375rem", cursor: "pointer", marginBottom: 12,
            fontFamily: "Inter, sans-serif", fontWeight: 500,
            transition: "all 0.15s",
          }}
        >
          {isCustom ? "✓ Montant libre sélectionné" : "Autre montant"}
        </button>

        {/* Instruction montant libre */}
        {isCustom && (
          <div style={{
            background: "#fffbf0", border: "1px solid #f0e0a0",
            borderRadius: "var(--radius)", padding: "12px 14px", marginBottom: 12,
          }}>
            <p style={{ fontSize: "0.875rem", color: "#7a5c00", margin: 0, lineHeight: 1.5 }}>
              <strong>Comment ça fonctionne :</strong> Cliquez sur le bouton ci-dessous. Sur la page Stripe, modifiez la <strong>quantité</strong> pour choisir votre montant (ex : quantité 25 = don de $25).
            </p>
          </div>
        )}

        {/* Bouton principal */}
        <button
          className="btn-primary"
          style={{ width: "100%", fontSize: "1rem", padding: "14px", marginBottom: 12 }}
          onClick={handleDonate}
          disabled={!canDonate}
        >
          {isCustom
            ? "Choisir mon montant sur Stripe →"
            : selected
            ? `Donner $${selected}.00 USD →`
            : "Choisir un montant"}
        </button>

        {/* Signaux de confiance */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          {["Paiement sécurisé", "Via Stripe", "Reçu par courriel"].map((s, i, arr) => (
            <span key={s} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.75rem", color: "var(--text-muted)" }}>
              {s}{i < arr.length - 1 && <span style={{ opacity: 0.4 }}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
