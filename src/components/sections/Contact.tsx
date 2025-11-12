'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, Send, Zap } from 'lucide-react';
import { useState } from 'react';

// Mock constant - replace with your actual import
const PERSONAL_INFO = {
  email: 'sschikerema@gmail.com'
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', projectType: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      href: `mailto:${PERSONAL_INFO.email}?subject=Project Inquiry`,
      label: 'Email',
      value: PERSONAL_INFO.email,
      description: 'Best for detailed discussions'
    },
    {
      icon: Calendar,
      href: 'https://cal.com/shaunchikerema',
      label: 'Schedule Call',
      value: '30-min chat',
      description: 'Discuss your project live'
    },
    {
      icon: MapPin,
      href: '#',
      label: 'Location',
      value: 'Gaborone, Botswana',
      description: 'Available locally & remote'
    }
  ];

  const projectTypes = [
    'Full-Stack Web App',
    'Mobile App (React Native)',
    'SaaS Platform',
    'Real Estate Tech',
    'Insurance Tech',
    'MVP Development',
    'Technical Consulting',
    'Other'
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 text-sm font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>Let's Work Together</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 max-w-3xl">
            Have a Project?
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            I build production SaaS platforms from architecture to deployment. Based in Gaborone, working with clients across Botswana.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-zinc-900/50 rounded-xl p-6 lg:p-8 border border-zinc-800 h-full">
                <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
                
                <div className="space-y-4 mb-8">
                  {contactMethods.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      className="flex items-start p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors duration-200 group"
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <method.icon className="w-5 h-5 text-black" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-white text-sm mb-1">{method.label}</p>
                        <p className="text-zinc-300 text-sm mb-1">{method.value}</p>
                        <p className="text-zinc-500 text-xs">{method.description}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Response Time */}
                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="font-semibold text-white text-sm">24-Hour Response</span>
                  </div>
                  <p className="text-zinc-400 text-xs">
                    I respond to all inquiries within one business day.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-zinc-900/50 rounded-xl p-6 lg:p-8 border border-zinc-800 h-full">
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-zinc-400 mb-6">
                      I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="text-white font-medium hover:text-zinc-300 transition-colors duration-200"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <Send className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">Project Inquiry</h3>
                        <p className="text-zinc-400 text-sm">Tell me about your project</p>
                      </div>
                    </div>

                    <div className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm placeholder:text-zinc-600"
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm placeholder:text-zinc-600"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
                            Company (Optional)
                          </label>
                          <input
                            type="text"
                            id="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm placeholder:text-zinc-600"
                            placeholder="Your company"
                          />
                        </div>

                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium text-zinc-300 mb-2">
                            Project Type *
                          </label>
                          <select
                            id="projectType"
                            required
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm"
                          >
                            <option value="">Select type</option>
                            {projectTypes.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm resize-none placeholder:text-zinc-600"
                          placeholder="Describe your project, timeline, and any specific requirements..."
                        ></textarea>
                      </div>
                      
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-white text-black py-4 px-6 rounded-lg font-semibold hover:bg-zinc-100 transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      </button>

                      {submitStatus === 'error' && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-400 text-sm text-center"
                        >
                          Something went wrong. Please email me directly at {PERSONAL_INFO.email}
                        </motion.p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Working Across Botswana</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Local expertise with global standards. I understand Botswana's market dynamics, integrate local payment systems, 
              and build mobile-first solutions for our market.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Local Payment Integration",
                "Mobile-First Design", 
                "Fast Shipping (4-6 weeks)",
                "Post-Launch Support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm text-zinc-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}