import type { NextApiRequest, NextApiResponse } from "next";
import { requireAuth } from "../../../lib/auth";
import { MessageStore } from "../../../lib/messages";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = await requireAuth(req, res);
  if (!user) return;

  if (req.method === "POST") {
    const { courseTitle, chapterTitle, subject, body } = req.body;
    if (!body?.trim()) return res.status(400).json({ error: "Message requis" });

    const msg = await MessageStore.create({
      student_id: user.id,
      student_name: user.name,
      student_email: user.email,
      course_title: courseTitle || "",
      chapter_title: chapterTitle || "",
      subject: subject || "Question",
      body: body.trim(),
    });
    return res.status(201).json({ ok: true, message: msg });
  }

  if (req.method === "GET") {
    const messages = await MessageStore.getForStudent(user.id);
    return res.status(200).json({ messages });
  }

  res.status(405).end();
}
