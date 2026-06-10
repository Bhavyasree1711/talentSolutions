import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Cloud, Server, Activity, Cpu, Database, BarChart, CheckCircle2, Target, Shield, Award, Star, Quote, ChevronDown, ArrowRight, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: 'Cloud & DevOps Training | DMX Talent Solutions',
  description: 'Master modern cloud infrastructure and DevOps with our specialized certification programs.',
};

const AzureLogoIcon = (props: any) => (
  <svg {...props} viewBox="0 0 226 226" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <path d="M112.91 6.59L3.71 208.57h136.26L222.18 17.48H112.91z" fill="currentColor" opacity="0.8" />
    <path d="M112.91 6.59L3.71 208.57l67.8 10.84l41.4-76.6h78.32L112.91 6.59z" fill="currentColor" />
  </svg>
);

const awsCourses = [
  {
    id: 'aws-iaas',
    title: 'AWS IaaS Training',
    description: 'Learn the fundamentals of Amazon Web Services Infrastructure as a Service, including EC2, S3, and VPC networking.',
    image: '/images/iaas.png',
    icon: Cloud,
  },
  {
    id: 'aws-devops',
    title: 'AWS DevOps Training',
    description: 'Master CI/CD pipelines, automation, and infrastructure as code using AWS native developer tools.',
    image: '/images/cloud.png',
    icon: Server, 
  },
  {
    id: 'aws-quicksight',
    title: 'AWS QuickSight Training',
    description: 'Build interactive dashboards, perform advanced analytics, and visualize complex data leveraging AWS QuickSight.',
    image: '/images/aipowerded.png',
    icon: Activity,
  },
  {
    id: 'aws-iot',
    title: 'AWS IoT Training',
    description: 'Connect, manage, and scale IoT devices securely using AWS IoT Core, edge services, and analytics.',
    image: '/images/remote.png',
    icon: Cpu,
  }
];

const azureCourses = [
  {
    id: 'microsoft-azure',
    title: 'Microsoft Azure Training',
    description: 'Comprehensive training on Azure cloud services, virtual machines, networking, and enterprise cloud architecture.',
    image: '/images/azure_training_pro.png',
    icon: AzureLogoIcon,
  },
  {
    id: 'azure-devops',
    title: 'Azure DevOps Training',
    description: 'Implement modern DevOps practices, continuous delivery, and agile project planning with Azure DevOps.',
    image: '/images/azure_devops_pro.png',
    icon: Server,
  },
  {
    id: 'azure-iot',
    title: 'Azure IoT Training',
    description: 'Design and deploy highly scalable Internet of Things solutions using Azure IoT Hub and stream analytics.',
    image: '/images/azure_iot_pro.png',
    icon: Database,
  },
  {
    id: 'power-bi',
    title: 'Power BI Training',
    description: 'Transform raw data into actionable insights and build interactive, enterprise-grade reports with Microsoft Power BI.',
    image: '/images/power_bi_pro.png',
    icon: BarChart,
  }
];

function CourseCard({ course }: { course: any }) {
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
            <course.icon className="w-5 h-5" />
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

export default function CloudDevOpsCategoryPage() {
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
              <div className="bg-[#0B1F3A] text-white px-5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2 shrink-0 shadow-sm cursor-default">
                <Cloud className="w-4 h-4" /> Cloud & DevOps
              </div>
              <Link href="/courses/ai" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">AI & Data Science</Link>
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
            <Brain className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cloud Computing Training<br/>Programs
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Master the leading cloud platforms through comprehensive training programs. Choose your path to becoming a cloud computing expert.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* AWS Courses */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
            <div className="bg-[#E63946]/10 p-2 rounded-lg">
              <Cloud className="w-6 h-6 text-[#E63946]" />
            </div>
            <h2 className="text-2xl font-bold text-[#0B1F3A]">AWS Training Programs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awsCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Azure Courses */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
            <div className="bg-[#0B1F3A]/10 p-2 rounded-lg">
               <AzureLogoIcon className="w-6 h-6 text-[#0B1F3A]" />
            </div>
            <h2 className="text-2xl font-bold text-[#0B1F3A]">Microsoft Azure Training Programs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {azureCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        </div>


      {/* What We Provide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">What We Provide</h2>
            <p className="text-gray-600 text-lg">Everything you need to successfully launch your cloud career.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "1-on-1 Mentorship & Code Reviews",
              "Interview Preparation & Mock Technical Rounds",
              "Access to Premium Cloud Lab Environments",
              "Resume Building & LinkedIn Profile Optimization",
              "100% Placement Assistance with Partner Companies",
              "Lifetime Access to Course Materials & Updates"
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
            <p className="text-gray-600 text-lg">Hear from our alumni who have successfully transitioned to top tech roles.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rahul S.", role: "Senior DevOps Engineer", text: "The AWS DevOps training completely changed my career trajectory. The hands-on labs were exactly what I needed to pass my certification and land a senior role." },
              { name: "Priya M.", role: "Cloud Architect", text: "DMX Talent Solutions' instructors are top-tier. They don't just teach theory; they teach you how to handle real production outages and complex architectural decisions." },
              { name: "Amit K.", role: "Data Analyst", text: "The Power BI and Azure integration course helped our team automate our entire reporting pipeline. I highly recommend their corporate training modules." }
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
            <p className="text-gray-600 text-lg">Got questions about our training? We've got answers.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "Do I need prior coding experience?",
                answer: "While basic programming knowledge is helpful, our foundational courses start from scratch. For advanced DevOps courses, familiarity with scripting (like Python or Bash) is recommended."
              },
              {
                question: "Do you provide certification after completion?",
                answer: "Yes, you will receive an industry-recognized certificate of completion from DMX Talent Solutions. Our courses are also specifically aligned to help you easily pass official AWS and Microsoft Azure certification exams."
              },
              {
                question: "Are there hands-on labs?",
                answer: "Absolutely. Over 70% of our curriculum is hands-on. You will build and deploy real-world projects on live AWS and Azure environments rather than just watching lectures."
              },
              {
                question: "What is the duration of these courses?",
                answer: "Durations vary from 4 to 8 weeks depending on the depth of the course and whether you choose the intensive bootcamp or the weekend professional track."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-lg border border-gray-200 [&_summary::-webkit-details-marker]:hidden shadow-sm">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-[#0B1F3A] hover:text-red-700 transition-colors text-lg">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-red-600 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-200 pt-4 bg-white rounded-b-lg">
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
