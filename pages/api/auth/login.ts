import type { NextApiRequest, NextApiResponse } from "next";
import { Auth, UserStore } from "../../../lib/store";
import { setAuthCookie } from "../../../lib/auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });
  try {
    const token = Auth.login(email, password);
    const user = UserStore.findByEmail(email)!;
    setAuthCookie(res, token);
    res.status(200).json({ ok: true, role: user.role });
  } catch (e: any) {
    res.status(401).json({ error: e.message });
  }
}
