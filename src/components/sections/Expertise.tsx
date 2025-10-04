//src\components\sections\Expertise.tsx
'use client';
import { motion } from 'framer-motion';
import { EXPERTISE } from '../../lib/constants';

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Areas of Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized skills and technologies I've mastered through years of professional experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERTISE.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}