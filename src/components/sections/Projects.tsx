//src/components/sections/Projects.tsx
'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Zap, Users } from 'lucide-react';
import { PROJECTS } from '../../lib/constants';

export default function Projects() {
  const featuredProjects = PROJECTS.filter(project => project.featured);
  const otherProjects = PROJECTS.filter(project => !project.featured);

  return (
    <section id="projects" className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-world applications and solutions I've built
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Visual */}
                <div className="relative h-64 lg:h-full bg-gradient-to-br from-primary-500 to-blue-600 p-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                      >
                        <div className="flex items-center justify-center mb-3">
                          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-2" />
                          <span className="font-semibold">Featured</span>
                        </div>
                        <h3 className="text-xl font-bold">{project.title.split(' - ')[0]}</h3>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-8">
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {project.status || 'Completed'}
                      </span>
                      <span className="text-gray-500 text-sm">{project.category}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center p-2 bg-primary-50 rounded-lg">
                        <Zap className="w-4 h-4 mx-auto text-primary-600 mb-1" />
                        <div className="text-xs text-gray-600">Performance</div>
                        <div className="text-sm font-semibold text-gray-900">{project.metrics.performance}</div>
                      </div>
                      <div className="text-center p-2 bg-primary-50 rounded-lg">
                        <Users className="w-4 h-4 mx-auto text-primary-600 mb-1" />
                        <div className="text-xs text-gray-600">Users</div>
                        <div className="text-sm font-semibold text-gray-900">{project.metrics.users}</div>
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 5).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 text-center flex items-center justify-center text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:border-primary-300 hover:text-primary-600 transition-all duration-300 text-center flex items-center justify-center text-sm"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Project Header */}
                <div className="mb-3">
                  <h4 className="font-bold text-gray-900 mb-1">{project.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{project.category}</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
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

                {/* Links */}
                <div className="flex space-x-2">
                  <a
                    href={project.liveUrl}
                    className="flex-1 text-primary-600 hover:text-primary-700 text-sm font-medium text-center py-2 border border-primary-200 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 text-gray-600 hover:text-gray-800 text-sm font-medium text-center py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
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