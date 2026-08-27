import { useState } from "react";

const PRESET_AMOUNTS = [5, 10, 15];

interface DonationWidgetProps {
  user?: any;
  compact?: boolean;
  lang?: "en" | "fr";
}

export default function DonationWidget({ user, compact, lang = "en" }: DonationWidgetProps) {
  const [selected, setSelected] = useState<number | null>(10);
  const [custom, setCustom] = useState("");
  const [step, setStep] = useState<"amount" | "info" | "done">("amount");
  const [email, setEmail] = useState(user?.email || "");
  const [name, setName] = useState(user?.name || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const amount = custom ? parseFloat(custom) : selected;

  const t = {
    title: lang === "fr" ? "Soutenir ce ministère" : "Support This Ministry",
    subtitle: lang === "fr"
      ? "Tous les cours sont gratuits. Votre générosité rend cela possible et nous aide à atteindre plus de personnes avec la Parole de Dieu."
      : "All courses are offered free. Your generosity makes this possible and helps us reach more people with God's Word.",
    custom: lang === "fr" ? "Montant personnalisé" : "Custom amount",
    donate: (a: number) => lang === "fr" ? `Donner $${a.toFixed(2)} USD →` : `Donate $${a.toFixed(2)} USD →`,
    fullName: lang === "fr" ? "Nom complet" : "Full Name",
    namePlaceholder: lang === "fr" ? "Votre nom" : "Your name",
    emailPlaceholder: lang === "fr" ? "votre@email.com" : "your@email.com",
    confirming: (a: number) => lang === "fr" ? `Don de $${a.toFixed(2)} USD — confirmez vos coordonnées :` : `Donating $${a.toFixed(2)} USD — please confirm your details:`,
    back: lang === "fr" ? "Retour" : "Back",
    confirm: (a: number) => lang === "fr" ? `Confirmer $${a.toFixed(2)} USD` : `Confirm $${a.toFixed(2)} USD`,
    secure: lang === "fr" ? "Sécurisé · Tous les dons soutiennent l'éducation biblique gratuite" : "Secure · All gifts support free biblical education",
    thankYou: lang === "fr" ? "Merci" : "Thank You",
    giftMsg: (a: number, n: string) => lang === "fr"
      ? `Votre don de $${a.toFixed(2)} USD aide à équiper des croyants dans le monde entier.`
      : `Your gift of $${a.toFixed(2)} USD helps equip believers worldwide.`,
    giveAgain: lang === "fr" ? "Donner à nouveau" : "Give Again",
    invalidAmount: lang === "fr" ? "Veuillez entrer un montant valide." : "Please enter a valid amount.",
    fillFields: lang === "fr" ? "Veuillez remplir votre nom et email." : "Please fill in your name and email.",
    processing: lang === "fr" ? "Traitement..." : "Processing...",
  };

  async function handleDonate() {
    if (!amount || amount < 1) { setError(t.invalidAmount); return; }
    if (!email || !name) { setError(t.fillFields); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/donations/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency: "USD", email, name }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setStep("done");
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  if (step === "done") {
    return (
      <div style={{
        background: compact ? "transparent" : "var(--cream-dark)",
        border: compact ? "1px solid var(--border)" : "none",
        borderRadius: "var(--radius-lg)",
        padding: compact ? "1.5rem" : "2.5rem",
        textAlign: "center",
      }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", marginBottom: 8 }}>
          {t.thankYou}, {name}!
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
          {t.giftMsg(amount!, name)}<br />
          {lang === "fr" ? "Un reçu a été enregistré." : "A receipt has been noted for your records."}
        </p>
        <button
          className="btn-secondary"
          style={{ marginTop: 16, fontSize: 14 }}
          onClick={() => { setStep("amount"); setCustom(""); setSelected(10); }}
        >
          {t.giveAgain}
        </button>
      </div>
    );
  }

  const containerStyle = compact ? {
    padding: "1.5rem",
    background: "var(--cream)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-lg)",
  } : {
    background: "var(--cream-dark)",
    borderTop: "1px solid var(--border)",
    borderBottom: "1px solid var(--border)",
    padding: "3.5rem 1.5rem",
  };

  return (
    <section style={containerStyle}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        {!compact && (
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <p style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700, marginBottom: 8 }}>
              {t.title}
            </p>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
              {lang === "fr" ? "Aidez-nous à équiper plus de croyants" : "Help Us Equip More Believers"}
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 15, maxWidth: 460, margin: "0 auto" }}>
              {t.subtitle}
            </p>
          </div>
        )}
        {compact && (
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", marginBottom: "1rem" }}>
            {t.title}
          </h3>
        )}

        {step === "amount" && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
              {PRESET_AMOUNTS.map((a) => (
                <button
                  key={a}
                  className={`donation-amount-btn ${selected === a && !custom ? "active" : ""}`}
                  onClick={() => { setSelected(a); setCustom(""); }}
                >
                  ${a}
                </button>
              ))}
            </div>
            <div style={{ position: "relative", marginBottom: "1rem" }}>
              <span style={{
                position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
                color: "var(--text-muted)", fontSize: 16, pointerEvents: "none",
              }}>$</span>
              <input
                type="number"
                placeholder={t.custom}
                value={custom}
                onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                className="form-input"
                style={{ paddingLeft: 28 }}
                min="1"
              />
            </div>
            {amount && amount > 0 && (
              <button
                className="btn-primary"
                style={{ width: "100%", fontSize: 16, padding: "14px" }}
                onClick={() => setStep("info")}
              >
                {t.donate(amount)}
              </button>
            )}
            {error && <p className="form-error" style={{ marginTop: 8 }}>{error}</p>}
          </>
        )}

        {step === "info" && (
          <>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 16 }}>
              {t.confirming(amount!)}
            </p>
            <div className="form-group">
              <label className="form-label">{t.fullName}</label>
              <input
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.namePlaceholder}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
              />
            </div>
            {error && <p className="form-error" style={{ marginBottom: 12 }}>{error}</p>}
            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn-secondary" onClick={() => setStep("amount")} style={{ flex: 1 }}>
                {t.back}
              </button>
              <button className="btn-primary" onClick={handleDonate} disabled={loading} style={{ flex: 2 }}>
                {loading ? t.processing : t.confirm(amount!)}
              </button>
            </div>
            <p style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center", marginTop: 12 }}>
              {t.secure}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
