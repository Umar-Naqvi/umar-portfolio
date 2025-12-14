
export const portfolioData = {
  profile: {
    name: "Mohammed Umar Ben Naqvi",
    role: "AI-First Product Manager & Developer",
    tagline: "Building the Future, 0-to-1.",
    location: "Vijayapura, Karnataka, India",
    availability: "Open to Full-time AI PM roles.",
    resumeUrl: "https://drive.google.com/file/d/1XxeoS25bzpdZKMU468-HXprnc6RtIIA0/view?usp=drive_link",
    contact: {
      email: "mdumarnaqvi4@gmail.com",
      phone: "+91 73491 08925",
      socials: {
        linkedin: "https://www.linkedin.com/in/mohammedumarnaqvi/",
        github: "https://github.com/mdumarnaqvi"
      }
    },
    bio: "I'm a data-driven Product Manager and MBA candidate who loves the chaotic beauty of 0-to-1 product building. I specialize in bridging the gap between marketing strategy and technical execution, using AI to accelerate prototyping and validate ideas faster.",
    philosophy: "AI is not a replacement; it is the ultimate Assistant. It equips us to make better decisions, simplifies complex processes, and helps us understand concepts without sifting through hundreds of research papers.",
    hobbies: [
      "Football Enthusiast (FIFA, EA Sports FC)",
      "Avid Reader (Durjoy Dutta, Colleen Hoover)",
      "Tech Explorer (Firebase Studio, Gemini)"
    ]
  },
  
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
      emoji: "💸",
      category: "SaaS Platform",
      status: "Live App",
      type: "app", 
      link: "https://billflow.shop",
      stack: ["Next.js 14", "Firebase", "Tailwind", "UPI Payments"],
      summary: "Simplified Invoicing & Customer Management for Freelancers.",
      description: "Engineered a responsive SaaS platform to solve freelance billing chaos. It allows users to add unbilled items as they happen, then compile them into a professional PDF invoice with an embedded UPI QR code for instant payment. I built this full-stack solo, using AI to architect the database and logic.",
      metrics: [
        "Dynamic Itemized Billing",
        "Secure Firebase Auth & Firestore",
        "Instant PDF Generation with UPI QR"
      ]
    },
    {
      id: "dukaanbill",
      title: "DukaanBill",
      emoji: "🛒",
      category: "Offline PWA",
      status: "Case Study",
      type: "slides",
      link: "https://drive.google.com/file/d/1EKhmWHEms5L6Ej2P1iZzdBX_6KTtW2tr/view?usp=drivesdk",
      stack: ["React", "PWA", "Local Storage", "Gemini AI"],
      summary: "Empowering 63M+ Indian MSMEs with 10-second, offline billing.",
      description: "Designed an offline-first PWA to replace pen-and-paper for Kirana stores, addressing the reality of unstable internet in rural India. The goal is to transform a 120-second manual process into a 10-second digital one.",
      metrics: [
        "Address a 63M+ User Market",
        "10-Second Billing Goal",
        "100% Offline-First Functionality"
      ]
    },
    {
      id: "notevault",
      title: "NoteVault",
      emoji: "🧠",
      category: "AI EdTech",
      status: "Case Study",
      type: "slides",
      link: "https://drive.google.com/file/d/1yHjGt3Hy1qcDq7GE8Sc40450laAAVfz3/view?usp=drivesdk",
      stack: ["Gemini AI", "Next.js", "Firebase"],
      summary: "An intelligent platform that transforms static lecture notes into active study tools.",
      description: "Conceptualized an intelligent EdTech platform that turns static PDFs and lecture notes into dynamic study tools. It solves content fragmentation by using GenAI to auto-generate quizzes and flashcards, reducing study prep time from an hour to minutes.",
      metrics: [
        "AI Note Summarization",
        "Auto-Quiz & Flashcard Generation",
        "Reduces Study Prep by over 90%"
      ]
    }
  ]
};
