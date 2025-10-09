//src/app/projects/policybridge/page.tsx
'use client';
import { ArrowLeft, ExternalLink, Github, Building2, Calendar, Users, FileText, Shield, Zap, Database } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS } from '../../../lib/constants';

export default function PolicyBridgePage() {
  const project = PROJECTS.find(p => p.id === 2); // FIXED: PolicyBridge ID

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
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/#projects" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Link>
            <div className="flex space-x-3">
              <a
                href={project.liveUrl}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} className="mr-2" />
                Live Application
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

      {/* Hero Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
              <Building2 size={16} />
              <span>BITROOT Ecosystem</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Enterprise-grade insurance management SaaS platform with automated document generation, 
              multi-tenant architecture, and real-time analytics for Botswana's insurance industry.
            </p>
            
            {/* Project Metadata */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {project.duration}
              </div>
              <div className="flex items-center">
                <Users size={16} className="mr-2" />
                {project.teamSize}
              </div>
              <div className="flex items-center">
                <FileText size={16} className="mr-2" />
                Insurance SaaS
              </div>
              <div className="flex items-center text-green-600 font-medium">
                <Zap size={16} className="mr-2" />
                {project.status}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">System Architecture</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Foundation</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Built with secure multi-tenant architecture using Supabase Row Level Security for complete 
                  data isolation between insurance brokers. Handles sensitive financial data with end-to-end 
                  encryption and audit trails.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <FileText size={16} className="mr-3 text-gray-400" />
                    Automated PDF generation with Puppeteer
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Shield size={16} className="mr-3 text-gray-400" />
                    Bank-grade security and compliance
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Database size={16} className="mr-3 text-gray-400" />
                    Real-time analytics and reporting
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Key Technical Decisions</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <span>Next.js 14 with App Router for optimal SEO and performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <span>Supabase RLS for secure multi-tenant data isolation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <span>Puppeteer for server-side PDF generation at scale</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <span>TypeScript for financial data integrity and type safety</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Insurance Industry Solutions */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Insurance Industry Integration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Document Automation</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Automated payslip generation with customizable templates, bulk processing, 
                    and email distribution. Handles 10,000+ documents monthly with queue-based processing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">PDF Generation</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Bulk Processing</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Email Automation</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Compliance & Security</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Built for Botswana's insurance regulatory requirements with audit trails, 
                    data encryption, and role-based access control for sensitive financial information.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Data Encryption</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Audit Logs</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">RBAC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Challenges & Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12">Technical Challenges & Solutions</h2>
            
            <div className="space-y-8">
              {project.challenges?.map((challenge: string, index: number) => (
                <div key={index} className="border-l-4 border-gray-900 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {challenge}
                  </h3>
                  <p className="text-gray-600">
                    {project.solutions?.[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Business Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Operational Efficiency</h3>
                <p className="text-gray-600 text-sm">
                  Automates manual processes, saving insurance brokers 20+ hours per week on 
                  document generation and client management tasks.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Scalability</h3>
                <p className="text-gray-600 text-sm">
                  Multi-tenant architecture supports 500+ insurance brokers simultaneously 
                  with isolated data and customized workflows.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Revenue Model</h3>
                <p className="text-gray-600 text-sm">
                  SaaS subscription model with tiered pricing based on features, number of users, 
                  and document processing volume.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Market Innovation</h3>
                <p className="text-gray-600 text-sm">
                  First comprehensive insurance management platform in Botswana with automated 
                  document generation and real-time analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Technology Stack</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(project.techStack || {}).map(([category, technologies]) => (
                <div key={category} className="bg-gray-50 rounded-lg p-4">
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

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Explore the Platform</h2>
            <p className="text-gray-300 mb-8">
              Experience the insurance management platform built with scalable architecture and automated document processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={project.liveUrl}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Application
              </a>
              <a
                href={project.githubUrl}
                className="border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300"
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