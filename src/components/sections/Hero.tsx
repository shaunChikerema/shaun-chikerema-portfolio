"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

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
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.65,
      delay: prefersReducedMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1]
    }
  });

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center"
      style={{ background: 'var(--cream)' }}
      itemScope itemType="https://schema.org/Person"
    >
      {/* Subtle warm wash top-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 75% 25%, rgba(192,87,46,0.07) 0%, transparent 70%)'
        }}
      />

      <div className="container mx-auto px-6 lg:px-16 relative z-10 pt-28 pb-20 lg:pt-0 lg:pb-0 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

            {/* ── Left: Text ── */}
            <div className="lg:col-span-7 xl:col-span-7">

              {/* Availability pill */}
              <motion.div {...fade(0)} className="mb-8">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium tracking-wide rounded-sm"
                  style={{ background: 'var(--terra-pale)', color: 'var(--terra)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--terra)' }} />
                  Open to opportunities
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                {...fade(0.08)}
                className="font-display font-bold leading-none tracking-tight mb-5"
                style={{
                  color: 'var(--ink)',
                  fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                  letterSpacing: '-0.03em'
                }}
                itemProp="name"
              >
                Shaun<br />
                <span style={{ color: 'var(--terra)', fontStyle: 'italic' }}>Chikerema</span>
              </motion.h1>

              {/* Role */}
              <motion.p
                {...fade(0.16)}
                className="text-xs font-semibold tracking-[0.18em] uppercase mb-8 font-body"
                style={{ color: 'var(--ink-faint)' }}
                itemProp="jobTitle"
              >
                Full-Stack Engineer · Gaborone, Botswana
              </motion.p>

              {/* Divider line */}
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.22 }}
                className="mb-8"
                style={{ height: '1px', width: '48px', background: 'var(--terra)' }}
              />

              {/* Headline copy */}
              <motion.div {...fade(0.28)} className="mb-8 max-w-xl">
                <p
                  className="font-display leading-snug mb-3"
                  style={{
                    color: 'var(--ink)',
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  I design and build{' '}
                  <em style={{ color: 'var(--terra)' }}>full-stack products</em>{' '}
                  that go live — not just demos.
                </p>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: 'var(--ink-muted)' }}
                >
                  Two production platforms shipped independently: a real estate marketplace and an insurance automation SaaS. Both deployed on Vercel, both serving real users.
                </p>
              </motion.div>

              {/* Tech stack tags */}
              <motion.div {...fade(0.34)} className="flex flex-wrap gap-2 mb-10">
                {['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'React Native'].map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div {...fade(0.40)} className="flex flex-col sm:flex-row gap-3 mb-10">
                <button
                  onClick={scrollToProjects}
                  className="btn-primary group"
                >
                  See my work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={downloadResume}
                  disabled={isDownloading}
                  className="btn-outline disabled:opacity-50"
                >
                  <Download className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
                  {isDownloading ? 'Downloading...' : 'Resume'}
                </button>
              </motion.div>

              {/* Social links */}
              <motion.div {...fade(0.46)} className="flex gap-2">
                {[
                  { href: 'https://github.com/shaunChikerema', icon: Github, label: 'GitHub' },
                  { href: 'https://linkedin.com/in/shaunchikerema', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'mailto:sschikerema@gmail.com', icon: Mail, label: 'Email' }
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={href}
                    href={href}
                    whileHover={{ y: -2 }}
                    className="p-2.5 rounded-sm transition-colors"
                    style={{
                      background: 'var(--cream-dark)',
                      color: 'var(--ink-muted)',
                      border: '1px solid var(--border)'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Photo ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Background offset block */}
                <div
                  className="absolute -top-3 -right-3 rounded-sm"
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'var(--terra-pale)',
                    zIndex: 0
                  }}
                />

                {/* Photo container */}
                <div
                  className="relative z-10 overflow-hidden rounded-sm"
                  style={{
                    width: 'clamp(220px, 28vw, 360px)',
                    aspectRatio: '3 / 4',
                    border: '1px solid var(--border)'
                  }}
                >
                  {!imageLoaded && (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: 'var(--cream-dark)' }}
                    >
                      <div
                        className="w-7 h-7 border-2 rounded-full animate-spin"
                        style={{ borderColor: 'var(--terra-pale)', borderTopColor: 'var(--terra)' }}
                      />
                    </div>
                  )}
                  <img
                    src={imgSrc}
                    alt="Shaun Chikerema, Full-Stack Engineer"
                    className={`w-full h-full object-cover object-top transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => {
                      setImgSrc('https://placehold.co/600x800/EDE7D9/C0572E?text=SC&font=playfair-display');
                      setImageLoaded(true);
                    }}
                    itemProp="image"
                  />
                </div>

                {/* Location chip */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 left-0 z-20 px-4 py-2 rounded-sm"
                  style={{ background: 'var(--ink)', color: 'var(--cream)' }}
                >
                  <p className="font-body text-xs font-medium">Gaborone, Botswana</p>
                  <p className="font-body text-xs" style={{ color: 'rgba(247,243,236,0.6)' }}>
                    Available for remote work
                  </p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToProjects}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 font-body"
          style={{ color: 'var(--ink-faint)' }}
          aria-label="Scroll to projects"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.button>
      </motion.div>
    </section>
  );
}