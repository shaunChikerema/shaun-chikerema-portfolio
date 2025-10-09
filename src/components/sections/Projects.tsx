//src/components/sections/Projects.tsx
'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Building2, Users, Target, Zap } from 'lucide-react';
import { PROJECTS } from '../../lib/constants';

export default function Projects() {
  const featuredProjects = PROJECTS.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20 max-w-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium mb-6"
          >
            <Building2 className="w-4 h-4 mr-2" />
            Production Applications
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 max-w-full px-4">
            Building Botswana's Digital Future
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Production-scale applications solving real problems in Botswana's evolving market
          </p>
        </motion.div>

        {/* Featured Projects - Business Case Studies */}
        <div className="space-y-20 max-w-6xl mx-auto w-full px-4 sm:px-0">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 w-full overflow-hidden"
            >
              <div className="p-6 lg:p-8 w-full">
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 w-full">
                  <div className="mb-6 lg:mb-0 w-full lg:w-auto">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3 break-words">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200">
                        {project.status}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
                        {project.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex space-x-3 flex-wrap gap-2">
                    <a
                      href={project.liveUrl}
                      className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 text-sm flex-shrink-0"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Application
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:text-gray-900 transition-colors duration-300 text-sm flex-shrink-0"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </div>
                </div>

                {/* Business Impact - SAFE ACCESS */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 w-full">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 w-full">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="w-4 h-4 text-gray-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">Market Impact</span>
                    </div>
                    <p className="text-gray-600 text-sm break-words">
                      {project.businessImpact?.market || project.highlights?.[0] || "First comprehensive platform in its category"}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 w-full">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-4 h-4 text-gray-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">Scale</span>
                    </div>
                    <p className="text-gray-600 text-sm break-words">
                      {project.businessImpact?.scalability || project.metrics?.users || "Designed for scalable growth"}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 w-full">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-4 h-4 text-gray-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">Innovation</span>
                    </div>
                    <p className="text-gray-600 text-sm break-words">
                      {project.businessImpact?.innovation || project.highlights?.[1] || "Local market integration and automation"}
                    </p>
                  </div>
                </div>

                {/* Problem & Solution - SAFE ACCESS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 w-full">
                  <div className="w-full">
                    <h4 className="font-semibold text-gray-900 mb-3">The Challenge</h4>
                    <ul className="space-y-2">
                      {(project.challenges || [
                        "Building scalable architecture for multiple user types",
                        "Implementing Botswana-specific solutions",
                        "Creating intuitive user experiences"
                      ]).slice(0, 3).map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm break-words">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full">
                    <h4 className="font-semibold text-gray-900 mb-3">The Solution</h4>
                    <ul className="space-y-2">
                      {(project.solutions || [
                        "Multi-tenant architecture with role-based access",
                        "Local payment integration and market-specific features",
                        "Modern tech stack with focus on performance"
                      ]).slice(0, 3).map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm break-words">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technical Architecture - SAFE ACCESS */}
                <div className="mb-6 w-full">
                  <h4 className="font-semibold text-gray-900 mb-4">Technical Architecture</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                    {Object.entries({
                      frontend: project.techStack?.frontend || ["Next.js", "TypeScript", "React"],
                      backend: project.techStack?.backend || ["Node.js", "PostgreSQL", "Supabase"],
                      tools: project.techStack?.tools || ["Git", "Vercel", "Docker"],
                      integrations: project.techStack?.integrations || ["Payment APIs", "Real-time Features"]
                    }).map(([category, technologies]) => (
                      <div key={category} className="bg-gray-50 rounded-lg p-3 border border-gray-200 w-full">
                        <div className="text-xs font-semibold text-gray-900 mb-2 capitalize break-words">
                          {category}
                        </div>
                        <div className="space-y-1">
                          {technologies.slice(0, 3).map((tech, techIndex) => (
                            <div key={techIndex} className="text-xs text-gray-600 break-words">
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features - SAFE ACCESS */}
                <div className="w-full">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                    {(project.features || [
                      { title: "Multi-tenant Architecture", description: "Role-based access and data isolation", icon: "🏗️" },
                      { title: "Local Integration", description: "Botswana-specific payment and features", icon: "🌍" },
                      { title: "Real-time Updates", description: "Live data synchronization and notifications", icon: "⚡" }
                    ]).slice(0, 6).map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-white rounded-lg p-3 border border-gray-200 w-full break-words">
                        <div className="text-lg mb-1">{feature.icon}</div>
                        <div className="font-medium text-gray-900 text-sm mb-1 break-words">{feature.title}</div>
                        <div className="text-gray-600 text-xs break-words">{feature.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BITROOT Ecosystem Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto w-full px-4 sm:px-0"
        >
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-200 text-center w-full">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 break-words">BITROOT Technology Ecosystem</h3>
            <p className="text-gray-600 leading-relaxed mb-6 break-words">
              These production applications are part of the BITROOT ecosystem - a unified technology 
              platform designed to solve interconnected challenges in Botswana's digital landscape. 
              Each product shares foundational infrastructure while serving distinct market needs.
            </p>
            <div className="flex flex-wrap justify-center gap-3 w-full">
              {[
                "Unified Authentication System",
                "Shared Payment Infrastructure", 
                "Scalable Database Architecture",
                "Local Market Integration"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 break-words">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}