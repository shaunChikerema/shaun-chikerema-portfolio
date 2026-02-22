'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const PERSONAL_INFO = { email: 'sschikerema@gmail.com' };

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', projectType: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', projectType: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactMethods = [
    { icon: Mail, href: `mailto:${PERSONAL_INFO.email}?subject=Project Inquiry`, label: 'Email', value: PERSONAL_INFO.email, description: 'Best for detailed discussions' },
    { icon: Send, href: 'https://wa.me/26776051652', label: 'WhatsApp', value: '+267 76 051 622', description: 'Message me directly' },
    { icon: MapPin, href: '#', label: 'Location', value: 'Gaborone, Botswana', description: 'Remote work worldwide' }
  ];

  const projectTypes = ['Full-Stack Web App', 'Mobile App (React Native)', 'SaaS Platform', 'Real Estate Tech', 'Insurance Tech', 'MVP Development', 'Technical Consulting', 'Other'];

  const inputClass = "input-warm w-full px-4 py-3 text-sm font-body";
  const labelClass = "block font-body text-xs font-medium uppercase tracking-wider mb-2";

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: 'var(--cream-dark)' }}>
      <div className="rule-ornate" />

      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="section-label mb-5">
            <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
            Let's Work Together
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-4" style={{ color: 'var(--ink)' }}>
            Have a <em style={{ color: 'var(--terra)' }}>Project?</em>
          </h2>
          <p className="font-body text-base leading-relaxed max-w-lg" style={{ color: 'var(--ink-muted)' }}>
            Full-stack engineer building web applications. Based in Gaborone, working with clients globally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="p-8 rounded-sm h-full" style={{ background: 'var(--cream)', border: '1px solid rgba(26,23,20,0.1)' }}>
              <h3 className="font-display text-xl font-bold mb-6" style={{ color: 'var(--ink)' }}>Get In Touch</h3>

              <div className="space-y-3 mb-8">
                {contactMethods.map(m => {
                  const MIcon = m.icon;
                  return (
                    <a
                      key={m.label}
                      href={m.href}
                      className="flex items-start gap-4 p-4 rounded-sm transition-all group"
                      style={{ background: 'var(--cream-dark)', border: '1px solid rgba(26,23,20,0.08)' }}
                      target={m.href.startsWith('http') ? '_blank' : undefined}
                      rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div
                        className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                        style={{ background: 'var(--terra-pale)' }}
                      >
                        <MIcon className="w-4 h-4" style={{ color: 'var(--terra)' }} />
                      </div>
                      <div>
                        <p className="font-body font-medium text-sm mb-0.5" style={{ color: 'var(--ink)' }}>{m.label}</p>
                        <p className="font-body text-sm mb-0.5" style={{ color: 'var(--ink-muted)' }}>{m.value}</p>
                        <p className="font-body text-xs" style={{ color: 'var(--ink-faint)' }}>{m.description}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Response time */}
              <div className="p-4 rounded-sm" style={{ background: 'var(--terra-pale)', border: '1px solid rgba(196,98,58,0.15)' }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--terra)' }} />
                  <span className="font-body font-medium text-sm" style={{ color: 'var(--terra)' }}>24-Hour Response</span>
                </div>
                <p className="font-body text-xs" style={{ color: 'var(--terra)' }}>
                  I respond to all inquiries within one business day.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="p-8 lg:p-10 rounded-sm h-full" style={{ background: 'var(--cream)', border: '1px solid rgba(26,23,20,0.1)' }}>
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-6" style={{ background: 'var(--terra-pale)' }}>
                    <Send className="w-7 h-7" style={{ color: 'var(--terra)' }} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2" style={{ color: 'var(--ink)' }}>Message Sent!</h3>
                  <p className="font-body text-sm mb-6" style={{ color: 'var(--ink-muted)' }}>I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="font-body text-sm font-medium underline underline-offset-4 transition-colors"
                    style={{ color: 'var(--terra)' }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ background: 'var(--terra)' }}>
                      <Send className="w-4 h-4" style={{ color: 'var(--cream)' }} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold" style={{ color: 'var(--ink)' }}>Project Inquiry</h3>
                      <p className="font-body text-sm" style={{ color: 'var(--ink-faint)' }}>Tell me about your project</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className={labelClass} style={{ color: 'var(--ink-faint)' }}>Name *</label>
                        <input type="text" id="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass} style={{ color: 'var(--ink-faint)' }}>Email *</label>
                        <input type="email" id="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className={labelClass} style={{ color: 'var(--ink-faint)' }}>Company (Optional)</label>
                        <input type="text" id="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Your company" />
                      </div>
                      <div>
                        <label htmlFor="projectType" className={labelClass} style={{ color: 'var(--ink-faint)' }}>Project Type *</label>
                        <select id="projectType" required value={formData.projectType} onChange={handleChange} className={inputClass}>
                          <option value="">Select type</option>
                          {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass} style={{ color: 'var(--ink-faint)' }}>Project Details *</label>
                      <textarea
                        id="message" rows={5} required value={formData.message} onChange={handleChange}
                        className={`${inputClass} resize-none`}
                        placeholder="Describe your project, timeline, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-sm font-body font-semibold text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                      style={{ background: 'var(--ink)', color: 'var(--cream)' }}
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {submitStatus === 'error' && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-body text-sm text-center" style={{ color: '#C0392B' }}>
                        Something went wrong. Please email me at {PERSONAL_INFO.email}
                      </motion.p>
                    )}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom services note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-8 rounded-sm"
          style={{ background: 'var(--cream)', border: '1px solid rgba(26,23,20,0.1)' }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold mb-1" style={{ color: 'var(--ink)' }}>Remote-First Development</h3>
              <p className="font-body text-sm" style={{ color: 'var(--ink-muted)' }}>
                Based in Gaborone, working globally — ongoing support for all projects.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Full-Stack Development", "Mobile-First Design", "4–6 Week Delivery", "Post-Launch Support"].map(f => (
                <span key={f} className="px-3 py-1.5 rounded-sm text-xs font-body font-medium"
                  style={{ background: 'var(--cream-dark)', color: 'var(--ink-muted)', border: '1px solid rgba(26,23,20,0.1)' }}>
                  {f}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="rule-ornate" />
    </section>
  );
}