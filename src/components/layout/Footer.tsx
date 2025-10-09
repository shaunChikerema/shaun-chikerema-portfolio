//src/components/layout/Footer.tsx
'use client';
import { Github, Linkedin, Mail, ArrowUp, Building2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/shaunChikerema",
      label: "GitHub",
    },
    {
      icon: Linkedin, 
      href: "https://linkedin.com/in/shaunchikerema",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: `mailto:${PERSONAL_INFO.email}?subject=Project Inquiry - ${PERSONAL_INFO.name}`,
      label: "Email",
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand & Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{PERSONAL_INFO.name}</h3>
                  <p className="text-gray-600 text-sm">Founder & Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md text-sm">
                Building the BITROOT technology ecosystem to solve real problems in Botswana's digital landscape. 
                Founder-led development with production expertise.
              </p>
              
              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'React Native'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Navigation</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Connect</h4>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-4 h-4" />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-600 text-xs font-medium mb-1">Based in</p>
                <p className="text-gray-900 text-sm font-semibold">Gaborone, Botswana</p>
                <p className="text-gray-500 text-xs">Available for local & remote projects</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-600 text-sm">
                © {currentYear} {PERSONAL_INFO.name}. Building Botswana's digital future.
              </p>
            </div>

            {/* Built With */}
            <div className="flex items-center space-x-4">
              <p className="text-gray-500 text-sm">
                Built with
              </p>
              <div className="flex items-center space-x-2">
                <div className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-200">
                  Next.js
                </div>
                <div className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-200">
                  TypeScript
                </div>
                <div className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-200">
                  Tailwind
                </div>
              </div>
            </div>

            {/* Back to Top */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* BITROOT Ecosystem Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 pt-6 border-t border-gray-200 text-center"
        >
          <p className="text-gray-500 text-xs">
            Part of the <span className="font-semibold text-gray-700">BITROOT</span> technology ecosystem — 
            architecting scalable solutions for Botswana and beyond.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}