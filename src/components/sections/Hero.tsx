//src/components/sections/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Professional Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium mb-8"
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></div>
            Available for new projects
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {PERSONAL_INFO.name}
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {PERSONAL_INFO.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View My Work
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-primary-300 hover:text-primary-600 transition-all duration-300">
              Download Resume
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 text-gray-400 hover:text-primary-600 transition-colors duration-300 hover:bg-white rounded-lg shadow-sm hover:shadow-md"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="text-gray-400" size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}