'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-50 rounded-full -translate-x-1/2 translate-y-1/3 opacity-40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1" style={{ backgroundColor: '#E63946' }} />
            <span className="text-sm font-bold text-red-700 uppercase tracking-widest">GET IN TOUCH</span>
            <div className="w-12 h-1" style={{ backgroundColor: '#E63946' }} />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-outfit)', color: '#0B1F3A' }}>
            Contact DMX TALENT SOLUTIONS
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? Get in touch with our team. We're here to help!
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              {/* Phone */}
              <div className="group flex items-start gap-4 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-700 group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" style={{ color: '#E63946' }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Phone</p>
                  <a href="tel:+919247090111" className="text-gray-600 hover:text-red-700 transition-colors">
                    +91 9247090111
                  </a>
                  <br />
                  
                  <a href="tel:+916364512292" className="text-gray-600 hover:text-red-700 transition-colors">
                    +91 6364512292
                  </a>
                  
                  
                 
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start gap-4 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-700 group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" style={{ color: '#E63946' }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Email</p>
                  <a href="mailto:info@dmxtechservices.com" className="text-gray-600 hover:text-red-700 transition-colors">
                    info@dmxtechservices.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="group flex items-start gap-4 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-700 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" style={{ color: '#E63946' }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Address</p>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>DMX TECH SERVICES PVT.LTD - BTM 1st Stage</strong><br />
                    No. 3, Service Road, 17th Main Rd, 3rd Floor, near KEB Office, Aicobo Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Near KEB Office</strong>
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Mon-Sat: 09:00-19:00</strong>
                  </p>
                  <div className="flex gap-4 mt-2">
                    <a href="https://www.google.com/maps/place/KTM+Husqvarna+BTM+Layout/@12.9167554,77.6109115,17z/data=!4m6!3m5!1s0x3bae14fc2cf4bbff:0xd21809b7c1316646!8m2!3d12.9167445!4d77.6108699!16s%2Fg%2F12htvmww9?hl=en&entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800 font-medium text-sm">
                      Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="group flex items-start gap-4 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-700 group-hover:text-white transition-all duration-300">
                  <Globe className="w-6 h-6" style={{ color: '#E63946' }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Website</p>
                  <a href="https://www.dmxtechservices.com" className="text-gray-600 hover:text-red-700 transition-colors">
                    www.dmxtechservices.com
                  </a>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 p-6 bg-white rounded-2xl border-2 border-gray-100 shadow-lg">
                <p className="text-sm font-bold text-gray-600 mb-4 uppercase tracking-wider">Why Choose Us</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span className="text-gray-700 font-medium">48hrs Response Time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span className="text-gray-700 font-medium">94% Retention Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span className="text-gray-700 font-medium">85% Technical Match</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span className="text-gray-700 font-medium">15+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-700 focus:outline-none transition-colors bg-gray-50"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-700 focus:outline-none transition-colors bg-gray-50"
                    />
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-700 focus:outline-none transition-colors bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-700 focus:outline-none transition-colors bg-gray-50"
                    >
                      <option value="">Select a subject</option>
                      <option value="recruitment">Recruitment Services</option>
                      <option value="training">Training Programs</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your needs..."
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-700 focus:outline-none transition-colors bg-gray-50 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-4 px-8 text-white font-bold text-sm rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 tracking-widest uppercase flex items-center justify-center gap-2 group"
                    style={{ backgroundColor: '#E63946' }}
                  >
                    Send Message
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </button>
                </div>

                {/* Success Message */}
                {submitted && (
                  <div className="p-4 bg-green-50 border-2 border-green-500 rounded-lg">
                    <p className="text-green-700 font-bold text-sm">✓ Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
