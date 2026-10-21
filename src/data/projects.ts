export interface Project {
  slug: string;
  title: string;
  number: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  badgeColor: 'accent' | 'secondary' | 'muted' | 'mint' | 'dark';
  tags: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  architecture: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'devops-accelerator',
    title: 'DevOps Accelerator',
    number: '01',
    category: 'DevOps & CI/CD',
    badgeColor: 'accent',
    shortDescription:
      'Complete production DevOps pipeline simulation featuring automated GitHub Actions workflows, Dockerized microservices, and zero-downtime EC2 deployments.',
    fullDescription:
      'DevOps Accelerator is an enterprise-grade CI/CD pipeline template engineered to automate code linting, automated testing, container build optimization, vulnerability scanning, and seamless deployments to AWS EC2 instances with zero manual intervention.',
    tags: ['GitHub Actions', 'Docker', 'AWS EC2', 'Linux', 'Bash'],
    metrics: [
      { label: 'Deployment Speed', value: '4x Faster' },
      { label: 'Downtime', value: '0 Seconds' },
      { label: 'Test Coverage Automated', value: '100%' },
    ],
    highlights: [
      'Automated multi-stage Docker builds reducing image sizes by 60%',
      'Integrated security scanning for vulnerabilities prior to image push',
      'Configured SSH key rotation and automated deployment hooks on AWS EC2',
      'Rollback mechanisms on pipeline failure to safeguard production stability',
    ],
    architecture: [
      'Git push triggers GitHub Actions runner',
      'Unit test & linter suite executes in ephemeral containers',
      'Multi-stage Docker build pushes image to container registry',
      'Target EC2 pulls image via Docker Compose and executes rolling restart',
    ],
    githubUrl: 'https://github.com/singhrajvardhan/DevOps_Accelerator',
    featured: true,
  },
  {
    slug: 'aws-ec2-s3-static-hosting',
    title: 'EC2 + S3 Static Hosting',
    number: '02',
    category: 'Cloud Architecture',
    badgeColor: 'muted',
    shortDescription:
      'High-performance hybrid cloud static hosting architecture leveraging Amazon EC2 for reverse proxying and Amazon S3 with CloudFront caching.',
    fullDescription:
      'A resilient static website hosting architecture demonstrating optimal separation of concerns: compute reverse-proxying using Nginx on Amazon EC2, combined with Amazon S3 asset storage and fine-tuned HTTP caching headers for lightning-fast delivery.',
    tags: ['AWS EC2', 'AWS S3', 'Nginx', 'SSL/TLS', 'CloudFront'],
    metrics: [
      { label: 'TTFB', value: '<80ms' },
      { label: 'Asset Offload', value: '95% to S3' },
      { label: 'Availability', value: '99.9%' },
    ],
    highlights: [
      'Configured Nginx reverse proxy with gzip compression and strict security headers',
      'Separated static media offloading to private S3 bucket with signed origin identity',
      'Automated SSL certificate provisioning and auto-renewal using Certbot Let’s Encrypt',
    ],
    architecture: [
      'DNS routed via Amazon Route 53',
      'Incoming HTTPS traffic handled by Nginx on EC2 instance',
      'Static media requested from S3 with cache-control headers',
    ],
    githubUrl: 'https://github.com/singhrajvardhan/aws-ec2-s3-static-website',
    featured: true,
  },
  {
    slug: 'personal-private-cloud',
    title: 'Personal Private Cloud',
    number: '03',
    category: 'Private Cloud & SysAdmin',
    badgeColor: 'secondary',
    shortDescription:
      'Self-hosted, hardened private cloud storage and sync infrastructure built with Nextcloud, Docker Compose, PostgreSQL, and Nginx reverse proxy.',
    fullDescription:
      'A self-hosted private cloud infrastructure providing end-to-end encrypted file synchronization, automated backup snapshots, Redis memory caching for high I/O throughput, and isolated container networking.',
    tags: ['Nextcloud', 'Docker', 'PostgreSQL', 'Redis', 'Nginx'],
    metrics: [
      { label: 'Data Sovereignty', value: '100% On-Prem' },
      { label: 'Cache Hit Rate', value: '98% (Redis)' },
      { label: 'Storage Managed', value: '1TB+ Encrypted' },
    ],
    highlights: [
      'Multi-container Docker Compose orchestration with isolated backend networks',
      'PostgreSQL database tuning for concurrent multi-client synchronization',
      'Redis transactional memory locking and caching configuration',
      'Automated nightly cron backups with encrypted offsite tarballs',
    ],
    architecture: [
      'Incoming web requests routed via Nginx reverse proxy with HSTS & TLS 1.3',
      'Nextcloud PHP-FPM container processes requests backed by Redis cache',
      'PostgreSQL relational data store handles metadata and user sessions',
    ],
    githubUrl: 'https://github.com/singhrajvardhan/personal-private-CLoud',
    featured: true,
  },
  {
    slug: 'iac-cicd-pipeline',
    title: 'Infrastructure as Code Pipeline',
    number: '04',
    category: 'IaC & Automation',
    badgeColor: 'accent',
    shortDescription:
      'Declarative multi-tier AWS infrastructure provisioning using AWS CloudFormation, automated VPC networking, security groups, and GitOps workflows.',
    fullDescription:
      'A reproducible, auditable Infrastructure as Code (IaC) implementation utilizing AWS CloudFormation templates to provision multi-tier VPCs, public/private subnets, NAT gateways, and auto-scaling compute groups with consistent parameterization.',
    tags: ['CloudFormation', 'AWS VPC', 'IAM', 'Terraform', 'GitOps'],
    metrics: [
      { label: 'Provisioning Time', value: '<5 Minutes' },
      { label: 'Configuration Drift', value: '0%' },
      { label: 'Multi-AZ', value: 'High Availability' },
    ],
    highlights: [
      'Modularized infrastructure templates for dev, staging, and production environments',
      'Strict IAM least-privilege role policies and encrypted EBS volumes',
      'Automated validation checks via cfn-lint in CI pipeline before execution',
    ],
    architecture: [
      'CloudFormation stacks managed via Git commit triggers',
      'VPC created across 2 Availability Zones with isolated DB subnets',
      'Security groups locked down with egress-only rules for private tier',
    ],
    githubUrl: 'https://github.com/singhrajvardhan/iVolve_CI-CD_Infrastructure',
    featured: true,
  },
  {
    slug: 'secureexam-platform',
    title: 'SecureExam Platform',
    number: '05',
    category: 'Full-Stack & Cloud',
    badgeColor: 'mint',
    shortDescription:
      'Real-time anti-cheating exam proctoring platform with AI face detection, live browser focus tracking, WebSockets alerts, and Python FastAPI backend.',
    fullDescription:
      'Full-stack cloud-native examination portal designed for academic integrity. Combines OpenCV computer vision models for live candidate face verification with low-latency WebSockets for proctor dashboard alerts and concurrent exam session management.',
    tags: ['Python', 'FastAPI', 'WebSockets', 'OpenCV', 'Docker'],
    metrics: [
      { label: 'Proctor Latency', value: '<50ms' },
      { label: 'Concurrent Exams', value: '500+' },
      { label: 'Cheat Detection', value: 'Real-time' },
    ],
    highlights: [
      'Asynchronous FastAPI REST & WebSockets backend architecture',
      'Client-side face orientation detection and tab-switch telemetry',
      'Containerized deployment for horizontal scaling under exam load spikes',
    ],
    architecture: [
      'Frontend communicates state via persistent WebSocket connection',
      'FastAPI async worker pool broadcasts telemetry to proctor dashboard',
      'Session states and audit logs stored in persistent transactional database',
    ],
    liveUrl: 'https://examsystem.liveblog365.com/?i=1',
    featured: true,
  },
  {
    slug: 'thikana-dhabla-ghosi',
    title: 'Thikana Dhabla Ghosi',
    number: '06',
    category: 'Production Web App',
    badgeColor: 'secondary',
    shortDescription:
      'Heritage preservation digital archive featuring interactive genealogy tree visualization, Google Maps location integration, and high performance.',
    fullDescription:
      'A cultural heritage digital platform documenting the lineage, historical monuments, and archives of Thikana Dhabla Ghosi. Features custom-rendered SVG genealogy trees and optimized mobile-first navigation.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Google Maps API', 'SEO'],
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Page Load', value: '0.6s' },
      { label: 'Mobile Responsive', value: '100%' },
    ],
    highlights: [
      'Zero-framework lightweight vanilla JS rendering for instant load times',
      'Custom interactive historical timeline and royal family tree',
      'Full semantic SEO optimization ranking #1 for relevant regional queries',
    ],
    architecture: [
      'Static assets served via global CDN edge nodes',
      'Google Maps JavaScript API custom pins and historical overlay points',
    ],
    liveUrl: 'https://thikanadhabla.in/',
    featured: true,
  },
  {
    slug: 'bettergrowth-solutions',
    title: 'BetterGrowth Solutions',
    number: '07',
    category: 'Performance Marketing & CMS',
    badgeColor: 'secondary',
    shortDescription:
      'Agency marketing portal featuring custom admin panel, real-time agent tracking dashboard, and dedicated automated SMTP email infrastructure.',
    fullDescription:
      'Production client web portal and internal management console for BetterGrowth Solutions. Engineered to support automated lead onboarding, agent commission tracking, and high-deliverability transactional email systems.',
    tags: ['Admin Dashboard', 'Email Infrastructure', 'Onboarding CMS', 'Analytics'],
    metrics: [
      { label: 'Email Deliverability', value: '99.4%' },
      { label: 'Lead Onboarding', value: 'Automated' },
      { label: 'Admin Workflows', value: 'Real-Time' },
    ],
    highlights: [
      'Custom admin panel for managing team inquiries, leads, and tracking analytics',
      'Configured dedicated SMTP server with SPF, DKIM, and DMARC verification',
      'Streamlined onboarding workflow reducing client setup time',
    ],
    architecture: [
      'Public marketing site routed through Cloudflare DNS and caching',
      'Admin portal guarded by secure token-based authentication',
      'Transactional emails dispatched through hardened relay server',
    ],
    liveUrl: 'https://bettergrowthsolutions.com/',
    featured: false,
  },
  {
    slug: 'deep-architects-admin-panel',
    title: 'Deep Architects Admin Panel',
    number: '08',
    category: 'Dashboard & Operations',
    badgeColor: 'muted',
    shortDescription:
      'Full-featured operational dashboard panel for an architecture firm, handling project portfolios, inquiry pipelines, and team operations.',
    fullDescription:
      'Bespoke administrative dashboard engineered for Deep Architects. Provides centralized management for blueprint galleries, client RFP inquiries, project milestone updates, and content publishing workflows.',
    tags: ['Admin Panel', 'Project CMS', 'Client Pipeline', 'REST API'],
    metrics: [
      { label: 'Project Catalog', value: 'Centralized' },
      { label: 'Inquiry Response', value: '3x Faster' },
      { label: 'Data Security', value: 'Role-Based' },
    ],
    highlights: [
      'Role-based access control for architects and administrative staff',
      'Media upload pipeline with automated thumbnail generation',
      'Inquiry pipeline with status tracking from initial call to contract signing',
    ],
    architecture: [
      'Dashboard frontend interacting with protected RESTful API endpoints',
      'Database managing relational project records and client inquiries',
    ],
    liveUrl: 'https://raj.rajvardhansingh.in/',
    featured: false,
  },
];
