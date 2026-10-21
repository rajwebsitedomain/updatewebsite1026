export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'Who is Rajvardhan Singh Badgujar?',
    answer:
      'Rajvardhan Singh Badgujar is a Cloud & DevOps Engineer and final-year BCA student from Indore, Madhya Pradesh, India. He specializes in designing, automating, and maintaining scalable cloud infrastructure using AWS, Docker, Kubernetes, Terraform, and automated CI/CD pipelines.',
  },
  {
    question: 'What cloud and DevOps services does Rajvardhan offer?',
    answer:
      'Rajvardhan provides end-to-end cloud and infrastructure automation services. These include AWS cloud architecture design, CI/CD pipeline development with GitHub Actions and Jenkins, containerization with Docker and Kubernetes, Infrastructure as Code using Terraform and CloudFormation, and custom full-stack web development.',
  },
  {
    question: 'What projects has Rajvardhan built?',
    answer:
      'Rajvardhan has delivered 7+ cloud-native engineering projects and 4+ commercial client websites. Key projects include DevOps Accelerator (CI/CD on EC2), SecureExam Platform (AI proctoring with FastAPI), Personal Private Cloud (hardened Nextcloud), and production platforms like Thikana Dhabla Ghosi and BetterGrowth Solutions.',
  },
  {
    question: 'How does Rajvardhan ensure zero-downtime deployments?',
    answer:
      'Zero-downtime deployments are achieved using container orchestration, rolling restart strategies, blue/green deployment models, reverse proxy traffic switching with Nginx, automated health-checks in CI/CD pipelines, and declarative GitOps synchronization with ArgoCD.',
  },
  {
    question: 'How can you hire or contact Rajvardhan Singh Badgujar?',
    answer:
      'You can reach Rajvardhan via email at rajvardhancoder@gmail.com, telephone at +91 97702 89936, or connect through LinkedIn (linkedin.com/in/rajvardhan-singh-badgujar) and GitHub (github.com/singhrajvardhan). He is available for DevOps engineering roles, cloud consulting, and freelance contracts.',
  },
];
