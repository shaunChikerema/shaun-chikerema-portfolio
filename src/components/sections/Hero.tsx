//src/components/sections/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, MapPin, ExternalLink } from 'lucide-react';
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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden pt-20 lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* CONTENT COLUMN - DOMINANT (66.6%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium mb-8"
            >
              <div className="relative mr-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping absolute"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full relative"></div>
              </div>
              Available for new projects
            </motion.div>

            {/* Name - Clean Professional */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 mb-6 leading-tight"
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

            {/* Tech Stack - Clean Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 text-sm mb-6 justify-center lg:justify-start"
            >
              <span className="font-medium bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg border border-gray-200">React/Next.js</span>
              <span className="font-medium bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg border border-gray-200">TypeScript</span>
              <span className="font-medium bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg border border-gray-200">Node.js</span>
              <span className="font-medium bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg border border-gray-200">PostgreSQL</span>
            </motion.div>

            {/* Bio - Crystal Clear */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed"
            >
              Software Engineer & Founder building BITROOT technology ecosystem. Architecting scalable production applications including Keyat (Botswana's first real estate platform) and PolicyBridge (insurance SaaS). Strong foundation in system design and full-stack development.
            </motion.p>

            {/* CTA Buttons - PERFECTED CONTRAST */}
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
                className="group relative bg-gray-950 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center border border-gray-800"
              >
                <span className="relative z-10">See My Projects</span>
              </motion.button>
              
              <motion.button 
                onClick={downloadResume}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isDownloading}
                className="group relative bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className={`w-5 h-5 ${isDownloading ? 'animate-spin' : ''}`} />
                <span>{isDownloading ? 'Downloading...' : 'Download Resume'}</span>
              </motion.button>
            </motion.div>

            {/* Social Links - PERFECTED SPACING */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center lg:justify-start space-x-4"
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
                  className="group p-3 bg-white text-gray-600 hover:text-gray-900 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md border border-gray-200 hover:border-gray-300"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* PHOTO COLUMN - SUPPORTING (33.3%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 flex justify-center order-1 lg:order-2"
          >
            {/* PERFECTED PHOTO CONTAINER */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              
              {/* MAIN HEADSHOT */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
                <Image 
                  src="/images/shaun-profile.png" 
                  alt="Shaun Chikerema - Software Engineer & Founder"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
              
              {/* LOCATION BADGE - PERFECTED */}
              <div className="absolute -bottom-3 -right-3 bg-gray-900 text-white px-3 py-2 rounded-lg font-medium shadow-lg border border-gray-800 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  <span>Gaborone, Botswana</span>
                </div>
              </div>

              {/* STATUS BADGE - PERFECTED */}
              <div className="absolute -top-3 -left-3 bg-green-700 text-white px-2 py-1 rounded-lg font-medium text-xs shadow-lg border border-green-800">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
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