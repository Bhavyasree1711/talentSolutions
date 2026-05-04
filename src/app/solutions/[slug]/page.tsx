import Image from 'next/image';
import { notFound } from 'next/navigation';

const data: any = {
  'talent-acquisition': {
    title: 'Talent Acquisition',
    desc: 'End-to-end hiring solutions to identify, attract, and retain top talent.',
    image: '/images/hero-team.png',
    solutions: [
      'Executive Search',
      'IT & Non-IT Staffing',
      'Bulk Hiring',
      'Campus Recruitment',
    ],
    benefits: [
      'Faster hiring process',
      'Better candidate quality',
      'Improved retention rate',
    ],
  },

  'contract-staffing': {
    title: 'Contract Staffing, RPO & WPO',
    desc: 'Flexible workforce solutions tailored to project needs.',
    image: '/images/service-executive-search.png',
    solutions: [
      'Short-term hiring',
      'Project-based teams',
      'RPO solutions',
      'Cost optimization',
    ],
    benefits: [
      'Reduce operational cost',
      'Flexible scaling',
      'Faster onboarding',
    ],
  },

  'permanent-staffing': {
    title: 'Permanent Staffing & BoT',
    desc: 'Long-term hiring strategies for business growth.',
    image: '/images/training-classroom.png',
    solutions: [
      'Full-time hiring',
      'Leadership hiring',
      'BoT model',
    ],
    benefits: [
      'Stable workforce',
      'Better cultural fit',
      'Long-term growth',
    ],
  },

  'skill-assessment': {
    title: 'Skill Assessment',
    desc: 'Evaluate technical and soft skills effectively.',
    image: '/images/service-leadership.png',
    solutions: [
      'Technical testing',
      'Soft skills evaluation',
      'Custom frameworks',
    ],
    benefits: [
      'Accurate hiring decisions',
      'Reduced hiring risk',
      'Better performance',
    ],
  },

  'train-deploy': {
    title: 'Train & Deploy',
    desc: 'Upskill candidates and deploy them into real projects.',
    image: '/images/service-executive-search.png',
    solutions: [
      'Corporate training',
      'Project deployment',
      'Skill development',
    ],
    benefits: [
      'Ready-to-work talent',
      'Reduced training cost',
      'Faster productivity',
    ],
  },
};

export default function SolutionPage({ params }: any) {
  const item = data[params.slug];
  if (!item) return notFound();

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {item.title}
          </h1>
          <p className="max-w-2xl text-lg">
            {item.desc}
          </p>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-10">
            Our Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {item.solutions.map((s: string, i: number) => (
              <div
                key={i}
                className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-[#0B1F3A] mb-2">
                  {s}
                </h3>
                <p className="text-gray-600 text-sm">
                  Tailored solution to meet business needs.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">
            How It Helps You
          </h2>

          <ul className="space-y-4">
            {item.benefits.map((b: string, i: number) => (
              <li key={i} className="text-gray-700 text-lg">
                ✔ {b}
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 mb-6">
          Let us help you build the right team.
        </p>

        <a
          href="/#contact"
          className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}