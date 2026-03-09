
# West Digital Hub — Multilingual Website

## Overview
A modern, dark tech-inspired website for West Digital Hub — a technology consulting, product development, and outsourcing agency based in Bafoussam, Cameroon. Bilingual (English/French) with a language switcher.

## Design
- **Theme**: Dark background (#0a0a0f / deep navy) with gold (#C8A951) and white accents matching the logo colors
- **Gradients**: Subtle gold-to-dark gradients for section highlights
- **Typography**: Clean, modern sans-serif (Inter or similar)
- **Animations**: Smooth scroll reveals, hover effects on cards
- **Fully responsive**: Mobile-first design

## Logo
The uploaded West Digital Hub logo will be used in the navbar and footer.

## Language System
- English/French toggle in the navbar
- All content translated between both languages
- Language preference stored in localStorage

## Pages & Sections (Single Page)

### 1. Navbar
- Logo + "West Digital Hub"
- Navigation links: About, Services, Expertise, Startups, Outsourcing, Space, Projects, Contact
- EN/FR language switcher
- "Start a Project" CTA button

### 2. Hero Section
- Bold headline: "Build Your Digital Products With Top African Tech Talent"
- Subheadline about consulting, development, outsourcing
- 3 CTA buttons: Start a Project, Book a Call, View Services
- Abstract tech/globe illustration or gradient visual

### 3. About Section
- "Who We Are" with company description
- Mission statement with "Build in Africa. Deliver to the World." tagline
- Stats/highlights (e.g., countries served, projects delivered)

### 4. Services Section
- 3 service cards with icons:
  - **IT Consulting**: Strategy, architecture, digital transformation, MVP roadmap
  - **Product Development**: Web, mobile, SaaS, AI, blockchain
  - **Tech Outsourcing**: Dedicated devs, remote teams, project-based, CTO-as-a-service
- Emphasis on quality at competitive cost

### 5. Why Work With Us
- Grid of advantage cards with icons: African talent, cost-effective, agile, international collaboration, scalable teams

### 6. Expertise & Technologies
- Visual grid/badges showing: AI, Web Dev, Mobile, Blockchain, Cloud, Cybersecurity, Data & Analytics, DevOps

### 7. For Startups
- "Build Your Startup With Us" — idea validation, MVPs, scalable platforms
- "Launch Your Startup" CTA

### 8. Tech Outsourcing
- "Scale Your Tech Team Globally" — access skilled developers, reduce costs
- "Hire Developers" CTA

### 9. Coworking & Innovation Space
- West Digital Hub Space: coworking, offices, meeting rooms, hackathons, events

### 10. Projects / Case Studies
- 3-4 placeholder project cards with images, descriptions, and tech tags

### 11. Final CTA
- "Ready to Build Your Next Digital Product?"
- Start Your Project + Contact Us buttons

### 12. Footer
- Contact info (placeholder until provided), location, socials
- Newsletter email subscription (frontend only)
- Copyright + links

## Technical Approach
- Single-page React app with smooth scroll navigation
- Custom i18n context for EN/FR translations
- Intersection Observer for scroll animations
- All content in translation JSON objects
- Responsive grid layouts with Tailwind
