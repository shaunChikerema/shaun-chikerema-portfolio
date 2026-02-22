"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

<<<<<<< HEAD
const ANIMATION_DURATION = 0.7;
const STAGGER = 0.1;
=======
const ANIMATION_DURATION = 0.6;
const STAGGER = 0.08;
>>>>>>> 609e794bb3f352856bfbcb85a8bedaf66fcc9b8f

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
<<<<<<< HEAD
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
=======
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
>>>>>>> 609e794bb3f352856bfbcb85a8bedaf66fcc9b8f
  };

  const downloadResume = async () => {
    try {
      setIsDownloading(true);
      const response = await fetch('/shaun-chikerema-resume.pdf', { method: 'HEAD' });
<<<<<<< HEAD
      if (!response.ok) throw new Error('Not found');
=======
      if (!response.ok) throw new Error('Resume file not found');
      
>>>>>>> 609e794bb3f352856bfbcb85a8bedaf66fcc9b8f
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
<<<<<<< HEAD
    } catch {
      setIsDownloading(false);
    }
  };

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : ANIMATION_DURATION, delay: prefersReducedMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }
  });

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center pt-20 lg:pt-0"
      style={{ background: 'var(--cream)' }}
      itemScope itemType="https://schema.org/Person"
    >
      {/* Subtle radial warmth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(196,98,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(184,150,62,0.05) 0%, transparent 60%)'
        }}
      />

      {/* Fine grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(26,23,20,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,23,20,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-24 lg:py-0 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 lg:pr-16">

              {/* Status badge */}
              <motion.div {...fade(0)} className="flex items-center gap-3 mb-10">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide"
                  style={{ background: 'var(--terra-pale)', color: 'var(--terra)' }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--terra)' }} />
                  Available for remote work
                </div>
              </motion.div>

              {/* Name — editorial large */}
              <motion.h1
                {...fade(STAGGER)}
                className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-6"
                style={{ color: 'var(--ink)' }}
                itemProp="name"
              >
                Shaun<br />
                <span className="italic" style={{ color: 'var(--terra)' }}>Chikerema</span>
              </motion.h1>

              {/* Title */}
              <motion.p
                {...fade(STAGGER * 2)}
                className="text-sm font-medium tracking-widest uppercase mb-10 font-body"
                style={{ color: 'var(--ink-faint)' }}
                itemProp="jobTitle"
              >
                Software Engineer · Full-Stack Developer
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: STAGGER * 2.5 }}
                className="rule-ornate mb-10 w-24"
              />

              {/* Value prop */}
              <motion.div {...fade(STAGGER * 3)} className="mb-10 max-w-lg">
                <p className="font-display text-2xl sm:text-3xl leading-tight mb-3" style={{ color: 'var(--ink)' }}>
                  Built and shipped{' '}
                  <em style={{ color: 'var(--terra)' }}>two production</em>{' '}
                  platforms from scratch
                </p>
                <p className="font-body text-base leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                  Real estate search + insurance automation SaaS — deployed, live, serving real users.
                </p>
              </motion.div>

              {/* Tech badges */}
              <motion.div
                {...fade(STAGGER * 3.5)}
                className="flex flex-wrap gap-2 mb-10"
              >
                {['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Node.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-sm font-body"
                    style={{ background: 'var(--cream-dark)', color: 'var(--ink-muted)', border: '1px solid rgba(26,23,20,0.12)' }}
                  >
                    {tech}
                  </span>
=======
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
>>>>>>> 609e794bb3f352856bfbcb85a8bedaf66fcc9b8f
                ))}
              </motion.div>

              {/* CTAs */}
