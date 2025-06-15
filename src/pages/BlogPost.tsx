import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, MessageSquare } from "lucide-react";

interface BlogPostProps {
  post?: {
    id: string;
    title: string;
    content: string;
    category: string;
    date: string;
    readTime: string;
    author: {
      name: string;
      avatar: string;
    };
    image: string;
    comments: number;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const { id } = useParams<{ id: string }>();

  // In a real app, you would fetch the post data based on the ID
  // For now, we'll use the prop or a default post
  const blogPost = post || {
    id: id || "1",
    title: "The king is made of paper",
    content: `<p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>`,
    category: "Lifestyle",
    date: "May 24, 2025",
    readTime: "5 min read",
    author: {
      name: "Jane Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80",
    comments: 3,
  };

  // Sidebar component implementation directly in this file
  const Sidebar = () => {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-muted-foreground">
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">JOURNEY</Badge>
            <Badge variant="outline">WORK</Badge>
            <Badge variant="outline">LIFESTYLE</Badge>
            <Badge variant="outline">PHOTOGRAPHY</Badge>
            <Badge variant="outline">FOOD & DRINKS</Badge>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Popular stories</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-20 h-20 rounded-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=200&q=70"
                  alt="Popular story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">The blind man</h3>
                <p className="text-xs text-muted-foreground">
                  3 years ago in Lifestyle
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-20 h-20 rounded-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&q=70"
                  alt="Popular story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">Crying on the news</h3>
                <p className="text-xs text-muted-foreground">
                  3 years ago in Lifestyle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 md:p-8 bg-white">
      <div className="w-full lg:w-2/3">
        <div className="mb-8">
          <Badge variant="outline" className="mb-4">
            {blogPost.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {blogPost.title}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <Avatar>
              <AvatarImage
                src={blogPost.author.avatar}
                alt={blogPost.author.name}
              />
              <AvatarFallback>{blogPost.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{blogPost.author.name}</p>
              <div className="flex items-center text-sm text-muted-foreground gap-4">
                <div className="flex items-center gap-1">
                  <CalendarIcon size={14} />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{blogPost.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare size={14} />
                  <span>{blogPost.comments} comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 aspect-video w-full overflow-hidden rounded-lg">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </CardContent>
        </Card>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Comments ({blogPost.comments})
          </h3>
          <Separator className="mb-6" />

          {/* Placeholder for comments section */}
          <div className="space-y-6">
            {Array.from({ length: blogPost.comments }).map((_, i) => (
              <Card key={i} className="p-4">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                    />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">User {i + 1}</p>
                      <span className="text-xs text-muted-foreground">
                        May {20 + i}, 2025
                      </span>
                    </div>
                    <p className="mt-2 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam quis risus eget urna mollis ornare vel eu leo.
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/3">
        <Sidebar />
      </div>
    </div>
  );
};

export default BlogPost;
