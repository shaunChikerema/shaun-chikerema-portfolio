'use client';
import { motion } from 'framer-motion';
import { Layers, Sparkles } from 'lucide-react';

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
      items: [
        { label: "Multi-tenant SaaS platforms", desc: "Secure data isolation with role-based access" },
        { label: "Real estate tech", desc: "Property search across 500+ listings" },
        { label: "Insurance automation", desc: "Saves brokers 20+ hours per week" },
        { label: "Mobile applications", desc: "Cross-platform iOS & Android" }
      ]
    },
    {
      title: "How I work",
      items: [
        { label: "Ship fast, iterate faster", desc: "MVPs in 4-6 weeks with real feedback loops" },
        { label: "Built to scale", desc: "Architecture that grows without rewrites" },
        { label: "Local integration", desc: "Orange Money & Botswana banking APIs" },
        { label: "Mobile-first design", desc: "Optimized for mobile-dominant markets" }
      ]
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-black relative border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 max-w-3xl">
              Building production software that scales
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
              <Layers className="w-5 h-5 text-white" />
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
                  className="group"
                >
                  <div className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors duration-200">
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
            {expertise.map((section, sectionIndex) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-white mb-6">{section.title}</h3>
                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
                    >
                      <div className="font-medium text-white mb-1">{item.label}</div>
                      <div className="text-sm text-zinc-500 leading-relaxed">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-t border-zinc-800 pt-12"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <div className="text-sm text-zinc-500 mb-2">Education</div>
                <div className="font-medium text-white mb-1">BSc Software Engineering with Multimedia</div>
                <div className="text-sm text-zinc-400">Botho University · 2019-2023</div>
              </div>
              <div className="text-sm text-zinc-500 md:text-right">
                Gaborone, Botswana
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}