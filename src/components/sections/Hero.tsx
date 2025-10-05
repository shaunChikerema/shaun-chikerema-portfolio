//src/components/sections/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = `${PERSONAL_INFO.name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-primary-400/20 to-blue-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-gradient-to-l from-indigo-400/15 to-purple-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-200 text-primary-700 text-sm font-medium mb-8 shadow-lg"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Available for new projects
            </motion.div>

            {/* Name with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight"
            >
              {PERSONAL_INFO.name}
            </motion.h1>
            
            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 max-w-2xl leading-relaxed"
            >
              {PERSONAL_INFO.title}
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-gray-500 mb-8 max-w-2xl leading-relaxed"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* CTA Buttons - Improved Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button 
                onClick={scrollToProjects}
                className="group relative bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={downloadResume}
                className="group relative bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Social Links - Enhanced */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start space-x-4 mb-12"
            >
              {[
                { icon: Github, href: "https://github.com/shaunChikerema", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/shaunchikerema", label: "LinkedIn" },
                { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group p-3 bg-white/80 backdrop-blur-sm text-gray-600 hover:text-primary-600 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-primary-200 transform hover:-translate-y-1"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element (Placeholder for future image/avatar) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Abstract Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-400/20 via-transparent to-blue-400/20 rounded-3xl -rotate-6"></div>
              
              {/* Center Content */}
              <div className="absolute inset-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white text-2xl font-bold">SC</span>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">Full-Stack & Mobile Developer</p>
                  <p className="text-gray-400 text-xs mt-2">React • Next.js • React Native</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-400 hover:text-primary-500 transition-colors duration-300 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2 font-medium">Scroll to explore</span>
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}