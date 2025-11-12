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
    <section id="experience" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
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
            <span>Career Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
            From{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Intern to Founder
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Learning, building, shipping — one step at a time
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line with Gradient */}
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
                {/* Timeline Dot with Glow */}
                <div className="absolute left-4 top-2 z-10">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-md opacity-50"></div>
                  {/* Dot */}
                  <div className="relative w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-4 border-black"></div>
                </div>

                {/* Experience Card */}
                <div className="group relative">
                  {/* Glow effect on hover */}
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
                        <span className="text-sm font-semibold text-white">Key Outcomes</span>
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
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/10 to-cyan-500/0 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 group-hover:border-white/20 transition-all text-center">
              <h3 className="font-bold text-white mb-3 text-lg">What I Learned</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Started as an intern building components. Now building complete platforms from scratch. 
                The difference? Taking full ownership — from database schema to deployment strategy to user feedback loops.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}