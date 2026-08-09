import type { NextApiRequest, NextApiResponse } from "next";
import { requireAdmin } from "../../../lib/auth";
import { UserStore } from "../../../lib/store";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const admin = await requireAdmin(req, res);
  if (!admin) return;
  const all = await UserStore.getAll();
  const students = all.filter((u) => u.role === "student");
  res.status(200).json({ students });
}
