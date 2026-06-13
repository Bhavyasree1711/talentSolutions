'use client';

import { useState } from 'react';
import { X, Copy, Check, Phone, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';


export default function CTASection() {
  const [showCallModal, setShowCallModal] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="cta" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(to right, #C53030 0%, #2B5B84 100%)' }}>
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal direction="up">
          <span className="inline-block text-sm font-semibold text-red-300 uppercase tracking-wide mb-4">GET STARTED TODAY</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
            Ready to Build Your<br />Dream Team?
          </h2>
          <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with DMX Talent Solutions and discover how we can transform your
            hiring process and connect you with exceptional talent.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-[#8C1D1D] hover:bg-[#7A1515] text-white font-bold text-sm rounded-lg transition-all duration-300 hover:shadow-xl tracking-wide uppercase inline-flex items-center gap-2 group">
              GET STARTED
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            <button 
              onClick={() => setShowCallModal(true)}
              className="px-8 py-4 bg-white/10 backdrop-blur text-white font-bold text-sm rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 tracking-wide uppercase cursor-pointer select-none"
            >
              SCHEDULE A CALL
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Direct Contact Modal */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0B1F3A] border border-blue-900/40 text-white rounded-3xl p-6 md:p-8 max-w-md w-full relative shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setShowCallModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 text-left">
              <span className="inline-block px-3 py-1 bg-red-950/50 text-red-400 border border-red-900/30 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                Direct Contact
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Connect With Us</h3>
              <p className="text-sm text-blue-200">
                Choose an option below to get in touch with our team directly. We are ready to assist you.
              </p>
            </div>

            <div className="space-y-4 text-left">
              {/* Phone Number 1 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-blue-300 font-semibold uppercase block">Primary Contact</span>
                    <a href="tel:+919247030111" className="text-base font-bold text-white hover:underline">
                      +91 9247030111
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+919247030111"
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all shadow-sm"
                  >
                    Call
                  </a>
                  <button
                    onClick={() => handleCopy('+919247030111')}
                    className="p-2 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white rounded-lg transition-all"
                    title="Copy to clipboard"
                  >
                    {copiedText === '+919247030111' ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Number 2 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-blue-300 font-semibold uppercase block">Alternate Contact</span>
                    <a href="tel:+917829121232" className="text-base font-bold text-white hover:underline">
                      +91 7829121232
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+917829121232"
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all shadow-sm"
                  >
                    Call
                  </a>
                  <button
                    onClick={() => handleCopy('+917829121232')}
                    className="p-2 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white rounded-lg transition-all"
                    title="Copy to clipboard"
                  >
                    {copiedText === '+917829121232' ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* WhatsApp Support */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-green-300 font-semibold uppercase block">WhatsApp Chat</span>
                    <a
                      href="https://wa.me/919247090111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white hover:underline"
                    >
                      +91 9247090111
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/919247090111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-bold transition-all shadow-sm"
                >
                  Chat
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              <button
                onClick={() => setShowCallModal(false)}
                className="w-full sm:w-auto px-5 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
