'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import DMXLogo from './DMXLogo';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="footer" className="text-gray-300 relative" style={{ backgroundColor: '#0f1d33' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <DMXLogo size="default" className="mb-5 brightness-0 invert" />
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              DMX Talent Solutions Pvt Ltd is your trusted partner for comprehensive
              HR services and talent acquisition across India and globally.
            </p>
            <div className="flex items-center gap-3">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a key={social} href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-red-700 transition-colors flex items-center justify-center text-gray-400 hover:text-white" aria-label={social}>
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Blog', href: '#blog' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-5">Our Services</h3>
            <ul className="space-y-3">
              {['Executive Search', 'IT Staffing', 'Contract Hiring', 'HR Consulting', 'Leadership Coaching', 'Talent Assessment'].map((s) => (
                <li key={s}>
                  <Link href="#services" className="text-sm text-gray-400 hover:text-red-400 transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-5">Contact Us</h3>
            <div className="space-y-4 mb-6">
              <div className="text-sm text-gray-400 flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>
                  #10, BTM 2nd Stage, Bangalore 68<br />
                  No. 3, Service Road, 17th Main Rd, near KEB Office, Aicobo Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068<br />
                  3rd Floor
                </span>
              </div>
              <div className="space-y-1.5">
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a href="tel:+919247090111" className="hover:text-red-400 transition-colors">+91 6364512292</a>
                </p>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <span className="w-4 flex-shrink-0" />
                  <a href="tel:+916364512292" className="hover:text-red-400 transition-colors">+91 9247090111</a>
                </p>
                
              </div>
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@dmxtechservices.com" className="hover:text-red-400 transition-colors">info@dmxtechservices.com</a>
              </p>
            </div>

            <h4 className="text-white font-semibold text-xs uppercase tracking-wide mb-3">Newsletter</h4>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-l-lg text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-red-500" />
              <button className="px-4 py-2.5 bg-red-700 hover:bg-red-600 text-white rounded-r-lg transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} DMX Talent Solutions Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className="fixed bottom-6 right-6 w-11 h-11 bg-red-700 hover:bg-red-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 z-40" aria-label="Back to top">
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    facebook: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
    twitter: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
    linkedin: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z',
    instagram: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z',
  };
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[name] || ''} />
    </svg>
  );
}
