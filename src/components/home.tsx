import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Main content container */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Hello, I'm milø.
                <br />
                <span className="text-gray-700">Developer & Creator.</span>
              </h1>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I've been a developer, entrepreneur, and creator for over 10
                  years, successfully building, scaling, and launching multiple
                  projects. I'm passionate about empowering people to become
                  developers and connecting them together in a global community.
                </p>

                <p>
                  After earning a degree in Computer Science, I moved to the
                  tech world and worked as a web developer. I then organized
                  global tech conferences, hosting thousands of attendees and
                  influential speakers. My work has been featured in various
                  publications and platforms.
                </p>

                <p>
                  Following that, I started multiple online ventures. Under my
                  leadership, teams have grown to serve thousands of users,
                  educating and connecting developers worldwide. During this
                  period, I've secured recognition and built lasting
                  relationships in the tech community.
                </p>

                <p>
                  Over the last few years I dove deep into modern web
                  technologies and built various applications and tools. The
                  platforms were built using technologies like React,
                  TypeScript, Node.js, and modern deployment solutions.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/blogs">
                <Button size="lg" className="w-full sm:w-auto group">
                  View My Blog
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto group"
                >
                  See My Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-6 pt-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Follow on Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">Follow on GitHub</span>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">Follow on LinkedIn</span>
              </a>
              <a
                href="mailto:hello@milo.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Send email</span>
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-100 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Bottom section with additional info */}
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                <div className="text-gray-600">Years of Experience</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  1000+
                </div>
                <div className="text-gray-600">Developers Helped</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
