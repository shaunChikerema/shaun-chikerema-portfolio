//src/components/sections/Projects.tsx
'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Zap, Users, Rocket } from 'lucide-react';
import { PROJECTS } from '../../lib/constants';

export default function Projects() {
  const featuredProjects = PROJECTS.filter(project => project.featured);
  const otherProjects = PROJECTS.filter(project => !project.featured);

  return (
    <section id="projects" className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium mb-6"
          >
            <Rocket className="w-4 h-4 mr-2" />
            My Work
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-world applications and solutions I've built with modern technologies
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
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Visual */}
                <div className="relative h-64 lg:h-full bg-gradient-to-br from-primary-500 to-blue-600 p-6 overflow-hidden">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                      >
                        <motion.div
                          initial={{ rotate: -10, scale: 0 }}
                          whileInView={{ rotate: 0, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="flex items-center justify-center mb-3"
                        >
                          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-2" />
                          <span className="font-semibold">Featured</span>
                        </motion.div>
                        <h3 className="text-xl font-bold">{project.title.split(' - ')[0]}</h3>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-8">
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200">
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
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="grid grid-cols-2 gap-3 mb-4"
                    >
                      <div className="text-center p-3 bg-primary-50 rounded-lg border border-primary-100 group-hover:border-primary-200 transition-colors duration-300">
                        <Zap className="w-4 h-4 mx-auto text-primary-600 mb-1" />
                        <div className="text-xs text-gray-600">Performance</div>
                        <div className="text-sm font-semibold text-gray-900">{project.metrics.performance}</div>
                      </div>
                      <div className="text-center p-3 bg-primary-50 rounded-lg border border-primary-100 group-hover:border-primary-200 transition-colors duration-300">
                        <Users className="w-4 h-4 mx-auto text-primary-600 mb-1" />
                        <div className="text-xs text-gray-600">Users</div>
                        <div className="text-sm font-semibold text-gray-900">{project.metrics.users}</div>
                      </div>
                    </motion.div>
                  )}

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 + techIndex * 0.05 }}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-200 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs border border-gray-200">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 text-center flex items-center justify-center text-sm shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 text-center flex items-center justify-center text-sm shadow-sm hover:shadow-md"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </motion.a>
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
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Project Header */}
                <div className="mb-3">
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{project.category}</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full border border-green-200">
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
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs border border-gray-200 group-hover:border-gray-300 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs border border-gray-200">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex space-x-2">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 text-primary-600 hover:text-primary-700 text-sm font-medium text-center py-2 border border-primary-200 rounded-lg hover:bg-primary-50 transition-all duration-300"
                  >
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 text-gray-600 hover:text-gray-800 text-sm font-medium text-center py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    Code
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}