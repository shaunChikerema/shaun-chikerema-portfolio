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
    <footer style={{ background: 'var(--ink)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-7 py-10"
          style={{ borderBottom: '1px solid rgba(246,241,234,0.08)' }}
        >
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-sm font-display font-bold text-sm flex items-center justify-center"
              style={{ background: 'var(--terra)', color: 'var(--cream)' }}
            >
              SC
            </div>
            <div>
              <p className="font-display font-bold text-sm" style={{ color: 'var(--cream)' }}>Shaun Chikerema</p>
              <p className="font-body text-[10px]" style={{ color: 'rgba(246,241,234,0.38)' }}>Full-Stack Engineer · Gaborone, Botswana</p>
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