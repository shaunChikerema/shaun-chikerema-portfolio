//src/components/sections/Contact.tsx
'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Building2, Calendar, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';
import { useState } from 'react';

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
      // In production, replace with your form submission service
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
      href: `mailto:${PERSONAL_INFO.email}?subject=Project Inquiry - ${PERSONAL_INFO.name}`,
      label: 'Email Directly',
      value: PERSONAL_INFO.email,
      description: 'For detailed project discussions'
    },
    {
      icon: Calendar,
      href: 'https://cal.com/shaunchikerema',
      label: 'Schedule Call',
      value: '30-min consultation',
      description: 'Discuss your project live'
    },
    {
      icon: Building2,
      href: '#',
      label: 'Based In',
      value: 'Gaborone, Botswana',
      description: 'Available locally & remotely'
    }
  ];

  const projectTypes = [
    'Full-Stack Web Application',
    'Mobile App Development',
    'SaaS Platform',
    'E-commerce Solution',
    'Real Estate Technology',
    'Insurance Technology',
    'Startup MVP',
    'Technical Consultation',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Founder Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            Founder-Led Development
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
            Build Your Vision<br />with Production Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let's architect scalable solutions for Botswana's market. From concept to production, 
            I bring founder-level thinking to every project.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Strategic Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 h-full">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Strategic Partnerships</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  {contactMethods.map((method, index) => (
                    <a
                      key={method.label}
                      href={method.href}
                      className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <method.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm mb-1">{method.label}</p>
                        <p className="text-gray-600 text-sm mb-1">{method.value}</p>
                        <p className="text-gray-500 text-xs">{method.description}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Response Guarantee */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">24-Hour Response</span>
                  </div>
                  <p className="text-gray-600 text-xs">
                    Get a detailed response within one business day. Founder-level attention guaranteed.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Strategic Project Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 h-full">
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent</h3>
                    <p className="text-gray-600 mb-6">
                      I'll review your project details and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                        <Send className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Project Inquiry</h3>
                        <p className="text-gray-600 text-sm">Describe your project for a detailed proposal</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 text-sm"
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 text-sm"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company / Organization
                          </label>
                          <input
                            type="text"
                            id="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 text-sm"
                            placeholder="Your company name"
                          />
                        </div>

                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                            Project Type *
                          </label>
                          <select
                            id="projectType"
                            required
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 text-sm bg-white"
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 text-sm resize-none"
                          placeholder="Describe your project goals, timeline, budget, and any specific Botswana market requirements..."
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? 'Sending...' : 'Get Detailed Proposal'}</span>
                      </button>

                      {submitStatus === 'error' && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-600 text-sm text-center"
                        >
                          Something went wrong. Please email directly at {PERSONAL_INFO.email}
                        </motion.p>
                      )}

                      <p className="text-gray-500 text-xs text-center">
                        Your information is secure. No spam, just professional communication about your project.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Botswana Market Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Botswana Market Expertise</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Building solutions specifically designed for Botswana's unique market dynamics, including 
              local payment integrations, mobile-first design, and understanding of regulatory requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Local Payment Integration",
                "Mobile-First Strategy", 
                "Regulatory Compliance",
                "Scalable Infrastructure"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}