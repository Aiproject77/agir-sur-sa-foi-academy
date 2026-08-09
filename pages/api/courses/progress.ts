import type { NextApiRequest, NextApiResponse } from "next";
import { requireAuth } from "../../../lib/auth";
import { UserStore } from "../../../lib/store";
import { getCourseById } from "../../../lib/courses";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();
  const user = await requireAuth(req, res);
  if (!user) return;

  const { courseId, chapterId, timeSpent, completedAt } = req.body;
  if (!courseId || !chapterId) return res.status(400).json({ error: "courseId and chapterId required" });

  const course = getCourseById(courseId);
  if (!course) return res.status(404).json({ error: "Course not found" });

  const existingProgress = (user as any).progress?.[courseId] || {};
  const completedChapters: string[] = existingProgress.completedChapters || [];
  if (!completedChapters.includes(chapterId)) completedChapters.push(chapterId);

  const allCompleted = course.chapters.every((c) => completedChapters.includes(c.id));

  await UserStore.updateProgress(user.id, courseId, {
    completedChapters,
    timeSpent: (existingProgress.timeSpent || 0) + (timeSpent || 0),
    completedAt: allCompleted ? completedAt || new Date().toISOString() : existingProgress.completedAt,
    startedAt: existingProgress.startedAt || new Date().toISOString(),
    currentChapterId: chapterId,
  });

  res.status(200).json({ ok: true, completedChapters, allCompleted });
}
