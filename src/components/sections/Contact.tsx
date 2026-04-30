'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import type React from 'react';

const EMAIL = 'shaunchikerema28@gmail.com';

function WhatsAppIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const WA_NUMBER = '26776051623';
const WA_MESSAGE = encodeURIComponent("Hi Shaun, I'd like to discuss a project with you.");
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const METHODS = [
  { icon: Mail,         label: 'Email',     value: EMAIL,                note: 'Best for project discussions',      href: `mailto:${EMAIL}?subject=Project Inquiry`, isWA: false },
  { icon: WhatsAppIcon, label: 'WhatsApp',  value: '+267 76 051 623',    note: 'Direct messages & quick questions', href: WA_HREF,                                   isWA: true  },
  { icon: MapPin,       label: 'Location',  value: 'Gaborone, Botswana', note: 'Remote work worldwide',             href: '#',                                        isWA: false },
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
    <section id="contact" style={{ background: 'var(--bg-section)' }}>
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
                <em style={{ color: '#3ECF8E' }}>in mind?</em>
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
                    style={{
                      background: 'var(--bg-field)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ background: m.isWA ? 'rgba(37,211,102,0.12)' : 'rgba(62,207,142,0.1)' }}
                    >
                      <MIcon className="w-3.5 h-3.5" style={{ color: m.isWA ? '#25D366' : '#3ECF8E' }} />
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
              style={{ background: 'rgba(62,207,142,0.08)', border: '1px solid rgba(62,207,142,0.2)' }}
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full dot-pulse" style={{ background: '#3ECF8E' }} />
                <span className="font-body font-semibold text-xs" style={{ color: '#2bb378' }}>24-hour response</span>
              </div>
              <p className="font-body text-xs" style={{ color: '#2bb378' }}>
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
                <div className="w-11 h-11 rounded-sm flex items-center justify-center mb-5" style={{ background: 'rgba(62,207,142,0.1)' }}>
                  <Send className="w-5 h-5" style={{ color: '#3ECF8E' }} />
                </div>
                <h3 className="font-display font-bold text-xl mb-2" style={{ color: 'var(--ink)' }}>Message sent</h3>
                <p className="font-body text-sm mb-6" style={{ color: 'var(--ink-muted)' }}>
                  I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="font-body text-sm font-medium underline underline-offset-4"
                  style={{ color: '#3ECF8E', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: '#3ECF8E' }}>
                    <Send className="w-3.5 h-3.5" style={{ color: '#ffffff' }} />
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
                      className="font-body text-xs text-center" style={{ color: '#e63946' }}>
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