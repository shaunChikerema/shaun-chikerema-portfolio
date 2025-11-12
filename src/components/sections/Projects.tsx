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
    <section id="projects" className="py-24 lg:py-32 bg-black border-t border-zinc-900">
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
            <span>BITROOT Ecosystem</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 max-w-3xl">
            Production Applications
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
              className="group"
            >
              <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-zinc-700 overflow-hidden transition-all duration-300">
                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="mb-6 lg:mb-0 lg:flex-1">
                      <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-lg text-zinc-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Metadata */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-md text-sm font-medium border border-green-500/20">
                          {project.status}
                        </span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-sm font-medium border border-blue-500/20">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded-md text-sm font-medium border border-zinc-700">
                          {project.duration}
                        </span>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                      <Link
                        href={`/projects/${project.title.toLowerCase()}`}
                        className="flex items-center px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-100 transition-colors duration-200 group/cta justify-center"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/cta:translate-x-1 transition-transform" />
                      </Link>
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          className="flex items-center px-4 py-2 border border-zinc-700 text-zinc-300 rounded-lg font-medium hover:border-zinc-600 hover:text-white transition-colors duration-200 justify-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live App
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center px-4 py-2 border border-zinc-700 text-zinc-300 rounded-lg font-medium hover:border-zinc-600 hover:text-white transition-colors duration-200 justify-center"
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
                    <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                          <Target className="w-4 h-4 text-blue-400" />
                        </div>
                        <h4 className="font-semibold text-white text-sm">Market Position</h4>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {project.businessImpact.market}
                      </p>
                    </div>
                    
                    <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                          <Users className="w-4 h-4 text-green-400" />
                        </div>
                        <h4 className="font-semibold text-white text-sm">Scalability</h4>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {project.businessImpact.scalability}
                      </p>
                    </div>
                    
                    <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-purple-400" />
                        </div>
                        <h4 className="font-semibold text-white text-sm">Innovation</h4>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {project.businessImpact.innovation}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-white mb-4 text-sm">Tech Stack</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {Object.entries(project.techStack).map(([category, technologies]) => (
                        <div key={category} className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                          <h5 className="text-xs font-semibold text-zinc-500 mb-2 uppercase tracking-wider">
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
                        <div key={featureIndex} className="bg-zinc-900 rounded-lg p-4 border border-zinc-800 hover:border-zinc-700 transition-colors">
                          <div className="text-xl mb-2">{feature.icon}</div>
                          <h5 className="font-medium text-white text-sm mb-1">{feature.title}</h5>
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
          <div className="bg-zinc-900/50 rounded-xl p-8 lg:p-10 border border-zinc-800 text-center">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
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
                <div key={index} className="text-center">
                  <div className="w-2 h-2 bg-white rounded-full mx-auto mb-2"></div>
                  <div className="text-sm font-semibold text-white">{item.label}</div>
                  <div className="text-xs text-zinc-500">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}