'use client';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Code2, Zap } from 'lucide-react';

export default function About() {
  const techStack = [
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Supabase", category: "Backend" },
    { name: "React Native", category: "Mobile" },
    { name: "Tailwind", category: "Styling" },
    { name: "Vercel", category: "Infrastructure" },
    { name: "Firebase", category: "Services" }
  ];

  const expertise = [
    {
      title: "What I build",
      icon: Code2,
      items: [
        { label: "Multi-tenant SaaS platforms", desc: "Secure data isolation with role-based access" },
        { label: "Real estate tech", desc: "Property search across 500+ listings" },
        { label: "Insurance automation", desc: "Saves brokers 20+ hours per week" },
        { label: "Mobile applications", desc: "Cross-platform iOS & Android" }
      ]
    },
    {
      title: "How I work",
      icon: Zap,
      items: [
        { label: "Ship fast, iterate faster", desc: "MVPs in 4-6 weeks with real feedback loops" },
        { label: "Built to scale", desc: "Architecture that grows without rewrites" },
        { label: "Local integration", desc: "Orange Money & Botswana banking APIs" },
        { label: "Mobile-first design", desc: "Optimized for mobile-dominant markets" }
      ]
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:64px_64px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-zinc-300 text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>About</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
              Building{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                production software
              </span>
              {' '}that scales
            </h2>
            
            <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
              Two live SaaS platforms. Real users. Real revenue. I handle the full stack—from database design to deployment pipelines to user support.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                <Layers className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Tech stack</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/20 to-cyan-500/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative px-4 py-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-lg transition-all duration-200">
                    <div className="font-medium text-white text-sm">{tech.name}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{tech.category}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20"
          >
            {expertise.map((section, sectionIndex) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: sectionIndex * 0.1 }}
                  className="group relative"
                >
                  {/* Card glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/5 to-emerald-500/0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-2xl p-8 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                    </div>
                    
                    <div className="space-y-6">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
                          className="group/item"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-white mb-1 group-hover/item:text-cyan-400 transition-colors">
                                {item.label}
                              </div>
                              <div className="text-sm text-zinc-500 leading-relaxed">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/5 to-cyan-500/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-xl p-8 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <div className="text-sm text-zinc-500 mb-3 flex items-center gap-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                    Education
                  </div>
                  <div className="font-semibold text-white mb-1">BSc Software Engineering with Multimedia</div>
                  <div className="text-sm text-zinc-400">Botho University · 2019-2023</div>
                </div>
                <div className="text-sm text-zinc-500 md:text-right">
                  Gaborone, Botswana
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}