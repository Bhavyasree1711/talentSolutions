import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';
import { 
  ArrowLeft, BrainCircuit, Network, LineChart, Database,
  CheckCircle2, ChevronDown, Star, Quote, Cloud, ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: 'AI & Data Science Training | Machine Learning Courses | DMX Talent Solutions',
  description: 'Unlock the power of data. Dive deep into Artificial Intelligence, Machine Learning, and advanced analytics to drive innovation in your career.',
  keywords: 'AI Training, Machine Learning Courses, Data Science, Data Warehouse, Neural Networks, Python Data Science',
};

type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
};

const aiCourses: Course[] = [
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence Training",
    description: "A comprehensive journey from AI fundamentals to building advanced neural networks and deploying real-world AI solutions.",
    image: "/images/Ai.png",
    icon: BrainCircuit,
  },
  {
    id: "machine-learning",
    title: "Machine Learning (ML) Training",
    description: "Learn to build, train, and deploy predictive models using supervised and unsupervised learning techniques.",
    image: "/images/ML.png",
    icon: Network,
  },
  {
    id: "data-science",
    title: "Data Science Training",
    description: "Extract actionable insights from complex data sets using statistical analysis, Python programming, and modern visualization tools.",
    image: "/images/datascience.png",
    icon: LineChart,
  },
  {
    id: "data-warehouse",
    title: "Data Warehouse Training",
    description: "Master the architecture, design, and implementation of enterprise data warehouses for robust business intelligence reporting.",
    image: "/images/dataware.png",
    icon: Database,
  },
];

const faqs = [
  {
    question: "Do I need to know Python before starting the Data Science course?",
    answer: "While basic programming knowledge is helpful, our Data Science and ML tracks include a 'Python for Data Science' bootcamp in the first week to bring everyone up to speed."
  },
  {
    question: "What kind of hardware do I need for AI/ML training?",
    answer: "Any modern laptop is fine. We utilize cloud-based Jupyter Notebooks (like Google Colab or AWS SageMaker) equipped with GPUs so you don't need expensive local hardware to train models."
  },
  {
    question: "Will I work on real-world datasets?",
    answer: "Absolutely. All our capstone projects use massive, real-world datasets sourced from Kaggle and enterprise partners to simulate actual industry problems."
  },
  {
    question: "Are these courses suitable for non-technical managers?",
    answer: "We recommend our 'AI for Business' introductory module for non-technical leaders. However, the core courses listed here are heavily technical and designed for aspiring data scientists and engineers."
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

export default function AIAndDataCategoryPage() {
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
              <div className="bg-[#0B1F3A] text-white px-5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2 shrink-0 shadow-sm cursor-default">
                <BrainCircuit className="w-4 h-4" /> AI & Data Science
              </div>
              <Link href="/courses/security" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Cyber Security</Link>
              <Link href="/courses/Softskills" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Soft Skills Training</Link>
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
            <BrainCircuit className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI & Data Science<br/>Training Programs
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Unlock the power of data. Dive deep into Artificial Intelligence, Machine Learning, and advanced analytics to build intelligent solutions and drive innovation.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* What We Provide (Curriculum Highlights converted) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">What You Will Learn</h2>
            <p className="text-gray-600 text-lg">Our comprehensive AI & Data tracks take you from statistical foundations to deploying production-grade machine learning models.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Python & Data Wrangling",
              "Statistical Modeling & Math",
              "Machine Learning Algorithms",
              "Deep Learning & NLP",
              "Data Warehousing",
              "Model Deployment (MLOps)"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">Alumni Success</h2>
            <p className="text-gray-600 text-lg">See how our graduates are shaping the future of AI.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Kiran R.", role: "Data Scientist", text: "The Machine Learning course bridged the gap between theory and practical coding. The capstone project was the main talking point in my successful job interviews." },
              { name: "Vikram S.", role: "AI Engineer", text: "Moving from a traditional software role into Deep Learning was daunting, but this curriculum made the math approachable and the coding intuitive." },
              { name: "Meera D.", role: "Data Engineer", text: "The Data Warehouse module perfectly explained how to manage massive datasets in the cloud. It immediately helped me optimize our company's Snowflake architecture." }
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
