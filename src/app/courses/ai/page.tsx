import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BrainCircuit, Network, LineChart, Database } from "lucide-react";

// ✅ Strong typing (better than any)
type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
};

// ✅ COURSE DATA
const aiCourses: Course[] = [
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence Training",
    description:
      "A comprehensive journey from AI fundamentals to building advanced neural networks and deploying real-world AI solutions.",
    image: "/images/Ai.png",
    icon: BrainCircuit,
  },
  {
    id: "machine-learning",
    title: "Machine Learning (ML) Training",
    description:
      "Learn to build, train, and deploy predictive models using supervised and unsupervised learning techniques.",
    image: "/images/ML.png",
    icon: Network,
  },
  {
    id: "data-science",
    title: "Data Science Training",
    description:
      "Extract actionable insights from complex data sets using statistical analysis, Python programming, and modern visualization tools.",
    image: "/images/datascience.png",
    icon: LineChart,
  },
  {
    id: "data-warehouse",
    title: "Data Warehouse Training",
    description:
      "Master the architecture, design, and implementation of enterprise data warehouses for robust business intelligence reporting.",
    image: "/images/dataware.png",
    icon: Database,
  },
];

export default function AIAndDataCategoryPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">

      {/* ✅ HERO SECTION */}
      <section className="relative min-h-[65vh] flex items-center pt-20 bg-[#0B1F3A]">

        <Image
          src="/images/service-talent-sourcing.png"
          alt="AI and Data Science"
          fill
          priority
          className="object-cover object-center opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

        {/* BACK BUTTON */}
        <div className="absolute top-20 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              href="/courses"
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-md text-sm font-semibold hover:bg-white hover:text-red-700 transition-all"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Courses
            </Link>
          </div>
        </div>

        {/* HERO TEXT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              AI & Data Science Training
            </h1>

            <p className="text-lg lg:text-xl text-gray-200">
              Unlock the power of data. Dive deep into Artificial Intelligence,
              Machine Learning, and advanced analytics to drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ COURSES GRID */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-[#0B1F3A] mb-12">
            Our AI & Data Science Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

/* ✅ CARD COMPONENT */
function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;

  return (
    <Link href={`/courses/${course.id}`} className="block group h-full">

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">

        {/* IMAGE */}
        <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-[#0B1F3A]/20 group-hover:bg-transparent transition z-10" />

          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col text-center flex-grow">

          <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-[#0B1F3A] group-hover:text-red-700 group-hover:bg-red-50 transition">
            <Icon className="w-6 h-6" />
          </div>

          <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 group-hover:text-red-700">
            {course.title}
          </h3>

          <p className="text-sm text-gray-600 mb-6 flex-grow">
            {course.description}
          </p>

          {/* BUTTON */}
          <div className="mt-auto px-4 py-2.5 bg-gray-50 text-[#0B1F3A] font-bold text-sm rounded-lg group-hover:bg-red-700 group-hover:text-white transition flex items-center justify-center gap-2 border">
            View Details
            <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M21 12H3" />
            </svg>
          </div>

        </div>
      </div>

    </Link>
  );
}