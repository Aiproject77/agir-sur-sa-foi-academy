import { useState } from "react";

const PRESET_AMOUNTS = [5, 10, 15];

export default function DonationWidget({ user, compact }: { user?: any; compact?: boolean }) {
  const [selected, setSelected] = useState<number | null>(10);
  const [custom, setCustom] = useState("");
  const [step, setStep] = useState<"amount" | "info" | "done">("amount");
  const [email, setEmail] = useState(user?.email || "");
  const [name, setName] = useState(user?.name || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const amount = custom ? parseFloat(custom) : selected;

  async function handleDonate() {
    if (!amount || amount < 1) { setError("Please enter a valid amount."); return; }
    if (!email || !name) { setError("Please fill in your name and email."); return; }
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
        background: compact ? "transparent" : "var(--gold-light)",
        border: compact ? "none" : "1px solid #e0c87a",
        borderRadius: "var(--radius-lg)",
        padding: compact ? "1.5rem 0" : "2.5rem",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>🙏</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", marginBottom: 8 }}>
          Thank You, {name}!
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
          Your gift of <strong>${amount?.toFixed(2)} USD</strong> helps equip believers worldwide.<br />
          A receipt has been noted for your records.
        </p>
        <button
          className="btn-secondary"
          style={{ marginTop: 16, fontSize: 14 }}
          onClick={() => { setStep("amount"); setCustom(""); setSelected(10); }}
        >
          Give Again
        </button>
      </div>
    );
  }

  const containerStyle = compact ? {
    padding: "1.5rem",
    background: "#fffbf0",
    border: "1px solid #f0e0a0",
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
            <p style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: 8 }}>
              Support This Ministry
            </p>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
              Help Us Equip More Believers
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 15, maxWidth: 460, margin: "0 auto" }}>
              All courses are offered free. Your generosity makes this possible and helps us reach more people with God's Word.
            </p>
          </div>
        )}
        {compact && (
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", marginBottom: "1rem" }}>
            Support This Ministry
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
                placeholder="Custom amount"
                value={custom}
                onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                className="form-input"
                style={{ paddingLeft: 28, textAlign: "left" }}
                min="1"
              />
            </div>
            {amount && amount > 0 && (
              <button
                className="btn-gold"
                style={{ width: "100%", fontSize: 16, padding: "14px" }}
                onClick={() => setStep("info")}
              >
                Donate ${amount.toFixed(2)} USD →
              </button>
            )}
            {error && <p className="form-error" style={{ marginTop: 8 }}>{error}</p>}
          </>
        )}

        {step === "info" && (
          <>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 16 }}>
              Donating <strong>${amount?.toFixed(2)} USD</strong> — please confirm your details:
            </p>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
              />
            </div>
            {error && <p className="form-error" style={{ marginBottom: 12 }}>{error}</p>}
            <div style={{ display: "flex", gap: 10 }}>
              <button
                className="btn-secondary"
                onClick={() => setStep("amount")}
                style={{ flex: 1 }}
              >
                Back
              </button>
              <button
                className="btn-gold"
                onClick={handleDonate}
                disabled={loading}
                style={{ flex: 2 }}
              >
                {loading ? "Processing..." : `Confirm $${amount?.toFixed(2)} USD`}
              </button>
            </div>
            <p style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center", marginTop: 12 }}>
              Secure · All gifts support free biblical education
            </p>
          </>
        )}
      </div>
    </section>
  );
}
