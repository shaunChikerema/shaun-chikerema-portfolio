"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown } from 'lucide-react';
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
      {/* Enhanced Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Strategic Atmospheric Orbs */}
      {/* Main spotlight - behind photo area */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-cyan-500/[0.08] rounded-full blur-[160px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Secondary depth - behind text content */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/[0.06] rounded-full blur-[140px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.06, 0.09, 0.06]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Accent glow - bottom for depth */}
      <motion.div 
        className="absolute bottom-1/4 left-1/2 w-[500px] h-[500px] bg-emerald-500/[0.05] rounded-full blur-[130px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Subtle moving gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Content */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <motion.div
                {...getAnimationProps(0)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-zinc-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8 hover:bg-white/[0.06] transition-colors shadow-lg"
              >
                <motion.div 
                  className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="whitespace-nowrap">Available for remote work</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                {...getAnimationProps(STAGGER)}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 tracking-tight text-white"
                itemProp="name"
              >
                Shaun Chikerema
              </motion.h1>
              
              {/* Title */}
              <motion.p
                {...getAnimationProps(STAGGER * 2)}
                className="text-lg sm:text-xl lg:text-2xl text-zinc-400 font-medium mb-8 sm:mb-10"
                itemProp="jobTitle"
              >
                Software Engineer
              </motion.p>

              {/* Value Prop - Enhanced */}
              <motion.div
                {...getAnimationProps(STAGGER * 3)}
                className="mb-8 sm:mb-10 max-w-xl"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                  Built and shipped{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    two production
                  </span>
                  {' '}platforms
                </p>
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Real estate search + Insurance automation SaaS
                </p>
              </motion.div>

              {/* Tech Stack with enhanced hover */}
              <motion.div
                {...getAnimationProps(STAGGER * 3.5)}
                className="flex flex-wrap gap-3 mb-8 sm:mb-10 max-w-xl"
              >
                {['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Node.js'].map((tech, index) => (
                  <motion.span 
                    key={tech}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
                    }}
                    transition={{ duration: 0.2 }}
                    className="px-3 py-1.5 text-xs sm:text-sm bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-lg text-zinc-300 font-medium hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-200 cursor-default shadow-lg relative group"
                  >
                    <span className="relative z-10">{tech}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                {...getAnimationProps(STAGGER * 4)}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12"
              >
                <motion.button 
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 text-white transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <span className="relative flex items-center justify-center gap-2 text-sm sm:text-base font-bold">
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
                
                <motion.button 
                  onClick={downloadResume}
                  disabled={isDownloading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-white/[0.04] backdrop-blur-xl text-white rounded-lg font-semibold border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 text-sm sm:text-base overflow-hidden shadow-lg"
                >
                  <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Download className={`w-4 h-4 relative z-10 ${isDownloading ? 'animate-bounce' : ''}`} />
                  <span className="relative z-10">{isDownloading ? 'Downloading...' : 'Resume'}</span>
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
                    className="relative group p-3 bg-white/[0.04] backdrop-blur-xl border border-white/10 text-zinc-400 rounded-lg hover:text-white hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-200 shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <div className="absolute inset-0 bg-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
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
                {/* Enhanced glow on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-white/[0.04] backdrop-blur-xl border border-white/20 group-hover:border-cyan-500/40 shadow-2xl transition-all duration-300">
                  {!imageLoaded ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-xl flex items-center justify-center">
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
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToProjects}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors group"
          aria-label="Scroll to projects"
        >
          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}