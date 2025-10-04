//src\components\sections\About.tsx
'use client';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../lib/constants';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Me
          </h2>
          
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              I'm a passionate full-stack developer with a keen eye for creating 
              scalable, efficient, and user-friendly applications. With years of 
              experience in modern web technologies, I specialize in turning complex 
              problems into elegant solutions.
            </p>
            
            <p>
              My expertise spans across the entire development stack, from crafting 
              responsive and accessible frontends with React and Next.js to building 
              robust backend systems with Node.js and Python. I believe in writing 
              clean, maintainable code and following best practices.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-lg"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-lg"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-lg"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}