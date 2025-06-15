import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import Sidebar from "@/components/Sidebar";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
}

const BlogsPage = () => {
  // Mock data for blog posts
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "How can we sing about love?",
      category: "Journey",
      date: "3 years ago",
      image:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      excerpt:
        "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
    },
    {
      id: "2",
      title: "The king is made of paper",
      category: "Lifestyle",
      date: "3 years ago",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
      excerpt:
        "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
    },
    {
      id: "3",
      title: "Oh, I guess they have the blues",
      category: "Lifestyle",
      date: "3 years ago",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&q=80",
      excerpt:
        "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
    },
    {
      id: "4",
      title: "The art of minimalism",
      category: "Design",
      date: "2 years ago",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      excerpt:
        "Exploring the principles of minimalist design and how it can improve user experience and visual clarity.",
    },
    {
      id: "5",
      title: "Building scalable web applications",
      category: "Development",
      date: "1 year ago",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
      excerpt:
        "A comprehensive guide to building web applications that can handle growth and maintain performance.",
    },
  ];

  // Mock data for popular stories
  const popularStories = [
    {
      title: "The blind man",
      slug: "the-blind-man",
      image:
        "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=800&q=80",
      date: "3 years ago",
      category: "Lifestyle",
    },
    {
      title: "Crying on the news",
      slug: "crying-on-the-news",
      image:
        "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80",
      date: "3 years ago",
      category: "Lifestyle",
    },
  ];

  // Mock data for tags
  const tags = [
    { name: "JOURNEY", slug: "journey" },
    { name: "WORK", slug: "work" },
    { name: "LIFESTYLE", slug: "lifestyle" },
    { name: "PHOTOGRAPHY", slug: "photography" },
    { name: "FOOD & DRINKS", slug: "food-drinks" },
    { name: "DESIGN", slug: "design" },
    { name: "DEVELOPMENT", slug: "development" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thoughts, stories, and insights about development, design, and
              entrepreneurship.
            </p>
          </div>
        </div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main content area */}
          <div className="lg:w-2/3">
            {/* Blog posts section */}
            <div className="space-y-12">
              {blogPosts.map((post) => (
                <article key={post.id} className="group">
                  <div className="mb-3">
                    <span className="text-sm text-gray-500">
                      {post.date} in {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <Link to={`/blog/${post.id}`} className="block mb-4">
                    <div className="relative overflow-hidden rounded-lg aspect-video">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                    </div>
                  </Link>
                  <p className="text-gray-700 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination placeholder */}
            <div className="mt-16 text-center">
              <div className="inline-flex space-x-2">
                <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                  1
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <Sidebar
              aboutText="Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
              tags={tags}
              popularStories={popularStories}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
