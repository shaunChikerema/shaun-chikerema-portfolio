// src/app/projects/policybridge/page.tsx - BATTLE-READY INDUSTRY TRANSFORMATION STORY
'use client';
import { ArrowLeft, ExternalLink, Github, Building2, Calendar, Users, FileText, Shield, Zap, Database, Target, TrendingUp, Clock, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS } from '../../../lib/constants';

export default function PolicyBridgePage() {
  const project = PROJECTS.find(p => p.id === 2);

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

      {/* Hero Section - Industry Transformation */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 text-sm text-blue-700 mb-4">
              <Building2 size={16} />
              <span className="font-medium">BITROOT Technology Ecosystem</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
              Digital Transformation for<br />Botswana's Insurance Industry
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
              Founder-led development of enterprise-grade insurance management SaaS, 
              automating manual processes and providing real-time business intelligence 
              for Botswana's $200M insurance market.
            </p>
            
            {/* Strategic Impact Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{project.metrics.users}</div>
                <div className="text-sm text-gray-600">Insurance Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{project.metrics.documents}</div>
                <div className="text-sm text-gray-600">Payslips Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{project.metrics.performance}</div>
                <div className="text-sm text-gray-600">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{project.metrics.reliability}</div>
                <div className="text-sm text-gray-600">Platform Uptime</div>
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
                <FileText size={16} className="mr-2" />
                Insurance Industry SaaS
              </div>
              <div className="flex items-center text-green-600 font-medium bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                <Zap size={16} className="mr-2" />
                {project.status}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Transformation Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Transforming Insurance Operations</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Solving fundamental inefficiencies in Botswana's insurance brokerage landscape through automation and real-time intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">20+ Hours Weekly</h3>
                <p className="text-gray-600 text-sm">Saved per broker on manual document processing</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">60% Faster</h3>
                <p className="text-gray-600 text-sm">Document processing vs manual methods</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">10,000+ Documents</h3>
                <p className="text-gray-600 text-sm">Monthly automated processing capacity</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">500+ Brokers</h3>
                <p className="text-gray-600 text-sm">Multi-tenant architecture capacity</p>
              </div>
            </div>

            {/* Insurance Industry Value Proposition */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Built for Botswana's Insurance Regulatory Landscape</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Compliance-First Architecture</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Designed specifically for Botswana's insurance regulatory requirements with built-in 
                    audit trails, data encryption, and role-based access control for sensitive financial information.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200">Audit Trails</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200">Data Encryption</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200">RBAC Security</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Enterprise Document Automation</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Queue-based PDF generation handling 10,000+ payslips monthly with customizable templates, 
                    bulk processing, and automated email distribution for insurance compliance documentation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200">PDF Generation</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200">Bulk Processing</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200">Email Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture - Enterprise Focus */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Enterprise-Grade Architecture</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Data Security</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Multi-tenant architecture with Supabase Row Level Security ensures complete data isolation 
                  between insurance brokers while maintaining real-time collaboration and audit capabilities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Bank-Grade Security</div>
                      <div className="text-gray-600 text-sm">End-to-end encryption and compliance auditing</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Document Automation</div>
                      <div className="text-gray-600 text-sm">Puppeteer-based PDF generation at scale</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Database className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Real-Time Analytics</div>
                      <div className="text-gray-600 text-sm">Live business intelligence and reporting</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Architectural Decisions</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Next.js 14 App Router for optimal SEO and enterprise performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Supabase RLS for secure multi-tenant financial data isolation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Puppeteer for server-side PDF generation with queue processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">TypeScript for financial data integrity and regulatory compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Challenges & Enterprise Solutions */}
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
            <h2 className="text-3xl font-semibold mb-4">Experience Insurance Transformation</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Explore the enterprise-grade insurance management platform built with scalable architecture 
              and automated document processing for Botswana's market.
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