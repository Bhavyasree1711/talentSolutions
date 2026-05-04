'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import DMXLogo from './DMXLogo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SOLUTIONS', href: '#talents' },
    { label: 'CLIENTS', href: '#clients' },
    { label: 'TRAINING', href: '#training' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-white/95'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex-shrink-0">
            {/* <DMXLogo size="nav"/> */}
            <DMXLogo
  size="nav"
  className="text-sm font-semibold text-red-700 uppercase tracking-wide"
/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-red-700 transition-colors tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Search + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            
            <a
              href="/#contact"
              className="px-6 py-2.5 text-white font-bold text-xs rounded-lg transition-all duration-300 hover:shadow-lg tracking-wide uppercase flex items-center gap-1.5 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #E63946 0%, #0B1F3A 100%)' }}
            >
              GET IN TOUCH
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
          <div className="flex flex-col gap-1 pt-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center justify-between text-sm font-semibold text-gray-700 hover:text-red-700 px-3 py-3 rounded-lg hover:bg-gray-50 transition-all tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#contact"
              className="mt-3 w-full px-6 py-3 bg-red-700 text-white font-bold text-sm rounded-lg hover:bg-red-800 transition-colors text-center tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
