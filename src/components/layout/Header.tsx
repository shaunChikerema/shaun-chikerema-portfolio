'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const NAV = [
  { label: 'Home',    href: '#home' },
  { label: 'Work',    href: '#work' },
  { label: 'Skills',  href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [open,       setOpen]       = useState(false);
  const [active,     setActive]     = useState('home');
  const [navigating, setNavigating] = useState(false);

  const ids = NAV.map(n => n.href.replace('#', ''));

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 24);
    if (navigating) return;
    const pos = window.scrollY + 110;
    let cur = ids[0];
    for (let i = ids.length - 1; i >= 0; i--) {
      const el = document.getElementById(ids[i]);
      if (el && el.offsetTop <= pos) { cur = ids[i]; break; }
    }
    setActive(cur);
  }, [navigating, ids]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const navigate = (href: string) => {
    const id = href.replace('#', '');
    setNavigating(true);
    setActive(id);
    setOpen(false);
    history.pushState(null, '', href);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
      setTimeout(() => setNavigating(false), 900);
    }, 60);
  };

  const downloadCV = () => {
    const a = document.createElement('a');
    a.href = '/shaun-chikerema-resume.pdf';
    a.download = 'Shaun_Chikerema_Resume.pdf';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(246,241,234,0.97)' : 'rgba(246,241,234,0.82)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 16px rgba(22,18,16,0.055)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[68px]">

          {/* Logo */}
          <button
            onClick={() => navigate('#home')}
            className="flex items-center gap-2.5 group"
            aria-label="Home"
          >
            <div
              className="w-8 h-8 rounded-sm font-display font-bold text-sm flex items-center justify-center"
              style={{ background: 'var(--ink)', color: 'var(--cream)' }}
            >
              SC
            </div>
            <div className="hidden sm:block leading-tight text-left">
              <p className="font-display font-bold text-sm" style={{ color: 'var(--ink)' }}>Shaun Chikerema</p>
              <p className="font-body text-[10px] tracking-widest uppercase" style={{ color: 'var(--ink-muted)' }}>Software Engineer</p>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV.map(({ label, href }) => {
              const isActive = active === href.replace('#', '');
              return (
                <a
                  key={href}
                  href={href}
                  onClick={e => { e.preventDefault(); navigate(href); }}
                  className="relative px-4 py-2 font-body text-sm font-medium rounded-sm transition-colors"
                  style={{ color: isActive ? 'var(--terra)' : 'var(--ink-muted)' }}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-line"
                      className="absolute bottom-1 left-4 right-4 h-px"
                      style={{ background: 'var(--terra)' }}
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button onClick={downloadCV} className="btn btn-dark text-xs px-4 py-2.5 gap-1.5">
              <Download className="w-3.5 h-3.5" />
              Resume
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={downloadCV} className="btn btn-dark text-xs px-3 py-2 gap-1.5">
              <Download className="w-3 h-3" /> CV
            </button>
            <button
              onClick={() => setOpen(v => !v)}
              className="p-2 rounded-sm"
              style={{ color: 'var(--ink-muted)' }}
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-[60]"
              style={{ background: 'rgba(22,18,16,0.3)', backdropFilter: 'blur(4px)' }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
              className="md:hidden fixed top-0 right-0 h-full w-60 z-[70] flex flex-col"
              style={{ background: 'var(--cream)', borderLeft: '1px solid var(--border)' }}
            >
              <div className="flex items-center justify-between px-5 h-[68px]" style={{ borderBottom: '1px solid var(--border)' }}>
                <span className="font-display font-bold text-sm" style={{ color: 'var(--ink)' }}>Menu</span>
                <button onClick={() => setOpen(false)} style={{ color: 'var(--ink-muted)' }}><X size={16} /></button>
              </div>
              <nav className="flex-1 p-4 flex flex-col gap-0.5">
                {NAV.map(({ label, href }, i) => {
                  const isActive = active === href.replace('#', '');
                  return (
                    <motion.a
                      key={href}
                      href={href}
                      initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={e => { e.preventDefault(); navigate(href); }}
                      className="flex items-center justify-between px-3 py-3 rounded-sm font-body text-sm font-medium"
                      style={{
                        background: isActive ? 'var(--terra-pale)' : 'transparent',
                        color: isActive ? 'var(--terra)' : 'var(--ink-mid)',
                      }}
                    >
                      {label}
                      {isActive && <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--terra)' }} />}
                    </motion.a>
                  );
                })}
              </nav>
              <div className="p-4" style={{ borderTop: '1px solid var(--border)' }}>
                <button onClick={downloadCV} className="btn btn-dark w-full py-2.5 text-sm">
                  <Download className="w-4 h-4" /> Download Resume
                </button>
                <p className="text-center mt-3 font-body text-[10px]" style={{ color: 'var(--ink-muted)' }}>
                  Gaborone · Open to remote
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}