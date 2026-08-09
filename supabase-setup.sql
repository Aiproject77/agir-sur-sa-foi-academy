-- ============================================================
-- ASF ACADEMY — SUPABASE SETUP
-- Copiez-collez tout ce fichier dans l'éditeur SQL de Supabase
-- ============================================================

-- 1. Créer la table users
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'admin')),
  progress JSONB NOT NULL DEFAULT '{}',
  donations JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Index pour la recherche par email (performance)
CREATE INDEX IF NOT EXISTS users_email_idx ON users (email);

-- 3. Désactiver RLS (Row Level Security) — on utilise la service role key côté serveur
ALTER TABLE users DISABLE ROW LEVEL SECURITY;

-- 4. Créer le compte admin par défaut
-- MOT DE PASSE : Admin2026! (bcrypt hash)
INSERT INTO users (email, password, name, role, progress, donations)
VALUES (
  'admin@asfacademy.com',
  '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
  'Administrator',
  'admin',
  '{}',
  '[]'
) ON CONFLICT (email) DO NOTHING;

-- ============================================================
-- IMPORTANT : Après avoir exécuté ce SQL, allez dans
-- Settings > API et copiez :
--   • Project URL → NEXT_PUBLIC_SUPABASE_URL
--   • service_role key (pas anon key) → SUPABASE_SERVICE_ROLE_KEY
-- Ajoutez ces 2 variables + JWT_SECRET dans Vercel
-- ============================================================
