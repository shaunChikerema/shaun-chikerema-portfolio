//src/components/sections/Experience.tsx
'use client';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../lib/constants';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
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
              className="mb-8 md:mb-12 last:mb-0"
            >
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6">
                  <div className="mb-3 md:mb-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-lg md:text-xl text-primary-600 font-semibold mt-1">{exp.company}</p>
                  </div>
                  <span className="inline-block px-3 md:px-4 py-1 md:py-2 bg-primary-100 text-primary-700 rounded-full text-xs md:text-sm font-medium w-fit">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-2 md:space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm md:text-base">{achievement}</span>
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