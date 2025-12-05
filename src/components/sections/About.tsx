'use client';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Code2, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function About() {
  const [projectCount, setProjectCount] = useState(0);
  
  useEffect(() => {
    const target = 2;
    const duration = 1500;
    const steps = 30;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setProjectCount(Math.floor(target * progress));
      
      if (step === steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const techStack = [
    { name: "Next.js", category: "Frontend", projects: ["Keyat", "PolicyBridge"] },
    { name: "TypeScript", category: "Language", projects: ["Keyat", "PolicyBridge"] },
    { name: "PostgreSQL", category: "Database", projects: ["Keyat", "PolicyBridge"] },
    { name: "Supabase", category: "Backend", projects: ["Keyat", "PolicyBridge"] },
    { name: "React Native", category: "Mobile", projects: ["Learning"] },
    { name: "Tailwind", category: "Styling", projects: ["Keyat", "PolicyBridge"] },
    { name: "Vercel", category: "Infrastructure", projects: ["Keyat", "PolicyBridge"] },
    { name: "Firebase", category: "Services", projects: ["PolicyBridge"] }
  ];

  const expertise = [
    {
      title: "What I build",
      icon: Code2,
      items: [
        { label: "Full-stack web apps", desc: "End-to-end development" },
        { label: "Real estate platforms", desc: "Property search and listings" },
        { label: "Business automation", desc: "Workflow management tools" },
        { label: "Mobile-first design", desc: "Responsive applications" }
      ]
    },
    {
      title: "How I work",
      icon: Zap,
      items: [
        { label: "Production-focused", desc: "Building for real users" },
        { label: "Self-taught approach", desc: "Learning by building" },
        { label: "Modern tech stack", desc: "Next.js, TypeScript, PostgreSQL" },
        { label: "Remote-first mindset", desc: "Global collaboration" }
      ]
    }
  ];

  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section id="about" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Grid Pattern Only */}
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-zinc-200 text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>About</span>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">
                Building{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  production software
                </span>
                {' '}that scales
              </h2>
              
              {/* Projects Counter */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{projectCount}</div>
                  <div className="text-sm text-zinc-400">Live Projects</div>
                </div>
              </motion.div>
            </div>
            
            <p className="text-xl text-zinc-200 max-w-3xl leading-relaxed">
              Software engineering graduate with hands-on experience building and deploying full-stack platforms. Learning through real-world projects and production deployments.
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
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  onHoverStart={() => setHoveredTech(tech.name)}
                  onHoverEnd={() => setHoveredTech(null)}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/30 to-cyan-500/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative px-4 py-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 rounded-lg transition-all duration-200">
                    <div className="font-medium text-white text-sm">{tech.name}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">{tech.category}</div>
                  </div>
                  
                  {hoveredTech === tech.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
                    >
                      <div className="bg-black/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-3 py-2 whitespace-nowrap">
                        <div className="text-xs text-cyan-400 font-medium mb-1">Used in:</div>
                        <div className="flex flex-wrap gap-1">
                          {tech.projects.map((project) => (
                            <span key={project} className="text-xs text-zinc-200 bg-white/5 px-2 py-0.5 rounded">
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/95 border-l border-t border-cyan-500/30 rotate-45"></div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-20"
          />

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
                            <motion.div 
                              className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"
                              whileHover={{ scale: 1.5 }}
                              transition={{ duration: 0.2 }}
                            />
                            <div>
                              <div className="font-medium text-white mb-1 group-hover/item:text-cyan-400 transition-colors">
                                {item.label}
                              </div>
                              <div className="text-sm text-zinc-400 leading-relaxed">
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
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/5 to-cyan-500/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-xl p-8 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <div className="text-sm text-zinc-400 mb-3 flex items-center gap-2">
                    <motion.div 
                      className="w-1 h-1 bg-cyan-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Education
                  </div>
                  <div className="font-semibold text-white mb-1">BSc Software Engineering with Multimedia</div>
                  <div className="text-sm text-zinc-300">Limkokwing University of Creative Technology · 2019-2024</div>
                </div>
                <div className="text-sm text-zinc-400 md:text-right">
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