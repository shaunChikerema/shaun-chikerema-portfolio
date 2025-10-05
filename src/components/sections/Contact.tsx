//src/components/sections/Contact.tsx
'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information - 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Get in Touch</h3>
                </div>
                
                <div className="space-y-4">
                  {/* Email */}
                  <motion.a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 border border-primary-200 group-hover:border-primary-300">
                      <Mail className="text-primary-600 w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-xs">Email</p>
                      <p className="text-gray-900 font-semibold text-sm">{PERSONAL_INFO.email}</p>
                    </div>
                  </motion.a>

                  {/* Phone */}
                  {PERSONAL_INFO.phone && (
                    <motion.a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 border border-blue-200 group-hover:border-blue-300">
                        <Phone className="text-blue-600 w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs">Phone</p>
                        <p className="text-gray-900 font-semibold text-sm">{PERSONAL_INFO.phone}</p>
                      </div>
                    </motion.a>
                  )}

                  {/* Location */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-3 bg-green-50 rounded-xl transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 border border-green-200">
                      <MapPin className="text-green-600 w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-xs">Location</p>
                      <p className="text-gray-900 font-semibold text-sm">{PERSONAL_INFO.location}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Quick Note */}
                <div className="mt-6 p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 text-xs text-center">
                    Typically reply within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 h-full">
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm bg-gray-50/50"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm bg-gray-50/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm bg-gray-50/50 resize-none"
                      placeholder="Tell me about your project, timeline, and budget..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-primary-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </motion.button>

                  <p className="text-gray-500 text-xs text-center">
                    * Required fields. Your information is secure and will never be shared.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 border border-primary-100 max-w-2xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-2">Open for New Opportunities</h3>
            <p className="text-gray-600 text-sm">
              Currently available for freelance projects and full-time positions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}