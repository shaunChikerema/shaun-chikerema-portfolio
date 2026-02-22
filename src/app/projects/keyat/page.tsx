'use client';
import { ArrowLeft, ExternalLink, Building2, Database, Shield, Zap, Target, Rocket, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const project = {
  id: 1,
  title: "Keyat",
  liveUrl: "https://keyat.vercel.app",
  techStack: {
    Frontend: ["Next.js 15", "TypeScript", "Tailwind CSS", "PWA"],
    Backend: ["Supabase", "PostgreSQL", "REST APIs"],
    Infrastructure: ["Vercel", "GitHub Actions"],
    Auth: ["Supabase Auth"]
  }
};

export default function KeyatProjectPage() {
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
      <section className="relative overflow-hidden" style={{ background: 'var(--cream-dark)', borderBottom: '1px solid rgba(26,23,20,0.08)' }}>
        {/* Radial warmth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 70% 40%, rgba(196,98,58,0.08) 0%, transparent 65%)'
          }}
        />

        <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="section-label mb-5">
              <Building2 size={13} />
              Real Estate Platform
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6" style={{ color: 'var(--ink)' }}>
              Keyat —{' '}
              <em style={{ color: 'var(--terra)' }}>Real Estate</em><br />
              Marketplace
            </h1>

            <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--ink-muted)' }}>
              A full-stack property marketplace connecting buyers, sellers, and agents. Multi-tenant architecture with role-based access and real-time listings. Built as a Progressive Web App for offline-first mobile experience.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: Zap, text: 'Live & Deployed' },
                { icon: Smartphone, text: 'Progressive Web App' }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-sm font-body text-sm font-medium"
                    style={{ background: 'var(--terra-pale)', color: 'var(--terra)', border: '1px solid rgba(196,98,58,0.2)' }}
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
                { icon: Target, title: 'Property Search', desc: 'Search and filter system for property listings with location, price, and type filters' },
                { icon: Rocket, title: 'Multi-tenant', desc: 'Separate data isolation for buyers, sellers, and agents with role-based permissions' },
                { icon: Smartphone, title: 'PWA Features', desc: 'Installable app with offline support, push notifications, and home screen access' }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="card-warm p-8 text-center group"
                  >
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center mx-auto mb-5"
                      style={{ background: 'var(--terra-pale)' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: 'var(--terra)' }} />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--ink)' }}>{item.title}</h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-faint)' }}>{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Platform Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-sm"
              style={{ background: 'var(--cream-dark)', border: '1px solid rgba(26,23,20,0.1)' }}
            >
              <h3 className="font-display text-2xl font-bold mb-8" style={{ color: 'var(--ink)' }}>Platform Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="font-display font-semibold mb-3" style={{ color: 'var(--ink)' }}>For Property Seekers</h4>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-muted)' }}>
                    Search properties by location, price range, and type. Save favorites, contact agents directly, and schedule viewings. Works offline with PWA caching.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Search & Filter', 'Save Listings', 'Offline Access'].map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-sm text-xs font-body font-medium"
                        style={{ background: 'var(--cream)', color: 'var(--ink-muted)', border: '1px solid rgba(26,23,20,0.1)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-3" style={{ color: 'var(--ink)' }}>PWA Capabilities</h4>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-muted)' }}>
                    Install on any device, receive push notifications for new listings, and browse properties offline with cached data and images.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Installable', 'Push Notifications', 'Offline Mode'].map(tag => (
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-sm" style={{ background: 'var(--cream)', border: '1px solid rgba(26,23,20,0.1)' }}>
                <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--ink)' }}>Key Decisions</h3>
                <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'var(--ink-muted)' }}>
                  Multi-tenant architecture using Supabase Row Level Security for complete data isolation between users while maintaining real-time updates. PWA features enable offline-first experience.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Database, title: 'Real-time Database', desc: 'PostgreSQL with live subscriptions' },
                    { icon: Shield, title: 'Secure Access', desc: 'Role-based permissions & encryption' },
                    { icon: Smartphone, title: 'PWA Architecture', desc: 'Service workers & offline caching' }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: 'var(--terra-pale)' }}>
                          <Icon className="w-4 h-4" style={{ color: 'var(--terra)' }} />
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
                    'Progressive Web App (PWA)',
                    'Supabase for auth and database',
                    'TypeScript for type safety',
                    'Service Workers for offline mode',
                    'Vercel for deployment'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--terra)' }} />
                      <span className="font-body text-sm" style={{ color: 'var(--ink-muted)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Challenges */}
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
                { title: 'Multi-tenant Data Isolation', desc: 'Implemented Supabase Row Level Security policies to ensure complete data separation between landlords, agents, and tenants. Each user only sees their own data.' },
                { title: 'PWA Implementation', desc: 'Built custom service worker with smart caching strategy for property listings and images. Users can browse previously viewed properties offline and receive push notifications.' },
                { title: 'Search Performance', desc: 'Built PostgreSQL full-text search with proper indexing. Optimized queries to handle property searches with multiple filters efficiently.' },
                { title: 'Mobile Responsiveness', desc: 'Designed mobile-first interface with Tailwind CSS. Optimized images and implemented lazy loading for better performance on mobile networks.' }
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
                  <div className="w-px flex-shrink-0 rounded-full self-stretch" style={{ background: 'var(--terra)', minHeight: '100%' }} />
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
            <div className="section-label justify-center mb-6" style={{ color: 'var(--terra-light)' }}>
              <span className="w-4 h-px inline-block" style={{ background: 'var(--terra-light)' }} />
              Live Platform
            </div>
            <h2 className="font-display text-4xl font-bold mb-4" style={{ color: 'var(--cream)' }}>Explore the Platform</h2>
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'rgba(245,240,232,0.65)' }}>
              See the property marketplace in action. Browse listings, test the search, and explore PWA features. Try installing it on your device!
            </p>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-sm font-body font-semibold text-sm transition-all"
              style={{ background: 'var(--terra)', color: 'var(--cream)' }}
            >
              <ExternalLink size={15} />
              View Live Platform
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}