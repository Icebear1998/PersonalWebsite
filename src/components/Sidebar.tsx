import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface SidebarProps {
  aboutText?: string;
  tags?: Array<{ name: string; slug: string }>;
  popularStories?: Array<{
    title: string;
    slug: string;
    image: string;
    date: string;
    category: string;
  }>;
}

const Sidebar = ({
  aboutText = "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
  tags = [
    { name: "JOURNEY", slug: "journey" },
    { name: "WORK", slug: "work" },
    { name: "LIFESTYLE", slug: "lifestyle" },
    { name: "PHOTOGRAPHY", slug: "photography" },
    { name: "FOOD & DRINKS", slug: "food-drinks" },
  ],
  popularStories = [
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
  ],
}: SidebarProps) => {
  return (
    <div className="w-full bg-white">
      {/* About Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-700">{aboutText}</p>
      </div>

      {/* Tags Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link to={`/tag/${tag.slug}`} key={tag.slug}>
              <Badge
                variant="outline"
                className="text-xs font-medium py-1 px-3 hover:bg-gray-100"
              >
                {tag.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Stories Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Popular stories</h2>
        <div className="space-y-4">
          {popularStories.map((story) => (
            <Link to={`/blog/${story.slug}`} key={story.slug}>
              <div className="flex flex-col">
                <h3 className="font-medium mb-2">{story.title}</h3>
                <div className="relative w-full h-40 overflow-hidden rounded-md">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  {story.date} in {story.category}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
