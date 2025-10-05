//src/components/sections/Expertise.tsx
'use client';
import { motion } from 'framer-motion';
import { SKILLS } from '../../lib/constants';
import { Code, Server, Smartphone, Palette, Zap } from 'lucide-react';

export default function Expertise() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: SKILLS.frontend,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Backend", 
      icon: Server,
      skills: SKILLS.backend,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: SKILLS.mobile,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Tools",
      icon: Palette,
      skills: SKILLS.tools,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section id="expertise" className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50/50">
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
            <Zap className="w-4 h-4 mr-2" />
            Technical Proficiency
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing products
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`bg-white rounded-xl p-5 border ${category.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 h-full`}>
                {/* Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <category.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="space-y-1 group/skill"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 group-hover/skill:text-gray-900 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <motion.span 
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                          className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                            ease: "easeOut"
                          }}
                          className={`h-1.5 rounded-full bg-gradient-to-r ${category.color} relative overflow-hidden`}
                        >
                          {/* Shimmer Effect */}
                          <motion.div
                            animate={{ x: [-100, 100] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              delay: skillIndex * 0.2,
                              repeatDelay: 3
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                      
                      {/* Skill Level Indicator */}
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-400">
                          {skill.level >= 90 && "Expert"}
                          {skill.level >= 70 && skill.level < 90 && "Advanced"}
                          {skill.level >= 50 && skill.level < 70 && "Proficient"}
                          {skill.level < 50 && "Learning"}
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, levelIndex) => (
                            <div
                              key={levelIndex}
                              className={`w-1 h-1 rounded-full ${
                                levelIndex < Math.floor(skill.level / 20) 
                                  ? `bg-gradient-to-r ${category.color}` 
                                  : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm max-w-2xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-2">
              Continuously Learning & Growing
            </h3>
            <p className="text-gray-600 text-sm">
              Technology evolves rapidly, and I'm committed to staying current with the latest 
              tools and best practices in the industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}