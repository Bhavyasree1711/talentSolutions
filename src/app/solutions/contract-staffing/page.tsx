import Image from 'next/image';
import Link from 'next/link';
import PageFAQSection from '@/components/PageFAQSection';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { 
  ArrowLeft, 
  Users, 
  UserPlus, 
  Briefcase, 
  TrendingDown, 
  Target, 
  Activity, 
  ShieldCheck, 
  Banknote, 
  Zap,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contract Staffing & RPO Solutions | HirXpert',
  description: 'Flexible workforce solutions including Contract Staffing, Recruitment Process Outsourcing (RPO), and WPO. Scale your team with specialized talent.',
  keywords: 'Contract Staffing, RPO, WPO, IT Staffing, Recruitment Outsourcing, Contingent Workforce',
  alternates: {
    canonical: 'http://localhost:3000/solutions/contract-staffing', // Replace with actual production domain
  }
};

export default function ContractStaffingPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 pt-16 md:pt-20">
      <Header />
      {/* Secondary Nav */}
      <div className="bg-white border-b border-gray-200 py-4 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
            <Link
              href="/solutions"
              className="flex items-center gap-2 text-gray-600 hover:text-[#E63946] border border-gray-200 hover:border-[#E63946] rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Solutions
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/solutions/talent-acquisition" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Talent Acquisition</Link>
              <div className="bg-[#0B1F3A] text-white px-5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap flex items-center shrink-0 shadow-sm cursor-default">
                Contract Staffing
              </div>
              <Link href="/solutions/permanent-staffing" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Permanent Staffing</Link>
              <Link href="/solutions/train-deploy" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Train & Deploy</Link>
              <Link href="/solutions/skill-assessment" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Skill Assessment</Link>
            </div>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[40vh] max-h-[400px] flex items-center py-20">
        <Image
          src="/images/service-executive-search.png"
          alt="Contract Staffing Solutions"
          fill
          priority
          className="object-cover object-[80%_center] lg:object-right"
        />
        {/* Darker Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/80 to-[#0B1F3A]/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white w-full mt-4 lg:mt-6">
          <div className="max-w-xl">
            <h1
              className="text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Contract Staffing Solutions
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Flexible workforce solutions tailored for project-based requirements. Scale your team without the long-term overhead of permanent headcount.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section id="offerings" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>
              Comprehensive Outsourcing Offerings
            </h2>
            <p className="text-lg text-gray-600">
              We provide tailored staffing models to match your business goals and operational needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0B1F3A]/5 text-[#0B1F3A] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-[#0B1F3A] mb-3">
                Contract Staffing
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Quickly scale your team with specialized talent for short-term projects or seasonal spikes. Bring in experts precisely when you need them without long-term commitments.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-6">
                <UserPlus className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-[#0B1F3A] mb-3">
                RPO (Recruitment Process)
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Outsource all or part of your recruitment process. We act as a seamless extension of your HR team to improve hiring speed, quality, and reduce cost-per-hire.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0B1F3A]/5 text-[#0B1F3A] rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-[#0B1F3A] mb-3">
                WPO (Workforce Process)
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Comprehensive management of your contingent workforce. We handle compliance, payroll administration, onboarding, and performance tracking so you can focus on core business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-video lg:aspect-square">
              <Image
                src="/images/hero-team.png" 
                alt="Team working together efficiently"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-sm">
                  <p className="text-[#0B1F3A] font-bold text-lg">Agile & Compliant</p>
                  <p className="text-gray-600 text-sm">Accelerate your project delivery with pre-vetted professionals.</p>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6 leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
                Unlock Agility with Contract Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In today's fast-paced market, agility is everything. Our contract staffing solutions empower your business to remain flexible, cost-effective, and highly competitive while mitigating employment risks.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  { icon: TrendingDown, text: 'Reduce permanent overhead' },
                  { icon: Target, text: 'Access niche specialized skills' },
                  { icon: Activity, text: 'Scale team size dynamically' },
                  { icon: ShieldCheck, text: 'Mitigate co-employment risks' },
                  { icon: Banknote, text: 'Seamless payroll administration' },
                  { icon: Zap, text: 'Faster onboarding & deployment' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <PageFAQSection 
        title="Contract Staffing FAQs"
        description="Find answers to common questions about our flexible contract staffing solutions."
        faqs={[
          {
            question: "What is Contract Staffing and how does it differ from permanent hiring?",
            answer: "Contract staffing involves hiring employees for a specific project or time period rather than permanently. It gives you the flexibility to scale your workforce up or down based on current business demands without long-term overhead."
          },
          {
            question: "How do you ensure the quality of contract staff?",
            answer: "We rigorously vet our contract candidates using the same comprehensive screening processes as permanent hires, including technical evaluations, behavioral interviews, and reference checks."
          },
          {
            question: "What happens if a contract employee doesn't perform well?",
            answer: "We provide guaranteed placements. If a contractor isn't meeting expectations, we will find a suitable replacement promptly at no additional cost to ensure your project stays on track."
          },
          {
            question: "Do you manage payroll and compliance for contract staff?",
            answer: "Yes, as your staffing partner, we take care of all administrative burdens including payroll processing, tax withholdings, benefits administration, and employment compliance."
          },
          {
            question: "Can we hire a contractor permanently later on?",
            answer: "Absolutely. We offer contract-to-hire options which allow you to evaluate a candidate's performance and cultural fit before committing to a permanent offer."
          }
        ]}
      />

      {/* CTA SECTION */}
      <CTASection 
        title="Ready to Optimize Your\nWorkforce?"
        subtitle="Let's discuss how our contract staffing and outsourcing solutions can support your project requirements and accelerate your business growth."
        buttonText="Schedule a Consultation"
      />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}