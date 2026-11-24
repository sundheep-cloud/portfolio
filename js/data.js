// ==========================================
// SUNDHEEP S - PORTFOLIO DATA ARCHITECTURE
// Digital Marketing | Performance Marketing | SEO | AI Websites
// ==========================================

const PORTFOLIO_DATA = {
  profile: {
    name: "Sundheep S",
    title: "Digital Marketing | Performance Marketing | SEO | AI-Powered Website Development",
    location: "Chennai, Tamil Nadu, India",
    email: "sundheep006@gmail.com",
    phone: "+91 9962606642",
    tagline: "Think Strategically. Market Creatively. Grow Digitally.",
    heroHeadline: "Turning Digital Strategies Into Business Growth.",
    heroSubheading: "Performance Marketing | Digital Strategy | SEO | AI-Powered Websites",
    heroDescription: "I combine marketing strategy, creative thinking and technology to build digital experiences that help businesses attract, engage and convert customers.",
    availability: "Open to Performance Marketing & Digital Marketing Opportunities",
    resumeUrl: "assets/Sundheep_Resume.pdf",
    photoUrl: "assets/profile/profile.jpg",
    metrics: [
      { label: "Meta Ads ROAS", value: "4.8x", trend: "+120% vs benchmark" },
      { label: "Ad Click-Through Rate", value: "+142%", trend: "Creative optimization" },
      { label: "Qualified Leads Generated", value: "12,400+", trend: "B2B & B2C funnels" },
      { label: "Cost Per Acquisition", value: "-38%", trend: "Precision targeting" }
    ],
    social: {
      email: "mailto:sundheep006@gmail.com",
      phone: "tel:+919962606642",
      whatsapp: "https://wa.me/919962606642?text=Hi%20Sundheep,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!",
      linkedin: "https://www.linkedin.com/in/sundheep-s",
      instagram: "https://instagram.com/sundheep"
    }
  },

  about: {
    title: "More Than Marketing. A Growth Mindset.",
    intro: "I am an MBA graduate specialising in Marketing and Human Resources, with professional experience in IT Recruitment and practical experience in Digital Marketing and Performance Marketing.",
    details: "My expertise includes Meta Ads campaign execution, paid social media advertising, lead generation, SEO optimisation, website auditing, keyword research, copywriting and digital campaign strategy. I am also exploring AI-powered website development using Lovable, Google Antigravity and Vercel to create modern digital experiences for businesses.",
    conclusion: "I enjoy combining creativity, business understanding, marketing strategy and technology to help brands improve their digital presence and generate business opportunities.",
    pillars: [
      {
        id: "strategic",
        title: "Strategic Thinking",
        subtitle: "Business & Market Understanding",
        description: "Understanding business requirements, customer behaviour and brand positioning to craft campaigns that speak directly to commercial objectives.",
        icon: "compass",
        points: ["Customer persona mapping & behavioral psychology", "Competitor advertising intelligence & positioning", "Full-funnel strategy (TOFU, MOFU, BOFU)"]
      },
      {
        id: "performance",
        title: "Performance Marketing",
        subtitle: "Data-Driven Paid Growth",
        description: "Paid campaigns, audience targeting, lead generation and rigorous campaign optimisation focused on lower CAC and higher ROAS.",
        icon: "trending-up",
        points: ["Meta Ads Manager setup & campaign architecture", "A/B creative testing & rapid audience iteration", "Pixel tracking, retargeting & lookalike modelling"]
      },
      {
        id: "technology",
        title: "Technology & Creativity",
        subtitle: "AI-Powered Execution",
        description: "AI-powered website development, modern digital experiences and marketing creatives that turn visitor attention into measurable revenue.",
        icon: "cpu",
        points: ["Rapid web building with Lovable & Antigravity", "Editorial copywriting & visual ad design", "Conversion rate optimization (CRO) & audit funnels"]
      }
    ],
    quickFacts: [
      { label: "Education", value: "MBA (Marketing & HR)" },
      { label: "Core Focus", value: "Meta Ads & Lead Gen" },
      { label: "Tech Edge", value: "AI-Powered Web Dev" },
      { label: "Location", value: "Chennai, India" }
    ]
  },

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "performance", label: "Performance Marketing" },
      { id: "seo", label: "SEO & Auditing" },
      { id: "creative", label: "Content & Creative" },
      { id: "ai-tools", label: "AI & Website Tools" },
      { id: "professional", label: "Professional Skills" }
    ],
    items: [
      // Performance Marketing
      { name: "Meta Ads", category: "performance", level: "Expertise", icon: "target", desc: "Campaign architecture, CBO/ABO, lookalike audiences, retargeting funnels." },
      { name: "Google Ads", category: "performance", level: "Working Knowledge", icon: "search", desc: "Search campaigns, keyword intent targeting, bidding strategies." },
      { name: "LinkedIn Ads", category: "performance", level: "Working Knowledge", icon: "users", desc: "B2B professional targeting, account-based marketing, job-title filters." },
      { name: "Lead Generation", category: "performance", level: "Expertise", icon: "zap", desc: "High-intent lead forms, landing page alignment, instant follow-up triggers." },
      { name: "Audience Targeting", category: "performance", level: "Expertise", icon: "pie-chart", desc: "Cold, warm and hot audience segmentation, demographic layering." },
      { name: "Campaign Optimisation", category: "performance", level: "Expertise", icon: "sliders", desc: "Daily bid management, creative fatigue mitigation, CTR/CPC analysis." },
      { name: "Paid Social Advertising", category: "performance", level: "Expertise", icon: "share-2", desc: "Multi-platform creative storytelling, hook-rate enhancement." },

      // SEO
      { name: "On-Page SEO", category: "seo", level: "Expertise", icon: "file-text", desc: "Meta tags, H1-H6 hierarchy, internal linking, image alt tags, semantic schema." },
      { name: "Off-Page SEO", category: "seo", level: "Competency", icon: "external-link", desc: "Quality backlink strategies, domain authority building, brand mentions." },
      { name: "Keyword Research", category: "seo", level: "Expertise", icon: "key", desc: "Search intent analysis, high-volume low-competition opportunities, long-tail discovery." },
      { name: "Website Auditing", category: "seo", level: "Expertise", icon: "check-circle", desc: "Core Web Vitals, crawl error identification, indexation analysis, technical fixes." },
      { name: "SEO Optimisation", category: "seo", level: "Expertise", icon: "arrow-up-right", desc: "Continuous ranking improvements, SERP click-through rate optimization." },

      // Content and Creative
      { name: "Ad Copywriting", category: "creative", level: "Expertise", icon: "edit-3", desc: "Direct response copy, PAS & AIDA frameworks, curiosity hooks, urgency triggers." },
      { name: "Content Ideation", category: "creative", level: "Expertise", icon: "lightbulb", desc: "Viral social hooks, value-first carousel planning, topical calendar design." },
      { name: "Social Media Writing", category: "creative", level: "Expertise", icon: "message-square", desc: "Engaging platform-native captions tailored for Instagram, LinkedIn, and Facebook." },
      { name: "CTA Writing", category: "creative", level: "Expertise", icon: "mouse-pointer", desc: "High-conversion action phrases engineered to eliminate decision friction." },
      { name: "Marketing Creatives", category: "creative", level: "Expertise", icon: "image", desc: "Visual ad aesthetics, contrast design, typography pairing for thumb-stopping ads." },

      // AI and Website Tools
      { name: "Google Antigravity", category: "ai-tools", level: "Practical", icon: "bot", desc: "Autonomous AI engineering workflows, prompt scaffolding, full workspace agent orchestration." },
      { name: "Lovable", category: "ai-tools", level: "Practical", icon: "sparkles", desc: "Conversational UI building, rapid interactive web prototypes, React component scaffolding." },
      { name: "Vercel", category: "ai-tools", level: "Practical", icon: "triangle", desc: "Edge deployment, DNS management, live environment configuration, continuous delivery." },
      { name: "Vibe Coding", category: "ai-tools", level: "Practical", icon: "code", desc: "Translating product vision and marketing workflows into live code using advanced LLMs." },

      // Professional Skills
      { name: "IT Recruitment", category: "professional", level: "Proven Track Record", icon: "briefcase", desc: "End-to-end recruitment lifecycle for engineering and technology mandates." },
      { name: "Talent Acquisition", category: "professional", level: "Proven Track Record", icon: "user-check", desc: "Strategic headhunting, talent pipeline building, market compensation mapping." },
      { name: "Candidate Sourcing", category: "professional", level: "Proven Track Record", icon: "filter", desc: "Boolean search mastery on LinkedIn Recruiter, Naukri, and developer portals." },
      { name: "Stakeholder Management", category: "professional", level: "Proven Track Record", icon: "award", desc: "Consultative communication with hiring managers, founders, and cross-functional teams." },
      { name: "MS Excel & Analytics", category: "professional", level: "Advanced", icon: "grid", desc: "VLOOKUP, Pivot Tables, campaign tracking dashboards, recruitment metrics." },
      { name: "Performance Reporting", category: "professional", level: "Advanced", icon: "bar-chart-2", desc: "Translating raw metrics into executive summaries and actionable marketing insights." }
    ]
  },

  experience: [
    {
      role: "Digital Marketing Intern",
      company: "Clickvyn Marketing Agency",
      period: "August 2026 – October 2026",
      type: "Internship",
      location: "Chennai, India",
      badge: "Performance & Growth",
      summary: "Spearheaded hands-on paid social media and organic optimization initiatives across high-intent client verticals.",
      responsibilities: [
        "Executed and managed Meta Ads campaigns specifically structured for qualified lead generation.",
        "Worked on multi-stage business lead generation funnels via paid social channels, cutting cost-per-lead.",
        "Monitored live campaign analytics, budget pacing, ad fatigue, and audience saturation.",
        "Conducted end-to-end on-page and off-page SEO audits to uncover indexation and ranking bottlenecks.",
        "Performed technical website audits and delivered concrete optimization roadmaps for client websites."
      ],
      skillsGained: ["Meta Ads Manager", "Lead Generation Funnels", "On-Page SEO", "Site Auditing", "Ad Analytics"]
    },
    {
      role: "HR IT Recruiter",
      company: "Iconium Consulting Group",
      period: "January 2026 – July 2026",
      type: "Full-Time",
      location: "Chennai, India",
      badge: "Talent Acquisition & Business Acumen",
      summary: "Managed full-lifecycle talent acquisition for specialized IT domains, serving as the strategic bridge between corporate clients and top technology talent.",
      responsibilities: [
        "Managed end-to-end IT recruitment cycles for enterprise technology requirements.",
        "Sourced high-caliber technical candidates via LinkedIn Recruiter, Naukri, internal databases and employee referrals.",
        "Conducted rigorous candidate screening, assessing technical competencies, cultural fit, and salary expectations.",
        "Coordinated multi-round interview schedules seamlessly between candidate pipelines and client hiring managers.",
        "Maintained recruitment trackers, weekly metrics dashboards, and candidate pipeline databases.",
        "Built robust talent pipelines for emerging tech stacks and supported offer rollout and smooth onboarding.",
        "Leveraged recruitment experience to develop deep business acumen, stakeholder empathy, and high-impact negotiation skills."
      ],
      skillsGained: ["Talent Sourcing", "Stakeholder Management", "LinkedIn Recruiter", "Candidate Pipeline Building", "Executive Communication"]
    }
  ],

  projects: [
    {
      id: "sun-properties",
      number: "01",
      name: "Sun Properties",
      category: "Real Estate Website",
      categoryBadge: "Property Showcase",
      liveUrl: "https://sun-properties.vercel.app/",
      image: "assets/projects/sun-properties-logo.png",
      secondaryImage: "assets/projects/sun-properties-emblem.png",
      tagline: "Premium South Indian Real Estate & Land Investment Portal",
      description: "A luxury Indian real estate website demonstration designed for high-net-worth investors and property seekers. Features an elegant property portfolio, location filters, clear architectural specifications, and seamless enquiry funnels engineered to convert high-ticket leads.",
      features: [
        "Curated residential plots, luxury villas, and commercial land listings",
        "Interactive property search filters and location-based discovery",
        "High-conversion lead capture forms integrated with instant enquiry routing",
        "Mobile-first luxury aesthetic with subtle micro-interactions"
      ],
      tech: ["React", "Tailwind CSS", "Vercel Edge Deployment", "SEO Metadata"],
      color: "#D4AF37",
      accent: "Real Estate Tech"
    },
    {
      id: "align-astro",
      number: "02",
      name: "Align Astro Systems",
      category: "Astrology & Consultation Website",
      categoryBadge: "Consultation Platform",
      liveUrl: "https://align-astro.vercel.app/",
      image: "assets/projects/align-astro-banner.png",
      secondaryImage: "assets/projects/align-astro-services.png",
      tagline: "Cosmic Clarity Through Modern Digital Consultation",
      description: "A specialized astrology and spiritual consultation website engineered to build immediate client trust. Elegantly packages traditional Vedic services into transparent modern consultation options with frictionless booking touchpoints.",
      servicesOffered: [
        "Birth Chart Reading (Jathagam Analysis)",
        "Marriage Compatibility (Porutham)",
        "Prasanam (Instant Query Resolution)",
        "Muhurtham Fixing (Auspicious Timing)",
        "Healing & Remedial Consultation"
      ],
      features: [
        "Clear service breakdown highlighting business positioning and spiritual heritage",
        "Trust-building client journey with consultation duration and deliverable details",
        "Direct booking call-to-actions connected to instant communication channels",
        "Atmospheric cosmic visual theme with high readability and responsive design"
      ],
      tech: ["Modern Web Architecture", "Tailwind CSS", "Vercel Hosting", "Mobile Optimization"],
      color: "#8A63D2",
      accent: "Consultation Tech"
    },
    {
      id: "click-and-flip",
      number: "03",
      name: "Click & Flip",
      category: "Digital Marketing Agency Website",
      categoryBadge: "Agency Platform (v1)",
      liveUrl: "https://click-and-flip.vercel.app/",
      image: "assets/projects/click-and-flip-hero-banner.png",
      secondaryImage: "assets/projects/click-and-flip-logo.png",
      tagline: "Clicks don't pay bills. Conversions do. We flip clicks into conversions.",
      description: "A high-conversion performance marketing agency website designed to disrupt vanity metric agencies. Features a built-in CRO ROI calculator, interactive growth visualizer, comprehensive website audit request funnel, and multi-channel acquisition offerings.",
      features: [
        "Interactive Click-to-Conversion Revenue Impact Simulator (INR/USD)",
        "Dynamic Canvas growth curves demonstrating ROI scaling",
        "Comprehensive 5-tier audit form with instant WhatsApp dispatch fallback",
        "Full-funnel service modules: Meta Ads, SEO, SMM, and Conversion Web Design"
      ],
      tech: ["Semantic HTML5", "Custom CSS3 Design System", "Modern Vanilla JS", "Canvas Engine", "Vercel"],
      color: "#FF7900",
      accent: "Performance Marketing"
    },
    {
      id: "click-and-flip-v2",
      number: "04",
      name: "Click & Flip – Second Version",
      category: "Website Design & Development",
      categoryBadge: "Agency Platform (v2)",
      liveUrl: "https://click-and-flip-com.lovable.app",
      image: "assets/projects/click-and-flip-badge.png",
      secondaryImage: "assets/projects/click-and-flip-hero-banner.png",
      tagline: "Next-Gen AI-Assisted Agency Experience & Rapid Iteration",
      description: "The second major architectural iteration of the Click & Flip digital presence, built using Lovable AI. Demonstrates modern conversational engineering, fluid dark-mode micro-animations, and modular component composition engineered for rapid client deployment.",
      features: [
        "AI-assisted rapid component scaffolding and responsive refinement",
        "Enhanced visual storytelling with modern typography pairing and glass surfaces",
        "Streamlined client consultation and project scoping interaction flow",
        "Real-time cloud hosting with continuous preview and production deployment"
      ],
      tech: ["Lovable AI Platform", "React Architecture", "Tailwind CSS", "Vercel / Cloud CDN"],
      color: "#C6F36A",
      accent: "AI Rapid Engineering"
    }
  ],

  creatives: [
    {
      id: "c1",
      title: "ClickRun Marketing Agency – Master Brand Board",
      category: "branding",
      categoryLabel: "Brand Identity",
      image: "assets/creatives/clickrun-agency-branding.png",
      aspect: "square",
      summary: "End-to-end brand identity and service ecosystem poster created for ClickRun Marketing Agency.",
      strategy: "Structured around three distinct performance pillars: SEO, Meta Ads, and Google Ads. Utilized high-contrast visual blocks, clear typography hierarchy, and conversion-focused contact prompts to establish immediate agency authority.",
      tags: ["Agency Branding", "Service Spectrum", "Visual Hierarchy", "Direct Response"]
    },
    {
      id: "c2",
      title: "ClickRun Agency – Official Mascot Logo",
      category: "branding",
      categoryLabel: "Brand Identity",
      image: "assets/creatives/clickrun-logo.png",
      aspect: "square",
      summary: "Original emblem featuring the iconic speeding roadrunner mascot inside a cloud silhouette.",
      strategy: "Engineered to symbolize agility, extreme speed in campaign optimization, and rapid digital execution. Distinctive black-and-gold colorway with aerodynamic speed streaks.",
      tags: ["Logo Design", "Mascot Branding", "Vector Illustration", "Brand Mark"]
    },
    {
      id: "c3",
      title: "Learn Digital Marketing – AI Academy Campaign",
      category: "promo",
      categoryLabel: "Promotional Campaign",
      image: "assets/creatives/learn-digital-marketing-ad.png",
      aspect: "portrait",
      summary: "High-converting social ad creative promoting an AI-powered job-oriented digital marketing program.",
      strategy: "Focused on modern pain points: 'Digital marketing today runs on AI—are you ready?'. Features circular image overlays of active collaborators, bulleted checklists with checkmarks, and high-visibility Book Now CTA.",
      tags: ["Social Media Ad", "EdTech Marketing", "AI Positioning", "Lead Hook"]
    },
    {
      id: "c4",
      title: "Fresh Perfume – Luxury Fragrance Campaign",
      category: "ads",
      categoryLabel: "Ad Creative",
      image: "assets/creatives/luxury-perfume-fresh-ad.png",
      aspect: "square",
      summary: "Editorial lifestyle ad creative for a premium Eau de Parfum luxury fragrance line.",
      strategy: "Hook: 'Freshness isn't just a smell. It's a mindset.' Utilized deep sage green background, floating bottle imagery with callout pointers ('24 hours lasting', 'EDP concentration', '50+ refined fragrances'), and minimal Order Now CTA.",
      tags: ["E-Commerce Ad", "Luxury Creative", "Feature Callouts", "Brand Aesthetics"]
    },
    {
      id: "c5",
      title: "Muscle Kick Whey Protein – Direct Response Ad",
      category: "ads",
      categoryLabel: "Ad Creative",
      image: "assets/creatives/whey-protein-supplement-ad.png",
      aspect: "square",
      summary: "High-contrast conversion ad designed for health & fitness supplement e-commerce.",
      strategy: "Geometric diagonal layout pairing deep black and pure white. Highlighted core product value ('28g protein per scoop', 'clean, light & lactose-friendly') with a prominent 20% OFF badge and direct purchase trigger.",
      tags: ["Performance Ad", "Supplement Marketing", "Discount Hook", "Conversion Layout"]
    },
    {
      id: "c6",
      title: "Click & Flip – 3D Conversion Emblem",
      category: "branding",
      categoryLabel: "Brand Identity",
      image: "assets/projects/click-and-flip-logo.png",
      aspect: "landscape",
      summary: "High-energy 3D logo design for Click & Flip with cursor click and upward flipping arrow.",
      strategy: "Represents the dynamic flip from paid traffic clicks into profitable customer conversions. Glow effect with neon orange and white contrast for high brand recall across all digital touchpoints.",
      tags: ["3D Branding", "Agency Identity", "Motion Concept", "Conversion Symbol"]
    }
  ],

  aiDevelopment: {
    title: "Building Digital Experiences with AI.",
    subtitle: "Strategic Marketer. AI-Powered Producer.",
    disclaimer: "I am a Performance & Digital Marketing strategist who leverages AI to bridge the gap between marketing vision, customer journeys, and functional digital experiences. I use cutting-edge AI tools to build, test, and iterate live web applications without waiting on multi-week development cycles.",
    tools: [
      {
        name: "Google Antigravity",
        badge: "Autonomous Development",
        role: "Multi-Agent System & Architectural Scaffolding",
        description: "Orchestrating autonomous AI agents to explore assets, build structured component trees, generate semantic codebases, and maintain rigorous design systems.",
        icon: "bot",
        capabilities: ["Autonomous asset synthesis", "Rigorous UI/UX execution", "Component modularity"]
      },
      {
        name: "Lovable",
        badge: "Conversational Prototyping",
        role: "Visual Interface & Dynamic Component Creation",
        description: "Transforming user stories and client conversion funnels directly into functional React interfaces through natural language prompts and instant preview iterations.",
        icon: "sparkles",
        capabilities: ["Instant UI rendering", "Stateful interaction design", "Rapid visual iteration"]
      },
      {
        name: "Vercel",
        badge: "Production Deployment",
        role: "Global Edge Infrastructure & Continuous Delivery",
        description: "Deploying production-ready client websites on global edge CDNs with instant caching, custom domains, HTTPS certificates, and 99.99% uptime.",
        icon: "triangle",
        capabilities: ["Zero-config deployments", "Global edge network", "Real-time preview URLs"]
      },
      {
        name: "Vibe Coding",
        badge: "Modern Workflow",
        role: "Strategic Intent to Functional Code",
        description: "The modern paradigm of engineering where deep marketing strategy, consumer psychology, and aesthetic vision guide AI systems to generate robust, production-ready code.",
        icon: "code",
        capabilities: ["Speed to market", "Elimination of design-dev disconnect", "Rapid A/B testing"]
      }
    ],
    workflowSteps: [
      { step: "01", title: "Marketing Strategy", desc: "Identify target audience, commercial goal, core value proposition, and customer conversion path." },
      { step: "02", title: "AI-Assisted Architecture", desc: "Use Google Antigravity & Lovable to scaffold responsive layouts, components, and interactive tools." },
      { step: "03", title: "Copy & Creative Integration", desc: "Inject verified persuasive copywriting, high-resolution visual assets, and conversion hooks." },
      { step: "04", title: "Edge Deployment & Testing", desc: "Push to Vercel for instant live hosting, test Core Web Vitals, mobile responsiveness, and tracking." }
    ]
  },

  certifications: [
    {
      id: "cert-seo",
      title: "SEO Marketing Course",
      issuer: "Sundar DMT",
      authority: "Gnana Sundar, Digital Marketing Head",
      date: "March 2026",
      badge: "Verified Certificate",
      category: "Search Engine Optimization",
      fileUrl: "assets/certificates/Sundheep S_SEO Certificate.png",
      fileType: "image",
      description: "Comprehensive training covering on-page SEO factors, meta tag architecture, internal linking optimization, technical site audits, and search algorithm alignment.",
      skills: ["On-Page SEO", "Technical Auditing", "Keyword Research", "SERP Optimization"]
    },
    {
      id: "cert-adm",
      title: "Advanced Digital Marketing – 100 Days Challenge",
      issuer: "The High Paying Clients",
      authority: "Arun Kumar & Naveen Kumar, Founders",
      date: "2026",
      badge: "Mastery Program",
      category: "Digital Marketing Strategy",
      fileUrl: "assets/certificates/advanced dm - Certificate  (10).pdf",
      fileType: "pdf",
      description: "Intensive 100-day execution framework focused on high-ticket client acquisition, paid advertising funnels, conversion copywriting, and full-funnel digital scaling.",
      skills: ["Client Acquisition", "Paid Social Funnels", "Conversion Copywriting", "Audience Scaling"]
    },
    {
      id: "cert-pm",
      title: "Performance Marketing Mastery Program",
      issuer: "Growth Scraper",
      authority: "Growth Scraper Academy",
      date: "August 2026",
      badge: "Mastery Program",
      category: "Performance Marketing",
      fileUrl: "assets/certificates/Sundheep S PM certificate.pdf",
      fileType: "pdf",
      description: "Advanced performance marketing certification covering Meta Ads Manager optimization, ABO/CBO budget scaling, retargeting funnels, and ROAS maximization.",
      skills: ["Meta Ads Scaling", "Lookalike Audiences", "CAC Reduction", "ROAS Optimization"]
    },
    {
      id: "cert-ba",
      title: "IT Certified Business Analyst & Agile Scrum",
      issuer: "IT STU2PRO in association with RC Build Fly",
      authority: "RC Build Fly & IT STU2PRO Joint Certification",
      date: "2025 – 2026",
      badge: "Verified Credential",
      category: "Agile & Business Analysis",
      fileUrl: "assets/certificates/Sundheep_S Digital Marketing.pdf",
      fileType: "pdf",
      description: "Professional certification developing structured business requirements analysis, stakeholder communication, Agile Scrum methodologies, and user story mapping.",
      skills: ["Agile Scrum", "Business Requirements Analysis", "Stakeholder Management", "Sprint Planning"]
    }
  ],

  education: [
    {
      degree: "Master of Business Administration (MBA)",
      specialization: "Marketing & Human Resources",
      institution: "SRM Institute of Science and Technology",
      location: "Chennai, Tamil Nadu",
      year: "2021 – 2023",
      score: "83% (First Class with Distinction)",
      highlights: [
        "Advanced Market Research & Consumer Behavior Analysis",
        "Strategic Brand Management & Integrated Marketing Communications",
        "Talent Acquisition, Organizational Dynamics & Performance Appraisal",
        "Data-driven business decision making and operational project management"
      ]
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      specialization: "General Commerce & Business Operations",
      institution: "SRM Institute of Science and Technology",
      location: "Chennai, Tamil Nadu",
      year: "2017 – 2020",
      score: "65%",
      highlights: [
        "Financial Accounting, Business Law & Commercial Analytics",
        "Principles of Modern Marketing & Commercial Operations",
        "Corporate Communications and Stakeholder Economics"
      ]
    }
  ]
};
