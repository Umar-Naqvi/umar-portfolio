
export const portfolioData = {
  profile: {
    name: "Mohammed Umar Ben Naqvi",
    role: "Product Engineer & Builder",
    tagline: "I ship AI-powered SaaS products from 0→1",
    location: "Vijayapura, Karnataka, India",
    availability: "Open to Full-time Product Engineer roles.",
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
    bio: "I combine product thinking with full-stack execution. I don't just design products—I architect and ship them. Using AI-accelerated development, I've built and deployed production applications handling real users and real transactions.",
    aboutPreview: "I'm a product engineer who ships AI-powered applications from concept to production. I've built and deployed full-stack SaaS products—handling everything from Firebase backend architecture to responsive frontends—using AI-accelerated development workflows.\n\nMy approach: Identify real user pain, architect the solution, and ship fast. I've taken products from 0→1 solo, managing the entire technical stack while maintaining product-first thinking.",
    philosophy: "AI is not a replacement; it is the ultimate Assistant. It equips us to make better decisions, simplifies complex processes, and helps us understand concepts without sifting through hundreds of research papers.",
    hobbies: [
      "Football Enthusiast (FIFA, EA Sports FC)",
      "Avid Reader (Durjoy Dutta, Colleen Hoover)",
      "Tech Explorer (Firebase Studio, Gemini)"
    ]
  },

  socialProof: [
    { metric: "1M+", label: "Social Media Views" },
    { metric: "50%", label: "Organic Traffic Growth" },
    { metric: "3", label: "Products Shipped" },
    { metric: "30%", label: "Brand Awareness Increase" }
  ],
  
  skills: [
    {
        title: "Product Management",
        items: ["User Research", "PRDs", "Roadmapping", "Impact vs Effort"]
    },
    {
        title: "AI-Assisted Dev",
        items: ["Cursor AI", "Gemini API", "Next.js", "Firebase"]
    },
    {
        title: "Digital Marketing",
        items: ["SEO/SEM", "GA4", "Content Marketing"]
    },
    {
        title: "CRM & Ops",
        items: ["SAP CRM", "GTM Strategy", "Data Dashboards"]
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
      desc: "Built a strong foundation in Data Analytics (Tableau, SQL). As a capstone, I conducted an end-to-end organizational workflow study for an industrial manufacturer (SWASTIC Rotomatic) to identify bottlenecks and deliver recommendations that streamlined operations."
    }
  ],

  projects: [
    {
      id: "billflow",
      type: "live",
      title: "BillFlow",
      heading: "BillFlow - Mobile-First Invoicing Platform",
      logoUrl: "/billflow.png",
      description: "A Progressive Web App for Indian SMBs with offline-first architecture. Handles invoice creation, inventory tracking, and UPI payments with zero internet dependency.",
      techStackBadge: ["Next.js", "Firebase", "TypeScript", "PWA"],
      metrics: [
        "Offline-first architecture",
        "Real-time sync with conflict resolution",
        "100% mobile-responsive"
      ],
      cta: { text: "View Live Product →", link: "https://billflow.shop" },
      secondaryLink: { text: "Technical Breakdown →", link: "/billflow-technical" }
    },
    {
      id: "dukaanbill",
      type: "case-study",
      title: "DukaanBill",
      heading: "DukaanBill - Offline Billing PWA",
      logoUrl: "/dukaanbill.png",
      description: "10-second billing solution for shops with unstable internet. Built with browser storage for 100% reliability.",
      techStackBadge: ["React", "PWA", "Local Storage"],
      metrics: [
        "Zero internet dependency",
        "Instant search & auto-calculation",
        "Print-ready invoices"
      ],
      cta: { text: "View Case Study →", link: "https://docs.google.com/presentation/d/1EKhmWHEms5L6Ej2P1iZzdBX_6KTtW2tr/edit?usp=sharing" },
      technicalImplementation: {
        title: "Technical Implementation",
        techDecisions: {
          title: "Tech Decisions:",
          points: [
            "PWA with offline-first local storage (no Firebase dependency in V1)",
            "React for component reusability",
            "Browser's Print API for invoice generation (no PDF library needed)"
          ]
        },
        architectureChoice: {
          title: "Architecture Choice:",
          body: "I deliberately kept V1 simple—no backend, no auth. The product validation question was \"Will shop owners use a billing app?\" not \"Can I build complex sync logic?\" \n\nOnce validated, V2 adds Firebase for cloud backup."
        },
        whyThisMattered: {
          title: "Why This Mattered:",
          body: "Shipped in 2 weeks instead of 2 months. Learned that speed > perfection for MVP validation."
        }
      }
    },
    {
      id: "notevault",
      type: "case-study",
      title: "NoteVault",
      heading: "NoteVault - AI Study Platform",
      logoUrl: "/notevault.png",
      description: "EdTech platform using Gemini AI to transform static notes into interactive study tools. Built for students and teachers.",
      techStackBadge: ["React", "Firebase", "Gemini AI"],
      metrics: [
        "AI-powered quiz generation",
        "Automated flashcard creation",
        "Real-time collaboration"
      ],
      cta: { text: "View Case Study →", link: "https://docs.google.com/presentation/d/1yHjGt3Hy1qcDq7GE8Sc40450laAAVfz3/edit?usp=sharing" },
      technicalImplementation: {
        title: "Technical Implementation",
        techDecisions: {
          title: "Tech Decisions:",
          points: [
            "Firebase for real-time collaboration (teachers + students)",
            "Gemini AI API for quiz/flashcard generation",
            "React Context for auth state management"
          ]
        },
        aiIntegrationChallenge: {
          title: "AI Integration Challenge:",
          body: "Gemini's responses can be inconsistent. I solved this with:",
          points: [
            "Structured prompts (JSON-only responses)",
            "Retry logic with exponential backoff",
            "Fallback to manual quiz creation if AI fails"
          ]
        },
        productInsight: {
          title: "Product Insight:",
          body: "The AI is the feature, but reliability is the product. Users forgive slow AI; they don't forgive broken AI."
        }
      }
    }
  ]
};
