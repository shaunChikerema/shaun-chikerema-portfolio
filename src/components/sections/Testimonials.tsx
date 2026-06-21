'use client';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

/**
 * TODO — replace with real quotes from Alfa First and Paragon (and anyone
 * else you've shipped for). A real two-sentence quote from an actual client
 * is worth more than anything else on this page — ask for one next time you
 * wrap a project. Keep names/titles accurate; don't paraphrase the client.
 */
const TESTIMONIALS = [
  {
    quote: 'Add the real quote here — what the client said about working with you, in their words.',
    name: 'Client name',
    role: 'Role, Alfa First Projects',
    project: 'Alfa First Projects',
    accent: '#cc1f1f',
  },
  {
    quote: 'Add the real quote here — what the client said about working with you, in their words.',
    name: 'Client name',
    role: 'Role, Paragon Insurance Brokers',
    project: 'Paragon Insurance Brokers',
    accent: '#3ECF8E',
  },
  {
    quote: 'Add a third quote here, or remove this card — two strong testimonials beat three thin ones.',
    name: 'Client name',
    role: 'Role, company',
    project: 'Project name',
    accent: '#6366f1',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: 'var(--bg-section)' }}>
      <div className="divider" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

        {/* Header — same pattern as Skills/Contact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">Client Feedback</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-end">
            <div className="lg:col-span-6">
              <h2
                className="font-display font-bold leading-tight"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: 'var(--ink)', letterSpacing: '-0.025em' }}
              >
                What clients<br />
                <em style={{ color: '#3ECF8E' }}>actually say.</em>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-muted)', lineHeight: 1.8 }}>
                Direct from the people who hired me, not a marketing line.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card p-7 flex flex-col"
              style={{ borderTop: `2px solid ${t.accent}` }}
            >
              <Quote
                className="w-5 h-5 mb-4"
                style={{ color: t.accent, opacity: 0.5 }}
                aria-hidden
              />

              <p
                className="font-body text-sm leading-relaxed mb-6 flex-1"
                style={{ color: 'var(--ink)', lineHeight: 1.75 }}
              >
                {t.quote}
              </p>

              <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="font-body font-semibold text-sm" style={{ color: 'var(--ink)' }}>
                  {t.name}
                </p>
                <p className="font-body text-xs" style={{ color: 'var(--ink-muted)' }}>
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <div className="divider" />
    </section>
  );
}
