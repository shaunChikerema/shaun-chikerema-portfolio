import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
          
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-gray-400 mt-2 max-w-md">
              Full-Stack Developer crafting digital experiences with modern technologies and clean code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            {/* Email */}
            <div className="mt-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            Based in <span className="text-primary-400 font-semibold">{PERSONAL_INFO.location}</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
            </div>

            {/* Made with love */}
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="mx-1 text-red-500 fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </div>

            {/* Availability Status */}
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}