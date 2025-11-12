'use client';
import { ArrowLeft, ExternalLink, Building2, Calendar, Users, FileText, Shield, Zap, Database, Target, TrendingUp, Clock, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Mock project data - replace with your actual import
const project = {
  id: 2,
  title: "PolicyBridge",
  liveUrl: "https://policybridge.vercel.app",
  techStack: {
    Frontend: ["Next.js 15", "React", "Tailwind CSS"],
    Backend: ["Supabase", "PostgreSQL", "Node.js"],
    Infrastructure: ["Vercel", "Redis"],
    Services: ["Stripe", "SendGrid"]
  }
};

export default function PolicyBridgePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/95 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/#projects" 
              className="flex items-center text-zinc-400 hover:text-cyan-400 transition-colors text-sm font-medium group"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            <a
              href={project.liveUrl}
              className="group relative px-4 py-2 rounded-lg font-medium text-sm overflow-hidden"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform group-hover:scale-105" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              
              <span className="relative flex items-center gap-2 text-white">
                <ExternalLink size={16} />
                View Live Platform
              </span>
            </a>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden border-b border-white/10">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 text-sm text-cyan-400 mb-4">
              <Building2 size={16} />
              <span className="font-medium">BITROOT Ecosystem</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              PolicyBridge: <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">Insurance Management</span><br />SaaS
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed mb-8 max-w-3xl">
              I built an enterprise insurance management platform for Botswana's brokers. Automates policy processing, document generation, and compliance tracking.
            </p>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { value: '500+', label: 'Policies Processed' },
                { value: '10K+', label: 'Documents/Month' },
                { value: '60%', label: 'Faster Processing' },
                { value: '99.9%', label: 'Uptime' }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative group"
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/20 to-cyan-500/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative text-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 group-hover:border-cyan-500/30 transition-all">
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-zinc-500">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Context */}
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                { icon: Calendar, text: 'Built in 3 months', color: 'cyan' },
                { icon: Users, text: 'Solo founder-engineer', color: 'blue' },
                { icon: FileText, text: 'Insurance SaaS', color: 'cyan' },
                { icon: Zap, text: 'Live in Production', color: 'emerald', special: true }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className={`flex items-center px-3 py-2 rounded-lg border ${
                      item.special 
                        ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20 font-medium' 
                        : 'text-zinc-400 bg-white/5 backdrop-blur-sm border-white/10'
                    }`}
                  >
                    <Icon size={16} className="mr-2" />
                    {item.text}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl font-bold text-white mb-12">What It Does</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Clock, color: 'blue', title: 'Time Saved', desc: 'Designed to save brokers 20+ hours/week on manual tasks' },
                { icon: TrendingUp, color: 'emerald', title: 'Faster', desc: '60% faster than manual document processing' },
                { icon: BarChart3, color: 'cyan', title: 'Scale', desc: 'Handles 10K+ documents monthly' },
                { icon: Target, color: 'blue', title: 'Multi-tenant', desc: 'Designed for 500+ concurrent brokers' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="relative inline-block mb-4">
                      {/* Icon glow */}
                      <div className={`absolute inset-0 bg-${item.color}-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
                      <div className={`relative w-12 h-12 bg-${item.color}-500/10 rounded-2xl flex items-center justify-center border border-${item.color}-500/20`}>
                        <Icon className={`w-6 h-6 text-${item.color}-400`} />
                      </div>
                    </div>
                    <h3 className="font-semibold text-white mb-2 text-sm group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/10 to-emerald-500/0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Built for Botswana's Insurance Industry</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Compliance First</h4>
                    <p className="text-zinc-400 mb-4 text-sm leading-relaxed">
                      Built-in audit trails, data encryption, and role-based access for Botswana's insurance regulations. Every action is logged and traceable.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Audit Trails', 'Encryption', 'RBAC'].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm text-cyan-300 rounded-md text-sm font-medium border border-cyan-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Document Automation</h4>
                    <p className="text-zinc-400 mb-4 text-sm leading-relaxed">
                      Queue-based PDF generation. Handles 10K+ payslips monthly with custom templates, bulk processing, and automated email distribution.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['PDF Engine', 'Bulk Processing', 'Email Auto'].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm text-cyan-300 rounded-md text-sm font-medium border border-cyan-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 bg-black border-t border-white/10 relative">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl font-bold text-white mb-12">Technical Architecture</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
                <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
                  Multi-tenant architecture with Supabase Row Level Security. Complete data isolation between brokers while maintaining real-time updates and audit capabilities.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Shield, title: 'Bank-Grade Security', desc: 'Encryption + compliance auditing' },
                    { icon: FileText, title: 'PDF Generation', desc: 'Puppeteer-based automation' },
                    { icon: Database, title: 'Real-Time Analytics', desc: 'Live business intelligence' }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start group/item">
                        <Icon className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-white text-sm group-hover/item:text-cyan-400 transition-colors">{item.title}</div>
                          <div className="text-zinc-500 text-xs">{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="font-semibold text-white mb-4">Tech Stack</h4>
                <ul className="space-y-3">
                  {[
                    'Next.js 14 for SEO and performance',
                    'Supabase RLS for secure multi-tenancy',
                    'Puppeteer for PDF generation at scale',
                    'TypeScript for data integrity',
                    'Firebase for real-time notifications'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group/tech">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-zinc-400 text-sm group-hover/tech:text-zinc-300 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl font-bold text-white mb-12">Problems I Solved</h2>
            
            <div className="space-y-6">
              {[
                { title: 'Bulk PDF Generation at Scale', desc: 'Built a queue system with Puppeteer to generate 10K+ payslips monthly. Each PDF is rendered server-side, validated, then stored in Supabase Storage. Handles concurrent requests without timeouts.' },
                { title: 'Multi-Tenant Data Isolation', desc: 'Used Supabase Row Level Security to ensure brokers can only see their own clients\' data. Each policy, document, and transaction is tied to a broker_id with strict RLS policies.' },
                { title: 'Compliance & Audit Trails', desc: 'Every action (policy created, document generated, payment processed) is logged with timestamps, user IDs, and IP addresses. Meets Botswana\'s insurance regulatory requirements.' },
                { title: 'Real-Time Notifications', desc: 'Firebase Cloud Messaging for instant notifications when documents are ready, policies expire, or payments are due. Works on web and mobile.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-cyan-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="border-l-4 border-cyan-500/30 group-hover:border-cyan-500 pl-6 py-2 transition-colors">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Tech Stack */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Complete Tech Stack</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(project.techStack).map(([category, technologies]) => (
                <div key={category} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-cyan-500/30 transition-all group">
                  <h3 className="font-semibold text-white mb-3 text-xs uppercase tracking-wide group-hover:text-cyan-400 transition-colors">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {technologies.map((tech: string, index: number) => (
                      <li key={index} className="text-xs text-zinc-400">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">See It Live</h2>
            <p className="text-zinc-400 mb-8 text-lg">
              Explore the insurance management platform built for Botswana's brokers. Automated document processing, compliance tracking, real-time analytics.
            </p>
            <a
              href={project.liveUrl}
              className="group relative inline-block px-8 py-4 rounded-lg font-semibold overflow-hidden"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform group-hover:scale-105" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              
              <span className="relative text-white">View Live Platform</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}