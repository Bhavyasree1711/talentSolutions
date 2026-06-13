import Image from 'next/image';
import Link from 'next/link';
import PageFAQSection from '@/components/PageFAQSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { ArrowLeft, CheckCircle2, Target, BrainCircuit, LineChart } from 'lucide-react';

export default function SkillAssessmentPage() {
  return (
    <div className="bg-white min-h-screen pt-16 md:pt-20">
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
              <Link href="/solutions/contract-staffing" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Contract Staffing</Link>
              <Link href="/solutions/permanent-staffing" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Permanent Staffing</Link>
              <Link href="/solutions/train-deploy" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Train & Deploy</Link>
              <div className="bg-[#0B1F3A] text-white px-5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap flex items-center shrink-0 shadow-sm cursor-default">
                Skill Assessment
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full h-[320px] md:h-[400px] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/skillassess.png"
          alt="Skill Assessment Services"
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
              Skill Assessment Solutions
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Thoroughly evaluating technical proficiencies and essential soft skills using industry-standard frameworks and our custom assessment tools.
            </p>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-red-700 uppercase tracking-widest">Our Methodology</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4 text-[#0B1F3A]">
              Comprehensive Evaluation
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Make data-driven hiring decisions. We provide deep insights into a candidate's capabilities, ensuring they have the precise technical expertise and cultural fit your business demands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Technical Testing</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                In-depth evaluation of coding abilities, system architecture knowledge, and cloud environment proficiencies through practical assignments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <BrainCircuit className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Soft Skills Evaluation</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Behavioral assessments to gauge communication, leadership potential, problem-solving, and adaptability within hybrid team environments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Custom Frameworks</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Tailored assessment models designed specifically for your organization's unique tech stack and multi-cloud architectural roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-10 text-center">
            Why Assess With Us?
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              'Accurate, data-driven hiring decisions',
              'Reduced hiring risks and candidate drop-out rates',
              'Unbiased, standardized evaluation metrics',
              'Better prediction of on-the-job performance',
              'Time saved for your internal technical panels',
              'Customizable tests for niche technology stacks'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <PageFAQSection 
        title="Skill Assessment FAQs"
        description="Find answers to common questions about our technical and behavioral assessment methodologies."
        faqs={[
          {
            question: "What types of skill assessments do you offer?",
            answer: "We provide comprehensive technical evaluations, coding challenges, behavioral tests, and cognitive assessments tailored to the specific roles you are hiring for."
          },
          {
            question: "Can you customize assessments for our specific technology stack?",
            answer: "Yes, we can design custom assessment frameworks and practical assignments that precisely mirror your organization's unique tools, multi-cloud architectures, and workflows."
          },
          {
            question: "How do your assessments prevent candidate cheating?",
            answer: "Our assessment platforms employ advanced proctoring mechanisms, including browser locking, webcam monitoring, and plagiarism detection, to ensure the integrity of the evaluation process."
          },
          {
            question: "How do the assessment results help in hiring decisions?",
            answer: "You receive detailed, data-driven reports highlighting candidates' strengths, weaknesses, and overall suitability, allowing your technical panels to make unbiased and informed hiring decisions quickly."
          },
          {
            question: "Can soft skills be accurately assessed?",
            answer: "Yes, we use scientifically-backed behavioral assessments and structured situational interviews to gauge critical soft skills like leadership potential, adaptability, and problem-solving abilities."
          }
        ]}
      />

      {/* CTA SECTION */}
      <CTASection 
        title="Evaluate Top Talent Today"
        subtitle="Ensure your next hire has exactly the skills you need. Let's customize an assessment plan for your organization."
        buttonText="Contact Us"
      />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}