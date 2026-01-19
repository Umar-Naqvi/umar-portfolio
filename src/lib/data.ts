
export const portfolioData = {
  profile: {
    name: "Mohammed Umar Ben Naqvi",
    role: "AI-First Product Manager & Developer",
    tagline: "Building the Future, 0-to-1.",
    location: "Vijayapura, Karnataka, India",
    availability: "Open to Full-time AI PM roles.",
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
    bio: "I'm a Full-Stack Product Builder who ships products solo—from user research to live deployment. I combine Product Management + AI-Assisted Development + Digital Marketing + CRM to take ideas from strategy to shipped in weeks, not months. Currently: Building BillFlow (live SaaS).",
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
    { metric: "3", label: "Products (1 Live, 2 Case Studies)" },
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
      title: "BillFlow",
      logoUrl: "/billflow.png",
      category: "SaaS Platform",
      status: "LIVE APP",
      type: "app", 
      link: "https://billflow.shop",
      stack: ["Next.js", "Firebase", "Cursor"],
      summary: "Simplified Invoicing & Customer Management for Freelancers.",
      description: "Dynamic 'Unbilled Item' tracking, instant PDF generation with embedded UPI QR codes, and secure cloud sync. Architected database and logic using AI.",
      metrics: [
        "Dynamic billing",
        "UPI integration",
        "Customer tracking"
      ]
    },
    {
      id: "dukaanbill",
      title: "DukaanBill",
      logoUrl: "/dukaanbill.png",
      category: "Offline PWA",
      status: "CASE STUDY",
      type: "slides",
      link: "https://drive.google.com/file/d/1EKhmWHEms5L6Ej2P1iZzdBX_6KTtW2tr/view?usp=drivesdk",
      stack: ["React", "PWA", "Local Storage", "Gemini AI"],
      summary: "Empowering 63M+ Indian MSMEs with 10-second, offline billing.",
      description: "Problem: Small retailers stuck between slow paper and complex Excel. Solution: An offline-first PWA designed for tier 2/3 cities to bridge the connectivity gap.",
      metrics: [
        "Address a 63M+ User Market",
        "10-Second Billing Goal",
        "100% Offline-First Functionality"
      ]
    },
    {
      id: "notevault",
      title: "NoteVault",
      logoUrl: "/notevault.png",
      category: "AI EdTech",
      status: "CASE STUDY",
      type: "slides",
      link: "https://drive.google.com/file/d/1yHjGt3Hy1qcDq7GE8Sc40450laAAVfz3/view?usp=drivesdk",
      stack: ["Gemini AI", "Next.js", "Firebase"],
      summary: "AI-powered platform transforming static lecture notes into active study tools.",
      description: "Solution: Gemini-powered quiz/flashcard generation to solve content fragmentation. Result: A complete product strategy was developed using the AARRR framework, with 'Weekly Study Sessions Initiated' as the North Star Metric.",
      metrics: [
        "AI Note Summarization",
        "Auto-Quiz & Flashcard Generation",
        "Reduces Study Prep by over 90%"
      ]
    }
  ]
};
