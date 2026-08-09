# Acting on His Word Academy

Bilingual EN/FR LMS built with Next.js 14, TypeScript, and Tailwind-free CSS.

## Deploy to Vercel (no terminal needed)

1. **Download** the ZIP from Claude
2. **Go to** [github.com](https://github.com) → New Repository → Upload files → drag all project files
3. **Go to** [vercel.com](https://vercel.com) → Add New Project → Import from GitHub
4. In Vercel settings, add Environment Variable:
   - `JWT_SECRET` = any long random string (e.g. `asf-academy-2024-xkj29mq8`)
5. Click **Deploy**

## Admin credentials (seed)

- Email: `admin@asfacademy.com`
- Password: `Admin2024!`

Change these by editing `lib/store.ts` before deploying.

## Architecture

- **Pages Router** — Next.js 14 pages directory
- **In-memory store** — users stored in global variable (resets per cold start)
  - For production with persistent data: replace `lib/store.ts` with Vercel KV or Supabase
- **JWT auth** — httpOnly cookie, 7-day expiry
- **No database** — fully serverless compatible

## Upgrading to persistent storage

Replace the `getUsers()` / `saveUsers()` functions in `lib/store.ts` with:

```typescript
// Vercel KV
import { kv } from "@vercel/kv";
const users = await kv.get<User[]>("users") || [];
await kv.set("users", users);
```

## Features

- 3 courses, 49 total chapters
- Quiz after each chapter (must score 100% to advance)
- Sequential course unlock (complete Course 1 before Course 2, etc.)
- Timer per chapter with localStorage session persistence
- Auto-scroll button
- Contact Instructor form per chapter
- Completion certificate (print/PDF)
- Donation widget — USD, $5/$10/$15 + custom
- Student dashboard with progress tracking
- Admin dashboard — student list, stats, donations
- Mobile-first, SEO-ready
- Zero emojis in codebase
