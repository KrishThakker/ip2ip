'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Network, Users, ChevronDown, ChevronRight, Bot } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden pt-16 md:pt-0">
        {/* Dots Pattern */}
        <div className="absolute inset-0 bg-[url('/dots.svg')] bg-[length:20px_20px] opacity-100" />
        
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse hidden md:block" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000 hidden md:block" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-white pt-12 md:pt-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="block mb-2 md:mb-0 md:inline">Transforming Networks,</span>{' '}
              <span className="bg-gradient-to-r from-blue-200 to-blue-100 text-transparent bg-clip-text block md:inline">
                Empowering Business
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-blue-50 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Bespoke network and security solutions, talent acquisition, and AI integration for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16 px-4 sm:px-0">
              <a 
                href="mailto:info@ip2ipnetworks.com"
                className="bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto text-center"
              >
                Send Email
              </a>
              <Link 
                href="/services"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-all w-full sm:w-auto text-center"
              >
                Explore Services
              </Link>
            </div>

            {/* Technology Partners */}
            <div className="hidden md:block mt-12 md:mt-16">
              <p className="text-xs sm:text-sm text-blue-100 mb-6 sm:mb-8 opacity-80">
                Expertise in industry-leading technologies
              </p>
              <div className="relative overflow-hidden w-full">
                <div className="flex animate-scroll">
                  {[
                    { src: '/logos/vendors/cisco.svg', alt: 'Cisco', width: 65, height: 34, className: 'p-3' },
                    { src: '/logos/vendors/aws.svg', alt: 'AWS', width: 45, height: 28, className: 'p-3' },
                    { src: '/logos/vendors/paloalto.svg', alt: 'Palo Alto Networks', width: 120, height: 35 },
                    { src: '/logos/vendors/fortinet.svg', alt: 'Fortinet', width: 105, height: 35 },
                    { src: '/logos/vendors/juniper.svg', alt: 'Juniper Networks', width: 105, height: 28 },
                    { src: '/logos/vendors/splunk.svg', alt: 'Splunk', width: 100, height: 35 },
                    { src: '/logos/vendors/stablenet.svg', alt: 'StableNet', width: 120, height: 35 },
                    { src: '/logos/vendors/scrum.svg', alt: 'Scrum', width: 120, height: 35 },
                    // Duplicate logos for seamless loop
                    { src: '/logos/vendors/cisco.svg', alt: 'Cisco 2', width: 65, height: 34, className: 'p-3' },
                    { src: '/logos/vendors/aws.svg', alt: 'AWS 2', width: 45, height: 28, className: 'p-3' },
                    { src: '/logos/vendors/paloalto.svg', alt: 'Palo Alto Networks 2', width: 120, height: 35 },
                    { src: '/logos/vendors/fortinet.svg', alt: 'Fortinet 2', width: 105, height: 35 },
                    { src: '/logos/vendors/juniper.svg', alt: 'Juniper Networks 2', width: 105, height: 28 },
                    { src: '/logos/vendors/splunk.svg', alt: 'Splunk 2', width: 100, height: 35 },
                    { src: '/logos/vendors/stablenet.svg', alt: 'StableNet 2', width: 120, height: 35 },
                    { src: '/logos/vendors/scrum.svg', alt: 'Scrum 2', width: 120, height: 35 },
                  ].map((logo) => (
                    <div key={logo.alt} className="flex-none w-[120px] mx-4 flex items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className={`w-auto h-auto object-contain opacity-50 hover:opacity-100 transition-opacity [filter:brightness(0)_saturate(100%)_invert(1)_sepia(0)_saturate(0)_hue-rotate(0deg)_brightness(1)_contrast(1)] ${logo.className || ''}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Network Services */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group flex flex-col h-full">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Network className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Network Solutions</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive bespoke network and security analysis, design, implementation, and documentation services tailored to your business needs.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center group mt-auto">
                Learn More
                <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Recruitment Services */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group flex flex-col h-full">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Users className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">IT Recruitment</h3>
              <p className="text-gray-600 mb-6">
                Connect with top-tier IT talent through our specialised recruitment services, ensuring the perfect match for your organisation.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center group mt-auto">
                Learn More
                <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* AI Services */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group flex flex-col h-full">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Bot className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Custom AI Solutions</h3>
              <p className="text-gray-600 mb-6">
                Secure, internal AI systems designed to streamline your network operations and maintenance processes.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center group mt-auto">
                Learn More
                <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-blue-900 text-white overflow-hidden">
        {/* Dots Pattern */}
        <div className="absolute inset-0 bg-[url('/dots.svg')] bg-[length:20px_20px] opacity-100" />
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-800/50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-700/50 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Network?</h2>
            <p className="text-xl mb-12 text-blue-100">
              Let&apos;s discuss how IP2IP Networks can help optimize your infrastructure and streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:info@ip2ipnetworks.com"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg inline-block"
              >
                Send Email
              </a>
              <a
                href="https://calendly.com/ip2ip/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105 inline-block"
              >
                Book a Meeting
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
