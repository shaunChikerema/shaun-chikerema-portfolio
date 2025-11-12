'use client';
import { Github, Linkedin, Mail, ArrowUp, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock constant - replace with your actual import
const PERSONAL_INFO = {
  name: 'Shaun Chikerema',
  email: 'sschikerema@gmail.com'
};

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
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:64px_64px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand & Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-4 group">
                <div className="relative">
                  {/* Icon glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                  <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{PERSONAL_INFO.name}</h3>
                  <p className="text-zinc-400 text-sm">Founder & Software Engineer</p>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed max-w-md text-sm mb-4">
                Building the BITROOT technology ecosystem to solve real problems in Botswana's digital landscape. 
                Founder-led development with production expertise.
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'React Native'].map((tech) => (
                  <span 
                    key={tech}
                    className="group/tech px-3 py-1 bg-white/5 backdrop-blur-sm text-zinc-400 rounded-md text-xs font-medium border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-200 cursor-default"
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
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Navigation</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-zinc-400 hover:text-cyan-400 transition-colors duration-200 text-sm group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px bg-gradient-to-r from-cyan-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Connect</h4>
              <div className="space-y-3 mb-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors duration-200 text-sm group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="relative">
                        {/* Icon glow on hover */}
                        <div className="absolute inset-0 bg-cyan-400 rounded-md blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
                        <Icon className="w-4 h-4 relative z-10" />
                      </div>
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>

              {/* Location */}
              <div className="relative group/location">
                {/* Card glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/5 to-cyan-500/0 rounded-lg blur-xl opacity-0 group-hover/location:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 group-hover/location:border-white/20 transition-all">
                  <p className="text-zinc-500 text-xs font-medium mb-1">Based in</p>
                  <p className="text-white text-sm font-semibold">Gaborone, Botswana</p>
                  <p className="text-zinc-600 text-xs">Available for local & remote projects</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-zinc-400 text-sm">
                © {currentYear} {PERSONAL_INFO.name}. Building Botswana's digital future.
              </p>
            </div>

            {/* Built With */}
            <div className="flex items-center gap-4">
              <p className="text-zinc-500 text-sm">
                Built with
              </p>
              <div className="flex items-center gap-2">
                {['Next.js', 'TypeScript', 'Tailwind'].map((tech) => (
                  <div 
                    key={tech}
                    className="px-2 py-1 bg-white/5 backdrop-blur-sm text-zinc-400 rounded text-xs font-medium border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Back to Top */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* BITROOT Ecosystem Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 pt-6 border-t border-white/10 text-center"
        >
          <p className="text-zinc-500 text-xs">
            Part of the{' '}
            <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              BITROOT
            </span>{' '}
            technology ecosystem — architecting scalable solutions for Botswana and beyond.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}