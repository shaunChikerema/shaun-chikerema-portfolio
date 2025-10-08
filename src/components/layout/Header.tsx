//src/components/layout/Header.tsx
'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  // Smooth scroll function
  const smoothScrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const headerHeight = 80; // Approximate header height
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

    // Update URL without page reload
    if (history.pushState) {
      history.pushState(null, '', href);
    }

    // Smooth scroll to section
    setTimeout(() => {
      smoothScrollTo(section);
      setIsNavigating(false);
    }, 100);
  }, [smoothScrollTo]);

  // Active section detection with Intersection Observer
  useEffect(() => {
    const sections = ['home', 'about', 'expertise', 'projects', 'experience', 'contact'];
    
    const observers = sections.map(section => {
      const element = document.getElementById(section);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !isNavigating) {
              setActiveSection(section);
            }
          });
        },
        { 
          rootMargin: '-20% 0px -70% 0px',
          threshold: 0.1
        }
      );

      observer.observe(element);
      return observer;
    }).filter(Boolean);

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [isNavigating]);

  // Scroll event listener with throttle
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
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Body scroll lock for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
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
    
    setTimeout(() => setIsNavigating(false), 100);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-100/50'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 group cursor-pointer"
              onClick={scrollToTop}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="hidden sm:block">
                <div className="font-bold text-gray-900 text-base group-hover:text-gray-700 transition-colors duration-300">
                  {PERSONAL_INFO.name.split(' ')[0]}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Software Engineer
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  className={`relative px-5 py-3 font-medium transition-all duration-300 text-sm rounded-lg mx-1 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  } ${isNavigating ? 'pointer-events-none' : ''}`}
                  aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
                >
                  {item.name}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      layoutId="desktopActiveSection"
                      className="absolute bottom-2 left-4 right-4 h-0.5 bg-gray-900 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadResume}
                className="flex items-center space-x-2 px-5 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-800"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">Resume</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="flex items-center space-x-1 px-3 py-2 bg-gray-900 text-white rounded-lg font-semibold text-sm shadow-lg hover:bg-gray-800 transition-colors duration-300"
              >
                <Download className="w-3 h-3" />
                <span>Resume</span>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-300 rounded-lg hover:bg-gray-100"
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
              className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Sidebar Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[70] flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Main navigation"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-base">
                      {PERSONAL_INFO.name.split(' ')[0]}
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      Software Engineer
                    </div>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 rounded-lg hover:bg-gray-100"
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
                            ? 'text-gray-900 bg-gray-100 border-2 border-gray-200'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-2 border-transparent'
                        } ${isNavigating ? 'pointer-events-none opacity-70' : ''}`}
                        aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
                      >
                        <span>{item.name}</span>
                        {activeSection === item.href.replace('#', '') && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-gray-900 rounded-full"
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
                  className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200"
                >
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={downloadResume}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-900 text-white rounded-lg font-semibold text-sm shadow-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </motion.button>
                  <p className="text-xs text-gray-500 text-center mt-2">
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
                  <p className="text-xs text-gray-500">
                    Based in Gaborone, Botswana
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
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