//src\components\sections\Contact.tsx
'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Interested in working together? Let's talk about your project.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Email</p>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-gray-900 font-semibold hover:text-primary-600 transition-colors duration-300"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Location</p>
                    <p className="text-gray-900 font-semibold">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}