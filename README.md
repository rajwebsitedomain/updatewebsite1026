# ⚡ Rajvardhan Singh Badgujar — Cloud & DevOps Engineer Portfolio

> **Cloud & DevOps Engineer** · Indore, India · [rajvardhansingh.in](https://rajvardhansingh.in)

[![Live Site](https://img.shields.io/badge/Live%20Site-rajvardhansingh.in-FF5E5B?style=for-the-badge&logo=google-chrome&logoColor=white)](https://rajvardhansingh.in)
[![GitHub](https://img.shields.io/badge/GitHub-singhrajvardhan-000?style=for-the-badge&logo=github)](https://github.com/singhrajvardhan)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-rajvardhan-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/rajvardhan-singh-badgujar/)

---

## 📌 Overview

High-speed, statically generated portfolio and cloud architecture case study directory built with **Astro 5** and **Tailwind CSS**. Optimized for instant page loads, sub-second TTFB, comprehensive JSON-LD schemas, and AI search engine discovery (ChatGPT, Perplexity, Claude, Gemini).

> *"If you have to do it twice, automate it."*

---

## 🚀 Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | [Astro 5](https://astro.build) (Static Site Generation — 0 KB JS default) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) (Modern Neobrutalism design system) |
| **Typography** | Space Grotesk & JetBrains Mono (Google Fonts) |
| **Search Engine & AI SEO** | JSON-LD (`Person`, `ItemList`, `FAQPage`, `TechArticle`), `llms.txt`, `llms-full.txt` |
| **Forms** | [Web3Forms](https://web3forms.com) async submission |
| **Sitemaps** | `@astrojs/sitemap` |

---

## ✨ Key Improvements & Features

- **Refined Neobrutalist UI/UX**: Replaced bloated, oversized fonts and heavy 16px borders with balanced proportions, 2px crisp borders, responsive font hierarchy, and 44px+ touch targets.
- **Lightning Speed**: Migrated to Astro SSG, delivering pre-rendered static HTML with near-perfect Lighthouse scores.
- **Programmatic SEO (`/projects/[slug]`)**: Data-driven case study pages for all 8 featured projects with architectural diagrams, problem/solution breakdowns, and metrics.
- **AI Search Optimization (AEO / AI-SEO)**:
  - Root `llms.txt` and `llms-full.txt` adhering to LLM discovery standards.
  - Dedicated FAQ section with semantic question blocks for AI Overviews and answer bots.
- **Clean Architecture**: Removed unnecessary PWA service workers and redundant legacy draft files.

---

## 📁 Project Structure

```
├── public/
│   ├── .htaccess          # Apache performance & security directives
│   ├── llms.txt           # Standard AI search summary
│   ├── llms-full.txt      # Full machine-readable technical knowledge bundle
│   ├── logo.png           # Site icon
│   ├── rajcv.pdf          # Downloadable resume
│   └── robots.txt         # Crawler rules & sitemap links
├── src/
│   ├── components/        # Reusable Astro components (Hero, Skills, Projects, FAQ, etc.)
│   ├── data/              # Structured datasets (projects, skills, faq)
│   ├── layouts/           # BaseLayout with dynamic SEOHead and structured data
│   ├── pages/             # File-based routes (/index, /projects/[slug], /privacy, /terms, /404)
│   └── styles/            # Tailwind CSS global styles
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```
