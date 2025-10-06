//src\app\projects\keyat\page.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Star, Calendar, Users, Folder, Zap, CheckCircle, MapPin, Building, Shield } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS } from '../../../lib/constants';

export default function KeyatProjectPage() {
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
      <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Star size={16} className="mr-2 fill-current" />
              Flagship Project
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
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
                  <Calendar className="text-orange-600" size={24} />
                  <div>
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-semibold text-gray-900">{project.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-orange-600" size={24} />
                  <div>
                    <div className="text-sm text-gray-600">Team</div>
                    <div className="font-semibold text-gray-900">{project.teamSize}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Folder className="text-orange-600" size={24} />
                  <div>
                    <div className="text-sm text-gray-600">Category</div>
                    <div className="font-semibold text-gray-900">{project.category}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="text-orange-600" size={24} />
                  <div>
                    <div className="text-sm text-gray-600">Status</div>
                    <div className="font-semibold text-green-600">{project.status}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-orange-600" size={24} />
                  <div>
                    <div className="text-sm text-gray-600">Market</div>
                    <div className="font-semibold text-gray-900">Botswana</div>
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
                  Keyat is Botswana's first comprehensive real estate super app, designed to transform 
                  the property market by connecting landlords, tenants, agents, and service providers 
                  in a unified ecosystem. The platform addresses the unique challenges of Botswana's 
                  real estate landscape with localized solutions.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  From property search and agent verification to moving services and financial solutions, 
                  Keyat provides end-to-end services tailored for the Botswana market, including 
                  integration with local payment methods like Orange Money and Mascom MyZaka.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-900 mb-2">Market Innovation</h4>
                  <p className="text-orange-800">
                    First platform to offer a complete real estate ecosystem in Botswana, combining 
                    property listings, verified agents, moving services, and financial solutions.
                  </p>
                </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate ecosystem designed for Botswana's market
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern, scalable architecture built for performance and growth
            </p>
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
                      <CheckCircle size={16} className="text-orange-600 mr-2 flex-shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Botswana-Specific Features */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-orange-900 mb-4">Botswana Market Integration</h2>
            <p className="text-xl text-orange-800 max-w-2xl mx-auto">
              Tailored specifically for Botswana's unique market needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 text-center"
            >
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Payments</h3>
              <p className="text-gray-600">Orange Money & Mascom MyZaka integration</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 text-center"
            >
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Market</h3>
              <p className="text-gray-600">Tailored for Botswana cities & property types</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 text-center"
            >
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Agents</h3>
              <p className="text-gray-600">Local agent network with Botswana credentials</p>
            </motion.div>
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

      {/* Business Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Impact</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6"
            >
              <Building className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Market Position</h3>
              <p className="text-gray-600">{project.businessImpact?.market}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6"
            >
              <Zap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Revenue Model</h3>
              <p className="text-gray-600">{project.businessImpact?.revenue}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Scalability</h3>
              <p className="text-gray-600">{project.businessImpact?.scalability}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6"
            >
              <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">{project.businessImpact?.innovation}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Botswana's Real Estate Revolution</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Explore the platform that's transforming how Botswana finds, rents, and manages properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={project.liveUrl}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                View Live Demo
              </a>
              <a
                href={project.githubUrl}
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
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