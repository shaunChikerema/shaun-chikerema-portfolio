//src/components/sections/Experience.tsx
'use client';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../lib/constants';
import { Calendar, MapPin, Award, TrendingUp, Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50/30">
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
            <Briefcase className="w-4 h-4 mr-2" />
            Career Journey
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My career progression and key accomplishments in the tech industry
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-primary-400 to-blue-300"></div>
            
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-12 md:pl-16 pb-8 last:pb-0 group"
              >
                {/* Enhanced Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-2 md:left-4 top-2 w-4 h-4 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full border-4 border-white shadow-lg z-10 group-hover:shadow-xl transition-all duration-300"
                >
                  {/* Pulsing Effect */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"
                  />
                </motion.div>

                {/* Enhanced Experience Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:border-primary-200"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-3 md:mb-0">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <p className="text-primary-600 font-semibold text-base md:text-lg">
                        {exp.company}
                      </p>
                    </div>
                    
                    {/* Enhanced Period Badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-blue-50 px-3 py-1 rounded-full w-fit border border-primary-200 group-hover:border-primary-300 transition-colors duration-300"
                    >
                      <Calendar className="w-4 h-4 text-primary-600" />
                      <span className="text-primary-700 text-sm font-medium">
                        {exp.period}
                      </span>
                    </motion.div>
                  </div>

                  {/* Location (if available) */}
                  {exp.location && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
                      className="flex items-center text-gray-500 text-sm mb-4"
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </motion.div>
                  )}

                  {/* Achievements */}
                  <div className="space-y-2">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                      className="flex items-center space-x-2 mb-3"
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Award className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">Key Achievements</span>
                    </motion.div>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.15) + (achievementIndex * 0.1) + 0.3 }}
                          className="flex items-start group/achievement"
                        >
                          <motion.div
                            whileHover={{ scale: 1.3, rotate: 45 }}
                            className="w-1.5 h-1.5 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 transition-all duration-300"
                          />
                          <span className="text-gray-600 text-sm leading-relaxed group-hover/achievement:text-gray-700 transition-colors duration-300">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies (if available) */}
                  {exp.technologies && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                      className="mt-4 pt-4 border-t border-gray-100"
                    >
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.15 + techIndex * 0.05 + 0.6 }}
                            whileHover={{ scale: 1.05, y: -1 }}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-200 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Enhanced Connecting Line (except for last item) */}
                {index < EXPERIENCE.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '1rem' }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    className="absolute left-4 md:left-6 top-full w-0.5 bg-gradient-to-b from-primary-300 to-blue-300 -ml-0.5"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Career Progress Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 border border-primary-100 max-w-2xl mx-auto hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-blue-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-900">Career Progress</span>
            </div>
            <p className="text-gray-600 text-sm">
              Continuously advancing my skills and taking on more complex challenges in full-stack and mobile development. 
              Always learning, always growing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}