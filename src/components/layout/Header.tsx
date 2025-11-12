'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

// Mock constant - replace with your actual import
const PERSONAL_INFO = {
  name: 'Shaun Chikerema'
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 10;
    setIsScrolled(scrolled);

    // Active section detection based on scroll position
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

  // Smooth scroll function
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

  // Enhanced navigation handler
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

  // Scroll event listener
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

  // Body scroll lock for mobile menu
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

  // Close mobile menu on escape key
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

  // Handle initial hash URL
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
            ? 'bg-black/95 backdrop-blur-lg border-b border-zinc-800'
            : 'bg-black/80 backdrop-blur-md border-b border-zinc-900'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 group cursor-pointer"
              onClick={scrollToTop}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-black font-bold text-lg">S</span>
                </div>
              </div>
              
              <div className="hidden sm:block">
                <div className="font-bold text-white text-base group-hover:text-zinc-300 transition-colors duration-300">
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
                  className={`relative px-5 py-3 font-medium transition-all duration-300 text-sm rounded-lg ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-white bg-zinc-800'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                  } ${isNavigating ? 'pointer-events-none opacity-70' : ''}`}
                  aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
                >
                  {item.name}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      layoutId="desktopActiveSection"
                      className="absolute bottom-2 left-4 right-4 h-0.5 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
                className="flex items-center gap-2 px-5 py-3 bg-white text-black rounded-xl font-semibold hover:bg-zinc-100 transition-all duration-300 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">Resume</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="flex items-center gap-1 px-3 py-2 bg-white text-black rounded-lg font-semibold text-sm shadow-lg hover:bg-zinc-100 transition-colors duration-300"
              >
                <Download className="w-3 h-3" />
                <span>Resume</span>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="p-2 text-zinc-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-zinc-900"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Sidebar Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 h-full w-80 bg-zinc-900 shadow-2xl z-[70] flex flex-col border-l border-zinc-800"
              role="dialog"
              aria-modal="true"
              aria-label="Main navigation"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-900 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-black font-bold text-lg">S</span>
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
                  className="p-2 text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-zinc-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto p-4">
                <nav aria-label="Mobile navigation">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(item.href);
                        }}
                        className={`flex items-center justify-between w-full px-4 py-4 font-medium transition-all duration-300 text-base rounded-xl ${
                          activeSection === item.href.replace('#', '')
                            ? 'text-white bg-zinc-800 border-2 border-zinc-700'
                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800 border-2 border-transparent'
                        } ${isNavigating ? 'pointer-events-none opacity-70' : ''}`}
                        aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
                      >
                        <span>{item.name}</span>
                        {activeSection === item.href.replace('#', '') && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-white rounded-full"
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
                  transition={{ delay: navItems.length * 0.1 + 0.2 }}
                  className="mt-6 p-4 bg-zinc-800 rounded-xl border border-zinc-700"
                >
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={downloadResume}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-black rounded-lg font-semibold text-sm shadow-lg hover:bg-zinc-100 transition-colors duration-300"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </motion.button>
                  <p className="text-xs text-zinc-500 text-center mt-2">
                    Updated: {new Date().toLocaleDateString()}
                  </p>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 + 0.4 }}
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