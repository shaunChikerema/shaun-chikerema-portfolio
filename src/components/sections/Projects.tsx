//src\components\sections\Projects.tsx
'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../../lib/constants';

export default function Projects() {
  const featuredProjects = PROJECTS.filter(project => project.featured);

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
            A selection of projects that showcase my skills and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold mb-2">{project.title}</div>
                  <div className="text-primary-100">{project.description}</div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {project.longDescription || project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-300"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-300"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}