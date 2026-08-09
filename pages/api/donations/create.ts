import type { NextApiRequest, NextApiResponse } from "next";
import { UserStore } from "../../../lib/store";
import { getTokenFromRequest } from "../../../lib/auth";
import { Auth } from "../../../lib/store";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();
  const { amount, currency, email, name } = req.body;
  if (!amount || amount < 1) return res.status(400).json({ error: "Invalid amount" });

  // Try to attach to logged-in user
  let userId: string | null = null;
  try {
    const token = getTokenFromRequest(req);
    if (token) {
      const payload = Auth.verify(token);
      if (payload) userId = payload.id;
    }
  } catch {}

  if (userId) {
    UserStore.addDonation(userId, { amount, currency: currency || "USD", method: "card" });
  }

  // In production: integrate with Stripe or PayPal here
  res.status(200).json({ ok: true, amount, currency: currency || "USD" });
}
