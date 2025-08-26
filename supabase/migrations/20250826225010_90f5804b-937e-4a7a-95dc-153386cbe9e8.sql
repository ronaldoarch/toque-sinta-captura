-- Create storage bucket for ebooks
INSERT INTO storage.buckets (id, name, public)
VALUES ('ebooks', 'ebooks', true);

-- Create RLS policies for the ebooks bucket
CREATE POLICY "Allow public access to ebooks"
ON storage.objects
FOR SELECT
USING (bucket_id = 'ebooks');

CREATE POLICY "Allow authenticated users to upload ebooks"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'ebooks' AND auth.role() = 'authenticated');