import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductNav from '@/components/ProductNav';
import ProductFAQSection from '@/components/ProductFAQSection';
import ProductTestimonialsSection from '@/components/ProductTestimonialsSection';
import { 
  FileText, Languages, Mic, Settings, Search, MonitorPlay, 
  ShieldCheck, Building2, GraduationCap, Video, Zap
} from 'lucide-react';

export default function AIVideoTransPage() {
  const testimonials = [
    {
      quote: "AI-VideoTrans has revolutionized our global corporate training. We can now deploy learning materials in 4 languages simultaneously without the exorbitant costs of manual dubbing.",
      name: "David Chen",
      role: "VP of Learning & Development",
      company: "TechGlobal Corp"
    },
    {
      quote: "The neural voice cloning is indistinguishable from the original speaker. It preserves the emotion and tone of our professors, making localized lectures feel incredibly authentic.",
      name: "Prof. Elena Rostova",
      role: "Director of Online Education",
      company: "European Institute of Technology"
    },
    {
      quote: "We process thousands of hours of video content monthly. The smart summaries and accurate transcripts have saved our editorial team countless hours of manual review.",
      name: "Marcus Johnson",
      role: "Head of Content Operations",
      company: "MediaStream Network"
    }
  ];

  const faqs = [
    {
      question: "Which languages are currently supported by the AI-VideoTrans engine?",
      answer: "We currently support high-fidelity neural translation and dubbing for English, Tamil, Hindi, and Telugu. Our architecture is highly scalable, and we are continuously adding support for more regional and global languages."
    },
    {
      question: "How accurate is the lip-syncing and speech-to-speech alignment?",
      answer: "Our platform uses frame-accurate subtitle synchronization and advanced speech-to-speech alignment algorithms to match the length and pacing of the translated audio to the original video as closely as computationally possible."
    },
    {
      question: "Is my proprietary video content secure during processing?",
      answer: "Yes, security is our top priority. We use secure media processing environments, custom watermarking, and end-to-end data encryption (AES-256). We do not use your proprietary data to train public models."
    },
    {
      question: "Can we customize the transcriptions for specific industry jargon?",
      answer: "Absolutely. Our 'Keyword Smart' feature allows you to input custom dictionaries and inclusion/exclusion rules to ensure domain-specific accuracy, whether it's medical terminology, legal jargon, or technical acronyms."
    },
    {
      question: "How does the pricing work for large volumes of video?",
      answer: "We offer flexible enterprise pricing based on processing hours. Our cloud processing pipeline scales automatically, so you benefit from significant cost reductions compared to traditional manual dubbing studios."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <ProductNav />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="w-full bg-[#1e3a5f] text-white py-8 md:py-12 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              AI-Based Video Translation & Summarization Tool
            </h1>
            <h2 className="text-base md:text-lg font-medium mb-2">
              Break Language Barriers with AI
            </h2>
            <h3 className="text-lg md:text-xl font-bold text-white mb-6">
              Translate. Summarize. Speak.
            </h3>
            <button className="px-8 py-2.5 bg-white text-[#1e3a5f] font-semibold rounded-full hover:bg-gray-100 transition-colors">
              Request Demo
            </button>
          </div>
        </section>

        {/* FEATURES - LEFT BORDER CARDS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f]">Features</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: 'Transcribe',
                  desc: 'Converts video speech into accurate English transcripts.',
                  icon: FileText,
                  color: 'text-[#1e3a5f]',
                  borderColor: 'border-red-500',
                  bgIcon: 'bg-red-50 text-red-500'
                },
                {
                  title: 'Summarize',
                  desc: 'Delivers concise, context-rich summaries.',
                  icon: Zap,
                  color: 'text-[#1e3a5f]',
                  borderColor: 'border-blue-500',
                  bgIcon: 'bg-blue-50 text-blue-500'
                },
                {
                  title: 'Translate',
                  desc: 'Supports English, Tamil, Hindi, and Telugu (scalable to more).',
                  icon: Languages,
                  color: 'text-[#1e3a5f]',
                  borderColor: 'border-red-500',
                  bgIcon: 'bg-red-50 text-red-500'
                },
                {
                  title: 'Voiceover',
                  desc: 'Generates natural-sounding multilingual audio overlays.',
                  icon: Mic,
                  color: 'text-[#1e3a5f]',
                  borderColor: 'border-blue-500',
                  bgIcon: 'bg-blue-50 text-blue-500'
                },
                {
                  title: 'Keyword Smart',
                  desc: 'Customize transcripts with inclusion/exclusion rules.',
                  icon: Search,
                  color: 'text-[#1e3a5f]',
                  borderColor: 'border-red-500',
                  bgIcon: 'bg-red-50 text-red-500'
                }
              ].map((feature, i) => (
                <div key={i} className={`bg-white p-6 rounded-2xl shadow-md border-y border-r border-gray-100 border-l-4 ${feature.borderColor} hover:shadow-lg transition-shadow flex flex-col items-start gap-4`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${feature.bgIcon}`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-sm font-bold ${feature.color}`}>{feature.title}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IDEAL FOR - TOP IMAGE CARDS */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f]">Ideal For</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Media & Entertainment',
                  desc: 'Perfect for content creators, broadcasters, and media companies looking to reach global audiences.',
                  img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-[#1e3a5f]'
                },
                {
                  title: 'E-learning & Training',
                  desc: 'Ideal for educational institutions and corporate training programs requiring multilingual content.',
                  img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-[#1e3a5f]'
                },
                {
                  title: 'Enterprises & Corporates',
                  desc: 'Essential for businesses conducting global communications and presentations.',
                  img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-[#1e3a5f]'
                },
                {
                  title: 'Gov & Public Comm',
                  desc: 'Crucial for public sector organizations needing to communicate with diverse populations.',
                  img: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-[#1e3a5f]'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                  <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                  <div className="p-6 text-center flex flex-col items-center">
                    <h3 className={`text-sm font-bold mb-3 ${item.colorClass}`}>{item.title}</h3>
                    <p className="text-gray-500 text-[11px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT OVERVIEW & CARDS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Product Overview</h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
                AI-VideoTrans is an advanced neural localization platform that translates, dubs, and transcribes video content into regional languages. It utilizes neural voice cloning and speech-to-speech alignment to preserve the speaker's original tone and timing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Key Capabilities',
                  desc: 'Automated multi-dialect speech recognition, neural voice cloning, video dubbing, frame-accurate subtitle synchronization, and keyword-based smart transcription filters.',
                  icon: ShieldCheck,
                  color: 'text-red-500',
                  borderColor: 'border-red-500'
                },
                {
                  title: 'Business Benefits',
                  desc: 'Expands student/audience reach globally at a fraction of manual dubbing costs, ensures accessibility compliance, and drives higher learner engagement.',
                  icon: MonitorPlay,
                  color: 'text-blue-500',
                  borderColor: 'border-blue-500'
                },
                {
                  title: 'Deployment & Integration',
                  desc: 'Scalable cloud processing pipeline, supporting hybrid storage (S3/Azure), with REST APIs for automated video CMS ingestion and export.',
                  icon: Settings,
                  color: 'text-red-500',
                  borderColor: 'border-red-500'
                },
                {
                  title: 'Security & Compliance',
                  desc: 'Secure media processing environments, custom watermarking, end-to-end data encryption (AES-256), and secure user access management.',
                  icon: ShieldCheck,
                  color: 'text-blue-500',
                  borderColor: 'border-blue-500'
                },
                {
                  title: 'Implementation & Support',
                  desc: 'Custom voice-cloning setup, dictionary tuning for local slang or technical terms, and SLA-backed processing pipelines.',
                  icon: Building2,
                  color: 'text-red-500',
                  borderColor: 'border-red-500'
                },
                {
                  title: 'Target Customers',
                  desc: 'Universities offering online courses, EdTech platforms, global corporations, content creators, and government public relations teams.',
                  icon: GraduationCap,
                  color: 'text-blue-500',
                  borderColor: 'border-blue-500'
                }
              ].map((card, i) => (
                <div key={i} className={`bg-white p-8 rounded-2xl shadow-sm flex flex-col items-start gap-4 hover:shadow-md transition-shadow border-t-2 border-x border-b border-x-gray-100 border-b-gray-100 ${card.borderColor}`}>
                  <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center`}>
                    <card.icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <h3 className="text-sm font-bold text-[#1e3a5f]">{card.title}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE SECTION */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Why Choose Our Video Translation Tool?</h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
                AI-VideoTrans is not just a dubbing engine—it is a complete neural localization platform that breaks language barriers at scale with unmatched speed and fidelity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Break Language Barriers Instantly',
                  desc: 'Translate and dub video content into Tamil, Hindi, Telugu, and more with a single click. Preserves the speaker\'s original tone and emotion using neural voice cloning.',
                  img: 'https://images.unsplash.com/photo-1516382799247-87df95d790b7?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-blue-600'
                },
                {
                  title: 'Neural Voice Cloning Precision',
                  desc: 'Our deep-learning engine clones the speaker\'s unique voice, pitch, and cadence into the target language. Sounds like the original presenter, not robotic.',
                  img: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-[#1e3a5f]'
                },
                {
                  title: 'Scale to Global Audiences',
                  desc: 'From a single lecture to an entire content library, AI-VideoTrans processes videos in parallel—delivering localized content at a fraction of manual costs.',
                  img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-blue-600'
                },
                {
                  title: 'Smart Summaries & Keyword Filters',
                  desc: 'Automatically generate concise summaries of every video, while intelligent keyword rules let you fine-tune transcripts for domain accuracy.',
                  img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-[#1e3a5f]'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                  <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                  <div className="p-6 text-center flex flex-col items-center">
                    <h3 className={`text-sm font-bold mb-3 ${item.colorClass}`}>{item.title}</h3>
                    <p className="text-gray-500 text-[11px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* DYNAMIC TESTIMONIALS SECTION */}
        <ProductTestimonialsSection testimonials={testimonials} />

        {/* DYNAMIC FAQ SECTION */}
        <ProductFAQSection faqs={faqs} />

      </main>
      <Footer />
    </div>
  );
}
