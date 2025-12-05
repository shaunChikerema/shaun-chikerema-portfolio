"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const ANIMATION_DURATION = 0.6;
const STAGGER = 0.08;

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [imgSrc, setImgSrc] = useState('/images/shaun-profile-optimized.jpg');

  useEffect(() => {
    const img = new Image();
    img.src = '/images/shaun-profile-optimized.jpg';
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImgSrc('/shaun-profile-optimized.jpg');
  }, []);

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
      {/* Subtle Grid Pattern Only */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Content */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <motion.div
                {...getAnimationProps(0)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-zinc-200 text-xs sm:text-sm font-medium mb-6 sm:mb-8 hover:bg-white/10 transition-colors"
              >
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="whitespace-nowrap">Open to remote opportunities</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                {...getAnimationProps(STAGGER)}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight text-white"
                itemProp="name"
              >
                Shaun Chikerema
              </motion.h1>
              
              {/* Title */}
              <motion.p
                {...getAnimationProps(STAGGER * 2)}
                className="text-lg sm:text-xl lg:text-2xl text-zinc-200 font-medium mb-6 sm:mb-8"
                itemProp="jobTitle"
              >
                Software Engineer
              </motion.p>

              {/* Hook - PROFESSIONAL & CLEAN */}
              <motion.p
                {...getAnimationProps(STAGGER * 3)}
                className="text-base sm:text-lg text-zinc-200 mb-6 sm:mb-8 max-w-xl leading-relaxed"
                itemProp="description"
              >
                Software engineer specializing in full-stack web applications.{' '}
                <span className="text-white font-medium">Two live production platforms.</span>
              </motion.p>

              {/* Tech Stack */}
              <motion.div
                {...getAnimationProps(STAGGER * 3.5)}
                className="flex flex-wrap gap-2 mb-8 sm:mb-10 max-w-xl"
              >
                {['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Node.js'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 text-xs sm:text-sm bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-200 font-medium hover:bg-cyan-500/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
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
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
                
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

              {/* Social links */}
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
                    className="relative group p-3 bg-white/5 backdrop-blur-sm border border-white/10 text-zinc-300 rounded-lg hover:text-white hover:border-white/20 transition-all duration-200"
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

            {/* Image Section */}
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
                {/* Subtle glow on hover only */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
                  {!imageLoaded ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 flex items-center justify-center">
                      <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
                    </div>
                  ) : null}
                  
                  <img 
                    src={imgSrc}
                    alt="Shaun Chikerema, Full Stack Engineer based in Gaborone, Botswana"
                    width={600}
                    height={600}
                    loading="eager"
                    decoding="async"
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => {
                      setImgSrc('https://placehold.co/600x600/0ea5e9/ffffff?text=SC&font=arial');
                      setImageLoaded(true);
                    }}
                    itemProp="image"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}