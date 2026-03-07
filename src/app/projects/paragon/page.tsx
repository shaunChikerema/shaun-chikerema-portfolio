'use client';
import { ArrowLeft, ExternalLink, Globe, MessageCircle, Shield, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ACCENT = '#1A4D6D';
const ACCENT_PALE = 'rgba(26,77,109,0.08)';

const project = {
  title: 'Paragon Insurance Brokers',
  liveUrl: 'https://paragon-insurance-official.vercel.app',
  techStack: {
    Frontend: ['Next.js 15', 'React', 'Tailwind CSS'],
    Integration: ['WhatsApp API', 'Lucide Icons'],
    Infrastructure: ['Vercel'],
    Tools: ['Intersection Observer', 'CSS Animations'],
  },
};

export default function ParagonPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50"
        style={{ background: 'rgba(245,240,232,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(26,23,20,0.1)' }}
      >
        <div className="container mx-auto px-6 lg:px-12 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link
              href="/#projects"
              className="group flex items-center gap-2 font-body text-sm font-medium transition-colors"
              style={{ color: 'var(--ink-muted)' }}
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-sm font-body text-sm font-medium text-white transition-all"
              style={{ background: 'var(--ink)' }}
            >
              <ExternalLink size={14} />
              View Live
            </a>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--cream-dark)', borderBottom: '1px solid rgba(26,23,20,0.08)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 60% 60% at 30% 50%, ${ACCENT_PALE} 0%, transparent 65%)` }}
        />
        <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="section-label mb-5">
              <Shield size={13} />
              Client Work
            </div>

            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6"
              style={{ color: 'var(--ink)' }}
            >
              Paragon —{' '}
              <em style={{ color: ACCENT }}>Insurance</em><br />
              Broker Site
            </h1>

            <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--ink-muted)' }}>
              A marketing website for a licensed NBFIRA insurance broker in Botswana. Multi-page site with a WhatsApp-integrated quote flow, provider showcase, and scroll animations — built and deployed for a real paying client.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: Globe, text: 'Client Project' },
                { icon: Shield, text: 'NBFIRA Licensed' },
                { icon: Smartphone, text: 'Mobile Responsive' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-sm font-body text-sm font-medium"
                    style={{ background: ACCENT_PALE, color: ACCENT, border: `1px solid rgba(26,77,109,0.2)` }}
                  >
                    <Icon size={13} />
                    {item.text}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Built */}
      <section className="relative" style={{ background: 'var(--cream)' }}>
        <div className="rule-ornate" />
        <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-5">
              <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
              What I Built
            </div>
            <h2 className="font-display text-4xl font-bold mb-16" style={{ color: 'var(--ink)' }}>Core Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: MessageCircle, title: 'Quote Flow', desc: 'WhatsApp-integrated quote request form. Submissions are formatted and sent directly to the broker via WhatsApp.' },
                { icon: Shield, title: 'Provider Showcase', desc: 'Clean comparison section for Metropolitan Life, Botswana Life, Hollard, and Bona Life with provider logos.' },
                { icon: Smartphone, title: 'Fully Responsive', desc: 'Mobile-first layout with a collapsible nav, touch-friendly interactions, and optimised hero carousel.' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="card-warm p-8 text-center"
                  >
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center mx-auto mb-5"
                      style={{ background: ACCENT_PALE }}
                    >
                      <Icon className="w-6 h-6" style={{ color: ACCENT }} />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--ink)' }}>{item.title}</h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-faint)' }}>{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Site Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-sm"
              style={{ background: 'var(--cream-dark)', border: '1px solid rgba(26,23,20,0.1)' }}
            >
              <h3 className="font-display text-2xl font-bold mb-8" style={{ color: 'var(--ink)' }}>Pages & Sections</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="font-display font-semibold mb-3" style={{ color: 'var(--ink)' }}>Homepage</h4>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-muted)' }}>
                    Hero carousel with four lifestyle slides, floating WhatsApp CTA, sticky top contact bar, provider logos, and a testimonials section. Quote modal opens inline without page navigation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Hero Carousel', 'Quote Modal', 'Provider Logos'].map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-sm text-xs font-body font-medium"
                        style={{ background: 'var(--cream)', color: 'var(--ink-muted)', border: '1px solid rgba(26,23,20,0.1)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-3" style={{ color: 'var(--ink)' }}>About & Contact</h4>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-muted)' }}>
                    About page with scroll-triggered animations, mission/vision cards, values grid, and "Why Paragon" checklist. Contact page with full details and WhatsApp link.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Scroll Animations', 'Multi-page', 'Contact Page'].map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-sm text-xs font-body font-medium"
                        style={{ background: 'var(--cream)', color: 'var(--ink-muted)', border: '1px solid rgba(26,23,20,0.1)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="relative" style={{ background: 'var(--cream-dark)' }}>
        <div className="rule-ornate" />
        <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-5">
              <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
              Architecture
            </div>
            <h2 className="font-display text-4xl font-bold mb-16" style={{ color: 'var(--ink)' }}>Technical Architecture</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-sm" style={{ background: 'var(--cream)', border: '1px solid rgba(26,23,20,0.1)' }}>
                <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--ink)' }}>Key Decisions</h3>
                <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'var(--ink-muted)' }}>
                  No backend needed — the quote form submits directly to WhatsApp via deep link, keeping the site fully static and fast. Scroll animations use native Intersection Observer instead of a library to keep the bundle lean.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: MessageCircle, title: 'WhatsApp Integration', desc: 'Form data encoded and sent via wa.me deep link' },
                    { icon: Globe, title: 'Static Deployment', desc: 'No server — deployed as static site on Vercel' },
                    { icon: Smartphone, title: 'Scroll Animations', desc: 'Native Intersection Observer, no animation library' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_PALE }}>
                          <Icon className="w-4 h-4" style={{ color: ACCENT }} />
                        </div>
                        <div>
                          <div className="font-body font-medium text-sm mb-0.5" style={{ color: 'var(--ink)' }}>{item.title}</div>
                          <div className="font-body text-xs" style={{ color: 'var(--ink-faint)' }}>{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-8 rounded-sm" style={{ background: 'var(--cream)', border: '1px solid rgba(26,23,20,0.1)' }}>
                <h4 className="font-display font-semibold mb-4" style={{ color: 'var(--ink)' }}>Tech Stack</h4>
                <ul className="space-y-3">
                  {[
                    'Next.js 15 with App Router',
                    'Tailwind CSS for styling',
                    'WhatsApp deep link for quote submissions',
                    'Intersection Observer for scroll animations',
                    'CSS keyframe animations (no Framer Motion)',
                    'Deployed on Vercel',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                      <span className="font-body text-sm" style={{ color: 'var(--ink-muted)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="relative" style={{ background: 'var(--cream)' }}>
        <div className="rule-ornate" />
        <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-5">
              <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
              Challenges
            </div>
            <h2 className="font-display text-4xl font-bold mb-16" style={{ color: 'var(--ink)' }}>Technical Challenges</h2>

            <div className="space-y-6 max-w-3xl">
              {[
                {
                  title: 'WhatsApp Quote Integration',
                  desc: 'The client wanted enquiries to come straight to their phone without a backend or email. I encoded the form fields into a formatted WhatsApp message string and used the wa.me deep link API to open it pre-filled — zero server cost, instant delivery.',
                },
                {
                  title: 'Scroll Animations Without a Library',
                  desc: 'To keep the bundle small, I implemented scroll-triggered animations using the native Intersection Observer API with CSS keyframes. Elements animate in once on scroll and the observer disconnects after firing to avoid unnecessary overhead.',
                },
                {
                  title: 'Hero Image Carousel Performance',
                  desc: 'Four large hero images needed to load fast on mobile. I used Next.js Image optimisation with priority loading for the first slide and lazy loading for the rest, keeping LCP fast on slower connections.',
                },
                {
                  title: 'Client Collaboration',
                  desc: 'Working to a real client brief meant managing feedback rounds and making design decisions that served their brand and audience — not just what looked good technically. First paid project shipped and live.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-6 p-6 rounded-sm"
                  style={{ background: 'var(--cream-dark)', border: '1px solid rgba(26,23,20,0.08)' }}
                >
                  <div className="w-px flex-shrink-0 rounded-full self-stretch" style={{ background: ACCENT, minHeight: '100%' }} />
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--ink)' }}>{item.title}</h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Complete Tech Stack */}
      <section className="relative" style={{ background: 'var(--cream-dark)' }}>
        <div className="rule-ornate" />
        <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-5">
              <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
              Stack
            </div>
            <h2 className="font-display text-4xl font-bold mb-12" style={{ color: 'var(--ink)' }}>Complete Tech Stack</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(project.techStack).map(([category, technologies]) => (
                <div key={category} className="card-warm p-5">
                  <h3 className="section-label mb-3">{category}</h3>
                  <ul className="space-y-2">
                    {technologies.map((tech: string, i: number) => (
                      <li key={i} className="font-body text-sm" style={{ color: 'var(--ink-muted)' }}>{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative" style={{ background: 'var(--ink)' }}>
        <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <div className="section-label justify-center mb-6" style={{ color: ACCENT }}>
              <span className="w-4 h-px inline-block" style={{ background: ACCENT }} />
              Live Site
            </div>
            <h2 className="font-display text-4xl font-bold mb-4" style={{ color: 'var(--cream)' }}>See It Live</h2>
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'rgba(245,240,232,0.65)' }}>
              The site is live and in use by the client. Browse the provider listings, try the quote request flow, and see it on mobile.
            </p>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-sm font-body font-semibold text-sm transition-all"
              style={{ background: '#1A4D6D', color: '#fff' }}
            >
              <ExternalLink size={15} />
              View Live Site
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}