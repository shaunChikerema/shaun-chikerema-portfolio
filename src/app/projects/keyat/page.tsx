// src/app/projects/keyat/page.tsx - BATTLE-READY FOUNDER CASE STUDY
'use client';
import { ArrowLeft, ExternalLink, Github, Building2, MapPin, Users, Database, Shield, Zap, Calendar, Target, Lightbulb, Rocket } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS } from '../../../lib/constants';

export default function KeyatProjectPage() {
  const project = PROJECTS.find(p => p.id === 1);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Strategic Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/#projects" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Portfolio
            </Link>
            <div className="flex space-x-3">
              <a
                href={project.liveUrl}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} className="mr-2" />
                Live Platform
              </a>
              <a
                href={project.githubUrl}
                className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:border-gray-400 hover:text-gray-900 transition-all duration-300 flex items-center text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} className="mr-2" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Strategic Positioning */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
              <Building2 size={16} />
              <span className="font-medium">BITROOT Technology Ecosystem</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
              Transforming Botswana's<br />Real Estate Market
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
              Founder-led development of Botswana's first comprehensive real estate platform, 
              architecting a unified ecosystem that connects property seekers, verified agents, 
              and service providers through scalable multi-tenant infrastructure.
            </p>
            
            {/* Strategic Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{project.metrics.users}</div>
                <div className="text-sm text-gray-600">Target Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{project.metrics.transactions}</div>
                <div className="text-sm text-gray-600">Monthly Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{project.metrics.performance}</div>
                <div className="text-sm text-gray-600">Load Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{project.metrics.reliability}</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>

            {/* Project Context */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-200">
                <Calendar size={16} className="mr-2" />
                {project.duration}
              </div>
              <div className="flex items-center text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-200">
                <Users size={16} className="mr-2" />
                {project.teamSize}
              </div>
              <div className="flex items-center text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-200">
                <MapPin size={16} className="mr-2" />
                Botswana Market Focus
              </div>
              <div className="flex items-center text-green-600 font-medium bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                <Zap size={16} className="mr-2" />
                {project.status}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Business Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Market Transformation</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Solving fundamental challenges in Botswana's real estate landscape through technology and local market integration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Market Position</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  First comprehensive platform serving Botswana's 2.3M population with complete property lifecycle management
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Scalability</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Multi-tenant architecture designed for 10,000+ concurrent users across major Botswana cities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Orange Money integration + USSD fallback for 100% Botswana market coverage
                </p>
              </div>
            </div>

            {/* Botswana-Specific Value Proposition */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Built for Botswana's Unique Market</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Local Payment Ecosystem</h4>
                  <p className="text-gray-600 mb-4">
                    Deep integration with Orange Money and Mascom MyZaka APIs, combined with traditional banking 
                    to serve 100% of Botswana's payment preferences with secure transaction processing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200">Orange Money API</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200">Bank Integration</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200">Secure Escrow</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Mobile-First Accessibility</h4>
                  <p className="text-gray-600 mb-4">
                    Progressive Web App optimized for Botswana's 85% smartphone penetration, with offline 
                    functionality for areas with intermittent connectivity and USSD fallback options.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200">PWA Technology</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200">Offline Support</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200">USSD Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture - Founder's Perspective */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Technical Architecture</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Foundational Decisions</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Built with a multi-tenant architecture using Supabase Row Level Security to ensure complete 
                  data isolation between different user types while maintaining real-time collaboration capabilities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Database className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Real-time Database</div>
                      <div className="text-gray-600 text-sm">PostgreSQL with real-time subscriptions for live updates</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Security First</div>
                      <div className="text-gray-600 text-sm">End-to-end encryption and role-based access control</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Performance Optimized</div>
                      <div className="text-gray-600 text-sm">PWA with offline functionality and intelligent caching</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Key Technical Decisions</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Next.js 15 App Router for optimal performance and SEO</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Supabase for authentication, real-time features, and data isolation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">TypeScript for type safety and maintainability at scale</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Tailwind CSS for consistent, responsive design system</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Challenges & Founder Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12">Technical Challenges & Solutions</h2>
            
            <div className="space-y-8">
              {project.challenges.map((challenge: string, index: number) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6 py-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {challenge}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.solutions[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Complete Technology Stack */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Technology Stack</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(project.techStack).map(([category, technologies]) => (
                <div key={category} className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {technologies.slice(0, 4).map((tech: string, index: number) => (
                      <li key={index} className="text-sm text-gray-600">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Experience the Platform</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Explore Botswana's first comprehensive real estate ecosystem built with scalable architecture 
              and deep local market integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={project.liveUrl}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Platform
              </a>
              <a
                href={project.githubUrl}
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Source Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}