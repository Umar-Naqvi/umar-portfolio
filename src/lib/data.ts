
export const portfolioData = {
  profile: {
    name: "Mohammed Umar Ben Naqvi",
    role: "AI-Native Product Manager & Builder",
    tagline: "I ship products from 0→1 using AI-accelerated development",
    location: "Vijayapura, Karnataka, India",
    availability: "Open to Product Manager & Associate Product roles | Immediate joiner | Bangalore-based",
    resumeUrl: "https://drive.google.com/file/d/1XxeoS25bzpdZKMU468-HXprnc6RtIIA0/view?usp=drive_link",
    logoUrl: "/logo.png",
    contact: {
      email: "mdumarnaqvi4@gmail.com",
      phone: "+91 73491 08925",
      socials: {
        linkedin: "https://www.linkedin.com/in/mohammedumarnaqvi/",
        github: "https://github.com/mdumarnaqvi"
      }
    },
    bio: "I'm a product manager who doesn't just write specs—I ship. Using AI-native workflows (Cursor, Claude, Gemini), I architect products and build them without traditional coding. This lets me move from idea to deployed product in days, not months, while maintaining deep technical understanding.",
    aboutPreview: "I'm a product manager who builds what I design—using AI as my implementation layer. I've taken 4 products from concept to production solo: AI chatbots, SaaS platforms, and EdTech tools—all handling real users and real transactions.\n\nMy approach: Identify real user pain, architect the solution, and use AI to compress months of development into days.",
    philosophy: "AI is the ultimate implementation layer. It allows product managers to remove execution bottlenecks and focus on what matters: solving user problems and shipping value.",
    hobbies: [
      "Football Enthusiast (FIFA, EA Sports FC)",
      "Avid Reader (Durjoy Dutta, Colleen Hoover)",
      "Tech Explorer (Firebase Studio, Gemini)"
    ]
  },

  socialProof: [
    { metric: "4", label: "Products Shipped Solo" },
    { metric: "1M+", label: "Social Media Views" },
    { metric: "50%", label: "Organic Traffic Growth" },
    { metric: "30%", label: "Brand Awareness Increase" }
  ],
  
  skills: [
    {
        title: "Product Management",
        items: [
          "User Research & Personas",
          "PRD Writing & Spec Design",
          "Roadmapping & Prioritization",
          "Impact vs. Effort Frameworks",
          "Go-to-Market Strategy",
          "Metrics & Analytics (AARRR)"
        ]
    },
    {
        title: "AI-Native Building",
        items: [
          "Cursor AI (Rapid Prototyping)",
          "Gemini API (AI Features)",
          "Claude (System Architecture)",
          "Firebase (Backend & Data)",
          "Next.js (AI-Assisted Frontend)",
          "Product validation in days"
        ]
    },
    {
        title: "Domain Expertise",
        items: [
          "AI Study Tools (NoteVault)",
          "SaaS Invoicing (BillFlow)",
          "CRM Management (SAP)",
          "Digital Marketing (SEO, GA4)"
        ]
    },
    {
        title: "Collaboration & Ops",
        items: [
          "Cross-functional leadership",
          "Stakeholder management",
          "Data-driven decision making",
          "GTM execution",
          "Agile Methodology"
        ]
    }
  ],

  career: [
    {
      id: "mba",
      year: "Feb 2026 (Exp)",
      role: "MBA, Marketing",
      org: "Golden Gate University",
      desc: "GPA: 3.845. Building the strategic framework (AARRR, MoSCoW, GTM) that I apply to my products. Focusing on Product Strategy & Marketing Management."
    },
    {
      id: "crm",
      year: "May 2024 - May 2025",
      role: "CRM Manager",
      org: "Renuka Automotive (Ashok Leyland)",
      desc: "• Managed GTM strategy for multi-district campaigns, driving a 30% increase in brand awareness.\n• Engineered the end-to-end sales cycle in SAP CRM, creating dashboards that reduced manual data compilation by 50%.\n• Utilized predictive analysis on historical sales data to forecast performance and optimize inventory."
    },
    {
      id: "freelance",
      year: "Apr 2023 - Mar 2024",
      role: "Digital Marketing & Web Freelancer",
      org: "Self-Employed",
      desc: "• Delivered full-cycle web dev for 10+ clients, increasing lead conversion by 25-30%.\n• Leveraged GA4 user data to refine landing pages, resulting in a 35% enhancement in UX."
    },
    {
      id: "bba",
      year: "Oct 2024",
      role: "BBA, Marketing & Data Analytics",
      org: "BLDEA's A.S. Patil College",
      desc: "Built a strong foundation in Data Analytics (Tableau, SQL). Conducted an organizational workflow study for an industrial manufacturer to streamline operations."
    }
  ],

  projects: [
    {
      id: "ai-twin",
      type: "live",
      title: "AI Twin",
      heading: "Ask My AI Twin Anything",
      logoUrl: "/logo.png",
      description: "A conversational AI assistant that turns my portfolio into a conversation. Recruiters can ask anything (\"Tell me about BillFlow's architecture\") and get instant, contextual answers.",
      secondaryText: "Product Challenge: Static portfolios are boring. Solution: A RAG chatbot that demonstrates AI as a UX layer.",
      techStackBadge: ["Gemini 2.5 Flash", "RAG", "Next.js"],
      metrics: [
        "Shipped in 2 days",
        "Trained on 4 product case studies",
        "Context-aware PM insights"
      ],
      cta: { text: "Try It Now ✨", link: "#" },
      secondaryLink: null
    },
    {
      id: "billflow",
      type: "live",
      title: "BillFlow",
      heading: "BillFlow - Mobile-First Invoicing Platform",
      logoUrl: "/billflow.png",
      description: "Mobile-first invoicing for Indian SMBs. Solved the problem of manual calculations and unreliable internet for shop owners.",
      techStackBadge: ["Next.js", "Firebase", "TypeScript", "PWA"],
      metrics: [
        "100+ active daily users in week 1",
        "Invoices created in <10 seconds",
        "Architected & shipped in 3 weeks"
      ],
      cta: { text: "View Live Product →", link: "https://billflow.shop" },
      secondaryLink: { text: "PM Deep Dive →", link: "/billflow-technical" }
    },
    {
      id: "algebra-quest",
      type: "case-study",
      title: "Algebra Quest",
      heading: "Gamified Math Learning (AIFORJR)",
      logoUrl: "/notevault.png",
      description: "Designed a narrative-driven game to keep kids engaged past the 7-minute drop-off point in math lessons.",
      techStackBadge: ["Gamification", "Product Design", "EdTech"],
      metrics: [
        "Solved 7-minute drop-off problem",
        "Engagement-first learning design",
        "Narrative-driven UX"
      ],
      cta: { text: "View Case Study →", link: "https://drive.google.com/file/d/1XxeoS25bzpdZKMU468-HXprnc6RtIIA0/view?usp=drive_link" },
      technicalImplementation: {
        title: "Product Strategy",
        techDecisions: {
          title: "Key Decisions:",
          points: [
            "Rejected 'digital worksheet' UI for 'hacking mission' narrative",
            "Prioritized game mechanics over academic terminology (Mystery Box vs Variable)",
            "Built non-intrusive progress reporting for parents"
          ]
        },
        architectureChoice: {
          title: "The Trade-off:",
          body: "Prioritized flow state over vocabulary. Kids learn the concept of variables through 'Cyber-Chests' before ever seeing the math term. Engagement first, vocabulary later."
        },
        whyThisMattered: {
          title: "Why This Mattered:",
          body: "Demonstrates EdTech product design and ability to solve specific engagement bottlenecks."
        }
      }
    },
    {
      id: "dukaanbill",
      type: "case-study",
      title: "DukaanBill",
      heading: "DukaanBill - Offline Billing PWA",
      logoUrl: "/dukaanbill.png",
      description: "Offline-first billing for 63M+ Indian MSMEs. Bridging the gap between pen-and-paper and complex cloud software.",
      techStackBadge: ["React", "PWA", "Local Storage"],
      metrics: [
        "100% offline reliability",
        "Zero internet dependency",
        "Professional bills in 10s"
      ],
      cta: { text: "View Case Study →", link: "https://drive.google.com/file/d/1EKhmWHEms5L6Ej2P1iZzdBX_6KTtW2tr/view?usp=drive_link" },
      technicalImplementation: {
        title: "Product Implementation",
        techDecisions: {
          title: "PM Decisions:",
          points: [
            "PWA with browser storage to ensure 100% reliability",
            "Deliberately excluded cloud sync for V1 to ship faster",
            "Browser Print API to avoid heavy PDF libraries"
          ]
        },
        architectureChoice: {
          title: "Architecture Choice:",
          body: "The product validation question was 'Will shop owners use a billing app?' not 'Can I build complex sync logic?' Chose reliability > features."
        },
        whyThisMattered: {
          title: "Why This Mattered:",
          body: "Shipped in 2 weeks. Learned that for MSMEs, speed and reliability are the only metrics that matter."
        }
      }
    },
    {
      id: "notevault",
      type: "case-study",
      title: "NoteVault",
      heading: "NoteVault - AI Study Platform",
      logoUrl: "/notevault.png",
      description: "EdTech platform using Gemini AI to shift students from passive reading to active recall via auto-generated quizzes.",
      techStackBadge: ["React", "Firebase", "Gemini AI"],
      metrics: [
        "AI-powered quiz generation",
        "Structured prompt system",
        "Curriculum-aligned output"
      ],
      cta: { text: "View Case Study →", link: "https://drive.google.com/file/d/1yHjGt3Hy1qcDq7GE8Sc40450laAAVfz3/view?usp=drive_link" },
      technicalImplementation: {
        title: "Product Thinking",
        techDecisions: {
          title: "AI Strategy:",
          points: [
            "Engineered structured prompt system for consistent JSON responses",
            "Implemented difficulty levels based on syllabus Bloom's Taxonomy",
            "Integrated Firebase for real-time teacher-student sync"
          ]
        },
        aiIntegrationChallenge: {
          title: "The PM Challenge:",
          body: "How do you prompt AI to generate age-appropriate, curriculum-aligned questions consistently?",
          points: [
            "Built validation layer for AI-generated quizzes",
            "Implemented retry logic with prompt refinements",
            "Solved for Hallucination by constraining AI to uploaded notes"
          ]
        },
        productInsight: {
          title: "Product Insight:",
          body: "AI is the engine, but trust is the product. Students need to know the generated questions are accurate."
        }
      }
    }
  ]
};