<<<<<<< HEAD
              <motion.div {...fade(STAGGER * 4)} className="flex flex-col sm:flex-row gap-3 mb-10">
                <motion.button
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-sm font-medium font-body text-white transition-all"
                  style={{ background: 'var(--ink)' }}
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
=======
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
>>>>>>> 609e794bb3f352856bfbcb85a8bedaf66fcc9b8f
                  onClick={downloadResume}
                  disabled={isDownloading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
<<<<<<< HEAD
                  className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-sm font-medium font-body transition-all disabled:opacity-50"
                  style={{ background: 'transparent', color: 'var(--ink)', border: '1px solid rgba(26,23,20,0.2)' }}
                >
                  <Download className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
                  {isDownloading ? 'Downloading...' : 'Resume'}
=======
                  className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-white/[0.04] backdrop-blur-xl text-white rounded-lg font-semibold border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 text-sm sm:text-base overflow-hidden shadow-lg"
                >
                  <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Download className={`w-4 h-4 relative z-10 ${isDownloading ? 'animate-bounce' : ''}`} />
                  <span className="relative z-10">{isDownloading ? 'Downloading...' : 'Resume'}</span>
>>>>>>> 609e794bb3f352856bfbcb85a8bedaf66fcc9b8f
                </motion.button>
              </motion.div>

              {/* Social links */}
<<<<<<< HEAD
              <motion.div {...fade(STAGGER * 5)} className="flex gap-3">
=======
              <motion.div
                {...getAnimationProps(STAGGER * 5)}
                className="flex gap-3 sm:gap-4"
              >
>>>>>>> 609e794bb3f352856bfbcb85a8bedaf66fcc9b8f
                {[
                  { href: 'https://github.com/shaunChikerema', icon: Github, label: 'GitHub' },
                  { href: 'https://linkedin.com/in/shaunchikerema', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'mailto:sschikerema@gmail.com', icon: Mail, label: 'Email' }
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={href}
                    href={href}
                    whileHover={{ y: -2 }}
<<<<<<< HEAD
                    className="p-2.5 rounded-sm transition-all"
                    style={{ background: 'var(--cream-dark)', color: 'var(--ink-muted)', border: '1px solid rgba(26,23,20,0.1)' }}
=======
                    className="relative group p-3 bg-white/[0.04] backdrop-blur-xl border border-white/10 text-zinc-400 rounded-lg hover:text-white hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-200 shadow-lg"
>>>>>>> 609e794bb3f352856bfbcb85a8bedaf66fcc9b8f
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
<<<<<<< HEAD
                    <Icon className="w-4 h-4" />
=======
                    <div className="absolute inset-0 bg-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                    <Icon className="w-5 h-5 relative z-10" />
>>>>>>> 609e794bb3f352856bfbcb85a8bedaf66fcc9b8f
                  </motion.a>
                ))}
              </motion.div>
            </div>

<<<<<<< HEAD
            {/* Right: Photo column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Offset decorative background */}
                <div
                  className="absolute -top-4 -right-4 w-full h-full rounded-sm"
                  style={{ background: 'var(--terra-pale)', zIndex: 0 }}
                />
                {/* Gold offset layer */}
                <div
                  className="absolute -bottom-4 -left-4 w-full h-full rounded-sm"
                  style={{ background: 'var(--gold-pale)', zIndex: 0 }}
                />

                <div className="relative z-10 w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[26rem] lg:w-[22rem] lg:h-[30rem] overflow-hidden rounded-sm"
                  style={{ border: '1px solid rgba(26,23,20,0.1)' }}>
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'var(--cream-dark)' }}>
                      <div className="w-8 h-8 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--terra-pale)', borderTopColor: 'var(--terra)' }} />
                    </div>
                  )}
                  <img
                    src={imgSrc}
                    alt="Shaun Chikerema, Full Stack Engineer"
                    className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => {
                      setImgSrc('https://placehold.co/600x750/EDE7D9/C4623A?text=SC&font=playfair-display');
=======
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
>>>>>>> 609e794bb3f352856bfbcb85a8bedaf66fcc9b8f
                      setImageLoaded(true);
                    }}
                    itemProp="image"
                  />
<<<<<<< HEAD
                  {/* Warm overlay tint */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(196,98,58,0.12) 100%)' }} />
                </div>

                {/* Floating location tag */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute -bottom-8 left-0 z-20 px-4 py-2 rounded-sm text-xs font-medium font-body"
                  style={{ background: 'var(--ink)', color: 'var(--cream)' }}
                >
                  Gaborone, Botswana
                </motion.div>
              </div>
            </motion.div>

=======
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </motion.div>
>>>>>>> 609e794bb3f352856bfbcb85a8bedaf66fcc9b8f
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
=======
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
>>>>>>> 609e794bb3f352856bfbcb85a8bedaf66fcc9b8f
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToProjects}
<<<<<<< HEAD
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5 transition-colors font-body"
          style={{ color: 'var(--ink-faint)' }}
          aria-label="Scroll to projects"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <ChevronDown className="w-4 h-4" />
=======
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors group"
          aria-label="Scroll to projects"
        >
          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
          <ChevronDown className="w-5 h-5" />
>>>>>>> 609e794bb3f352856bfbcb85a8bedaf66fcc9b8f
        </motion.button>
      </motion.div>
    </section>
  );
}