import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectsPage = () => {
  // Mock data for projects
  const projects: Project[] = [
    {
      id: "1",
      title: "Digital Experience Design Platform",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
      description:
        "A comprehensive design system and platform for creating consistent digital experiences across multiple touchpoints.",
      technologies: ["React", "TypeScript", "Figma API", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project1",
    },
    {
      id: "2",
      title: "Mobile App Development Framework",
      category: "Development",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      description:
        "A cross-platform mobile development framework that simplifies the process of building native mobile applications.",
      technologies: ["React Native", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project2",
    },
    {
      id: "3",
      title: "AI-Powered Content Management",
      category: "AI/ML",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      description:
        "An intelligent content management system that uses AI to optimize content creation, curation, and distribution.",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      githubUrl: "https://github.com/example/project3",
    },
    {
      id: "4",
      title: "E-commerce Analytics Dashboard",
      category: "Analytics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      description:
        "A comprehensive analytics dashboard for e-commerce businesses to track performance, customer behavior, and sales metrics.",
      technologies: ["Vue.js", "D3.js", "Python", "Redis"],
      liveUrl: "https://example.com",
    },
    {
      id: "5",
      title: "Developer Community Platform",
      category: "Community",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      description:
        "A platform connecting developers worldwide, featuring forums, code sharing, mentorship programs, and collaborative projects.",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "WebRTC"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project5",
    },
    {
      id: "6",
      title: "Blockchain Voting System",
      category: "Blockchain",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
      description:
        "A secure, transparent voting system built on blockchain technology to ensure election integrity and voter privacy.",
      technologies: ["Solidity", "Web3.js", "React", "IPFS"],
      githubUrl: "https://github.com/example/project6",
    },
  ];

  const categories = [
    "All",
    "Design",
    "Development",
    "AI/ML",
    "Analytics",
    "Community",
    "Blockchain",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of projects I've built, ranging from web applications
              to mobile apps and everything in between.
            </p>
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                  category === "All"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">View live project</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">View source code</span>
                      </a>
                    )}
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in working together?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
