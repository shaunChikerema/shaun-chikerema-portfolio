'use client';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { href: 'https://github.com/shaunChikerema', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/shaunchikerema', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:sschikerema@gmail.com', icon: Mail, label: 'Email' },
  ];

  const scroll = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'var(--ink)' }}>
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">

        {/* Main row */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-12"
          style={{ borderBottom: '1px solid rgba(247,243,236,0.1)' }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center font-display font-bold text-base"
                style={{ background: 'var(--terra)', color: 'var(--cream)' }}
              >
                S
              </div>
              <span className="font-display font-bold text-base" style={{ color: 'var(--cream)' }}>
                Shaun Chikerema
              </span>
            </div>
            <p className="font-body text-xs" style={{ color: 'rgba(247,243,236,0.4)' }}>
              Full-Stack Engineer · Gaborone, Botswana
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scroll(link.href); }}
                className="font-body text-sm transition-colors"
                style={{ color: 'rgba(247,243,236,0.5)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cream)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(247,243,236,0.5)')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-2">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-sm transition-colors"
                style={{
                  color: 'rgba(247,243,236,0.45)',
                  border: '1px solid rgba(247,243,236,0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--cream)';
                  e.currentTarget.style.borderColor = 'rgba(247,243,236,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(247,243,236,0.45)';
                  e.currentTarget.style.borderColor = 'rgba(247,243,236,0.1)';
                }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-5">
          <p className="font-body text-xs" style={{ color: 'rgba(247,243,236,0.3)' }}>
            © {year} Shaun Chikerema. All rights reserved.
          </p>
          <p className="font-body text-xs" style={{ color: 'rgba(247,243,236,0.3)' }}>
            sschikerema@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}