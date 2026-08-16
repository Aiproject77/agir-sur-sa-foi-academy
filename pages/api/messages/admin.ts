import type { NextApiRequest, NextApiResponse } from "next";
import { requireAdmin } from "../../../lib/auth";
import { MessageStore } from "../../../lib/messages";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const admin = await requireAdmin(req, res);
  if (!admin) return;

  if (req.method === "GET") {
    const messages = await MessageStore.getAll();
    const unread = await MessageStore.getUnreadCount();
    return res.status(200).json({ messages, unread });
  }

  if (req.method === "POST") {
    const { id, reply, action } = req.body;
    if (!id) return res.status(400).json({ error: "id requis" });

    if (action === "read") {
      await MessageStore.markRead(id);
    } else if (reply) {
      await MessageStore.reply(id, reply);
    }
    return res.status(200).json({ ok: true });
  }

  res.status(405).end();
}
