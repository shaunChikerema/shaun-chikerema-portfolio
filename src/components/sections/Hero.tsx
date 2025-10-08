//src/components/sections/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';
import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = '/shaun-chikerema-resume.pdf';
    link.download = 'Shaun_Chikerema_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => setIsDownloading(false), 1500);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden pt-20 lg:pt-24">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-green-200 text-green-700 text-sm font-medium mb-8 mt-8 lg:mt-0"
            >
              <div className="relative mr-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping absolute"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full relative"></div>
              </div>
              Available for new projects
            </motion.div>

            {/* Name with Professional Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent mb-6 leading-tight"
            >
              {PERSONAL_INFO.name}
            </motion.h1>
            
            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 max-w-2xl leading-relaxed"
            >
              Software Engineer & Founder
            </motion.p>

            {/* Tech Stack Micro Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6 justify-center lg:justify-start"
            >
              <span className="font-medium">React/Next.js</span>
              <span>•</span>
              <span className="font-medium">TypeScript</span>
              <span>•</span>
              <span className="font-medium">Node.js</span>
              <span>•</span>
              <span className="font-medium">PostgreSQL</span>
            </motion.div>

            {/* Bio - UPDATED */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed"
            >
              Software Engineer & Founder building BITROOT technology ecosystem. Architecting scalable production applications including Keyat (Botswana's first real estate platform) and PolicyBridge (insurance SaaS). Strong foundation in system design and full-stack development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button 
                onClick={scrollToProjects}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <span className="relative z-10">See My Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              
              <motion.button 
                onClick={downloadResume}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isDownloading}
                className="group relative bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className={`w-5 h-5 ${isDownloading ? 'animate-spin' : ''}`} />
                <span>{isDownloading ? 'Downloading...' : 'Download Resume'}</span>
              </motion.button>
            </motion.div>

            {/* Social Links - UPDATED */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center lg:justify-start space-x-4 mb-12"
            >
              {[
                { icon: Github, href: "https://github.com/shaunChikerema", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/shaunchikerema", label: "LinkedIn" },
                { icon: ExternalLink, href: "https://shaunchikerema.vercel.app", label: "Portfolio" },
                { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" }
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="group p-3 bg-white/80 backdrop-blur-sm text-gray-600 hover:text-primary-600 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-primary-200"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - PROFESSIONAL PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
              {/* MAIN HEADSHOT - UPDATED BORDER */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl border-2 border-white overflow-hidden">
                <Image 
                  src="/images/shaun-profile.png" 
                  alt="Shaun Chikerema - Software Engineer & Founder"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
              
              {/* LOCATION BADGE - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-3 rounded-xl font-semibold shadow-lg border-2 border-white">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Gaborone, Botswana</span>
                </div>
              </div>

              {/* STATUS BADGE - Top Left - UPDATED COLOR */}
              <div className="absolute -top-4 -left-4 bg-primary-600 text-white px-3 py-2 rounded-lg font-medium text-sm shadow-lg border-2 border-white">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>Available</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}