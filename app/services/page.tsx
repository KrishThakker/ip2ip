import Link from 'next/link';
import {FileText, CheckCircle2, CircleCheck, SearchCode, Network, Router } from 'lucide-react';

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative">
      {/* Dots Pattern */}
      <div className="absolute inset-0 bg-[url('/dots.svg')] bg-[length:20px_20px] opacity-80 [filter:invert(0.5)_sepia(0)_saturate(0)_brightness(0.8)]" />
      
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-200/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-300/50 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <p className="text-xl text-gray-600 mb-16 max-w-3xl">
          IP2IP Networks delivers comprehensive solutions across network infrastructure, IT recruitment, and AI integration to help businesses thrive in the digital age.
        </p>

        {/* Network Solutions */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <SearchCode className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analysis</h3>
              <p className="text-gray-600">
                Comprehensive assessment of your current network and security infrastructure, identifying bottlenecks and opportunities for optimisation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-gray-600">
                Bespoke network and security architecture design that scales with your business, incorporating the latest technologies and industry best practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Router className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementation</h3>
              <p className="text-gray-600">
                Expert deployment of network and security solutions with minimal disruption to your operations, ensuring smooth transition and integration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Documentation</h3>
              <p className="text-gray-600">
                Industry standard documentation of network and security solutions to ensure streamlined operations and maintenance.
              </p>
            </div>
          </div>
        </section>

        {/* IT Recruitment */}
        <section className="mb-20">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <p className="text-lg text-gray-600 mb-6">
                Our specialized IT recruitment service connects organizations with top-tier talent across various technology domains. We understand that finding the right technical expertise is crucial for your success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    Network Engineers
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    System Administrators
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    Security Specialists
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    Network Design Engineers
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    Cloud Engineers
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    DevOps Engineers
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    IT Project Managers
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    Network Architects
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AI Solutions */}
        <section className="mb-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Network AI Integration</h3>
                <p className="text-gray-600 mb-6">
                  Our custom AI solutions help streamline network operations, automate routine tasks, and provide intelligent insights for better decision-making.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CircleCheck className="w-5 h-5 text-blue-600 mr-2" />
                    Automated Network Monitoring
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CircleCheck className="w-5 h-5 text-blue-600 mr-2" />
                    Predictive Maintenance
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CircleCheck className="w-5 h-5 text-blue-600 mr-2" />
                    Intelligent Resource Allocation
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
                <p className="text-gray-600 mb-6">
                  Our AI solutions are built with security at their core, ensuring your network operations remain protected while maintaining compliance with industry standards.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CircleCheck className="w-5 h-5 text-blue-600 mr-2" />
                    Threat Detection & Response
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CircleCheck className="w-5 h-5 text-blue-600 mr-2" />
                    Compliance Monitoring
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CircleCheck className="w-5 h-5 text-blue-600 mr-2" />
                    Access Control & Authentication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss how we can help transform your network infrastructure.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg"
          >
            Schedule a Consultation
          </Link>
        </section>
      </div>
    </main>
  );
} 