'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const EMAIL = 'sschikerema@gmail.com';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    description: 'Best for project discussions',
    href: `mailto:${EMAIL}?subject=Project Inquiry`,
  },
  {
    icon: Send,
    label: 'WhatsApp',
    value: '+267 76 051 652',
    description: 'Quick questions & direct messages',
    href: 'https://wa.me/26776051652',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Gaborone, Botswana',
    description: 'Available for remote work worldwide',
    href: '#',
  },
];

const projectTypes = [
  'Full-Stack Web App',
  'Mobile App (React Native)',
  'SaaS Platform',
  'Real Estate Tech',
  'Insurance Tech',
  'MVP Development',
  'Technical Consulting',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', projectType: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', projectType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const labelClass = 'block font-body text-[10px] font-semibold uppercase tracking-[0.14em] mb-1.5';

  return (
    <section id="contact" style={{ background: 'var(--cream-mid)' }}>
      <div className="rule-thin" />

      <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-28 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <div className="section-label mb-4">
            <span style={{ width: 20, height: 1, background: 'var(--terra)', display: 'inline-block' }} />
            Let's Work Together
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-6">
              <h2
                className="font-display font-bold leading-tight"
                style={{ color: 'var(--ink)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
              >
                Have a <em style={{ color: 'var(--terra)' }}>project</em><br />in mind?
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="font-body text-base" style={{ color: 'var(--ink-muted)' }}>
                Full-stack engineer based in Gaborone, working with clients globally. Get in touch and I'll respond within 24 hours.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card p-7 h-full flex flex-col">
              <h3 className="font-display font-bold text-lg mb-5" style={{ color: 'var(--ink)' }}>Get in Touch</h3>

              <div className="space-y-2.5 mb-7">
                {contactMethods.map((m) => {
                  const MIcon = m.icon;
                  return (
                    <a
                      key={m.label}
                      href={m.href}
                      className="flex items-start gap-4 p-4 rounded-sm transition-colors group"
                      style={{ background: 'var(--cream-mid)', border: '1px solid var(--border)' }}
                      target={m.href.startsWith('http') ? '_blank' : undefined}
                      rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div
                        className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0"
                        style={{ background: 'var(--terra-pale)' }}
                      >
                        <MIcon className="w-3.5 h-3.5" style={{ color: 'var(--terra)' }} />
                      </div>
                      <div>
                        <p className="font-body font-semibold text-xs mb-0.5" style={{ color: 'var(--ink)' }}>{m.label}</p>
                        <p className="font-body text-sm mb-0.5" style={{ color: 'var(--ink-muted)' }}>{m.value}</p>
                        <p className="font-body text-xs" style={{ color: 'var(--ink-faint)' }}>{m.description}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Response time */}
              <div
                className="mt-auto p-4 rounded-sm"
                style={{ background: 'var(--terra-pale)', border: '1px solid rgba(192,87,46,0.15)' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--terra)' }} />
                  <span className="font-body font-semibold text-xs" style={{ color: 'var(--terra)' }}>24-hour response</span>
                </div>
                <p className="font-body text-xs" style={{ color: 'var(--terra)' }}>
                  I respond to all project inquiries within one business day.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card p-7 h-full">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'var(--terra-pale)' }}
                  >
                    <Send className="w-5 h-5" style={{ color: 'var(--terra)' }} />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-1.5" style={{ color: 'var(--ink)' }}>Message sent</h3>
                  <p className="font-body text-sm mb-5" style={{ color: 'var(--ink-muted)' }}>
                    I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="font-body text-sm font-medium underline underline-offset-4"
                    style={{ color: 'var(--terra)' }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: 'var(--terra)' }}>
                      <Send className="w-3.5 h-3.5" style={{ color: 'var(--cream)' }} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg" style={{ color: 'var(--ink)' }}>Project Inquiry</h3>
                      <p className="font-body text-xs" style={{ color: 'var(--ink-faint)' }}>Tell me about your project</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="name" className={labelClass} style={{ color: 'var(--ink-faint)' }}>Name *</label>
                        <input
                          type="text" id="name" required
                          value={form.name} onChange={handleChange}
                          className="input-field w-full px-3.5 py-2.5"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass} style={{ color: 'var(--ink-faint)' }}>Email *</label>
                        <input
                          type="email" id="email" required
                          value={form.email} onChange={handleChange}
                          className="input-field w-full px-3.5 py-2.5"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="company" className={labelClass} style={{ color: 'var(--ink-faint)' }}>Company</label>
                        <input
                          type="text" id="company"
                          value={form.company} onChange={handleChange}
                          className="input-field w-full px-3.5 py-2.5"
                          placeholder="Optional"
                        />
                      </div>
                      <div>
                        <label htmlFor="projectType" className={labelClass} style={{ color: 'var(--ink-faint)' }}>Project Type *</label>
                        <select
                          id="projectType" required
                          value={form.projectType} onChange={handleChange}
                          className="input-field w-full px-3.5 py-2.5"
                        >
                          <option value="">Select type</option>
                          {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass} style={{ color: 'var(--ink-faint)' }}>Project Details *</label>
                      <textarea
                        id="message" rows={5} required
                        value={form.message} onChange={handleChange}
                        className="input-field w-full px-3.5 py-2.5 resize-none"
                        placeholder="Describe your project, timeline, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="btn-primary w-full justify-center text-sm py-3 disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      {submitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'error' && (
                      <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="font-body text-xs text-center"
                        style={{ color: '#B91C1C' }}
                      >
                        Something went wrong. Please email me directly at {EMAIL}
                      </motion.p>
                    )}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="rule-thin" />
    </section>
  );
}