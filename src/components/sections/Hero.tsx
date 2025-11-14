"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Calendar } from 'lucide-react';
import { useState, useRef } from 'react';

const ANIMATION_DURATION = 0.6;
const STAGGER = 0.08;

export default function HeroHonest() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = async () => {
    try {
      setIsDownloading(true);
      const response = await fetch('/shaun-chikerema-resume.pdf', { method: 'HEAD' });
      if (!response.ok) throw new Error('Resume file not found');
      
      if (!downloadLinkRef.current) {
        const link = document.createElement('a');
        link.href = '/shaun-chikerema-resume.pdf';
        link.download = 'Shaun_Chikerema_Resume.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        downloadLinkRef.current = link;
      }
      downloadLinkRef.current.click();
      setTimeout(() => setIsDownloading(false), 1500);
    } catch (error) {
      setIsDownloading(false);
      console.error('Resume download failed:', error);
      // Optional: Add toast notification here
    }
  };

  const getAnimationProps = (delay: number) => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: prefersReducedMotion ? 0 : ANIMATION_DURATION, 
      delay: prefersReducedMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1]
    }
  });

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 bg-black"
      id="home"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Animated Gradient Background - Optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-cyan-500/20 rounded-full blur-2xl sm:blur-3xl"
          animate={prefersReducedMotion ? {} : {
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-emerald-500/15 rounded-full blur-2xl sm:blur-3xl"
          animate={prefersReducedMotion ? {} : {
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl"
          animate={prefersReducedMotion ? {} : {
            x: [0, 50, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_70%)]" />

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Content */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <motion.div
                {...getAnimationProps(0)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-zinc-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8 hover:bg-white/10 transition-colors"
              >
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="whitespace-nowrap">Available for projects</span>
              </motion.div>

              {/* Name - Mobile-first sizing */}
              <motion.h1
                {...getAnimationProps(STAGGER)}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight"
                itemProp="name"
              >
                <span className="bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
                  Shaun Chikerema
                </span>
              </motion.h1>
              
              {/* Title - Mobile-first sizing */}
              <motion.p
                {...getAnimationProps(STAGGER * 2)}
                className="text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-zinc-400 to-zinc-500 bg-clip-text text-transparent mb-6 sm:mb-8"
                itemProp="jobTitle"
              >
                Full Stack Engineer & Founder
              </motion.p>

              {/* Bio - Mobile-first sizing */}
              <motion.p
                {...getAnimationProps(STAGGER * 3)}
                className="text-base sm:text-lg text-zinc-400 mb-8 sm:mb-10 max-w-xl leading-relaxed"
                itemProp="description"
              >
                Building software that solves real problems for Botswana's real estate and insurance markets. Full-stack engineer with live products in production.
              </motion.p>

              {/* CTAs - Mobile-first: Better spacing */}
              <motion.div
                {...getAnimationProps(STAGGER * 4)}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10"
              >
                <motion.button 
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-5 sm:px-6 py-3 rounded-lg font-medium overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  
                  <span className="relative flex items-center justify-center gap-2 text-white text-sm sm:text-base">
                    <span>View projects</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
                
                <motion.a
                  href="https://cal.com/shaunchikerema"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-5 sm:px-6 py-3 bg-white/5 backdrop-blur-sm text-white rounded-lg font-medium border border-white/10 hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a call</span>
                </motion.a>
                
                <motion.button 
                  onClick={downloadResume}
                  disabled={isDownloading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-5 sm:px-6 py-3 bg-white/5 backdrop-blur-sm text-white rounded-lg font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 text-sm sm:text-base"
                >
                  <Download className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
                  <span>{isDownloading ? 'Downloading...' : 'Resume'}</span>
                </motion.button>
              </motion.div>

              {/* Social links - Mobile-first: Better touch targets */}
              <motion.div
                {...getAnimationProps(STAGGER * 5)}
                className="flex gap-3 sm:gap-4"
              >
                {[
                  { href: 'https://github.com/shaunChikerema', icon: Github, label: 'GitHub' },
                  { href: 'https://linkedin.com/in/shaunchikerema', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'mailto:sschikerema@gmail.com', icon: Mail, label: 'Email' }
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={href}
                    href={href}
                    whileHover={{ y: -2 }}
                    className="relative group p-3 bg-white/5 backdrop-blur-sm border border-white/10 text-zinc-400 rounded-lg hover:text-white hover:border-white/20 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                    <Icon className="w-5 h-5 relative z-10" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Image - Mobile-first: Smaller base size */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <motion.div 
                className="relative group"
                animate={prefersReducedMotion ? {} : {
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
                  <img 
                    src="/images/shaun-profile.png" 
                    alt="Shaun Chikerema, Full Stack Engineer and Founder of BITROOT, based in Gaborone, Botswana"
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    itemProp="image"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="absolute -bottom-4 left-4 sm:left-6 bg-white/10 backdrop-blur-md border border-white/20 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm text-white shadow-xl"
                  itemProp="address"
                >
                  Gaborone, Botswana
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}