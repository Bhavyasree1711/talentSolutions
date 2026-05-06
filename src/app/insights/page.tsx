import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import { generateSEOMetadata } from '@/lib/seo';

// Blog post data - in a real app, this would come from a CMS
const blogPosts = [
  {
    slug: 'hr-outsourcing-trends-2026',
    title: 'HR Outsourcing Trends 2026: What Businesses Need to Know',
    excerpt: 'Discover the latest HR outsourcing trends shaping the industry in 2026. Learn about AI-driven HR processes, remote workforce management, and strategic outsourcing models.',
    content: 'Comprehensive content about HR outsourcing trends...',
    author: 'DMX Talent Solutions',
    publishedAt: '2026-01-15',
    readTime: '8 min read',
    category: 'HR Trends',
    tags: ['HR Outsourcing', '2026 Trends', 'Digital HR', 'Workforce Management'],
    image: '/images/hero-professional.png',
    featured: true
  },
  {
    slug: 'aws-certification-career-guide',
    title: 'AWS Certification Career Guide: From Beginner to Cloud Architect',
    excerpt: 'Complete guide to AWS certifications for career advancement. Learn which certifications to pursue, preparation strategies, and salary expectations.',
    content: 'Detailed AWS certification guide...',
    author: 'DMX Talent Solutions',
    publishedAt: '2026-01-10',
    readTime: '12 min read',
    category: 'Career Development',
    tags: ['AWS Certification', 'Cloud Career', 'IT Training', 'Career Growth'],
    image: '/images/aws.png',
    featured: true
  },
  {
    slug: 'data-center-career-opportunities',
    title: 'Data Center Career Opportunities: High-Demand Roles in 2026',
    excerpt: 'Explore lucrative career paths in data center infrastructure. Learn about data center engineer roles, required skills, and salary prospects.',
    content: 'Data center career opportunities content...',
    author: 'DMX Talent Solutions',
    publishedAt: '2026-01-05',
    readTime: '10 min read',
    category: 'Career Development',
    tags: ['Data Center', 'IT Infrastructure', 'Career Opportunities', 'High Demand Jobs'],
    image: '/images/dataceneter.png',
    featured: false
  },
  {
    slug: 'cloud-devops-salary-insights',
    title: 'Cloud DevOps Engineer Salary Insights 2026: Location & Experience Impact',
    excerpt: 'Comprehensive salary analysis for Cloud DevOps engineers. Compare salaries across locations, experience levels, and top-paying companies.',
    content: 'Cloud DevOps salary insights...',
    author: 'DMX Talent Solutions',
    publishedAt: '2025-12-28',
    readTime: '6 min read',
    category: 'Salary Insights',
    tags: ['DevOps Salary', 'Cloud Engineer', 'IT Compensation', 'Career Planning'],
    image: '/images/cloud.png',
    featured: false
  },
  {
    slug: 'cyber-security-training-benefits',
    title: 'Benefits of Cyber Security Training: Protect Your Digital Assets',
    excerpt: 'Learn why cyber security training is crucial for businesses and IT professionals. Discover the skills, certifications, and career opportunities in cyber security.',
    content: 'Cyber security training benefits...',
    author: 'DMX Talent Solutions',
    publishedAt: '2025-12-20',
    readTime: '9 min read',
    category: 'Cyber Security',
    tags: ['Cyber Security', 'IT Training', 'Digital Security', 'Career Development'],
    image: '/images/security.png',
    featured: false
  },
  {
    slug: 'executive-search-best-practices',
    title: 'Executive Search Best Practices: Finding the Perfect Leadership Fit',
    excerpt: 'Master the art of executive search with proven strategies. Learn about candidate assessment, cultural fit evaluation, and successful placement techniques.',
    content: 'Executive search best practices...',
    author: 'DMX Talent Solutions',
    publishedAt: '2025-12-15',
    readTime: '11 min read',
    category: 'Executive Search',
    tags: ['Executive Search', 'Leadership Hiring', 'Talent Acquisition', 'HR Best Practices'],
    image: '/images/service-executive-search.png',
    featured: false
  },
  {
    slug: 'it-staffing-market-trends',
    title: 'IT Staffing Market Trends 2026: Skills in High Demand',
    excerpt: 'Stay ahead of IT staffing trends. Discover the most sought-after tech skills, emerging technologies, and recruitment strategies for 2026.',
    content: 'IT staffing market trends...',
    author: 'DMX Talent Solutions',
    publishedAt: '2025-12-10',
    readTime: '7 min read',
    category: 'IT Staffing',
    tags: ['IT Staffing', 'Tech Skills', 'Recruitment Trends', 'Market Analysis'],
    image: '/images/hero-professional.png',
    featured: false
  },
  {
    slug: 'contract-hiring-strategies',
    title: 'Contract Hiring Strategies: Building Flexible Workforces',
    excerpt: 'Effective strategies for contract hiring and temporary staffing. Learn about compliance, cost management, and building successful contract relationships.',
    content: 'Contract hiring strategies...',
    author: 'DMX Talent Solutions',
    publishedAt: '2025-12-05',
    readTime: '8 min read',
    category: 'Contract Staffing',
    tags: ['Contract Hiring', 'Temporary Staffing', 'Flexible Workforce', 'HR Strategies'],
    image: '/images/service-leadership.png',
    featured: false
  },
  {
    slug: 'technical-training-placement',
    title: 'Technical Training with Job Placement: Career Transformation Guide',
    excerpt: 'Complete guide to technical training programs with guaranteed placement. Compare courses, success rates, and career outcomes.',
    content: 'Technical training placement guide...',
    author: 'DMX Talent Solutions',
    publishedAt: '2025-11-30',
    readTime: '10 min read',
    category: 'Training & Placement',
    tags: ['Technical Training', 'Job Placement', 'Career Transformation', 'IT Education'],
    image: '/images/training-classroom.png',
    featured: false
  },
  {
    slug: 'hr-consulting-modern-approach',
    title: 'Modern HR Consulting: Digital Transformation Strategies',
    excerpt: 'Explore how modern HR consulting leverages technology for better workforce management. Learn about HR tech tools, data-driven decisions, and digital HR strategies.',
    content: 'Modern HR consulting approaches...',
    author: 'DMX Talent Solutions',
    publishedAt: '2025-11-25',
    readTime: '9 min read',
    category: 'HR Consulting',
    tags: ['HR Consulting', 'Digital HR', 'HR Technology', 'Workforce Analytics'],
    image: '/images/hero-team.png',
    featured: false
  }
];

