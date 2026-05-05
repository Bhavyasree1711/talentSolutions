import { MetadataRoute } from 'next';

// Define all static routes
const staticRoutes = [
  '',
  '/hr-consulting-bangalore',
  '/it-staffing-company-india',
  '/executive-search-firms-bangalore',
  '/contract-staffing-services',
  '/permanent-staffing-solutions',
  '/rpo-wpo-services-india',
  '/aws-cloud-training-bangalore',
  '/data-center-infrastructure-engineer-course',
  '/cloud-devops-training-bangalore',
  '/cyber-security-training-bangalore',
  '/insights'
];

// Define all course routes
const courseRoutes = [
  '/courses/cloud-devops',
  '/courses/ai',
  '/courses/security',
  '/courses/Softskills',
  '/courses/data-center-infrastructure-engineer',
  '/courses/aws-cloud',
  '/courses/aws-devops',
  '/courses/aws-iaas',
  '/courses/aws-iot',
  '/courses/aws-quicksight',
  '/courses/azure-devops',
  '/courses/azure-iot',
  '/courses/character-for-career',
  '/courses/communication-skills',
  '/courses/cyber-security-basics',
  '/courses/data-science',
  '/courses/data-warehouse',
  '/courses/interview-skills',
  '/courses/machine-learning',
  '/courses/microsoft-azure',
  '/courses/power-bi',
  '/courses/presentation-skills',
  '/courses/secure-devops',
  '/courses/security-frameworks',
  '/courses/teaming-skills',
  '/courses/vapt-remediation'
];

// Define AWS Cloud sub-courses
const awsCloudSubCourses = [
  '/courses/aws-cloud/linux-commands-and-scripting',
  '/courses/aws-cloud/aws-cloud',
  '/courses/aws-cloud/aws-security-cli-db',
  '/courses/aws-cloud/infrastructure-automation-monitoring',
  '/courses/aws-cloud/continuous-integration-and-deployment',
  '/courses/aws-cloud/containerization-docker-kubernetes',
  '/courses/aws-cloud/project-simulation'
];

// Define Data Center Infrastructure Engineer sub-courses
const dataCenterSubCourses = [
  '/courses/data-center-infrastructure-engineer/data-centre-core-it-infrastructure',
  '/courses/data-center-infrastructure-engineer/data-protection-data-recovery',
  '/courses/data-center-infrastructure-engineer/enterprise-applications',
  '/courses/data-center-infrastructure-engineer/introduction-data-protection-dr',
  '/courses/data-center-infrastructure-engineer/monitoring-infrastructure-overview',
  '/courses/data-center-infrastructure-engineer/netapp-truenas-storage-foundations-administration',
  '/courses/data-center-infrastructure-engineer/windows-server-2019-linux-concepts'
];

// Define solution routes
const solutionRoutes = [
  '/solutions/contract-staffing',
  '/solutions/permanent-staffing',
  '/solutions/skill-assessment',
  '/solutions/talent-acquisition',
  '/solutions/train-deploy'
];

// Define blog/insights routes (these would be dynamic in a real CMS)
const blogRoutes = [
  '/insights/hr-outsourcing-trends-2026',
  '/insights/aws-certification-career-guide',
  '/insights/data-center-career-opportunities',
  '/insights/cloud-devops-salary-insights',
  '/insights/cyber-security-training-benefits',
  '/insights/executive-search-best-practices',
  '/insights/it-staffing-market-trends',
  '/insights/contract-hiring-strategies',
  '/insights/technical-training-placement',
  '/insights/hr-consulting-modern-approach'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dmxorg.com';

  // Combine all routes
  const allRoutes = [
    ...staticRoutes,
    ...courseRoutes,
    ...awsCloudSubCourses,
    ...dataCenterSubCourses,
    ...solutionRoutes,
    ...blogRoutes
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: getRoutePriority(route),
  }));
}

// Function to determine priority based on route type
function getRoutePriority(route: string): number {
  // Homepage gets highest priority
  if (route === '') return 1.0;

  // Main service pages get high priority
  if (route.includes('/hr-consulting') ||
      route.includes('/it-staffing') ||
      route.includes('/executive-search') ||
      route.includes('/aws-cloud-training')) {
    return 0.9;
  }

  // Course category pages get medium-high priority
  if (route.startsWith('/courses/') && !route.includes('/courses/aws-cloud/') && !route.includes('/courses/data-center-infrastructure-engineer/')) {
    return 0.8;
  }

  // Individual course pages get medium priority
  if (route.includes('/courses/aws-cloud/') || route.includes('/courses/data-center-infrastructure-engineer/')) {
    return 0.7;
  }

  // Blog posts get medium priority
  if (route.startsWith('/insights/')) {
    return 0.7;
  }

  // Solutions pages get medium priority
  if (route.startsWith('/solutions/')) {
    return 0.6;
  }

  // Default priority
  return 0.5;
}