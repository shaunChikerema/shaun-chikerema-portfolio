//src/components/sections/About.tsx
'use client';
import { motion } from 'framer-motion';
import { EDUCATION } from '../../lib/constants';
import { MapPin, GraduationCap, Building2, Target, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Clean & Professional */}
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
            <MapPin className="w-4 h-4 mr-2" />
            From Botswana to Global Tech
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
            Building the Future of<br />African Technology
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Software Engineer & Founder architecting scalable solutions for Botswana and beyond
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Founder Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Founder Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Founder & Ecosystem Builder</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      I'm building <strong>BITROOT</strong> - a technology ecosystem designed to solve real problems in Botswana's digital landscape. 
                      Unlike traditional developers, I approach software engineering from a founder's perspective, focusing on scalable architecture, 
                      business impact, and sustainable growth.
                    </p>
                    <p>
                      My work on <strong>Keyat</strong> (Botswana's first comprehensive real estate platform) and <strong>PolicyBridge</strong> (insurance SaaS) 
                      demonstrates my commitment to building production-ready applications that serve actual market needs.
                    </p>
                    <p>
                      Being based in <strong>Gaborone, Botswana</strong> gives me unique insights into emerging market challenges and opportunities 
                      that many international developers overlook.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Technical Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Technical Philosophy</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>System Design First:</strong> Architect for scale from day one, not as an afterthought</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Production Focus:</strong> Build applications that handle real users and real data</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Local Context:</strong> Integrate Botswana-specific solutions like Orange Money payments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Impact Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "2", label: "Live Products", description: "Keyat & PolicyBridge in production" },
                { number: "10K+", label: "Target Users", description: "Across Botswana market" },
                { number: "100%", label: "Founder-Led", description: "Full-stack development" },
                { number: "4", label: "Tech Stack", description: "Modern, scalable technologies" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-gray-200 text-center"
                >
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Education & Context */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>

              <div className="space-y-4">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                    <p className="text-gray-600 text-sm mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-xs mb-3">{edu.period} • {edu.location}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.slice(0, 3).map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Botswana Context */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Botswana Focus</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building technology solutions specifically designed for Botswana's unique market dynamics, 
                including local payment integrations, mobile-first design, and solutions that address 
                real challenges faced by businesses and consumers in our region.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}