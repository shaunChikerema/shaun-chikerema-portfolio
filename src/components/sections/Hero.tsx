"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const ANIMATION_DURATION = 0.7;
const STAGGER = 0.1;

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
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = async () => {
    try {
      setIsDownloading(true);
      const response = await fetch('/shaun-chikerema-resume.pdf', { method: 'HEAD' });
      if (!response.ok) throw new Error('Not found');
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
                ))}
              </motion.div>

              {/* CTAs */}
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
                  onClick={downloadResume}
                  disabled={isDownloading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-sm font-medium font-body transition-all disabled:opacity-50"
                  style={{ background: 'transparent', color: 'var(--ink)', border: '1px solid rgba(26,23,20,0.2)' }}
                >
                  <Download className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
                  {isDownloading ? 'Downloading...' : 'Resume'}
                </motion.button>
              </motion.div>

              {/* Social links */}
              <motion.div {...fade(STAGGER * 5)} className="flex gap-3">
                {[
                  { href: 'https://github.com/shaunChikerema', icon: Github, label: 'GitHub' },
                  { href: 'https://linkedin.com/in/shaunchikerema', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'mailto:sschikerema@gmail.com', icon: Mail, label: 'Email' }
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={href}
                    href={href}
                    whileHover={{ y: -2 }}
                    className="p-2.5 rounded-sm transition-all"
                    style={{ background: 'var(--cream-dark)', color: 'var(--ink-muted)', border: '1px solid rgba(26,23,20,0.1)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

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
                      setImageLoaded(true);
                    }}
                    itemProp="image"
                  />
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

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToProjects}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5 transition-colors font-body"
          style={{ color: 'var(--ink-faint)' }}
          aria-label="Scroll to projects"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <ChevronDown className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}