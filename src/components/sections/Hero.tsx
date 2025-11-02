'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from 'lucide-react';
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-24 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
      
      {/* Gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium mb-6 shadow-sm"
            >
              <Sparkles className="w-3 h-3" />
              Available for new projects
            </motion.div>

            {/* Name - MASSIVE */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-950 mb-6 leading-[0.9] tracking-tight"
            >
              Shaun<br />Chikerema
            </motion.h1>
            
            {/* Title - Subtle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-600 font-light mb-8 max-w-xl"
            >
              Software Engineer & Founder
            </motion.p>

            {/* Bio - Concise */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-gray-600 mb-10 max-w-xl leading-relaxed opacity-90"
            >
              Building <span className="font-semibold text-gray-900">BITROOT</span> — production applications serving Botswana's digital economy. Keyat (real estate) and PolicyBridge (insurance SaaS) in production.
            </motion.p>

            {/* CTAs - CLEAR HIERARCHY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              {/* Primary CTA - DOMINANT */}
              <motion.button 
                onClick={scrollToProjects}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gray-950 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-gray-900 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center justify-center gap-2 active:scale-95 focus:ring-4 focus:ring-gray-300 focus:outline-none"
              >
                <span>See My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              {/* Secondary CTA - SUBTLE */}
              <motion.button 
                onClick={downloadResume}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isDownloading}
                className="group relative bg-transparent text-gray-700 px-10 py-4 rounded-2xl font-medium border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 focus:ring-4 focus:ring-gray-200 focus:outline-none"
              >
                <Download className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
                <span>{isDownloading ? 'Downloading...' : 'Resume'}</span>
              </motion.button>
            </motion.div>

            {/* Social Links - PRIORITIZED */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-3"
            >
              {/* Primary - GitHub & LinkedIn */}
              <motion.a
                href="https://github.com/shaunChikerema"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-950 text-white rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-90 focus:ring-4 focus:ring-gray-300 focus:outline-none"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/shaunchikerema"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-950 text-white rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-90 focus:ring-4 focus:ring-gray-300 focus:outline-none"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              {/* Secondary - Email */}
              <motion.a
                href="mailto:sschikerema@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-sm hover:shadow-md active:scale-90 focus:ring-4 focus:ring-gray-200 focus:outline-none"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Tech Stack - MINIMAL */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-2 text-xs mt-8 justify-center lg:justify-start opacity-60"
            >
              {['Next.js', 'TypeScript', 'PostgreSQL', 'React Native'].map((tech) => (
                <span key={tech} className="text-gray-600 font-medium">
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* PHOTO COLUMN - WITH REAL IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Photo with Next.js Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-2 border-white">
                <Image 
                  src="/images/shaun-profile.png" 
                  alt="Shaun Chikerema - Software Engineer & Founder"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              
              {/* Single Subtle Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium text-gray-700 shadow-xl border border-gray-200"
              >
                📍 Gaborone, Botswana
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}