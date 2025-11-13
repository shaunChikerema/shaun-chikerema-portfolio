'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Building2, Code2, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 1,
    title: "Keyat",
    tagline: "Real Estate Platform for Botswana",
    description: "Full-stack property marketplace connecting buyers, sellers, and agents. Multi-tenant architecture with local payment integration.",
    status: "Production Ready",
    category: "Real Estate",
    duration: "4 months",
    featured: true,
    liveUrl: "https://keyat.co.bw",
    githubUrl: "https://github.com/shaunChikerema",
    capabilities: [
      { label: "Handles 10K+ listings", desc: "Built for scale" },
      { label: "Sub-200ms search", desc: "Optimized queries" },
      { label: "Multi-tenant", desc: "Complete data isolation" }
    ],
    techHighlights: ["Next.js 15", "PostgreSQL", "Supabase", "Orange Money"],
    features: [
      "Advanced property search with filters",
      "Orange Money payment integration",
      "Role-based access (agents, buyers, sellers)",
      "Mobile-responsive PWA design",
      "Secure authentication with Auth0",
      "Real-time listing updates"
    ]
  },
  {
    id: 2,
    title: "PolicyBridge",
    tagline: "Insurance Automation Platform",
    description: "Enterprise SaaS for insurance brokers. Automates policy processing, document generation, and compliance tracking.",
    status: "Production Ready",
    category: "InsurTech",
    duration: "3 months",
    featured: true,
    liveUrl: "https://policybridge.co.bw",
    githubUrl: "https://github.com/shaunChikerema",
    capabilities: [
      { label: "Bulk processing", desc: "1000s of documents" },
      { label: "Automated workflows", desc: "Designed to save 20+ hrs/week" },
      { label: "Enterprise security", desc: "Audit trails + encryption" }
    ],
    techHighlights: ["Next.js 15", "PostgreSQL", "Node.js", "Puppeteer"],
    features: [
      "Automated policy document generation",
      "AI-powered policy recommendations",
      "Real-time broker analytics dashboard",
      "Automated renewal reminders",
      "Regulatory compliance tracking",
      "Client self-service portal"
    ]
  }
];

export default function Projects() {
  const featuredProjects = PROJECTS.filter(project => project.featured);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:64px_64px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-zinc-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
            <span>BITROOT Ecosystem</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 max-w-3xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Production
            </span>
            {' '}Platforms
          </h2>
          <p className="text-base sm:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Two full-stack SaaS platforms built for Botswana's market. Production-grade architecture, deployed and ready for users.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 sm:space-y-12 max-w-6xl mx-auto">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/5 to-emerald-500/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-cyan-500/30 overflow-hidden transition-all duration-300">
                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6 sm:mb-8">
                    <div className="flex-1">
                      {/* Title & Tagline */}
                      <div className="mb-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-base sm:text-lg text-cyan-400 font-medium">
                          {project.tagline}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-zinc-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Metadata */}
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs sm:text-sm font-medium border border-blue-500/20">
                          {project.status}
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-md text-xs sm:text-sm font-medium border border-cyan-500/20">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 bg-white/5 text-zinc-400 rounded-md text-xs sm:text-sm font-medium border border-white/10">
                          Built in {project.duration}
                        </span>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                      <Link
                        href={`/projects/${project.title.toLowerCase()}`}
                        className="group/cta relative px-5 sm:px-6 py-3 rounded-lg font-medium overflow-hidden text-center"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform group-hover/cta:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 blur-xl opacity-50 group-hover/cta:opacity-75 transition-opacity" />
                        
                        <span className="relative flex items-center justify-center gap-2 text-white text-sm sm:text-base">
                          <span>Case Study</span>
                          <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                      
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          className="flex items-center justify-center flex-1 sm:flex-none px-4 py-2 border border-white/10 text-zinc-300 rounded-lg font-medium hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200 text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          <span className="hidden sm:inline">Live Site</span>
                          <span className="sm:hidden">Live</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center justify-center flex-1 sm:flex-none px-4 py-2 border border-white/10 text-zinc-300 rounded-lg font-medium hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200 text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">Built to Scale</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      {project.capabilities.map((capability, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-cyan-500/30 transition-all group/cap">
                          <div className="font-semibold text-white text-sm mb-1 group-hover/cap:text-cyan-400 transition-colors">
                            {capability.label}
                          </div>
                          <div className="text-zinc-500 text-xs">
                            {capability.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techHighlights.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-white/5 text-zinc-300 rounded-md text-xs sm:text-sm font-medium border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-white/10 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Features */}
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">Core Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start group/feature">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-zinc-400 text-xs sm:text-sm leading-relaxed group-hover/feature:text-zinc-300 transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BITROOT Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 sm:mt-20 max-w-4xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/10 to-emerald-500/0 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-10 border border-white/10 group-hover:border-white/20 transition-all text-center">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl blur-md opacity-50" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-black" />
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                Production-Ready Architecture
              </h3>
              
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                Both platforms share core infrastructure: unified authentication, local payment integration (Orange Money + banking APIs), 
                multi-tenant data isolation, and real-time synchronization. Built to scale from day one.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {[
                  { icon: Code2, label: "Full-Stack", value: "Next.js + PostgreSQL" },
                  { icon: Building2, label: "Multi-Tenant", value: "Secure isolation" },
                  { icon: Rocket, label: "Deployed", value: "Vercel (99.9% uptime)" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center group/stat">
                      <div className="relative inline-block mb-2">
                        <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-0 group-hover/stat:opacity-50 transition-opacity" />
                        <Icon className="relative w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mx-auto" />
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover/stat:text-cyan-400 transition-colors">{item.label}</div>
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