import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductNav from '@/components/ProductNav';
import { 
  ArrowRight, ShieldCheck, Video, Languages, Mic, FileText, Settings,
  MonitorPlay, GraduationCap, Building2, Landmark
} from 'lucide-react';

export default function AIVideoTransPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <ProductNav />
      
      <main className="flex-grow pt-4 pb-16">
        {/* HERO SECTION */}
        <section className="relative bg-[#0B1F3A] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1920&q=80" 
              alt="Video Translation Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                AI-Based Video <span className="text-red-500">Translation</span> & Summarization
              </h1>
              <p className="text-xl font-semibold text-gray-200 mb-4">Break Language Barriers with AI. Translate. Summarize. Speak.</p>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                Our AI Video Translation & Summarization Tool transforms your videos into multilingual, accessible content — fast, accurate, and effortless.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="px-8 py-3.5 bg-red-700 hover:bg-red-600 text-white font-bold rounded-lg shadow-lg hover:shadow-red-700/20 transition-all flex items-center justify-center gap-2"
                >
                  Request Demo <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive tools to make your video content accessible worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Transcribe', desc: 'Converts video speech into accurate English transcripts', icon: FileText },
                { title: 'Summarize', desc: 'Delivers concise, context-rich summaries', icon: ShieldCheck },
                { title: 'Translate', desc: 'Supports English, Tamil, Hindi, and Telugu (scalable to more)', icon: Languages },
                { title: 'Voiceover', desc: 'Generates natural-sounding multilingual audio overlays', icon: Mic },
                { title: 'Keyword Smart', desc: 'Customize transcripts with inclusion/exclusion rules', icon: Settings },
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-red-50 text-red-700 flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IDEAL FOR */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-12">Ideal For</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Media & Entertainment', icon: MonitorPlay, desc: 'Perfect for content creators, broadcasters, and media companies' },
                { name: 'E-learning & Training', icon: GraduationCap, desc: 'Ideal for educational institutions and corporate training' },
                { name: 'Enterprises & Corporates', icon: Building2, desc: 'Essential for global communications and presentations' },
                { name: 'Gov & Public Comm', icon: Landmark, desc: 'Crucial for public sector organizations communicating with diverse populations' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW & SPECS */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">Platform Overview & Specifications</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div> Product Overview
                    </h3>
                    <p className="text-gray-600">
                      AI-VideoTrans is an advanced neural localization platform that translates, dubs, and transcribes video content into regional languages. It utilizes neural voice cloning and speech-to-speech alignment to preserve the speaker's original tone and timing.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div> Key Capabilities
                    </h3>
                    <p className="text-gray-600">
                      Automated multi-dialect speech recognition, neural voice cloning, video dubbing, frame-accurate subtitle synchronization, and keyword-based smart transcription filters.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div> Business Benefits
                    </h3>
                    <p className="text-gray-600">
                      Expands student/audience reach globally at a fraction of manual dubbing costs, ensures accessibility compliance, and drives higher learner engagement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Deployment & Integration</h3>
                    <p className="text-gray-600 text-sm">
                      Scalable cloud processing pipeline, supporting hybrid storage (S3/Azure), with REST APIs for automated video CMS ingestion and export.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Security & Compliance</h3>
                    <p className="text-gray-600 text-sm">
                      Secure media processing environments, custom watermarking, end-to-end data encryption (AES-256), and secure user access management.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Implementation & Support</h3>
                    <p className="text-gray-600 text-sm">
                      Custom voice-cloning setup, dictionary tuning for local slang or technical terms, and SLA-backed processing pipelines.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Target Customers</h3>
                    <p className="text-gray-600 text-sm">
                      Universities offering online courses, EdTech platforms, global corporations, content creators, and government public relations teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="py-20 bg-[#0B1F3A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Video Translation Tool?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                AI-VideoTrans is not just a dubbing engine—it is a complete neural localization platform that breaks language barriers at scale with unmatched speed and fidelity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Break Language Barriers Instantly',
                  desc: 'Translate and dub video content into Tamil, Hindi, Telugu, and more with a single click. AI-VideoTrans preserves the speaker\'s original tone and emotion using neural voice cloning, making localized content feel native and authentic.'
                },
                {
                  title: 'Neural Voice Cloning Precision',
                  desc: 'Our deep-learning speech synthesis engine doesn\'t just translate—it clones the speaker\'s unique voice, pitch, and cadence into the target language. The result is dubbed audio that sounds like the original presenter, not a robotic voiceover.'
                },
                {
                  title: 'Scale to Global Audiences',
                  desc: 'From a single lecture to an entire content library with thousands of hours, AI-VideoTrans\'s cloud-native pipeline processes videos in parallel—delivering localized content at a fraction of the cost and time of manual dubbing studios.'
                },
                {
                  title: 'Smart Summaries & Keyword Filters',
                  desc: 'Go beyond translation. AI-VideoTrans automatically generates concise, context-rich summaries of every video, while intelligent keyword inclusion and exclusion rules let you fine-tune transcripts for domain-specific accuracy.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center mt-1">
                      <Languages className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about our training programs and IT services. Ready to advance your career or transform your business? We're here to help.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'How can AI Video Translation help our educational platform reach a global audience?',
                  a: 'It automates the translation of course materials into multiple languages simultaneously, enabling instant access for non-native speakers across the world without manual dubbing overhead.'
                },
                { q: 'Does the AI preserve the original speaker\'s tone and emotion?', a: 'Yes. Our neural voice cloning engine meticulously maps the original speaker\'s pitch and cadence to the translated language.' },
                { q: 'How accurate is the technical terminology translation for corporate training videos?', a: 'Highly accurate. You can also customize the transcript dictionary using inclusion/exclusion rules to preserve brand names and technical terms.' },
                { q: 'Is lip-syncing synchronization included in the translation process?', a: 'The AI ensures frame-accurate subtitle synchronization and times the generated audio appropriately to match the original flow.' },
                { q: 'How long does it take to translate a 1-hour corporate webinar?', a: 'Processing times vary, but our cloud-native pipeline works in parallel, typically processing video much faster than the video\'s total length.' },
                { q: 'Can we integrate this translation API directly into our media streaming platform?', a: 'Yes, we provide robust REST APIs for seamless automated ingestion and export of your video CMS.' },
                { q: 'Who retains the copyright of the translated videos?', a: 'You retain 100% full commercial rights and ownership of all generated content, transcripts, and dubbed audio files.' }
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-gray-900 hover:text-red-700 transition-colors">
                    <span className="pr-6 font-semibold">{faq.q}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-3 group-open:animate-fadeIn p-6 pt-0 border-t border-gray-100">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
              <a href="/contact" className="inline-block px-8 py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg transition-colors">
                Get in touch
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
