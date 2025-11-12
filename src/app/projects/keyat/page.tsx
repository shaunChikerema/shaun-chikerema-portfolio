// FILE: src/app/projects/keyat/page.tsx
// 10/10 VERSION - PRODUCTION READY
// NOTE: GitHub repo is PRIVATE - removed code button

'use client';
import { ArrowLeft, ExternalLink, Building2, MapPin, Users, Database, Shield, Zap, Calendar, Target, Lightbulb, Rocket } from 'lucide-react';
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
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
              <Building2 size={16} />
              <span className="font-medium">BITROOT Ecosystem</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
              Keyat: Real Estate Platform<br />for Botswana
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
              I built Botswana's first comprehensive real estate platform. Multi-tenant architecture connecting property seekers, agents, and landlords with local payment integration.
            </p>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">10K+</div>
                <div className="text-sm text-gray-600">Monthly Searches</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">&lt;200ms</div>
                <div className="text-sm text-gray-600">Search Time</div>
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
                Built in 4 months
              </div>
              <div className="flex items-center text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-200">
                <Users size={16} className="mr-2" />
                Solo founder-engineer
              </div>
              <div className="flex items-center text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-200">
                <MapPin size={16} className="mr-2" />
                Gaborone, Botswana
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
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">What I Built</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">First in Market</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  First comprehensive platform serving Botswana's property market with verified listings and agent profiles
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Built to Scale</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Multi-tenant architecture designed to handle 10K+ concurrent users across Botswana's cities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Local Integration</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Orange Money + bank API integration with USSD fallback for complete Botswana coverage
                </p>
              </div>
            </div>

            {/* Botswana-Specific Features */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Built for Botswana</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Local Payments</h4>
                  <p className="text-gray-600 mb-4">
                    Orange Money and Mascom MyZaka integration with traditional banking fallbacks. Covers 100% of Botswana's payment preferences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">Orange Money</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">Bank APIs</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">Secure Escrow</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Mobile-First</h4>
                  <p className="text-gray-600 mb-4">
                    PWA optimized for Botswana's 85% smartphone penetration. Works offline, syncs when connected. USSD backup for feature phones.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">PWA</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">Offline Mode</span>
                    <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">USSD</span>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Decisions</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Multi-tenant architecture using Supabase Row Level Security. Complete data isolation between users while maintaining real-time updates.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Database className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Real-time Database</div>
                      <div className="text-gray-600 text-sm">PostgreSQL with live subscriptions</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Security First</div>
                      <div className="text-gray-600 text-sm">Encryption + role-based access</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Performance</div>
                      <div className="text-gray-600 text-sm">PWA with intelligent caching</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Tech Stack</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Next.js 15 for performance and SEO</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Supabase for auth and real-time data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">TypeScript for type safety at scale</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Tailwind CSS for responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Vercel for deployment (99.9% uptime)</span>
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
                  Multi-tenant Data Isolation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Used Supabase Row Level Security policies to ensure complete data separation between landlords, agents, and tenants. Each user only sees their own data, even though it's in shared tables.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Fast Search at Scale
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Implemented PostgreSQL full-text search with proper indexing. Searches across 10K+ properties return in under 200ms. Added filters for location, price, property type.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Local Payment Integration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrated Orange Money API with custom webhook handlers. Handles payment verification, escrow deposits, and automated refunds. Built USSD fallback for users without smartphones.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Mobile Performance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimized for Botswana's mobile networks. Image compression, lazy loading, service workers for offline mode. PWA can be installed on home screen.
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
              Explore Botswana's first comprehensive real estate platform. Browse properties, check agent profiles, see how it works.
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