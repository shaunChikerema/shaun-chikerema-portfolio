//src/components/sections/Experience.tsx
'use client';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../lib/constants';
import { Calendar, Building2, Target, Zap, Users } from 'lucide-react';

export default function Experience() {
  const enhancedExperience = [
    {
      ...EXPERIENCE[0], // Founder role
      impact: [
        "Architected multi-tenant SaaS platforms serving 10,000+ target users",
        "Built Botswana's first comprehensive real estate ecosystem (Keyat)",
        "Developed insurance management platform automating 20+ hours/week for brokers",
        "Established scalable infrastructure for future product expansion"
      ],
      growth: "From code to company: Building technology ecosystem from ground up"
    },
    {
      ...EXPERIENCE[1], // Intern role  
      impact: [
        "Contributed to production React applications used by real customers",
        "Implemented responsive UI components following design systems",
        "Participated in agile workflows and professional code reviews",
        "Gained foundation in enterprise development practices"
      ],
      growth: "Foundation: Learning professional software development methodologies"
    },
    {
      ...EXPERIENCE[2], // Education
      impact: [
        "Graduated with honors in Software Engineering with Multimedia",
        "Developed full-stack applications and mobile apps for academic projects",
        "Combined technical engineering with creative multimedia design principles",
        "Built foundation in both development and user experience design"
      ],
      growth: "Education: Establishing technical and creative foundation"
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium mb-6"
          >
            <Building2 className="w-4 h-4 mr-2" />
            Career Progression
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
            From Code to Company
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My journey from software engineering foundations to building production-scale applications
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Clean Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {enhancedExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-16 pb-12 last:pb-0"
              >
                {/* Clean Timeline Dot */}
                <div className="absolute left-4 top-2 w-4 h-4 bg-gray-900 rounded-full border-4 border-white z-10"></div>

                {/* Experience Card */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    
                    {/* Period */}
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Growth Narrative */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-semibold text-gray-900">Progression</span>
                    </div>
                    <p className="text-gray-600 text-sm">{exp.growth}</p>
                  </div>

                  {/* Business Impact */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Zap className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-semibold text-gray-900">Business Impact</span>
                    </div>
                    <ul className="space-y-3">
                      {exp.impact.map((impact, impactIndex) => (
                        <li key={impactIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm leading-relaxed">{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Applied */}
                  {exp.achievements && (
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Users className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-semibold text-gray-900">Key Contributions</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.slice(0, 3).map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <div className="w-1 h-1 bg-gray-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Connecting Line */}
                {index < enhancedExperience.length - 1 && (
                  <div className="absolute left-6 top-full h-6 w-0.5 bg-gray-200 -ml-0.5"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
            <h3 className="font-semibold text-gray-900 mb-3">Founder-Led Technical Execution</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Combining technical depth with business strategy to build scalable solutions 
              for Botswana's evolving digital landscape. From concept to production, 
              focused on creating real impact through technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}