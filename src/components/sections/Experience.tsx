'use client';
import { motion } from 'framer-motion';
import { Calendar, Building2, Zap } from 'lucide-react';

export default function Experience() {
  const experience = [
    {
      position: "Independent Developer",
      company: "BITROOT",
      period: "2024 - Present",
      type: "Self-Employed",
      impact: [
        "Built Keyat (real estate platform) - deployed and functional",
        "Built PolicyBridge (insurance automation) for workflow management",
        "Architected multi-tenant database structure for both platforms",
        "Deployed production applications on Vercel with monitoring"
      ],
      achievements: [
        "First comprehensive real estate platform project in Botswana",
        "Optimized database queries for fast search performance",
        "Implemented secure authentication and role-based access"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Grid Pattern Only - No Orbs */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:64px_64px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-zinc-300 text-sm font-medium mb-6">
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
            From{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Learning to Building
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Self-taught developer who ships working software
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent"></div>
            
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
                <div className="absolute left-4 top-2 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-md opacity-50"></div>
                  <div className="relative w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-4 border-black"></div>
                </div>

                {/* Experience Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/10 to-emerald-500/0 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {exp.position}
                        </h3>
                        <p className="text-zinc-300 font-medium mb-2">
                          {exp.company}
                        </p>
                        <span className="inline-block px-3 py-1 bg-white/5 text-zinc-300 rounded-md text-xs font-medium border border-white/10">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-zinc-500">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-1.5 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-md border border-cyan-500/20">
                          <Zap className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="text-sm font-semibold text-white">What I Built</span>
                      </div>
                      <ul className="space-y-3">
                        {exp.impact.map((item, i) => (
                          <li key={i} className="flex items-start group/item">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-zinc-400 text-sm leading-relaxed group-hover/item:text-zinc-300 transition-colors">{item}</span>
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
                            <li key={i} className="flex items-start group/achievement">
                              <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-zinc-500 text-sm group-hover/achievement:text-zinc-400 transition-colors">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
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
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/10 to-cyan-500/0 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 group-hover:border-white/20 transition-all text-center">
              <h3 className="font-bold text-white mb-3 text-lg">Building in Public</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Started learning during university with React Native prototypes. After graduating in 2024, rebuilt both platforms from scratch in Next.js and deployed them to production. Now looking for opportunities to build with a team.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}