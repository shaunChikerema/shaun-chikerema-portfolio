'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Building2, Target, Users, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Mock data - replace with your PROJECTS import
const PROJECTS = [
  {
    id: 1,
    title: "Keyat",
    description: "Botswana's first comprehensive real estate platform connecting buyers, sellers, and agents with 500+ active listings",
    status: "Live",
    category: "Real Estate",
    duration: "4 months",
    featured: true,
    liveUrl: "https://keyat.co.bw",
    githubUrl: "https://github.com/shaunChikerema",
    businessImpact: {
      market: "First mover in Botswana's digital real estate market",
      scalability: "Built to handle 10K+ listings with sub-200ms search",
      innovation: "Integrated Orange Money for seamless local payments"
    },
    techStack: {
      Frontend: ["Next.js 15", "TypeScript", "Tailwind CSS"],
      Backend: ["Supabase", "PostgreSQL", "REST APIs"],
      Infrastructure: ["Vercel", "GitHub Actions"],
      Services: ["Orange Money", "Auth0"]
    },
    features: [
      { icon: "🏠", title: "Property Search", description: "Advanced filters across 500+ listings" },
      { icon: "💳", title: "Local Payments", description: "Orange Money integration" },
      { icon: "👥", title: "Multi-tenant", description: "Agents, buyers, sellers" },
      { icon: "📱", title: "Mobile-first", description: "Responsive design" },
      { icon: "🔒", title: "Secure Auth", description: "Role-based access" },
      { icon: "⚡", title: "Real-time", description: "Live updates" }
    ]
  },
  {
    id: 2,
    title: "PolicyBridge",
    description: "Insurance automation platform saving brokers 20+ hours per week through intelligent policy management",
    status: "Live",
    category: "InsurTech",
    duration: "3 months",
    featured: true,
    liveUrl: "https://policybridge.co.bw",
    githubUrl: "https://github.com/shaunChikerema",
    businessImpact: {
      market: "Streamlining insurance workflows in Botswana",
      scalability: "Handles thousands of policies with automated processing",
      innovation: "AI-powered document processing and policy matching"
    },
    techStack: {
      Frontend: ["Next.js 15", "React", "Tailwind CSS"],
      Backend: ["Supabase", "PostgreSQL", "Node.js"],
      Infrastructure: ["Vercel", "Redis"],
      Services: ["Stripe", "SendGrid"]
    },
    features: [
      { icon: "📄", title: "Doc Processing", description: "Automated policy parsing" },
      { icon: "🤖", title: "Smart Matching", description: "AI-powered recommendations" },
      { icon: "📊", title: "Analytics", description: "Broker dashboards" },
      { icon: "🔔", title: "Notifications", description: "Renewal reminders" },
      { icon: "🔐", title: "Compliance", description: "Regulatory standards" },
      { icon: "💬", title: "Client Portal", description: "Self-service access" }
    ]
  }
];

export default function Projects() {
  const featuredProjects = PROJECTS.filter(project => project.featured);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
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
            <span>BITROOT Ecosystem</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Production
            </span>
            {' '}Applications
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Live SaaS platforms solving real problems in Botswana's digital economy
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 max-w-6xl mx-auto">
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
                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="mb-6 lg:mb-0 lg:flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-lg text-zinc-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Metadata */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-md text-sm font-medium border border-emerald-500/20">
                          {project.status}
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-md text-sm font-medium border border-cyan-500/20">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 bg-white/5 text-zinc-400 rounded-md text-sm font-medium border border-white/10">
                          {project.duration}
                        </span>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                      <Link
                        href={`/projects/${project.title.toLowerCase()}`}
                        className="group/cta relative px-6 py-3 rounded-lg font-medium overflow-hidden"
                      >
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform group-hover/cta:scale-105" />
                        
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 blur-xl opacity-50 group-hover/cta:opacity-75 transition-opacity" />
                        
                        <span className="relative flex items-center justify-center gap-2 text-white">
                          <span>Case Study</span>
                          <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          className="flex items-center px-4 py-2 border border-white/10 text-zinc-300 rounded-lg font-medium hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200 justify-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live App
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center px-4 py-2 border border-white/10 text-zinc-300 rounded-lg font-medium hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200 justify-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Business Impact */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                    {[
                      { icon: Target, color: "cyan", title: "Market Position", text: project.businessImpact.market },
                      { icon: Users, color: "blue", title: "Scalability", text: project.businessImpact.scalability },
                      { icon: Zap, color: "emerald", title: "Innovation", text: project.businessImpact.innovation }
                    ].map((impact, idx) => {
                      const Icon = impact.icon;
                      return (
                        <div key={idx} className="group/impact relative">
                          {/* Glow on hover */}
                          <div className={`absolute inset-0 bg-${impact.color}-500/10 rounded-lg blur-xl opacity-0 group-hover/impact:opacity-100 transition-opacity`} />
                          
                          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 group-hover/impact:border-white/20 transition-all">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`w-8 h-8 bg-${impact.color}-500/10 rounded-lg flex items-center justify-center border border-${impact.color}-500/20`}>
                                <Icon className={`w-4 h-4 text-${impact.color}-400`} />
                              </div>
                              <h4 className="font-semibold text-white text-sm">{impact.title}</h4>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                              {impact.text}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-white mb-4 text-sm">Tech Stack</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {Object.entries(project.techStack).map(([category, technologies]) => (
                        <div key={category} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-cyan-500/30 transition-all group/tech">
                          <h5 className="text-xs font-semibold text-zinc-500 mb-2 uppercase tracking-wider group-hover/tech:text-cyan-400 transition-colors">
                            {category}
                          </h5>
                          <div className="space-y-1">
                            {technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                              <div key={techIndex} className="text-xs text-zinc-400">
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Features */}
                  <div>
                    <h4 className="font-semibold text-white mb-4 text-sm">Core Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {project.features.slice(0, 6).map((feature, featureIndex: number) => (
                        <div key={featureIndex} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-cyan-500/30 transition-all group/feature">
                          <div className="text-xl mb-2">{feature.icon}</div>
                          <h5 className="font-medium text-white text-sm mb-1 group-hover/feature:text-cyan-400 transition-colors">{feature.title}</h5>
                          <p className="text-zinc-500 text-xs leading-relaxed">{feature.description}</p>
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
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/10 to-emerald-500/0 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 lg:p-10 border border-white/10 group-hover:border-white/20 transition-all text-center">
              <div className="relative inline-block mb-4">
                {/* Icon glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl blur-md opacity-50" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-black" />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                BITROOT Technology Ecosystem
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                Shared infrastructure across platforms: unified auth, local payment integration (Orange Money + banking), 
                multi-tenant architecture, and real-time updates.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { label: "Shared Auth", value: "Cross-platform SSO" },
                  { label: "Local Payments", value: "Orange Money integrated" },
                  { label: "Multi-tenant", value: "Secure data isolation" },
                  { label: "Real-time", value: "Live updates" }
                ].map((item, index: number) => (
                  <div key={index} className="text-center group/stat">
                    <div className="relative inline-block mb-2">
                      {/* Dot glow */}
                      <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-0 group-hover/stat:opacity-50 transition-opacity" />
                      <div className="relative w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                    </div>
                    <div className="text-sm font-semibold text-white group-hover/stat:text-cyan-400 transition-colors">{item.label}</div>
                    <div className="text-xs text-zinc-500">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}