// FILE: src/app/projects/policybridge/page.tsx
// 10/10 VERSION - PRODUCTION READY
// NOTE: GitHub repo is PRIVATE - removed code button

'use client';
import { ArrowLeft, ExternalLink, Building2, Calendar, Users, FileText, Shield, Zap, Database, Target, TrendingUp, Clock, BarChart3 } from 'lucide-react';
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
      {/* Header */}
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
            <a
              href={project.liveUrl}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} className="mr-2" />
              View Live Platform
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 text-sm text-blue-700 mb-4">
              <Building2 size={16} />
              <span className="font-medium">BITROOT Ecosystem</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
              PolicyBridge: Insurance<br />Management SaaS
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
              I built an enterprise insurance management platform for Botswana's brokers. Automates policy processing, document generation, and compliance tracking.
            </p>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Policies Processed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">10K+</div>
                <div className="text-sm text-gray-600">Documents/Month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">60%</div>
                <div className="text-sm text-gray-600">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>

            {/* Context */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-200">
                <Calendar size={16} className="mr-2" />
                Built in 3 months
              </div>
              <div className="flex items-center text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-200">
                <Users size={16} className="mr-2" />
                Solo founder-engineer
              </div>
              <div className="flex items-center text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-200">
                <FileText size={16} className="mr-2" />
                Insurance SaaS
              </div>
              <div className="flex items-center text-green-600 font-medium bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                <Zap size={16} className="mr-2" />
                Live in Production
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">What It Does</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Time Saved</h3>
                <p className="text-gray-600 text-sm">Designed to save brokers 20+ hours/week on manual tasks</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Faster</h3>
                <p className="text-gray-600 text-sm">60% faster than manual document processing</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Scale</h3>
                <p className="text-gray-600 text-sm">Handles 10K+ documents monthly</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Multi-tenant</h3>
                <p className="text-gray-600 text-sm">Designed for 500+ concurrent brokers</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Built for Botswana's Insurance Industry</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Compliance First</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Built-in audit trails, data encryption, and role-based access for Botswana's insurance regulations. Every action is logged and traceable.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">Audit Trails</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">Encryption</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">RBAC</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Document Automation</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Queue-based PDF generation. Handles 10K+ payslips monthly with custom templates, bulk processing, and automated email distribution.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">PDF Engine</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">Bulk Processing</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">Email Auto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Technical Architecture</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Security</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Multi-tenant architecture with Supabase Row Level Security. Complete data isolation between brokers while maintaining real-time updates and audit capabilities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Bank-Grade Security</div>
                      <div className="text-gray-600 text-sm">Encryption + compliance auditing</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">PDF Generation</div>
                      <div className="text-gray-600 text-sm">Puppeteer-based automation</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Database className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Real-Time Analytics</div>
                      <div className="text-gray-600 text-sm">Live business intelligence</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Tech Stack</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Next.js 14 for SEO and performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Supabase RLS for secure multi-tenancy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Puppeteer for PDF generation at scale</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">TypeScript for data integrity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Firebase for real-time notifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12">Problems I Solved</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Bulk PDF Generation at Scale
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Built a queue system with Puppeteer to generate 10K+ payslips monthly. Each PDF is rendered server-side, validated, then stored in Supabase Storage. Handles concurrent requests without timeouts.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Multi-Tenant Data Isolation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Used Supabase Row Level Security to ensure brokers can only see their own clients' data. Each policy, document, and transaction is tied to a broker_id with strict RLS policies.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Compliance & Audit Trails
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every action (policy created, document generated, payment processed) is logged with timestamps, user IDs, and IP addresses. Meets Botswana's insurance regulatory requirements.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Real-Time Notifications
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Firebase Cloud Messaging for instant notifications when documents are ready, policies expire, or payments are due. Works on web and mobile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Tech Stack */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Complete Tech Stack</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(project.techStack).map(([category, technologies]) => (
                <div key={category} className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {technologies.map((tech: string, index: number) => (
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

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">See It Live</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Explore the insurance management platform built for Botswana's brokers. Automated document processing, compliance tracking, real-time analytics.
            </p>
            <a
              href={project.liveUrl}
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Platform
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}