import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children = <div>Content goes here</div> }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <header className="border-b border-gray-100 py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="flex space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-black transition-colors"
            >
              About
            </Link>
            <Link
              to="/blogs"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/projects"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Projects
            </Link>
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="text-3xl font-bold">
              milø
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search.."
                className="rounded-full border border-gray-200 py-1 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 w-36"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Content Area */}
          <div className="flex-1">{children}</div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="text-xl font-bold">
                milø
              </Link>
            </div>
            <div className="flex space-x-6">
              <Link
                to="/"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-black transition-colors"
              >
                About
              </Link>
              <Link
                to="/blogs"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/projects"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} milø. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
