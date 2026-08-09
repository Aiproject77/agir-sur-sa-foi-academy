import type { NextApiRequest, NextApiResponse } from "next";
import { Auth, UserStore } from "./store";
import cookie from "cookie";

export function getTokenFromRequest(req: NextApiRequest): string | null {
  const cookies = cookie.parse(req.headers.cookie || "");
  return cookies.token || null;
}

export async function requireAuth(req: NextApiRequest, res: NextApiResponse) {
  const token = getTokenFromRequest(req);
  if (!token) {
    res.status(401).json({ error: "Not authenticated" });
    return null;
  }
  const payload = Auth.verify(token);
  if (!payload) {
    res.status(401).json({ error: "Invalid token" });
    return null;
  }
  const user = await UserStore.findById(payload.id);
  if (!user) {
    res.status(401).json({ error: "User not found" });
    return null;
  }
  const { password, ...safeUser } = user;
  return safeUser;
}

export async function requireAdmin(req: NextApiRequest, res: NextApiResponse) {
  const user = await requireAuth(req, res);
  if (!user) return null;
  if (user.role !== "admin") {
    res.status(403).json({ error: "Admin access required" });
    return null;
  }
  return user;
}

export function setAuthCookie(res: NextApiResponse, token: string) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    })
  );
}

export function clearAuthCookie(res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0,
      path: "/",
    })
  );
}
