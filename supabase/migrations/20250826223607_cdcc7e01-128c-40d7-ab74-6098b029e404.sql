-- Create leads table to store user data for ebook download
CREATE TABLE public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  ebook_sent BOOLEAN DEFAULT FALSE,
  UNIQUE(email)
);

-- Enable RLS on leads table
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (for the lead capture form)
CREATE POLICY "Anyone can create leads" ON public.leads
  FOR INSERT 
  WITH CHECK (true);

-- Allow admins to view all leads (you can modify this based on your needs)
CREATE POLICY "Allow read access to leads" ON public.leads
  FOR SELECT
  USING (true);