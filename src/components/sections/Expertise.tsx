//src/components/sections/Expertise.tsx
'use client';
import { motion } from 'framer-motion';
import { SKILLS } from '../../lib/constants';
import { Code, Server, Smartphone, Palette } from 'lucide-react';

export default function Expertise() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: SKILLS.frontend,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend", 
      icon: Server,
      skills: SKILLS.backend,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: SKILLS.mobile,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools",
      icon: Palette,
      skills: SKILLS.tools,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="expertise" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing products
          </p>
        </motion.div>

        {/* Compact Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Compact Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{category.title}</h3>
              </div>

              {/* Compact Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.05 }}
                        className={`h-1.5 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}