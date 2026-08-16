-- ============================================================
-- MESSAGES — Coller dans Supabase SQL Editor
-- ============================================================

CREATE TABLE IF NOT EXISTS messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  student_name TEXT NOT NULL,
  student_email TEXT NOT NULL,
  course_title TEXT NOT NULL,
  chapter_title TEXT NOT NULL,
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  reply TEXT DEFAULT NULL,
  read_by_admin BOOLEAN DEFAULT FALSE,
  replied_at TIMESTAMPTZ DEFAULT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS messages_student_idx ON messages(student_id);
CREATE INDEX IF NOT EXISTS messages_read_idx ON messages(read_by_admin);
ALTER TABLE messages DISABLE ROW LEVEL SECURITY;
