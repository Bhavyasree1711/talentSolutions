import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User, Share2, ChevronRight, Tag } from 'lucide-react';
import { generateSEOMetadata } from '@/lib/seo';

// Blog post data - in a real app, this would come from a CMS or database
const blogPosts: Record<string, any> = {
  'hr-outsourcing-trends-2026': {
    title: 'HR Outsourcing Trends 2026: What Businesses Need to Know',
    excerpt: 'Discover the latest HR outsourcing trends shaping the industry in 2026. Learn about AI-driven HR processes, remote workforce management, and strategic outsourcing models.',
    content: `
      <h2>The Evolution of HR Outsourcing in 2026</h2>
      <p>As we move into 2026, HR outsourcing is undergoing a dramatic transformation. The convergence of artificial intelligence, remote work technologies, and changing workforce expectations is reshaping how businesses approach HR operations.</p>

      <h3>AI-Driven HR Processes</h3>
      <p>Artificial Intelligence is no longer a futuristic concept—it's the present reality of HR outsourcing. Organizations are increasingly leveraging AI-powered tools for:</p>
      <ul>
        <li>Automated candidate screening and assessment</li>
        <li>Predictive analytics for workforce planning</li>
        <li>Intelligent chatbots for employee queries</li>
        <li>Automated performance evaluation systems</li>
      </ul>

      <h3>Remote Workforce Management</h3>
      <p>The post-pandemic world has permanently changed how we work. HR outsourcing providers are now specializing in remote workforce management, offering solutions for:</p>
      <ul>
        <li>Virtual team coordination</li>
        <li>Remote performance monitoring</li>
        <li>Digital employee engagement</li>
        <li>Cross-border compliance management</li>
      </ul>

      <h3>Strategic Outsourcing Models</h3>
      <p>Modern HR outsourcing goes beyond basic administrative tasks. Organizations are adopting sophisticated models that include:</p>
      <ul>
        <li>End-to-end HR transformation</li>
        <li>Strategic workforce planning</li>
        <li>Talent acquisition and development</li>
        <li>Change management consulting</li>
      </ul>

      <h2>Benefits of Modern HR Outsourcing</h2>
      <p>The advantages of contemporary HR outsourcing extend far beyond cost savings. Organizations benefit from:</p>
      <ul>
        <li>Access to cutting-edge HR technologies</li>
        <li>Expertise in compliance and regulatory requirements</li>
        <li>Scalable HR solutions that grow with your business</li>
        <li>Focus on core business activities while HR is managed professionally</li>
      </ul>

      <h2>Choosing the Right HR Outsourcing Partner</h2>
      <p>Selecting the right HR outsourcing partner is crucial for success. Consider these factors:</p>
      <ul>
        <li>Technology infrastructure and AI capabilities</li>
        <li>Industry expertise and domain knowledge</li>
        <li>Compliance and regulatory expertise</li>
        <li>Scalability and flexibility</li>
        <li>Customer service and support quality</li>
      </ul>

      <h2>The Future of HR Outsourcing</h2>
      <p>Looking ahead, HR outsourcing will continue to evolve with emerging technologies. Organizations that embrace these changes will gain significant competitive advantages in talent management and workforce optimization.</p>
    `,
    author: 'DMX Talent Solutions',
    publishedAt: '2026-01-15',
    readTime: '8 min read',
    category: 'HR Trends',
    tags: ['HR Outsourcing', '2026 Trends', 'Digital HR', 'Workforce Management'],
    image: '/images/hero-professional.png',
    tableOfContents: [
      'The Evolution of HR Outsourcing in 2026',
      'AI-Driven HR Processes',
      'Remote Workforce Management',
      'Strategic Outsourcing Models',
      'Benefits of Modern HR Outsourcing',
      'Choosing the Right HR Outsourcing Partner',
      'The Future of HR Outsourcing'
    ]
  },
  'aws-certification-career-guide': {
    title: 'AWS Certification Career Guide: From Beginner to Cloud Architect',
    excerpt: 'Complete guide to AWS certifications for career advancement. Learn which certifications to pursue, preparation strategies, and salary expectations.',
    content: `
      <h2>Your Complete AWS Certification Journey</h2>
      <p>AWS certifications have become the gold standard for cloud computing professionals worldwide. This comprehensive guide will help you navigate your AWS certification journey from beginner to expert level.</p>

      <h3>Understanding AWS Certification Levels</h3>
      <p>AWS offers certifications at four distinct levels, each building upon the previous one:</p>
      <ul>
        <li><strong>Foundational:</strong> AWS Certified Cloud Practitioner</li>
        <li><strong>Associate:</strong> Solutions Architect, Developer, SysOps Administrator</li>
        <li><strong>Professional:</strong> Solutions Architect, DevOps Engineer</li>
        <li><strong>Specialty:</strong> Advanced Security, Machine Learning, etc.</li>
      </ul>

      <h3>Recommended Certification Path</h3>
      <p>Follow this structured approach to maximize your career growth:</p>
      <ol>
        <li>Start with AWS Certified Cloud Practitioner (Foundational)</li>
        <li>Choose your specialization path (Solutions Architect, Developer, or Operations)</li>
        <li>Gain practical experience with AWS services</li>
        <li>Pursue Professional-level certifications</li>
        <li>Consider Specialty certifications for niche expertise</li>
      </ol>

      <h2>Preparation Strategies</h2>
      <p>Success in AWS certifications requires a strategic approach to preparation:</p>
      <ul>
        <li>Hands-on practice with AWS services</li>
        <li>Official AWS training courses</li>
        <li>Practice exams and mock tests</li>
        <li>Study groups and community engagement</li>
        <li>Real-world project experience</li>
      </ul>

      <h3>Essential Study Resources</h3>
      <p>Leverage these resources for effective preparation:</p>
      <ul>
        <li>AWS Official Training</li>
        <li>A Cloud Guru and Linux Academy</li>
        <li>Practice exams from Jon Bonso</li>
        <li>AWS documentation and whitepapers</li>
        <li>Hands-on labs and projects</li>
      </ul>

      <h2>Career Opportunities and Salary Insights</h2>
      <p>AWS certifications significantly impact career prospects and earning potential:</p>
      <ul>
        <li><strong>Cloud Practitioner:</strong> ₹6-12 LPA (Entry-level cloud roles)</li>
        <li><strong>Solutions Architect Associate:</strong> ₹12-20 LPA</li>
        <li><strong>Solutions Architect Professional:</strong> ₹20-35 LPA</li>
        <li><strong>Cloud Architect:</strong> ₹25-50 LPA (Senior roles)</li>
      </ul>

      <h3>Industry Demand</h3>
      <p>The demand for AWS-certified professionals continues to grow across industries:</p>
      <ul>
        <li>Technology companies and startups</li>
        <li>Financial services and BFSI</li>
        <li>Healthcare and life sciences</li>
        <li>Retail and e-commerce</li>
        <li>Government and public sector</li>
      </ul>

      <h2>Building a Successful AWS Career</h2>
      <p>Beyond certifications, focus on these career-building activities:</p>
      <ul>
        <li>Continuous learning and skill development</li>
        <li>Building a professional network</li>
        <li>Contributing to open-source projects</li>
        <li>Earning additional cloud certifications</li>
        <li>Developing soft skills and leadership abilities</li>
      </ul>
    `,
    author: 'DMX Talent Solutions',
    publishedAt: '2026-01-10',
    readTime: '12 min read',
    category: 'Career Development',
    tags: ['AWS Certification', 'Cloud Career', 'IT Training', 'Career Growth'],
    image: '/images/aws.png',
    tableOfContents: [
      'Your Complete AWS Certification Journey',
      'Understanding AWS Certification Levels',
      'Recommended Certification Path',
      'Preparation Strategies',
      'Essential Study Resources',
      'Career Opportunities and Salary Insights',
      'Industry Demand',
      'Building a Successful AWS Career'
    ]
  }
  // Add more blog posts here...
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug];

  if (!post) {
    return {
      title: 'Article Not Found | DMX Talent Solutions'
    };
  }

  return generateSEOMetadata(
    post.title,
    post.excerpt,
    post.tags,
    `/insights/${params.slug}`,
    post.image
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  // Get related posts (excluding current post)
  const relatedPosts = Object.entries(blogPosts)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 3)
    .map(([slug, post]) => ({ slug, ...post }));

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link
              href="/insights"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Insights
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <div>
              <h1 className="text-2xl font-bold text-[#0B1F3A]">Blog Article</h1>
              <p className="text-gray-600">Expert insights and industry trends</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            {post.tags.map((tag: string, index: number) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-[#0B1F3A] mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-8">
              <h3 className="text-lg font-semibold text-[#0B1F3A] mb-4">Table of Contents</h3>
              <nav>
                <ul className="space-y-2">
                  {post.tableOfContents.map((heading: string, index: number) => (
                    <li key={index}>
                      <a
                        href={`#heading-${index}`}
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
                      >
                        <ChevronRight className="w-3 h-3" />
                        {heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Share Buttons */}
              <div className="mt-8 pt-6 border-t">
                <h4 className="text-sm font-semibold text-[#0B1F3A] mb-3">Share this article</h4>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="p-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                <Tag className="w-4 h-4 text-gray-400 mt-1" />
                {post.tags.map((tag: string, index: number) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost: any, index: number) => (
              <article key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-32">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#0B1F3A] mb-2 hover:text-blue-600 transition-colors">
                    <Link href={`/insights/${relatedPost.slug}`}>
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                  <Link
                    href={`/insights/${relatedPost.slug}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">Stay Updated with HR Insights</h3>
          <p className="text-gray-600 mb-6">
            Get the latest HR trends, recruitment tips, and industry insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </article>
    </div>
  );
}