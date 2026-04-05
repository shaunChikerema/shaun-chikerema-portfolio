'use client';
import { Github, Linkedin, Mail } from 'lucide-react';

const LINKS = [
  { label: 'Work',    href: '#work' },
  { label: 'Skills',  href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
const SOCIALS = [
  { icon: Github,   href: 'https://github.com/shaunChikerema',      label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/shaunchikerema', label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:sschikerema@gmail.com',           label: 'Email' },
];

export default function Footer() {
  const scroll = (href: string) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#0a0f0d', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(62,207,142,0.2)' }}>
      {/* Green top accent */}
      <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #3ECF8E, transparent)' }} />
      {/* Large faded wordmark */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-0.15em',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: 'clamp(4rem, 12vw, 9rem)',
          letterSpacing: '-0.04em',
          color: 'rgba(246,241,234,0.04)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}
      >
        Shaun Chikerema
      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-7 py-10"
          style={{ borderBottom: '1px solid rgba(62,207,142,0.12)' }}
        >
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect width="32" height="32" rx="6" fill="#3ECF8E"/>
              <text
                x="16" y="22" textAnchor="middle"
                fontFamily="Georgia, 'Times New Roman', serif"
                fontSize="16" fontWeight="700" fill="#0a0f0d"
                letterSpacing="-0.5"
              >SC</text>
            </svg>
            <div>
              <p className="font-display font-bold text-sm" style={{ color: 'var(--cream)' }}>
                Shaun <span style={{ fontStyle: 'italic', color: '#3ECF8E' }}>Chikerema</span>
              </p>
              <p className="font-body text-[10px]" style={{ color: 'rgba(246,241,234,0.38)' }}>Software Engineer · Available for remote</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex gap-5">
            {LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={e => { e.preventDefault(); scroll(l.href); }}
                className="font-body text-sm transition-colors"
                style={{ color: 'rgba(246,241,234,0.45)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(246,241,234,0.45)')}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-1.5">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-sm transition-all"
                style={{ color: 'rgba(246,241,234,0.38)', border: '1px solid rgba(246,241,234,0.08)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--cream)';
                  e.currentTarget.style.borderColor = 'rgba(246,241,234,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(246,241,234,0.38)';
                  e.currentTarget.style.borderColor = 'rgba(246,241,234,0.08)';
                }}
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-4">
          <p className="font-body text-xs" style={{ color: 'rgba(246,241,234,0.25)' }}>
            © {new Date().getFullYear()} Shaun Chikerema. All rights reserved.
          </p>
          <p className="font-body text-xs" style={{ color: 'rgba(246,241,234,0.25)' }}>
            sschikerema@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}