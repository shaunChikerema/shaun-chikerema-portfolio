'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const EMAIL = 'sschikerema@gmail.com';

const METHODS = [
  { icon: Mail,   label: 'Email',     value: EMAIL,               note: 'Best for project discussions',    href: `mailto:${EMAIL}?subject=Project Inquiry` },
  { icon: Send,   label: 'WhatsApp',  value: '+267 76 051 652',   note: 'Direct messages & quick questions', href: 'https://wa.me/26776051652' },
  { icon: MapPin, label: 'Location',  value: 'Gaborone, Botswana', note: 'Remote work worldwide',           href: '#' },
];

const TYPES = [
  'Full-Stack Web App', 'SaaS Platform', 'Real Estate Tech',
  'Insurance Tech', 'Mobile App', 'MVP Development',
  'Technical Consulting', 'Other',
];

type Status = 'idle' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', projectType: '', message: '' });
  const [busy, setBusy]     = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.id]: e.target.value }));

  const onSubmit = async () => {
    setBusy(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ name: '', email: '', company: '', projectType: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setBusy(false);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const lbl = 'font-body block mb-1.5 font-semibold uppercase tracking-widest text-[10px]';

  return (
    <section id="contact" style={{ background: 'var(--cream-mid)' }}>
      <div className="divider" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">Let's Work Together</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-end">
            <div className="lg:col-span-6">
              <h2
                className="font-display font-bold leading-tight"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: 'var(--ink)', letterSpacing: '-0.025em' }}
              >
                Have a project<br />
                <em style={{ color: 'var(--terra)' }}>in mind?</em>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                Based in Gaborone, working with clients globally. I respond to all inquiries within one business day.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="card p-7 flex flex-col"
          >
            <h3 className="font-display font-bold text-lg mb-6" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>
              Get in touch
            </h3>

            <div className="space-y-2.5 mb-7">
              {METHODS.map(m => {
                const MIcon = m.icon;
                return (
                  <a
                    key={m.label}
                    href={m.href}
                    target={m.href.startsWith('http') ? '_blank' : undefined}
                    rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3.5 p-4 rounded-sm group transition-colors"
                    style={{ background: 'var(--cream-mid)', border: '1px solid var(--border)' }}
                  >
                    <div
                      className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--terra-pale)' }}
                    >
                      <MIcon className="w-3.5 h-3.5" style={{ color: 'var(--terra)' }} />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-xs mb-0.5" style={{ color: 'var(--ink)' }}>{m.label}</p>
                      <p className="font-body text-sm mb-0.5" style={{ color: 'var(--ink-mid)' }}>{m.value}</p>
                      <p className="font-body text-xs" style={{ color: 'var(--ink-muted)' }}>{m.note}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Response note */}
            <div
              className="mt-auto p-4 rounded-sm"
              style={{ background: 'var(--terra-pale)', border: '1px solid rgba(190,84,48,0.14)' }}
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--terra)' }} />
                <span className="font-body font-semibold text-xs" style={{ color: 'var(--terra)' }}>24-hour response</span>
              </div>
              <p className="font-body text-xs" style={{ color: 'var(--terra)' }}>
                All project inquiries answered within one business day.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="card p-7"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-11 h-11 rounded-sm flex items-center justify-center mb-5" style={{ background: 'var(--terra-pale)' }}>
                  <Send className="w-5 h-5" style={{ color: 'var(--terra)' }} />
                </div>
                <h3 className="font-display font-bold text-xl mb-2" style={{ color: 'var(--ink)' }}>Message sent</h3>
                <p className="font-body text-sm mb-6" style={{ color: 'var(--ink-muted)' }}>
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
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: 'var(--terra)' }}>
                    <Send className="w-3.5 h-3.5" style={{ color: 'var(--cream)' }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg" style={{ color: 'var(--ink)', letterSpacing: '-0.015em' }}>Project Inquiry</h3>
                    <p className="font-body text-xs" style={{ color: 'var(--ink-muted)' }}>Tell me about your project</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className={lbl} style={{ color: 'var(--ink-muted)' }}>Name *</label>
                      <input id="name" type="text" required value={form.name} onChange={onChange}
                        className="field" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className={lbl} style={{ color: 'var(--ink-muted)' }}>Email *</label>
                      <input id="email" type="email" required value={form.email} onChange={onChange}
                        className="field" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="company" className={lbl} style={{ color: 'var(--ink-muted)' }}>Company</label>
                      <input id="company" type="text" value={form.company} onChange={onChange}
                        className="field" placeholder="Optional" />
                    </div>
                    <div>
                      <label htmlFor="projectType" className={lbl} style={{ color: 'var(--ink-muted)' }}>Project Type *</label>
                      <select id="projectType" required value={form.projectType} onChange={onChange} className="field">
                        <option value="">Select type</option>
                        {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={lbl} style={{ color: 'var(--ink-muted)' }}>Project Details *</label>
                    <textarea
                      id="message" rows={5} required value={form.message} onChange={onChange}
                      className="field resize-none"
                      placeholder="Describe your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="button" onClick={onSubmit} disabled={busy}
                    className="btn btn-dark w-full py-3 text-sm disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {busy ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'error' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      className="font-body text-xs text-center" style={{ color: '#B91C1C' }}>
                      Something went wrong. Email me directly at {EMAIL}
                    </motion.p>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </div>

      </div>
      <div className="divider" />
    </section>
  );
}