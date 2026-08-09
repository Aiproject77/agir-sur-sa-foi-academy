import type { NextApiRequest, NextApiResponse } from "next";
import { UserStore, Auth } from "../../../lib/store";
import { setAuthCookie } from "../../../lib/auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();
  const { email, password, name } = req.body;
  if (!email || !password || !name) return res.status(400).json({ error: "All fields required" });
  if (password.length < 8) return res.status(400).json({ error: "Password must be at least 8 characters" });
  try {
    const user = UserStore.create({ email, password, name });
    const token = Auth.login(email, password);
    setAuthCookie(res, token);
    res.status(201).json({ ok: true, id: user.id });
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
}
