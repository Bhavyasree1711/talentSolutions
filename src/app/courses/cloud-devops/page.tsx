import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Cloud, Server, Activity, Cpu, Database, BarChart } from 'lucide-react';

// Mock Data for AWS Courses
const awsCourses = [
  {
    id: 'aws-iaas',
    title: 'AWS IaaS Training',
    description: 'Learn the fundamentals of Amazon Web Services Infrastructure as a Service, including EC2, S3, and VPC networking.',
    image: '/images/aws.png',
    icon: Cloud,
  },
  {
    id: 'aws-devops',
    title: 'AWS DevOps Training',
    description: 'Master CI/CD pipelines, automation, and infrastructure as code using AWS native developer tools.',
    image: '/images/aws-devops.png',
    icon: Server, // Replace with actual icon import
  },
  {
    id: 'aws-quicksight',
    title: 'AWS QuickSight Training',
    description: 'Build interactive dashboards, perform advanced analytics, and visualize complex data leveraging AWS QuickSight.',
    image: '/images/aws-quicksight.png',
    icon: Activity,
  },
  {
    id: 'aws-iot',
    title: 'AWS IoT Training',
    description: 'Connect, manage, and scale IoT devices securely using AWS IoT Core, edge services, and analytics.',
    image: '/images/aws-iot.png',
    icon: Cpu,
  }
];

// Mock Data for Azure Courses
const azureCourses = [
  {
    id: 'microsoft-azure',
    title: 'Microsoft Azure Training',
    description: 'Comprehensive training on Azure cloud services, virtual machines, networking, and enterprise cloud architecture.',
    image: '/images/azure2.png',
    icon: Cloud,
  },
  {
    id: 'azure-devops',
    title: 'Azure DevOps Training',
    description: 'Implement modern DevOps practices, continuous delivery, and agile project planning with Azure DevOps.',
    image: '/images/azuredevops.png',
    icon: Server,
  },
  {
    id: 'azure-iot',
    title: 'Azure IoT Training',
    description: 'Design and deploy highly scalable Internet of Things solutions using Azure IoT Hub and stream analytics.',
    image: '/images/azureiot.png',
    icon: Database,
  },
  {
    id: 'power-bi',
    title: 'Power BI Training',
    description: 'Transform raw data into actionable insights and build interactive, enterprise-grade reports with Microsoft Power BI.',
    image: '/images/powerbi.png',
    icon: BarChart,
  }
];

export default function CloudDevOpsCategoryPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* CATEGORY HERO */}
      <section className="relative min-h-[89vh] flex items-center pt-20 bg-[#0B1F3A]">
        <Image src="/images/training-classroom.png" alt="Cloud and DevOps" fill priority className="object-cover object-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        
        {/* Back Button Overlay */}
        <div className="absolute top-24 lg:top-28 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              href="/#training-categories"
              className="inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-md text-sm font-semibold hover:bg-white hover:text-red-700 transition-all shadow-sm group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to All Courses
            </Link>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white w-full mt-10 lg:mt-14">
          <div className="max-w-2xl">
        
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
              Cloud & DevOps Training
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
              Master modern cloud infrastructure, continuous integration, and advanced analytics with our specialized Amazon Web Services (AWS) and Microsoft Azure certification programs.
            </p>
          </div>
        </div>
      </section>

      {/* AVAILABLE COURSES SECTION */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* AWS SECTION */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-4">
              <div className="w-12 h-12 bg-[#FF9900]/10 rounded-lg flex items-center justify-center text-[#FF9900]">
                <Cloud className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-[#0B1F3A]">AWS Training Programs</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awsCourses.map((course) => <CourseCard key={course.id} course={course} />)}
            </div>
          </div>

          {/* AZURE SECTION */}
          <div>
            <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-4">
              <div className="w-12 h-12 bg-[#008AD7]/10 rounded-lg flex items-center justify-center text-[#008AD7]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.04 2.89l-4.14 4.09L3.08 17.2l-.1.14 5.92 4.14 1.4-2.31L4.85 15.5l5.04-8.8 4.26-4.18-1.11 1.37zm5.55 3.3l-2.09 2.05-6.31 11.23-1.6 2.53H21.1v-2.02l-2.51-13.79z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#0B1F3A]">Microsoft Azure & Data</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {azureCourses.map((course) => <CourseCard key={course.id} course={course} />)}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

/* Reusable Card Component */
function CourseCard({ course }: { course: any }) {
  const Icon = course.icon;
  return (
    <Link href={`/courses/${course.id}`} className="block group h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
        {/* Card Image */}
        <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
          <Image src={course.image} alt={course.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
        </div>

        {/* Card Content */}
        <div className="p-6 flex-grow flex flex-col text-center">
          <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-[#0B1F3A] group-hover:scale-110 group-hover:text-red-700 group-hover:bg-red-50 transition-all duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 group-hover:text-red-700 transition-colors">{course.title}</h3>
          <p className="text-sm text-gray-600 flex-grow leading-relaxed mb-6">{course.description}</p>
          <div className="mt-auto w-full px-4 py-2.5 bg-gray-50 text-[#0B1F3A] font-bold text-sm rounded-lg group-hover:bg-red-700 group-hover:text-white transition-colors duration-300 uppercase tracking-wide flex items-center justify-center gap-2 border border-gray-100">
            View Details
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}