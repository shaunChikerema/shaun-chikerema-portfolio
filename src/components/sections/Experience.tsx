//src/components/sections/Experience.tsx
'use client';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../lib/constants';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My career path and key accomplishments in the tech industry
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-blue-200"></div>
            
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-12 md:pl-16 pb-8 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-4 top-2 w-4 h-4 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Experience Card */}
                <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-3 md:mb-0">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-primary-600 font-semibold text-base md:text-lg">
                        {exp.company}
                      </p>
                    </div>
                    
                    {/* Period Badge */}
                    <div className="flex items-center space-x-2 bg-primary-50 px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-4 h-4 text-primary-600" />
                      <span className="text-primary-700 text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Location (if available) */}
                  {exp.location && (
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  )}

                  {/* Achievements */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 mb-3">
                      <Award className="w-4 h-4 text-primary-600" />
                      <span className="text-sm font-semibold text-gray-900">Key Achievements</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.15) + (achievementIndex * 0.1) }}
                          className="flex items-start group"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies (if available) */}
                  {exp.technologies && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-1">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Connecting Line (except for last item) */}
                {index < EXPERIENCE.length - 1 && (
                  <div className="absolute left-4 md:left-6 top-full w-0.5 h-4 bg-gradient-to-b from-primary-200 to-blue-200 -ml-0.5"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Progress Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 border border-primary-100 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <TrendingUp className="w-5 h-5 text-primary-600" />
              <span className="font-semibold text-gray-900">Career Progress</span>
            </div>
            <p className="text-gray-600 text-sm">
              Continuously advancing my skills and taking on more complex challenges in full-stack and mobile development
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}