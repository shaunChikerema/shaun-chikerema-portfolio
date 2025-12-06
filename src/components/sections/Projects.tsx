'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, Code2, Rocket, ArrowRight, Zap, Database, Shield, Target, TrendingUp, FileText } from 'lucide-react';
import { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: "Keyat",
    tagline: "Real Estate Platform for Botswana",
    description: "Full-stack property marketplace connecting buyers, sellers, and agents across Botswana.",
    longDescription: "Multi-tenant architecture with role-based access control. Real-time property search with advanced filters, secure authentication, and mobile-responsive design.",
    status: "Live",
    category: "Real Estate",
    featured: true,
    liveUrl: "https://keyat.vercel.app",
    color: "cyan",
    gradient: "from-cyan-500/20 to-blue-500/20",
    icon: Building2,
    metrics: [
      { label: "Multi-tenant", value: "Data isolation", icon: Shield },
      { label: "Fast Search", value: "Optimized queries", icon: Zap },
      { label: "Mobile-first", value: "Responsive design", icon: Target }
    ],
    techStack: ["Next.js 15", "PostgreSQL", "TypeScript", "Supabase", "Tailwind CSS"],
    keyFeatures: [
      "Advanced property search with filters",
      "Role-based access control (buyers, sellers, agents)",
      "Real-time listings with live updates",
      "Secure authentication & data encryption",
      "Mobile-responsive design",
      "Agent dashboard with analytics"
    ]
  },
  {
    id: 2,
    title: "PolicyBridge",
    tagline: "Insurance Automation Platform",
    description: "Enterprise SaaS for insurance brokers to automate workflows and document generation.",
    longDescription: "Streamlines policy processing with automated PDF generation, renewal tracking, and compliance management. Built for brokers managing multiple clients.",
    status: "Live",
    category: "Insurance Tech",
    featured: true,
    liveUrl: "https://policybridge.vercel.app",
    color: "blue",
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: FileText,
    metrics: [
      { label: "Automation", value: "PDF generation", icon: Zap },
      { label: "Workflow", value: "Process tracking", icon: TrendingUp },
      { label: "Multi-tenant", value: "Broker isolation", icon: Database }
    ],
    techStack: ["Next.js 15", "PostgreSQL", "Node.js", "Puppeteer", "Redis"],
    keyFeatures: [
      "Automated policy document generation",
      "Multi-tenant broker management",
      "Renewal tracking & notifications",
      "Audit trail & compliance logging",
      "Client portal with dashboard",
      "Bulk document processing"
    ]
  }
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Enhanced Background with atmospheric orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/[0.06] rounded-full blur-[140px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.06, 0.09, 0.06]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-blue-500/[0.05] rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-zinc-300 text-sm font-medium mb-6 shadow-lg">
            <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Production
            </span>
            {' '}Projects
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
            Two full-stack web applications built from scratch, deployed, and serving real users.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16 max-w-7xl mx-auto">
          {PROJECTS.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  animate={hoveredProject === project.id ? {
                    scale: [1, 1.05, 1],
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Project Card */}
                <div className="relative bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-cyan-500/30 overflow-hidden transition-all duration-300 shadow-2xl">
                  {/* Top gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="p-8 lg:p-12">
                    {/* Header Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
                      {/* Left: Content */}
                      <div className="lg:col-span-8">
                        {/* Icon + Title */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="relative">
                            <motion.div 
                              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl blur-md`}
                              animate={hoveredProject === project.id ? {
                                opacity: [0.5, 0.8, 0.5]
                              } : { opacity: 0.3 }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center">
                              <ProjectIcon className="w-7 h-7 text-black" />
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {project.title}
                              </h3>
                              <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-md text-xs font-semibold border border-emerald-500/20">
                                LIVE
                              </span>
                            </div>
                            <p className="text-lg text-cyan-400 font-medium mb-3">
                              {project.tagline}
                            </p>
                            <p className="text-zinc-400 leading-relaxed mb-4">
                              {project.description}
                            </p>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                              {project.longDescription}
                            </p>
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {project.metrics.map((metric, idx) => {
                            const MetricIcon = metric.icon;
                            return (
                              <motion.div
                                key={idx}
                                whileHover={{ y: -2 }}
                                className="bg-white/[0.03] backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-cyan-500/30 transition-all group/metric"
                              >
                                <MetricIcon className="w-5 h-5 text-cyan-400 mb-2" />
                                <div className="font-semibold text-white text-sm mb-1 group-hover/metric:text-cyan-400 transition-colors">
                                  {metric.label}
                                </div>
                                <div className="text-zinc-500 text-xs">
                                  {metric.value}
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-6">
                          <h4 className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <motion.span
                                key={tech}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1.5 bg-white/[0.04] backdrop-blur-sm text-zinc-300 rounded-md text-sm font-medium border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-white/[0.06] transition-all cursor-default"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: CTAs */}
                      <div className="lg:col-span-4 flex flex-col gap-3">
                        <a
                          href={`/projects/${project.title.toLowerCase()}`}
                          className="group/cta relative rounded-lg overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform group-hover/cta:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 blur-xl opacity-50 group-hover/cta:opacity-75 transition-opacity" />
                          
                          <div className="relative px-6 py-4 text-center">
                            <span className="flex items-center justify-center gap-2 text-white font-semibold">
                              <span>Case Study</span>
                              <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </a>
                        
                        <a
                          href={project.liveUrl}
                          className="px-6 py-4 border border-white/10 text-zinc-300 rounded-lg font-semibold hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-white/[0.04] transition-all text-center flex items-center justify-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View Live</span>
                        </a>

                        <div className="flex-1 bg-white/[0.02] backdrop-blur-sm rounded-lg p-4 border border-white/10 mt-2">
                          <div className="text-xs font-semibold text-zinc-500 mb-2 uppercase tracking-wider">Status</div>
                          <div className="flex items-center gap-2 mb-3">
                            <motion.div 
                              className="w-2 h-2 bg-emerald-400 rounded-full"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.7, 1]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            <span className="text-sm text-emerald-400 font-medium">Deployed & Live</span>
                          </div>
                          <p className="text-xs text-zinc-500 leading-relaxed">
                            Production application serving real users on Vercel infrastructure
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-500 mb-4 uppercase tracking-wider">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {project.keyFeatures.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start group/feature"
                          >
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/feature:scale-125 transition-transform" />
                            <span className="text-sm text-zinc-400 leading-relaxed group-hover/feature:text-zinc-300 transition-colors">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Context - BITROOT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/10 to-cyan-500/0 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-white/[0.04] backdrop-blur-xl rounded-xl p-10 border border-white/10 group-hover:border-white/20 transition-all text-center shadow-2xl">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl blur-md opacity-50" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center">
                  <Code2 className="w-7 h-7 text-black" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Shared Infrastructure
              </h3>
              
              <p className="text-base text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                Both platforms built on modern stack with multi-tenant architecture, complete data isolation, and production-grade security. Deployed on Vercel with continuous monitoring.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { icon: Code2, label: "Full-Stack", value: "Next.js 15 + PostgreSQL" },
                  { icon: Database, label: "Multi-Tenant", value: "Isolated data per user" },
                  { icon: Rocket, label: "Production", value: "Live on Vercel" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center group/stat">
                      <div className="relative inline-block mb-3">
                        <motion.div 
                          className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-0 group-hover/stat:opacity-50 transition-opacity"
                          whileHover={{ scale: 1.2 }}
                        />
                        <Icon className="relative w-6 h-6 text-cyan-400 mx-auto" />
                      </div>
                      <div className="text-sm font-semibold text-white group-hover/stat:text-cyan-400 transition-colors mb-1">
                        {item.label}
                      </div>
                      <div className="text-xs text-zinc-500">{item.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}