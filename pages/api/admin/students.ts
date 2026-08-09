import type { NextApiRequest, NextApiResponse } from "next";
import { requireAdmin } from "../../../lib/auth";
import { UserStore } from "../../../lib/store";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const admin = requireAdmin(req, res);
  if (!admin) return;
  const students = UserStore.getAll().filter((u) => u.role === "student");
  res.status(200).json({ students });
}
