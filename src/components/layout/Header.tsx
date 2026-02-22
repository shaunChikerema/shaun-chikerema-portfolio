'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const PERSONAL_INFO = { name: 'Shaun Chikerema' };

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
    const scrollPosition = window.scrollY + 100;
    const sections = ['home', 'about', 'expertise', 'projects', 'experience', 'contact'];
    let currentActive = 'home';
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        currentActive = sections[i];
        break;
      }
    }
    if (currentActive !== activeSection && !isNavigating) setActiveSection(currentActive);
  }, [activeSection, isNavigating]);

  const smoothScrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }, []);

  const handleNavigation = useCallback((href: string) => {
    const section = href.replace('#', '');
    setIsNavigating(true);
    setIsMobileMenuOpen(false);
    setActiveSection(section);
    if (history.pushState) history.pushState(null, '', href);
    setTimeout(() => {
      smoothScrollTo(section);
      setTimeout(() => setIsNavigating(false), 800);
    }, 100);
  }, [smoothScrollTo]);

  useEffect(() => {
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { handleScroll(); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMobileMenuOpen(false); };
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['about', 'expertise', 'projects', 'experience', 'contact'].includes(hash)) {
      setActiveSection(hash);
      setTimeout(() => smoothScrollTo(hash), 500);
    }
  }, [smoothScrollTo]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/shaun-chikerema-resume.pdf';
    link.download = 'Shaun_Chikerema_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToTop = () => {
    setIsNavigating(true);
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (history.pushState) history.pushState(null, '', '#home');
    setTimeout(() => setIsNavigating(false), 1000);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled ? 'rgba(245,240,232,0.97)' : 'rgba(245,240,232,0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid rgba(26,23,20,0.1)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 1px 20px rgba(26,23,20,0.06)' : 'none'
        }}
      >
        <nav className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={scrollToTop}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
            >
              <div
                className="w-9 h-9 rounded-sm flex items-center justify-center font-display font-bold text-lg transition-all duration-200"
                style={{ background: 'var(--ink)', color: 'var(--cream)' }}
              >
                S
              </div>
              <div className="hidden sm:block">
                <div
                  className="font-display font-bold text-base leading-tight transition-colors duration-200"
                  style={{ color: 'var(--ink)' }}
                >
                  {PERSONAL_INFO.name.split(' ')[0]}
                </div>
                <div className="font-body text-xs tracking-wide" style={{ color: 'var(--ink-faint)' }}>
                  Software Engineer
                </div>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavigation(item.href); }}
                    className={`relative px-4 py-2 font-body text-sm font-medium transition-all duration-200 rounded-sm ${isNavigating ? 'pointer-events-none opacity-60' : ''}`}
                    style={{ color: isActive ? 'var(--terra)' : 'var(--ink-muted)' }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-3 right-3 h-px"
                        style={{ background: 'var(--terra)' }}
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Desktop Resume CTA */}
            <div className="hidden lg:flex items-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadResume}
                className="flex items-center gap-2 px-5 py-2.5 rounded-sm font-body text-sm font-medium transition-all duration-200"
                style={{ background: 'var(--ink)', color: 'var(--cream)' }}
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </motion.button>
            </div>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={downloadResume}
                className="flex items-center gap-1.5 px-3 py-2 rounded-sm font-body text-xs font-medium"
                style={{ background: 'var(--ink)', color: 'var(--cream)' }}
              >
                <Download className="w-3 h-3" />
                Resume
              </button>
              <button
                className="p-2 rounded-sm transition-colors"
                style={{ color: 'var(--ink-muted)' }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden fixed inset-0 z-[60]"
              style={{ background: 'rgba(26,23,20,0.4)', backdropFilter: 'blur(4px)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 h-full w-72 z-[70] flex flex-col"
              style={{ background: 'var(--cream)', borderLeft: '1px solid rgba(26,23,20,0.1)' }}
              role="dialog"
              aria-modal="true"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-6" style={{ borderBottom: '1px solid rgba(26,23,20,0.08)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center font-display font-bold text-lg"
                    style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
                    S
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm" style={{ color: 'var(--ink)' }}>{PERSONAL_INFO.name.split(' ')[0]}</div>
                    <div className="font-body text-xs" style={{ color: 'var(--ink-faint)' }}>Software Engineer</div>
                  </div>
                </div>
                <button
                  className="p-1.5 rounded-sm"
                  style={{ color: 'var(--ink-muted)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto p-5">
                <nav className="space-y-1">
                  {navItems.map((item, i) => {
                    const isActive = activeSection === item.href.replace('#', '');
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        onClick={(e) => { e.preventDefault(); handleNavigation(item.href); }}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-sm font-body text-sm font-medium transition-all duration-200 ${isNavigating ? 'pointer-events-none opacity-60' : ''}`}
                        style={{
                          background: isActive ? 'var(--terra-pale)' : 'transparent',
                          color: isActive ? 'var(--terra)' : 'var(--ink-muted)',
                        }}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.name}
                        {isActive && <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--terra)' }} />}
                      </motion.a>
                    );
                  })}
                </nav>

                {/* Resume */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.06 + 0.1 }}
                  className="mt-6 pt-6"
                  style={{ borderTop: '1px solid rgba(26,23,20,0.08)' }}
                >
                  <button
                    onClick={downloadResume}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-sm font-body text-sm font-medium"
                    style={{ background: 'var(--ink)', color: 'var(--cream)' }}
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </button>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.06 + 0.2 }}
                  className="mt-4 text-center"
                >
                  <p className="font-body text-xs" style={{ color: 'var(--ink-faint)' }}>Gaborone, Botswana</p>
                  <p className="font-body text-xs mt-0.5" style={{ color: 'var(--ink-faint)', opacity: 0.7 }}>Available for new projects</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}