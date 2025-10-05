'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Star, Calendar, Users, Folder, Zap, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS } from '../../../lib/constants';

export default function PolicyBridgePage() {
  const project = PROJECTS.find(p => p.id === 1);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/#projects" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Projects
            </Link>
            <div className="flex space-x-4">
              <a
                href={project.liveUrl}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 flex items-center"
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:border-primary-300 hover:text-primary-600 transition-all duration-300 flex items-center"
              >
                <Github size={18} className="mr-2" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Star size={16} className="mr-2 fill-current" />
              Featured Project
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-50 rounded-2xl p-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-primary-600" size={24} />
                  <div>
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-semibold text-gray-900">{project.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-primary-600" size={24} />
                  <div>
                    <div className="text-sm text-gray-600">Team</div>
                    <div className="font-semibold text-gray-900">{project.teamSize}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Folder className="text-primary-600" size={24} />
                  <div>
                    <div className="text-sm text-gray-600">Category</div>
                    <div className="font-semibold text-gray-900">{project.category}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="text-primary-600" size={24} />
                  <div>
                    <div className="text-sm text-gray-600">Status</div>
                    <div className="font-semibold text-green-600">{project.status}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="text-lg leading-relaxed mb-6">
                  PolicyBridge is a comprehensive SaaS platform designed specifically for insurance brokers 
                  to digitalize their entire workflow. From client onboarding to policy management and 
                  automated financial documentation, the platform provides a seamless experience for both 
                  brokers and their clients.
                </p>
                <p className="text-lg leading-relaxed">
                  The system features advanced payslip generation capabilities, real-time analytics, 
                  and secure multi-tenant architecture, making it suitable for insurance agencies of all sizes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive features designed to streamline insurance operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features?.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(project.techStack || {}).map(([category, technologies], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-4 capitalize">{category}</h3>
                <ul className="space-y-2">
                  {technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-center text-gray-600">
                      <CheckCircle size={16} className="text-primary-600 mr-2 flex-shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenges</h2>
              <ul className="space-y-4">
                {project.challenges?.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Solutions</h2>
              <ul className="space-y-4">
                {project.solutions?.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to See It in Action?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Explore the live demo or dive into the source code to see how PolicyBridge solves real-world insurance management challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={project.liveUrl}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                View Live Demo
              </a>
              <a
                href={project.githubUrl}
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Explore Source Code
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}