'use client';
import { ArrowLeft, ExternalLink, Building2, MapPin, Users, Database, Shield, Zap, Calendar, Target, Lightbulb, Rocket } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Mock project data - replace with your actual import
const project = {
  id: 1,
  title: "Keyat",
  liveUrl: "https://keyat.vercel.app",
  techStack: {
    Frontend: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    Backend: ["Supabase", "PostgreSQL", "REST APIs"],
    Infrastructure: ["Vercel", "GitHub Actions"],
    Services: ["Orange Money", "Auth0"]
  }
};

export default function KeyatProjectPage() {
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
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
              Keyat: <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">Real Estate Platform</span><br />for Botswana
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed mb-8 max-w-3xl">
              I built Botswana's first comprehensive real estate platform. Multi-tenant architecture connecting property seekers, agents, and landlords with local payment integration.
            </p>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { value: '10K+', label: 'Built to Handle' },
                { value: '<200ms', label: 'Search Speed' },
                { value: 'Multi-tenant', label: 'Architecture' },
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
                { icon: Calendar, text: 'Built in 4 months', color: 'cyan' },
                { icon: Users, text: 'Solo founder-engineer', color: 'blue' },
                { icon: MapPin, text: 'Gaborone, Botswana', color: 'cyan' },
                { icon: Zap, text: 'Production Ready', color: 'blue', special: true }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className={`flex items-center px-3 py-2 rounded-lg border ${
                      item.special 
                        ? 'text-blue-400 bg-blue-500/10 border-blue-500/20 font-medium' 
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
            <h2 className="text-3xl font-bold text-white mb-12">What I Built</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Target, color: 'blue', title: 'First in Market', desc: 'First comprehensive platform serving Botswana\'s property market with verified listings and agent profiles' },
                { icon: Rocket, color: 'emerald', title: 'Built to Scale', desc: 'Multi-tenant architecture designed to handle 10K+ concurrent users across Botswana\'s cities' },
                { icon: Lightbulb, color: 'cyan', title: 'Local Integration', desc: 'Orange Money + bank API integration with USSD fallback for complete Botswana coverage' }
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
                      {/* Icon glow - Using fixed Tailwind classes */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                      <div className={`relative w-16 h-16 ${
                        item.color === 'blue' ? 'bg-blue-500/10 border-blue-500/20' :
                        item.color === 'emerald' ? 'bg-emerald-500/10 border-emerald-500/20' :
                        'bg-cyan-500/10 border-cyan-500/20'
                      } rounded-2xl flex items-center justify-center border`}>
                        <Icon className={`w-8 h-8 ${
                          item.color === 'blue' ? 'text-blue-400' :
                          item.color === 'emerald' ? 'text-emerald-400' :
                          'text-cyan-400'
                        }`} />
                      </div>
                    </div>
                    <h3 className="font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Botswana-Specific Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/10 to-emerald-500/0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Built for Botswana</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Local Payments</h4>
                    <p className="text-zinc-400 mb-4 text-sm">
                      Orange Money and Mascom MyZaka integration with traditional banking fallbacks. Covers 100% of Botswana's payment preferences.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Orange Money', 'Bank APIs', 'Secure Escrow'].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm text-cyan-300 rounded-md text-sm font-medium border border-cyan-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Mobile-First</h4>
                    <p className="text-zinc-400 mb-4 text-sm">
                      PWA optimized for Botswana's 85% smartphone penetration. Works offline, syncs when connected. USSD backup for feature phones.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['PWA', 'Offline Mode', 'USSD'].map((tag) => (
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
                <h3 className="text-xl font-semibold text-white mb-4">Key Decisions</h3>
                <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
                  Multi-tenant architecture using Supabase Row Level Security. Complete data isolation between users while maintaining real-time updates.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Database, title: 'Real-time Database', desc: 'PostgreSQL with live subscriptions' },
                    { icon: Shield, title: 'Security First', desc: 'Encryption + role-based access' },
                    { icon: Zap, title: 'Performance', desc: 'PWA with intelligent caching' }
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
                    'Next.js 15 for performance and SEO',
                    'Supabase for auth and real-time data',
                    'TypeScript for type safety at scale',
                    'Tailwind CSS for responsive design',
                    'Vercel for deployment (99.9% uptime)'
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
                { title: 'Multi-tenant Data Isolation', desc: 'Used Supabase Row Level Security policies to ensure complete data separation between landlords, agents, and tenants. Each user only sees their own data, even though it\'s in shared tables.' },
                { title: 'Fast Search at Scale', desc: 'Implemented PostgreSQL full-text search with proper indexing. Built to search across 10K+ properties in under 200ms. Added filters for location, price, property type.' },
                { title: 'Local Payment Integration', desc: 'Integrated Orange Money API with custom webhook handlers. Designed to handle payment verification, escrow deposits, and automated refunds. Built USSD fallback for users without smartphones.' },
                { title: 'Mobile Performance', desc: 'Optimized for Botswana\'s mobile networks. Image compression, lazy loading, service workers for offline mode. PWA can be installed on home screen.' }
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
            <h2 className="text-3xl font-bold text-white mb-4">See the Platform</h2>
            <p className="text-zinc-400 mb-8 text-lg">
              Explore the real estate platform built for Botswana. See the architecture, design, and features in action.
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