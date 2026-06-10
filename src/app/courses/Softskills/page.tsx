import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';
import { 
  ArrowLeft, MessageSquare, Presentation, UserCheck, Users, Award,
  CheckCircle2, ChevronDown, Star, Quote, ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: 'Soft Skills Training & Corporate Development | DMX Talent Solutions',
  description: 'Elevate your professional profile by mastering critical soft skills like communication, leadership, teaming, and interview preparation.',
  keywords: 'Soft Skills Training, Corporate Development, Communication Skills, Leadership Training, Interview Preparation, Teaming Skills',
};

type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
};

const softSkillsCourses: Course[] = [
  {
    id: 'communication-skills',
    title: 'Communication Skills',
    description: 'Master verbal and written communication techniques to express ideas clearly and persuasively in corporate settings.',
    image: '/images/hero-team.png',
    icon: MessageSquare,
  },
  {
    id: 'presentation-skills',
    title: 'Presentation Skills',
    description: 'Learn how to structure presentations and use storytelling to engage stakeholders and deliver impactful pitches.',
    image: '/images/training-classroom.png',
    icon: Presentation,
  },
  {
    id: 'interview-skills',
    title: 'Interview Skills',
    description: 'Build confidence, handle tough questions, and master behavioral interview techniques to land your dream job.',
    image: '/images/service-talent-sourcing.png',
    icon: UserCheck,
  },
  {
    id: 'teaming-skills',
    title: 'Teaming Skills',
    description: 'Develop the essential collaboration and conflict-resolution qualities to drive projects and foster a positive work environment.',
    image: '/images/service-leadership.png',
    icon: Users,
  },
  {
    id: 'character-for-career',
    title: 'Character for Career',
    description: 'Cultivate emotional intelligence, professional ethics, and a growth mindset to ensure long-term career success.',
    image: '/images/skillassess.png',
    icon: Award,
  }
];

const faqs = [
  {
    question: "Who should take these soft skills courses?",
    answer: "These courses are perfect for IT professionals, recent graduates entering the corporate world, and managers looking to improve their leadership and team communication abilities."
  },
  {
    question: "Are the courses theoretical or practical?",
    answer: "Our soft skills training is highly interactive. You will participate in mock interviews, group discussions, live presentations, and role-playing scenarios."
  },
  {
    question: "Do you offer corporate or team training?",
    answer: "Yes! We specialize in team-wide soft skill workshops tailored to your company's specific cultural and operational needs."
  },
  {
    question: "How long does it take to complete a course?",
    answer: "Individual modules can be completed in a few days, while comprehensive career development tracks typically run for 3-4 weeks with weekend sessions."
  }
];

function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;
  return (
    <Link
      href={`/courses/${course.id}`}
      className="block group h-full"
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
        {/* Image */}
        <div className="relative h-48 w-full bg-gray-100 shrink-0">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Icon */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-[#0B1F3A]/5 text-[#0B1F3A]">
            <Icon className="w-5 h-5" />
          </div>

          <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#E63946] transition-colors">
            {course.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
            {course.description}
          </p>
        </div>
        
        {/* Button */}
        <div className="w-full py-3 text-white text-sm font-medium flex items-center justify-center transition-colors bg-[#E63946] group-hover:bg-[#D62828]">
          Explore <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </Link>
  );
}

export default function SoftSkillsCategoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Secondary Nav */}
      <div className="bg-white border-b border-gray-200 py-4 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
            <Link
              href="/courses"
              className="flex items-center gap-2 text-gray-600 hover:text-[#E63946] border border-gray-200 hover:border-[#E63946] rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/courses/cloud-devops" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Cloud & DevOps</Link>
              <Link href="/courses/ai" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">AI & Data Science</Link>
              <Link href="/courses/security" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Cyber Security</Link>
              <div className="bg-[#0B1F3A] text-white px-5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2 shrink-0 shadow-sm cursor-default">
                <Users className="w-4 h-4" /> Soft Skills Training
              </div>
              <Link href="/courses/data-center-infrastructure-engineer" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Data Center Infrastructure Engineer</Link>
              <Link href="/courses/aws-cloud" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">AWS Cloud</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#0B1F3A] py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/20 mb-6 bg-white/5 backdrop-blur-sm">
            <Users className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Corporate Soft Skills<br/>Training Programs
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Elevate your professional profile. Master the critical non-technical skills required for modern workplace success, from effective communication to leadership.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softSkillsCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* What We Provide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">Core Competencies</h2>
            <p className="text-gray-600 text-lg">Our soft skills programs focus on the essential human elements that drive career progression and team synergy.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Effective Communication",
              "Leadership & Influence",
              "Emotional Intelligence",
              "Conflict Resolution",
              "Public Speaking",
              "Interview Mastery"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:border-red-200 hover:shadow-md transition-all">
                <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0" />
                <span className="font-semibold text-[#0B1F3A] text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">Success Stories</h2>
            <p className="text-gray-600 text-lg">See how improved communication transformed these careers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", role: "Software Developer", text: "As a dev, I always struggled with client presentations. The presentation skills course gave me practical frameworks that I now use every week." },
              { name: "Michael T.", role: "Project Manager", text: "The conflict resolution and teaming modules should be mandatory for all managers. It completely changed how our team communicates." },
              { name: "Neha K.", role: "Recent Graduate", text: "I had the technical skills but was failing interviews. The mock interview sessions built my confidence and helped me land my first job at a top tech firm." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-shadow">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-red-600/10 group-hover:text-red-600/20 transition-colors" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-red-600 text-red-600" />)}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-[#0B1F3A]">{t.name}</h4>
                  <span className="text-sm font-semibold text-red-600">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Got questions? We've got answers.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-xl border border-gray-200 [&_summary::-webkit-details-marker]:hidden hover:border-gray-300 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-[#0B1F3A] text-lg">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mt-2 mx-6">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
