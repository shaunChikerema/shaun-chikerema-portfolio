// src/components/sections/Projects.tsx - BATTLE-READY WITH TYPE SAFETY
'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Building2, Target, Users, Zap, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../lib/constants';
import Link from 'next/link';

export default function Projects() {
  const featuredProjects = PROJECTS.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strategic Header */}
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
            <Building2 className="w-4 h-4 mr-2" />
            BITROOT Ecosystem
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
            Production Applications
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founder-led development of scalable platforms solving real problems in Botswana's digital economy
          </p>
        </motion.div>

        {/* Featured Projects - Strategic Business Cases */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-8 lg:p-10">
                  {/* Project Header with Strategic Positioning */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="mb-6 lg:mb-0 lg:flex-1">
                      <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Strategic Metadata */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200">
                          {project.status}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                          {project.duration}
                        </span>
                      </div>
                    </div>
                    
                    {/* Action Links */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                      <Link
                        href={`/projects/${project.title.toLowerCase().includes('keyat') ? 'keyat' : 'policybridge'}`}
                        className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 group/cta"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/cta:translate-x-1 transition-transform" />
                      </Link>
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:text-gray-900 transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live App
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:text-gray-900 transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Business Impact - Strategic Focus */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Target className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900">Market Position</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.businessImpact.market}
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900">Scalability</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.businessImpact.scalability}
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Zap className="w-5 h-5 text-purple-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900">Innovation</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.businessImpact.innovation}
                      </p>
                    </div>
                  </div>

                  {/* Key Technical Highlights */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Technical Foundation</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(project.techStack).map(([category, technologies]) => (
                        <div key={category} className="bg-white rounded-lg p-4 border border-gray-200">
                          <h5 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                            {category}
                          </h5>
                          <div className="space-y-1">
                            {technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                              <div key={techIndex} className="text-xs text-gray-600">
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Strategic Features Preview */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">Core Capabilities</h4>
                      <span className="text-sm text-gray-500">
                        {project.features.length} key features
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.features.slice(0, 3).map((feature, featureIndex: number) => (
                        <div key={featureIndex} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-colors">
                          <div className="text-xl mb-2">{feature.icon}</div>
                          <h5 className="font-medium text-gray-900 text-sm mb-1">{feature.title}</h5>
                          <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BITROOT Strategic Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-10 border border-gray-200 text-center">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
              BITROOT Technology Ecosystem
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
              Unified platform architecture serving multiple markets through shared infrastructure, 
              local payment integration, and scalable multi-tenant design.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Shared Authentication", value: "Cross-platform user management" },
                { label: "Local Payment Gateway", value: "Orange Money + banking integration" },
                { label: "Multi-tenant Architecture", value: "Secure data isolation" },
                { label: "Real-time Infrastructure", value: "Live updates & notifications" }
              ].map((item, index: number) => (
                <div key={index} className="text-center">
                  <div className="w-3 h-3 bg-gray-900 rounded-full mx-auto mb-2"></div>
                  <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}