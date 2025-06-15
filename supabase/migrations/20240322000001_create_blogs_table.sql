CREATE TABLE IF NOT EXISTS blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  image TEXT,
  excerpt TEXT,
  content TEXT,
  slug TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO blogs (title, category, image, excerpt, content, slug) VALUES
('How can we sing about love?', 'Journey', 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80', 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.', 'Full content of the blog post about love and music...', 'how-can-we-sing-about-love'),
('The king is made of paper', 'Lifestyle', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80', 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.', 'Full content of the blog post about paper kings...', 'the-king-is-made-of-paper'),
('Oh, I guess they have the blues', 'Lifestyle', 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&q=80', 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.', 'Full content of the blog post about blues...', 'oh-i-guess-they-have-the-blues'),
('The art of minimalism', 'Design', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80', 'Exploring the principles of minimalist design and how it can improve user experience and visual clarity.', 'Full content of the blog post about minimalism...', 'the-art-of-minimalism'),
('Building scalable web applications', 'Development', 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80', 'A comprehensive guide to building web applications that can handle growth and maintain performance.', 'Full content of the blog post about scalable applications...', 'building-scalable-web-applications');

alter publication supabase_realtime add table blogs;