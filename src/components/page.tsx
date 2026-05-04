import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, ChevronDown, Clock, Trophy, Briefcase } from 'lucide-react';

// Mock Data Dictionary matching the generated slugs
const coursesData: Record<string, any> = {
  'aws-devops': {
    title: 'AWS DevOps Engineer',
    description: 'Master CI/CD, automation, and infrastructure as code using Amazon Web Services natively.',
    image: '/images/training-classroom.png',
    highlights: [
      'End-to-end CI/CD pipeline creation',
      'Infrastructure as Code (IaC) with CloudFormation',
      'AWS native developer tools (CodeBuild, CodeDeploy)',
      'Automated testing and deployment strategies',
      'Performance monitoring and logging'
    ],
    curriculum: [
      {
        title: 'Module 1: Source Control & Build Tools',
        items: ['Advanced Git workflows', 'AWS CodeCommit deep dive', 'Building artifacts with AWS CodeBuild']
      },
      {
        title: 'Module 2: Continuous Integration & Deployment',
        items: ['AWS CodePipeline orchestration', 'Deployment strategies (Blue/Green, Canary)', 'AWS CodeDeploy configurations']
      },
      {
        title: 'Module 3: Infrastructure as Code',
        items: ['AWS CloudFormation templates', 'AWS Serverless Application Model (SAM)', 'AWS CDK fundamentals']
      },
      {
        title: 'Module 4: Monitoring & Security',
        items: ['CloudWatch and X-Ray integration', 'Automating security checks', 'DevSecOps best practices']
      }
    ]
  },
  'artificial-intelligence': {
    title: 'Artificial Intelligence Certification',
    description: 'A comprehensive journey from AI fundamentals to building advanced neural networks.',
    image: '/images/service-talent-sourcing.png',
    highlights: [
      'Core concepts of Artificial Intelligence',
      'Hands-on Machine Learning algorithms',
      'Building Neural Networks from scratch',
      'Real-world AI deployment and optimization',
      'Ethics and governance in AI'
    ],
    curriculum: [
      {
        title: 'Module 1: AI Fundamentals',
        items: ['Introduction to AI and Machine Learning', 'Python for AI', 'Linear Algebra & Statistics review']
      },
      {
        title: 'Module 2: Machine Learning Core',
        items: ['Supervised vs Unsupervised Learning', 'Regression and Classification models', 'Model evaluation metrics']
      },
      {
        title: 'Module 3: Deep Learning',
        items: ['Introduction to Neural Networks', 'TensorFlow & Keras frameworks', 'Convolutional Neural Networks (CNNs)']
      }
    ]
  },
  // Add additional specific mappings here or let them hit the notFound() block
};

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = coursesData[params.slug];

  // Return 404 if the slug doesn't exist in our dictionary
  if (!course) {
    return notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* Navigation Bar */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 px-6 pt-20 lg:pt-24">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#training"
            className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-[#E63946] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center py-20">
        <Image
          src={course.image}
          alt={course.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#E63946] text-white text-xs font-bold uppercase tracking-widest rounded-md mb-6">
              Professional Certificate
            </span>
            <h1 
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              {course.title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed mb-8">
              {course.description}
            </p>
            <Link
              href="/#contact"
              className="px-8 py-4 bg-[#E63946] text-white rounded-lg font-bold text-sm hover:bg-red-800 transition-all shadow-lg hover:shadow-xl inline-block uppercase tracking-wide"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Left Content (Highlights & Curriculum) */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* What You'll Learn */}
            <div>
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">What You'll Learn</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.highlights.map((highlight: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#E63946] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Accordion */}
            <div>
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((section: any, index: number) => (
                  <details 
                    key={index} 
                    className="group border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                    open={index === 0}
                  >
                    <summary className="flex justify-between items-center p-5 font-bold text-[#0B1F3A] cursor-pointer list-none bg-gray-50 group-open:bg-white hover:bg-gray-100 transition-colors">
                      {section.title}
                      <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <div className="p-5 border-t border-gray-100 bg-white">
                      <ul className="space-y-3">
                        {section.items.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600">
                            <span className="text-[#E63946] font-bold text-lg leading-none">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                ))}
              </div>
            </div>

          </div>

          {/* Right Content (Key Benefits Sidebar) */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-32">
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-8">Key Benefits</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-[#E63946]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3A] mb-1">Faster Hiring</h4>
                    <p className="text-sm text-gray-600">Accelerate your career with enterprise-ready skills.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-[#E63946]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3A] mb-1">Real Projects</h4>
                    <p className="text-sm text-gray-600">Gain hands-on experience through live corporate simulations.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-[#E63946]">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3A] mb-1">Placement Support</h4>
                    <p className="text-sm text-gray-600">Direct integration into open roles across our partner network.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-[#0B1F3A] text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Take the Next Step in Your Career
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Join thousands of successful alumni who have transformed their careers through our industry-aligned training programs.
          </p>
          <Link
            href="/#contact"
            className="px-8 py-4 bg-[#E63946] text-white rounded-lg font-bold text-sm hover:bg-red-600 transition-all shadow-lg inline-block uppercase tracking-wide"
          >
            Start Learning Today
          </Link>
        </div>
      </section>

    </div>
  );
}