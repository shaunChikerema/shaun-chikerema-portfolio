'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const PERSONAL_INFO = {
  name: 'Shaun Chikerema'
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 10;
    setIsScrolled(scrolled);

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

    if (currentActive !== activeSection && !isNavigating) {
      setActiveSection(currentActive);
    }
  }, [activeSection, isNavigating]);

  const smoothScrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const headerHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }, []);

  const handleNavigation = useCallback((href: string) => {
    const section = href.replace('#', '');
    
    setIsNavigating(true);
    setIsMobileMenuOpen(false);
    setActiveSection(section);

    if (history.pushState) {
      history.pushState(null, '', href);
    }

    setTimeout(() => {
      smoothScrollTo(section);
      setTimeout(() => {
        setIsNavigating(false);
      }, 800);
    }, 100);
  }, [smoothScrollTo]);

  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['about', 'expertise', 'projects', 'experience', 'contact'].includes(hash)) {
      setActiveSection(hash);
      setTimeout(() => {
        smoothScrollTo(hash);
      }, 500);
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
    
    if (history.pushState) {
      history.pushState(null, '', '#home');
    }
    
    setTimeout(() => setIsNavigating(false), 1000);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/98 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50'
            : 'bg-black/70 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 group cursor-pointer"
              onClick={scrollToTop}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/30 transition-shadow duration-300">
                  <span className="text-black font-bold text-lg">S</span>
                </div>
              </div>
              
              <div className="hidden sm:block">
                <div className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors duration-300">
                  {PERSONAL_INFO.name.split(' ')[0]}
                </div>
                <div className="text-xs text-zinc-500 font-medium">
                  Software Engineer
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  className={`relative px-5 py-3 font-semibold transition-all duration-300 text-sm rounded-lg ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-white bg-white/10'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  } ${isNavigating ? 'pointer-events-none opacity-70' : ''}`}
                  aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
                >
                  {item.name}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      layoutId="desktopActiveSection"
                      className="absolute bottom-1.5 left-3 right-3 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadResume}
                className="group relative px-6 py-3 bg-white/5 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/10 hover:border-white/20 transition-all duration-200 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2 text-sm">
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="group relative px-3 py-2 bg-white/5 backdrop-blur-sm text-white rounded-lg font-semibold text-sm border border-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-active:opacity-100 transition-opacity duration-200" />
                
                <span className="relative z-10 flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </span>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="p-2 text-zinc-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 h-full w-80 bg-black/98 backdrop-blur-xl shadow-2xl z-[70] flex flex-col border-l border-white/10"
              role="dialog"
              aria-modal="true"
              aria-label="Main navigation"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl blur-md opacity-50" />
                    <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-black font-bold text-lg">S</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">
                      {PERSONAL_INFO.name.split(' ')[0]}
                    </div>
                    <div className="text-xs text-zinc-500 font-medium">
                      Software Engineer
                    </div>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-zinc-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto p-4">
                <nav aria-label="Mobile navigation">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(item.href);
                        }}
                        className={`group relative flex items-center justify-between w-full px-4 py-4 font-semibold transition-all duration-300 text-base rounded-xl ${
                          activeSection === item.href.replace('#', '')
                            ? 'text-white bg-white/10 border border-cyan-500/30'
                            : 'text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent'
                        } ${isNavigating ? 'pointer-events-none opacity-70' : ''}`}
                        aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
                      >
                        {/* Glow effect on active */}
                        {activeSection === item.href.replace('#', '') && (
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl blur-xl" />
                        )}
                        
                        <span className="relative z-10">{item.name}</span>
                        {activeSection === item.href.replace('#', '') && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="relative z-10 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                          />
                        )}
                      </motion.a>
                    ))}
                  </div>
                </nav>

                {/* Mobile Resume CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.08 + 0.2 }}
                  className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={downloadResume}
                    className="group relative w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold text-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-active:opacity-100 transition-opacity duration-300" />
                    
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      <span>Download Resume</span>
                    </span>
                  </motion.button>
                  <p className="text-xs text-zinc-500 text-center mt-2">
                    Updated: {new Date().toLocaleDateString()}
                  </p>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.08 + 0.4 }}
                  className="mt-6 p-4 text-center"
                >
                  <p className="text-xs text-zinc-500">
                    Based in Gaborone, Botswana
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    Available for new projects
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}