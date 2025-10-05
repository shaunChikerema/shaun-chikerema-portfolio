//src/components/layout/Footer.tsx
'use client';
import { Github, Linkedin, Mail, Heart, ArrowUp, Code } from 'lucide-react';
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
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/shaunchikerema", 
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      href: `mailto:${PERSONAL_INFO.email}`,
      label: "Email",
      color: "hover:text-red-400"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">SC</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-gray-400 text-sm">{PERSONAL_INFO.title}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Full-stack developer passionate about creating exceptional digital experiences. 
                Let's build something amazing together.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4 text-lg">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item}
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
              <h4 className="font-semibold text-white mb-4 text-lg">Let's Connect</h4>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ x: 5 }}
                    className={`flex items-center space-x-3 text-gray-400 ${social.color} transition-all duration-300 group text-sm`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-4 h-4" />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
              </p>
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 flex items-center text-sm"
              >
                Crafted with <Heart className="w-4 h-4 text-red-500 mx-1" /> using
              </motion.p>
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-lg">
                <Code className="w-3 h-3 text-primary-400" />
                <span className="text-gray-300 text-xs">Next.js</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-lg">
                <Code className="w-3 h-3 text-cyan-400" />
                <span className="text-gray-300 text-xs">Tailwind</span>
              </div>
            </div>

            {/* Back to Top */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-primary-500 rounded-full opacity-50"></div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-30"></div>
      <div className="absolute top-40 left-1/4 w-1 h-1 bg-primary-400 rounded-full opacity-40"></div>
    </footer>
  );
}