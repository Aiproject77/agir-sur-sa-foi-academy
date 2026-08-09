import type { NextApiRequest, NextApiResponse } from "next";
import { requireAdmin } from "../../../lib/auth";
import { UserStore } from "../../../lib/store";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const admin = requireAdmin(req, res);
  if (!admin) return;
  const stats = UserStore.getStats();
  res.status(200).json(stats);
}
