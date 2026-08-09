import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "asf-academy-secret-key";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

function getSupabase() {
  return createClient(supabaseUrl, supabaseKey);
}

export interface CourseProgress {
  courseId: string;
  startedAt: string;
  completedAt?: string;
  completedChapters: string[];
  quizScores: Record<string, number>;
  timeSpent: number;
  lastAccessed: string;
  currentChapterId?: string;
}

export interface Donation {
  id: string;
  amount: number;
  currency: string;
  date: string;
  method: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: "student" | "admin";
  createdAt: string;
  progress: Record<string, CourseProgress>;
  donations: Donation[];
}

export const UserStore = {
  async findByEmail(email: string): Promise<User | null> {
    const sb = getSupabase();
    const { data } = await sb
      .from("users")
      .select("*")
      .eq("email", email.toLowerCase())
      .single();
    return data || null;
  },

  async findById(id: string): Promise<User | null> {
    const sb = getSupabase();
    const { data } = await sb.from("users").select("*").eq("id", id).single();
    return data || null;
  },

  async create(input: { email: string; password: string; name: string }): Promise<User> {
    const sb = getSupabase();
    const existing = await UserStore.findByEmail(input.email);
    if (existing) throw new Error("Email already registered");

    const hashed = bcrypt.hashSync(input.password, 10);
    const { data, error } = await sb
      .from("users")
      .insert({
        email: input.email.toLowerCase(),
        password: hashed,
        name: input.name,
        role: "student",
        progress: {},
        donations: [],
      })
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  },

  async updateProgress(
    userId: string,
    courseId: string,
    update: Partial<CourseProgress>
  ): Promise<void> {
    const sb = getSupabase();
    const user = await UserStore.findById(userId);
    if (!user) return;

    const existing = user.progress[courseId] || {
      courseId,
      startedAt: new Date().toISOString(),
      completedChapters: [],
      quizScores: {},
      timeSpent: 0,
      lastAccessed: new Date().toISOString(),
    };

    const updated = {
      ...user.progress,
      [courseId]: {
        ...existing,
        ...update,
        lastAccessed: new Date().toISOString(),
      },
    };

    await sb.from("users").update({ progress: updated }).eq("id", userId);
  },

  async addDonation(
    userId: string,
    donation: Omit<Donation, "id" | "date">
  ): Promise<void> {
    const sb = getSupabase();
    const user = await UserStore.findById(userId);
    if (!user) return;

    const newDonation: Donation = {
      ...donation,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    };

    await sb
      .from("users")
      .update({ donations: [...(user.donations || []), newDonation] })
      .eq("id", userId);
  },

  async getAll(): Promise<Omit<User, "password">[]> {
    const sb = getSupabase();
    const { data } = await sb.from("users").select("id,email,name,role,createdAt:created_at,progress,donations");
    return (data || []).map((u: any) => u);
  },

  async getStats() {
    const sb = getSupabase();
    const { data: users } = await sb.from("users").select("role,progress,donations");
    const students = (users || []).filter((u: any) => u.role === "student");
    const totalDonations = (users || []).reduce(
      (sum: number, u: any) =>
        sum + (u.donations || []).reduce((s: number, d: any) => s + d.amount, 0),
      0
    );
    const courseEnrollments: Record<string, number> = {};
    const courseCompletions: Record<string, number> = {};
    students.forEach((u: any) => {
      Object.entries(u.progress || {}).forEach(([cid, p]: [string, any]) => {
        courseEnrollments[cid] = (courseEnrollments[cid] || 0) + 1;
        if (p.completedAt) courseCompletions[cid] = (courseCompletions[cid] || 0) + 1;
      });
    });
    return { totalStudents: students.length, totalDonations, courseEnrollments, courseCompletions };
  },
};

export const Auth = {
  async login(email: string, password: string): Promise<string> {
    const user = await UserStore.findByEmail(email);
    if (!user) throw new Error("Invalid credentials");
    if (!bcrypt.compareSync(password, user.password)) throw new Error("Invalid credentials");
    return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "30d" });
  },

  verify(token: string): { id: string; role: string } | null {
    try {
      return jwt.verify(token, JWT_SECRET) as { id: string; role: string };
    } catch {
      return null;
    }
  },
};
