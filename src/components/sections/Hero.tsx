'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';
import Image from 'next/image';

const ANIMATION_DURATION = 0.6;
const STAGGER = 0.08;

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-24 bg-black"
      aria-label="Shaun Chikerema - Full Stack Engineer"
      id="home"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black pointer-events-none" aria-hidden="true" />
      
      {/* Subtle accent orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Content */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <motion.div
                {...getAnimationProps(0)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6"
              >
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span>Available for new projects</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                {...getAnimationProps(STAGGER)}
                className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight"
              >
                Shaun Chikerema
              </motion.h1>
              
              {/* Title */}
              <motion.p
                {...getAnimationProps(STAGGER * 2)}
                className="text-xl sm:text-2xl text-zinc-400 mb-6"
              >
                Full Stack Engineer & Founder
              </motion.p>

              {/* Bio */}
              <motion.p
                {...getAnimationProps(STAGGER * 3)}
                className="text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed"
              >
                Building <span className="font-medium text-white">BITROOT</span> — production-ready SaaS platforms serving 500+ users. I design systems that scale, from database architecture to deployment.
              </motion.p>

              {/* Stats */}
              <motion.div
                {...getAnimationProps(STAGGER * 4)}
                className="grid grid-cols-3 gap-6 mb-10"
              >
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <div className="text-3xl font-semibold text-white mb-1">2</div>
                  <div className="text-sm text-zinc-500">Live products</div>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <div className="text-3xl font-semibold text-white mb-1">500+</div>
                  <div className="text-sm text-zinc-500">Active users</div>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <div className="text-3xl font-semibold text-white mb-1">4-6</div>
                  <div className="text-sm text-zinc-500">Weeks to MVP</div>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                {...getAnimationProps(STAGGER * 5)}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <motion.button 
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-100 transition-colors duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                  <span>View projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </motion.button>
                
                <motion.button 
                  onClick={downloadResume}
                  disabled={isDownloading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-zinc-900 text-white px-6 py-3 rounded-lg font-medium border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-black"
                >
                  <Download className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
                  <span>{isDownloading ? 'Downloading...' : 'Download resume'}</span>
                </motion.button>
              </motion.div>

              {/* Social links */}
              <motion.div
                {...getAnimationProps(STAGGER * 6)}
                className="flex gap-4"
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
                    className="p-2 text-zinc-500 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl shadow-black/50 ring-1 ring-zinc-800">
                  <Image 
                    src="/images/shaun-profile.png" 
                    alt="Shaun Chikerema"
                    width={384}
                    height={384}
                    priority
                    className="w-full h-full object-cover"
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                </div>
                
                {/* Location badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="absolute -bottom-4 left-6 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-sm text-zinc-300 shadow-xl"
                >
                  Gaborone, Botswana
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}