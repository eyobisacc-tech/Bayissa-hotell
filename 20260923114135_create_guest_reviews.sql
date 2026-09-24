/*
# Create guest_reviews table (single-tenant, no auth)

1. New Tables
- `guest_reviews`
  - `id` (uuid, primary key)
  - `guest_name` (text, not null) — name of the reviewer
  - `rating` (integer, 1–5, not null) — star rating
  - `comment` (text, not null) — review text
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `guest_reviews`.
- Allow anon + authenticated CRUD because reviews are intentionally public (no sign-in screen).
*/

CREATE TABLE IF NOT EXISTS guest_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  guest_name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE guest_reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_reviews" ON guest_reviews;
CREATE POLICY "anon_select_reviews" ON guest_reviews FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_reviews" ON guest_reviews;
CREATE POLICY "anon_insert_reviews" ON guest_reviews FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_reviews" ON guest_reviews;
CREATE POLICY "anon_delete_reviews" ON guest_reviews FOR DELETE
  TO anon, authenticated USING (true);

-- Seed a few sample reviews
INSERT INTO guest_reviews (guest_name, rating, comment) VALUES
  ('Abebe Bekele', 5, 'Excellent service and very clean rooms. The staff made me feel at home. Highly recommended!'),
  ('Sara Ahmed', 4, 'Great location in Dukem and the restaurant food was delicious. Will come back again.'),
  ('John Smith', 5, 'Best hotel in Dukem! The spa treatment was wonderful and the staff very friendly.')
ON CONFLICT DO NOTHING;
