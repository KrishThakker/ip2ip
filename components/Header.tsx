'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center text-2xl font-bold text-blue-900">
            <Image 
              src="/fav.svg" 
              alt="IP2IP Networks" 
              width={10} 
              height={10} 
              className="w-25 h-25 [filter:brightness(0)_saturate(100%)_invert(8%)_sepia(88%)_saturate(2836%)_hue-rotate(216deg)_brightness(97%)_contrast(95%)]" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-blue-900">
              Services
            </Link>
            <a 
              href="https://calendly.com/ip2ip/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/services"
                className="text-gray-600 hover:text-blue-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <a
                href="https://calendly.com/ip2ip/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 