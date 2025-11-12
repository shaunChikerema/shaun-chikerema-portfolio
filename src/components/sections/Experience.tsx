'use client';
import { motion } from 'framer-motion';
import { Calendar, Building2, Zap } from 'lucide-react';

export default function Experience() {
  const experience = [
    {
      position: "Founder & Engineer",
      company: "BITROOT",
      period: "2024 - Present",
      type: "Full-time",
      impact: [
        "Built Keyat (real estate platform) in 4 months — now live with 500+ listings",
        "Launched PolicyBridge (insurance automation) saving brokers 20+ hours/week",
        "Architected multi-tenant infrastructure serving both platforms",
        "Integrated Orange Money and local banking APIs for Botswana market"
      ],
      achievements: [
        "First comprehensive real estate platform in Botswana",
        "Sub-200ms search performance across 10K+ records",
        "Deployed on Vercel with 99.9% uptime"
      ]
    },
    {
      position: "Software Engineering Intern",
      company: "Botho University",
      period: "Feb 2023 - May 2023",
      type: "Internship",
      impact: [
        "Built React components for student portal used by 5K+ students",
        "Reduced dashboard load time by 40% through code optimization",
        "Implemented responsive UI following Material Design principles"
      ],
      achievements: [
        "Collaborated with 3-person dev team using Git workflow",
        "Participated in daily standups and code reviews",
        "Delivered 12 UI components over 3-month period"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 lg:py-32 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 text-sm font-medium mb-6">
            <Building2 className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 max-w-3xl">
            From Intern to Founder
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Learning, building, shipping — one step at a time
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-800"></div>
            
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-2 w-4 h-4 bg-white rounded-full border-4 border-black z-10"></div>

                {/* Experience Card */}
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-zinc-300 font-medium mb-2">
                        {exp.company}
                      </p>
                      <span className="inline-block px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs font-medium border border-zinc-700">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm font-semibold text-white">Key Outcomes</span>
                    </div>
                    <ul className="space-y-3">
                      {exp.impact.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-zinc-400 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  {exp.achievements && (
                    <div>
                      <div className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">
                        Highlights
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-1 h-1 bg-zinc-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-zinc-500 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800 text-center">
            <h3 className="font-semibold text-white mb-3 text-lg">What I Learned</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Started as an intern building components. Now building complete platforms from scratch. 
              The difference? Taking full ownership — from database schema to deployment strategy to user feedback loops.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}