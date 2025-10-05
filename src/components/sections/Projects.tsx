'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Zap, Users, Calendar, Folder } from 'lucide-react';
import { PROJECTS } from '../../lib/constants';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world applications solving complex business challenges
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 ${
                project.featured ? 'ring-2 ring-primary-200' : ''
              }`}
            >
              {/* Featured Project Header */}
              {project.featured && (
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star size={20} className="fill-current" />
                      <span className="font-semibold">Featured Project</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{project.duration || 'N/A'}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{project.teamSize || 'N/A'}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Folder size={16} />
                        <span>{project.category || 'Project'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-0">
                {/* Project Visual Section */}
                <div className="relative h-80 xl:h-full bg-gradient-to-br from-primary-500 via-primary-600 to-blue-600 p-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                      >
                        <div className="text-5xl font-bold mb-4">
                          {project.title.split(' ').map(word => word[0]).join('').substring(0, 2)}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{project.title.split(' - ')[0]}</h3>
                        <p className="text-primary-100 text-lg">
                          {project.title.split(' - ')[1] || project.category || 'Project'}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-6 left-6 w-4 h-4 bg-white/30 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-8 right-8 w-6 h-6 bg-white/20 rounded-full"
                  />
                </div>

                {/* Project Content */}
                <div className="p-8 xl:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl xl:text-3xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {project.status || 'Completed'}
                        </span>
                        <span className="text-gray-500 text-sm">{project.category || 'Web Application'}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Metrics - Only show if metrics exist */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-primary-50 rounded-lg">
                        <Zap size={20} className="mx-auto text-primary-600 mb-1" />
                        <div className="text-sm text-gray-600">Performance</div>
                        <div className="font-semibold text-gray-900">{project.metrics.performance}</div>
                      </div>
                      <div className="text-center p-3 bg-primary-50 rounded-lg">
                        <Users size={20} className="mx-auto text-primary-600 mb-1" />
                        <div className="text-sm text-gray-600">Users</div>
                        <div className="font-semibold text-gray-900">{project.metrics.users}</div>
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features - Only show if highlights exist */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.highlights.slice(0, 4).map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 text-center flex items-center justify-center"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-primary-300 hover:text-primary-600 transition-all duration-300 text-center flex items-center justify-center"
                    >
                      <Github size={18} className="mr-2" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                {/* Technologies for small cards */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-2">
                  <a
                    href={project.liveUrl}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                  >
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}