const categories = [
  'All',
  'HR Trends',
  'Career Development',
  'Salary Insights',
  'Cyber Security',
  'Executive Search',
  'IT Staffing',
  'Contract Staffing',
  'Training & Placement',
  'HR Consulting'
];

export const metadata: Metadata = {
  ...generateSEOMetadata(
    'HR Insights & Blog | DMX Talent Solutions',
    'Stay updated with the latest HR trends, career advice, salary insights, and industry best practices. Expert articles on recruitment, staffing, and talent management.',
    [
      'HR blog India',
      'recruitment insights',
      'HR trends 2026',
      'career development tips',
      'IT staffing news',
      'executive search best practices',
      'salary insights India',
      'HR consulting articles'
    ],
    '/insights',
    '/images/hero-professional.png'
  )
};

export default function InsightsPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link
              href="/courses"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
              Back to All Courses
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <div>
              <h1 className="text-2xl font-bold text-[#0B1F3A]">HR Insights & Blog</h1>
              <p className="text-gray-600">Expert insights on HR, recruitment, and career development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              HR Insights & Industry Trends
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on HR trends, recruitment strategies,
              career development, and industry best practices.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.slice(0, 6).map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-sm font-medium transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">Featured Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/insights/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Link
                      href={`/insights/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Recent Posts */}
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">Recent Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-40">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-[#0B1F3A] mb-2 hover:text-blue-600 transition-colors">
                    <Link href={`/insights/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-600">{post.author}</span>
                    </div>
                    <Link
                      href={`/insights/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with HR Insights</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest HR trends, recruitment tips, and industry insights delivered to your inbox weekly.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}