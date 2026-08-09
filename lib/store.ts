// File-based store using Vercel KV-compatible localStorage approach
// For production, replace with Vercel KV or PlanetScale

import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "asf-academy-secret-2024";

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

export interface CourseProgress {
  courseId: string;
  startedAt: string;
  completedAt?: string;
  completedChapters: string[];
  quizScores: Record<string, number>;
  timeSpent: number; // seconds
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

// In-memory store for serverless (resets per cold start)
// For production: use Vercel KV, PlanetScale, or Supabase
const USERS_KEY = "asf_users";

function getUsers(): User[] {
  if (typeof global !== "undefined" && (global as any).__asfUsers) {
    return (global as any).__asfUsers;
  }
  // Seed admin user on first load
  const admin: User = {
    id: "admin-001",
    email: "admin@asfacademy.com",
    password: bcrypt.hashSync("Admin2024!", 10),
    name: "Administrator",
    role: "admin",
    createdAt: new Date().toISOString(),
    progress: {},
    donations: [],
  };
  const users = [admin];
  if (typeof global !== "undefined") {
    (global as any).__asfUsers = users;
  }
  return users;
}

function saveUsers(users: User[]) {
  if (typeof global !== "undefined") {
    (global as any).__asfUsers = users;
  }
}

export const UserStore = {
  findByEmail(email: string): User | undefined {
    return getUsers().find((u) => u.email.toLowerCase() === email.toLowerCase());
  },

  findById(id: string): User | undefined {
    return getUsers().find((u) => u.id === id);
  },

  create(data: { email: string; password: string; name: string }): User {
    const users = getUsers();
    const existing = users.find(
      (u) => u.email.toLowerCase() === data.email.toLowerCase()
    );
    if (existing) throw new Error("Email already registered");

    const user: User = {
      id: uuidv4(),
      email: data.email.toLowerCase(),
      password: bcrypt.hashSync(data.password, 10),
      name: data.name,
      role: "student",
      createdAt: new Date().toISOString(),
      progress: {},
      donations: [],
    };
    users.push(user);
    saveUsers(users);
    return user;
  },

  updateProgress(
    userId: string,
    courseId: string,
    update: Partial<CourseProgress>
  ): void {
    const users = getUsers();
    const user = users.find((u) => u.id === userId);
    if (!user) return;
    if (!user.progress[courseId]) {
      user.progress[courseId] = {
        courseId,
        startedAt: new Date().toISOString(),
        completedChapters: [],
        quizScores: {},
        timeSpent: 0,
        lastAccessed: new Date().toISOString(),
      };
    }
    user.progress[courseId] = {
      ...user.progress[courseId],
      ...update,
      lastAccessed: new Date().toISOString(),
    };
    saveUsers(users);
  },

  addDonation(userId: string, donation: Omit<Donation, "id" | "date">): void {
    const users = getUsers();
    const user = users.find((u) => u.id === userId);
    if (!user) return;
    user.donations.push({
      ...donation,
      id: uuidv4(),
      date: new Date().toISOString(),
    });
    saveUsers(users);
  },

  getAll(): Omit<User, "password">[] {
    return getUsers().map(({ password, ...u }) => u);
  },

  getStats() {
    const users = getUsers();
    const students = users.filter((u) => u.role === "student");
    const totalDonations = users.reduce(
      (sum, u) => sum + u.donations.reduce((s, d) => s + d.amount, 0),
      0
    );
    const courseEnrollments: Record<string, number> = {};
    const courseCompletions: Record<string, number> = {};
    students.forEach((u) => {
      Object.entries(u.progress).forEach(([cid, p]) => {
        courseEnrollments[cid] = (courseEnrollments[cid] || 0) + 1;
        if (p.completedAt) {
          courseCompletions[cid] = (courseCompletions[cid] || 0) + 1;
        }
      });
    });
    return {
      totalStudents: students.length,
      totalDonations,
      courseEnrollments,
      courseCompletions,
    };
  },
};

export const Auth = {
  login(email: string, password: string): string {
    const user = UserStore.findByEmail(email);
    if (!user) throw new Error("Invalid credentials");
    if (!bcrypt.compareSync(password, user.password))
      throw new Error("Invalid credentials");
    return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: "7d",
    });
  },

  verify(token: string): { id: string; role: string } | null {
    try {
      return jwt.verify(token, JWT_SECRET) as { id: string; role: string };
    } catch {
      return null;
    }
  },
};
