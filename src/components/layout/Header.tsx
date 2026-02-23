'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
    const scrollPosition = window.scrollY + 120;
    const sections = ['home', 'about', 'expertise', 'projects', 'experience', 'contact'];
    let current = 'home';
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.offsetTop <= scrollPosition) { current = sections[i]; break; }
    }
    if (current !== activeSection && !isNavigating) setActiveSection(current);
  }, [activeSection, isNavigating]);

  const smoothScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' });
  }, []);

  const handleNav = useCallback((href: string) => {
    const section = href.replace('#', '');
    setIsNavigating(true);
    setIsMobileMenuOpen(false);
    setActiveSection(section);
    if (history.pushState) history.pushState(null, '', href);
    setTimeout(() => { smoothScrollTo(section); setTimeout(() => setIsNavigating(false), 800); }, 80);
  }, [smoothScrollTo]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) { requestAnimationFrame(() => { handleScroll(); ticking = false; }); ticking = true; }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMobileMenuOpen(false); };
    if (isMobileMenuOpen) { document.addEventListener('keydown', onKey); return () => document.removeEventListener('keydown', onKey); }
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
    { name: 'Contact', href: '#contact' },
  ];

  const downloadResume = () => {
    const a = document.createElement('a');
    a.href = '/shaun-chikerema-resume.pdf';
    a.download = 'Shaun_Chikerema_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled ? 'rgba(247,243,236,0.96)' : 'rgba(247,243,236,0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 1px 12px rgba(24,19,15,0.05)' : 'none'
        }}
      >
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 group"
              aria-label="Go to top"
            >
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center font-display font-bold text-base"
                style={{ background: 'var(--ink)', color: 'var(--cream)' }}
              >
                S
              </div>
              <div className="hidden sm:block text-left">
                <p className="font-display font-bold text-sm leading-tight" style={{ color: 'var(--ink)' }}>
                  Shaun Chikerema
                </p>
                <p className="font-body text-[10px] tracking-wide uppercase" style={{ color: 'var(--ink-faint)' }}>
                  Software Engineer
                </p>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                    className={`relative px-4 py-2 font-body text-sm font-medium transition-colors rounded-sm ${isNavigating ? 'pointer-events-none opacity-50' : ''}`}
                    style={{ color: isActive ? 'var(--terra)' : 'var(--ink-muted)' }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-1 left-4 right-4 h-px"
                        style={{ background: 'var(--terra)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <button onClick={downloadResume} className="btn-primary text-xs py-2.5 px-4 gap-1.5">
                <Download className="w-3.5 h-3.5" />
                Resume
              </button>
            </div>

            {/* Mobile */}
            <div className="flex lg:hidden items-center gap-2">
              <button onClick={downloadResume} className="btn-primary text-xs py-2 px-3 gap-1.5">
                <Download className="w-3 h-3" />
                Resume
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-sm"
                style={{ color: 'var(--ink-muted)' }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-[60]"
              style={{ background: 'rgba(24,19,15,0.35)', backdropFilter: 'blur(3px)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="lg:hidden fixed top-0 right-0 h-full w-64 z-[70] flex flex-col"
              style={{ background: 'var(--cream)', borderLeft: '1px solid var(--border)' }}
              role="dialog" aria-modal="true"
            >
              <div className="flex items-center justify-between p-5" style={{ borderBottom: '1px solid var(--border)' }}>
                <p className="font-display font-bold text-sm" style={{ color: 'var(--ink)' }}>Menu</p>
                <button onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--ink-faint)' }} aria-label="Close">
                  <X size={16} />
                </button>
              </div>
              <nav className="flex-1 p-4 space-y-0.5">
                {navItems.map((item, i) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                      className="flex items-center justify-between px-3 py-2.5 rounded-sm font-body text-sm font-medium"
                      style={{
                        background: isActive ? 'var(--terra-pale)' : 'transparent',
                        color: isActive ? 'var(--terra)' : 'var(--ink-muted)',
                      }}
                    >
                      {item.name}
                      {isActive && <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--terra)' }} />}
                    </motion.a>
                  );
                })}
              </nav>
              <div className="p-4" style={{ borderTop: '1px solid var(--border)' }}>
                <button onClick={downloadResume} className="btn-primary w-full justify-center text-sm py-2.5">
                  <Download className="w-4 h-4" /> Download Resume
                </button>
                <p className="text-center mt-3 font-body text-xs" style={{ color: 'var(--ink-faint)' }}>
                  Gaborone, Botswana · Open to remote
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}