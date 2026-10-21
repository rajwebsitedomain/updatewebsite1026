export interface SkillCategory {
  title: string;
  skills: { name: string; icon: string; detail: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS', icon: '☁️', detail: 'EC2, S3, VPC, IAM, Lambda, CloudFront', level: 92 },
      { name: 'Microsoft Azure', icon: '☁️', detail: 'AKS, Functions, Resource Groups, Azure DevOps', level: 80 },
      { name: 'Linux Administration', icon: '🐧', detail: 'Ubuntu, RHEL, Bash scripting, systemd, networking', level: 95 },
      { name: 'Nginx', icon: '🌐', detail: 'Reverse proxy, SSL termination, load balancing', level: 90 },
    ],
  },
  {
    title: 'Containers & Orchestration',
    skills: [
      { name: 'Docker', icon: '🐳', detail: 'Multi-stage builds, Docker Compose, Container security', level: 92 },
      { name: 'Kubernetes', icon: '☸️', detail: 'Pods, Deployments, Services, Ingress, Helm charts', level: 88 },
      { name: 'Nextcloud', icon: '🏠', detail: 'Self-hosted private cloud, Redis caching, DB tuning', level: 85 },
    ],
  },
  {
    title: 'IaC & Automation',
    skills: [
      { name: 'Terraform', icon: '🏗️', detail: 'Modules, remote state, AWS provider, drift mgmt', level: 85 },
      { name: 'CloudFormation', icon: '📦', detail: 'JSON/YAML templates, stack policies, nested stacks', level: 88 },
      { name: 'Ansible', icon: '⚡', detail: 'Playbooks, roles, idempotent configuration management', level: 82 },
    ],
  },
  {
    title: 'CI/CD & GitOps',
    skills: [
      { name: 'GitHub Actions', icon: '⚡', detail: 'Matrix builds, secrets, self-hosted runners, release flows', level: 94 },
      { name: 'Jenkins', icon: '🔁', detail: 'Declarative pipelines, webhook triggers, Docker agent pools', level: 85 },
      { name: 'ArgoCD', icon: '🚀', detail: 'Declarative GitOps, automated sync policies, cluster state', level: 82 },
      { name: 'Git', icon: '🔀', detail: 'Branching strategies, rebase, GitFlow, GitHub/GitLab', level: 95 },
    ],
  },
  {
    title: 'Monitoring & Programming',
    skills: [
      { name: 'Grafana & Prometheus', icon: '📊', detail: 'PromQL, custom node dashboards, alertmanager', level: 84 },
      { name: 'Python', icon: '🐍', detail: 'FastAPI, automation scripts, WebSockets, testing', level: 88 },
      { name: 'Selenium & Pytest', icon: '🧪', detail: 'Automated integration tests, browser testing', level: 82 },
    ],
  },
];
