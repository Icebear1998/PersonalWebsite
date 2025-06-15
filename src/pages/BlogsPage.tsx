import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import Sidebar from "@/components/Sidebar";
import { supabase, BlogPost } from "@/lib/supabase";

const BlogsPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      setBlogPosts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 30) {
      return `${diffDays} days ago`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} year${years > 1 ? "s" : ""} ago`;
    }
  };

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
            {/* Loading state */}
            {loading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading blog posts...</p>
              </div>
            )}

            {/* Error state */}
            {error && (
              <div className="text-center py-12">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <p className="text-red-600">
                    Error loading blog posts: {error}
                  </p>
                  <button
                    onClick={fetchBlogPosts}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}

            {/* Blog posts section */}
            {!loading && !error && (
              <div className="space-y-12">
                {blogPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No blog posts found.</p>
                  </div>
                ) : (
                  blogPosts.map((post) => (
                    <article key={post.id} className="group">
                      <div className="mb-3">
                        <span className="text-sm text-gray-500">
                          {formatDate(post.date || post.created_at || "")} in{" "}
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                        <Link
                          to={`/blog/${post.slug || post.id}`}
                          className="hover:underline"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <Link
                        to={`/blog/${post.slug || post.id}`}
                        className="block mb-4"
                      >
                        <div className="relative overflow-hidden rounded-lg aspect-video">
                          <img
                            src={
                              post.image ||
                              "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80"
                            }
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
                        to={`/blog/${post.slug || post.id}`}
                        className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        Read more →
                      </Link>
                    </article>
                  ))
                )}
              </div>
            )}

            {/* Pagination placeholder */}
            {!loading && !error && blogPosts.length > 0 && (
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
            )}
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
