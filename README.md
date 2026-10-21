# ⚡ Rajvardhan Singh Badgujar — Cloud & DevOps Engineer Portfolio

> **Cloud & DevOps Engineer** · Indore, India · [rajvardhansingh.in](https://rajvardhansingh.in)

[![Production Site](https://img.shields.io/badge/Production-rajvardhansingh.in-FF5E5B?style=for-the-badge&logo=google-chrome&logoColor=white)](https://rajvardhansingh.in)
[![GitHub Profile](https://img.shields.io/badge/GitHub-singhrajvardhan-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/singhrajvardhan)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-rajvardhan--singh--badgujar-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rajvardhan-singh-badgujar/)
[![Framework](https://img.shields.io/badge/Framework-Astro_5-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![CSS](https://img.shields.io/badge/Styling-Tailwind_CSS_v3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

---

## 📌 Executive Summary

Production portfolio and cloud engineering case study portal engineered with **Astro 5** and **Tailwind CSS**. Architecture is built around Static Site Generation (SSG), pre-rendering zero-JavaScript HTML for optimal Time to First Byte (TTFB), complete accessibility, search engine schema coverage, and machine-readable AI engine discovery.

> *"If you have to do it twice, automate it."*

---

## 🏗️ Core Architecture & Routing

| Route | Type | Description |
|---|---|---|
| [`/`](https://rajvardhansingh.in/) | Static Page | Homepage: Hero, Terminal Widget, Core Skills, Featured Builds, Q&A, and Contact Form. |
| [`/about`](https://rajvardhansingh.in/about) | Static Page | Dedicated Profile: Architectural principles, Holkar Science College background, and career timeline. |
| [`/projects/[slug]`](https://rajvardhansingh.in/#projects) | Dynamic SSG | Programmatic Case Studies: 8 dynamic routes with architectural diagrams, metrics, and `TechArticle` schema. |
| [`/privacy`](https://rajvardhansingh.in/privacy) | Static Page | Data Protection Policy: Zero-tracking compliance, Web3Forms processing, and data retention standards. |
| [`/terms`](https://rajvardhansingh.in/terms) | Static Page | Terms of Service: Licensing, intellectual property, external service terms, and liability limits. |
| [`/404`](https://rajvardhansingh.in/404) | Static Page | Branded error handler page with return-to-home recovery navigation. |
| [`/llms.txt`](https://rajvardhansingh.in/llms.txt) | Plaintext Spec | Machine-readable AI index adhering to the `llms.txt` standard for Perplexity, ChatGPT, and Claude. |
| [`/llms-full.txt`](https://rajvardhansingh.in/llms-full.txt) | Plaintext Spec | Deep technical knowledge bundle providing verifiable context on projects, competencies, and achievements. |

---

## 🚀 Technology Stack

### Application Layer
- **Framework**: [Astro 5](https://astro.build) (Static Site Generation, Islands Architecture)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with custom Neobrutalist design tokens
- **Typography**: Space Grotesk & JetBrains Mono (Google Fonts)
- **Forms**: [Web3Forms API](https://web3forms.com) (Serverless, asynchronous JSON submission)
- **Sitemap Generator**: `@astrojs/sitemap` (Automated indexable XML generation)

### Cloud & DevOps Stack Featured
- **Cloud Computing**: Amazon Web Services (AWS EC2, S3, VPC, IAM, Lambda, CloudFront, Route 53)
- **Containers**: Docker, Docker Compose, Kubernetes, Helm
- **Infrastructure as Code**: Terraform, AWS CloudFormation, Ansible
- **CI/CD & GitOps**: GitHub Actions, Jenkins, ArgoCD
- **Observability**: Prometheus, Grafana, Linux System Internals

---

## 🎨 Design System & UI/UX Standards

The user interface uses a **Modern Neobrutalism** aesthetic engineered for visual distinction without cognitive fatigue:

- **Proportionate Typography**: Scaled down oversized headers to responsive font bounds (`text-3xl sm:text-4xl md:text-5xl lg:text-6xl`), preventing viewport overflow on laptops and mobile devices.
- **Crisp Shadow System**: Replaced heavy 16px blocks with sharp, predictable solid offset shadows:
  - `shadow-neo-sm`: `2px 2px 0px #000`
  - `shadow-neo`: `4px 4px 0px #000`
  - `shadow-neo-lg`: `6px 6px 0px #000`
- **Balanced Borders**: Standardized `border-2 border-black` for clean contrast against the warm cream canvas (`#FFFDF5`).
- **Mobile-First Responsiveness**: All interactive targets adhere to WCAG 44×44px touch boundaries with zero horizontal scroll overflow.

---

## 🔍 Search Engine & AI Optimization (GEO / AEO)

### 1. Traditional Search Engines (Google, Bing)
- **Canonical URLs & Title Hierarchy**: Exactly one `<h1>` per page, semantic `<h2>`/`<h3>` nesting, strict `<meta name="description">` length (150–160 chars).
- **Structured Data (JSON-LD)**:
  - `Person`: Credentials, education, social links, location coordinates (`Indore, MP, India`).
  - `ProfilePage` & `AboutPage`: Authoritative authorship signals.
  - `ItemList`: Complete index of featured projects with deep links.
  - `TechArticle`: Per-project architectural documentation schemas.
  - `FAQPage`: Direct question-answer pairs eligible for Google Rich Snippets.
  - `BreadcrumbList`: Nested navigation structure.

### 2. Generative Engine Optimization (ChatGPT, Perplexity, Claude, Gemini)
- Root `/llms.txt` and `/llms-full.txt` files providing structured, unchunked markdown summaries for crawler parsing.
- 40–60 word concise answer blocks embedded in semantic `<details>` and `<summary>` tags for direct quote extraction.
- Factual verification metrics (e.g. *"80% deploy time reduction"*, *"7+ production systems"*, *"0s downtime"*).

---

## 📁 Repository Structure

```
├── public/
│   ├── .htaccess          # Apache rewrite, security headers & caching
│   ├── ads.txt            # Authorized ad inventory declaration
│   ├── humans.txt         # Contributor and author credits
│   ├── llms.txt           # Standard AI search summary
│   ├── llms-full.txt      # Full machine-readable technical knowledge bundle
│   ├── logo.png           # Brand icon
│   ├── rajcv.pdf          # Downloadable resume
│   ├── robots.txt         # Bot crawl rules and sitemap indices
│   └── security.txt       # Vulnerability disclosure contact
├── src/
│   ├── components/        # Reusable presentation components
│   │   ├── About.astro
│   │   ├── Certifications.astro
│   │   ├── Contact.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   ├── SEOHead.astro
│   │   └── Skills.astro
│   ├── data/              # Typed datasets for content injection
│   │   ├── faq.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── about.astro    # Dedicated in-depth profile page
│   │   ├── index.astro    # Portfolio single-page layout
│   │   ├── privacy.astro  # Data protection policy
│   │   ├── terms.astro    # Terms of service
│   │   └── projects/
│   │       └── [slug].astro # Programmatic SEO case study route
│   └── styles/
│       └── global.css     # Design tokens and base utilities
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🛠️ Local Development & Build Workflow

### Prerequisites
- Node.js `v18.17.0` or higher (tested on Node `v24.x`)
- npm `v9.x` or higher

### Installation & Execution

```bash
# 1. Clone repository
git clone https://github.com/rajwebsitedomain/updatewebsite1026.git
cd updatewebsite1026

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# Server accessible at http://localhost:4321

# 4. Generate production build
npm run build
# Compiled static assets output to /dist

# 5. Preview production output
npm run preview
```

---

## 🔒 Security & Privacy

- **Zero Client Trackers**: No third-party behavioral profiling cookies or marketing telemetry.
- **Security Headers**: Production `.htaccess` applies strict `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and strict referrer policy headers.
- **Encrypted Transmission**: All form endpoints enforce HTTPS / TLS 1.3 encryption.

---

## 👤 Author & Contact

**Rajvardhan Singh Badgujar**  
Cloud & DevOps Engineer  
Indore, Madhya Pradesh, India  

- **Website**: [rajvardhansingh.in](https://rajvardhansingh.in)
- **Email**: [rajvardhancoder@gmail.com](mailto:rajvardhancoder@gmail.com)
- **LinkedIn**: [linkedin.com/in/rajvardhan-singh-badgujar](https://www.linkedin.com/in/rajvardhan-singh-badgujar/)
- **GitHub**: [github.com/singhrajvardhan](https://github.com/singhrajvardhan)
