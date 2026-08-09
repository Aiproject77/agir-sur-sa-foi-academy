import type { NextApiRequest, NextApiResponse } from "next";
import { requireAuth } from "../../../lib/auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireAuth(req, res);
  if (!user) return;
  // requireAuth already handled 401
  res.status(200).json({ user });
}
