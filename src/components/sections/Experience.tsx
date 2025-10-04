//src\components\sections\Experience.tsx
'use client';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../lib/constants';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey through the tech industry and key accomplishments
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 last:mb-0"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-xl text-primary-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}