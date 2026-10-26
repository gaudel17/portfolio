import type { PortfolioConfig } from "@/app/types";

const portfolio: PortfolioConfig = {
  url: "https://amrit.vercel.app",

  profile: {
    name: "Amrit Gaudel",
    role: "Civil Engineering Student",
    tagline: "Designing structures with purpose, creativity, and care.",
    image: "/about.png",
    availability: "Open for internships and design collaborations",
    location: "Parbat, Nepal",
  },

  geo: {
    city: "Kathmandu",
    country: "Nepal",
    countryCode: "NP",
    timezone: "Asia/Kathmandu",
    flag: "🇳🇵",
    coordinates: {
      lat: 27.7172,
      lng: 85.324,
    },
  },

  seo: {
    title: "Amrit Gaudel | Civil Engineering Student in Kathmandu, Nepal",
    titleTemplate: "%s | Amrit Gaudel",
    description:
      "Amrit Gaudel is a civil engineering student in Kathmandu, Nepal, passionate about structural design, AutoCAD, and creative visual work. Explore his portfolio of projects, skills, and experience.",
    applicationName: "Amrit Gaudel Portfolio",
    keywords: [
      "Amrit Gaudel",
      "civil engineering student",
      "civil engineer Kathmandu",
      "civil engineer Nepal",
      "AutoCAD",
      "Civil 3D",
      "Etabs",
      "structural design",
      "civil engineering portfolio",
      "Thapathali Campus",
      "Institute of Engineering Nepal",
    ],
    sameAs: [
      "https://github.com/gaudel17",
      "https://www.linkedin.com/in/amrit-gaudel-66a585266/",
      "https://www.facebook.com/amrit.gaudel.35",
      "https://www.instagram.com/gaudel.amrit/",
    ],
    googleVerification: process.env.GOOGLE_VERIFICATION,
    image: "/picofme.png",
  },

  analytics: {
    umamiId: process.env.UMAMI_ID,
  },

  contact: {
    email: "amrit.079bce012@tcioe.edu.np",
    phone: "+977-9867740482",
    showPhone: true,
  },

  socials: [
    {
      name: "GitHub",
      href: "https://github.com/gaudel17",
      icon: "github",
      tooltip: "Where I store my bugs... ",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/amrit-gaudel-66a585266/",
      icon: "linkedin",
      tooltip: "Professional me (I promise I'm fun) ",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/amrit.gaudel.35",
      icon: "facebook",
      tooltip: "Daily dose of nostalgia & drama ",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/gaudel.amrit/",
      icon: "instagram",
      tooltip: "Reels, vibes & fake perfection ",
    },
    {
      name: "Email",
      href: "mailto:amrit.079bce012@tcioe.edu.np",
      icon: "mail",
      tooltip: "Let's build something cool together ",
    },
  ],

  hero: {
    kicker: "Amrit Gaudel · Civil Engineering Student and Graphics Designer",
    heading: "Designing structures with purpose, creativity, and care.",
    primaryCta: { label: "View projects", href: "/projects", icon: "ArrowRight" },
    secondaryCta: { label: "About Amrit", href: "/about", icon: "ChevronRight" },
  },

  heroStats: [
    { value: "4", label: "Projects in portfolio" },
    { value: "AutoCAD · Civil 3D", label: "Core stack" },
    { value: "Kathmandu, Nepal", label: "Based in" },
  ],

  principles: [
    {
      icon: "Layers3",
      title: "Make it make sense",
      body: "Good designs shouldn't need explaining. If a structure or drawing feels obvious, the job is probably done.",
    },
    {
      icon: "Code2",
      title: "Solid, but thoughtful",
      body: "Because a beautiful design that fails under real conditions is just expensive decoration.",
    },
    {
      icon: "Wand2",
      title: "Just enough creativity",
      body: "Careful detailing, sound calculations, and design choices that make people think, “okay, that’s nice.”",
    },
  ],

  home: {
    principlesKicker: "Rules I Made Up",
    principlesTitle: "How I Do Things",
    principlesDescription:
      "A clear, practical approach to structural design, project work, and problem solving.",
    workKicker: "Things I Made",
    workTitle: "What I’ve Been Building",
    workDescription:
      "A selection of civil engineering projects and competitions focused on structural design and hands-on learning.",
  },

  status: {
    label: "Currently studying",
    note: "Probably overthinking a load calculation",
  },

  navigation: [
    { label: "Home", href: "/", icon: "Home" },
    { label: "About", href: "/about", icon: "User" },
    { label: "Work", href: "/projects", icon: "Briefcase" },
    { label: "Contact", href: "/contact", icon: "Mail" },
  ],

  footer: {
    description:
      "A personal portfolio for Amrit Gaudel, a civil engineering student from Kathmandu, Nepal, focused on structural design, AutoCAD, and creative visual work.",
    nav: [
      { label: "Amrit’s homepage", href: "/" },
      { label: "About Amrit", href: "/about" },
      { label: "Selected projects", href: "/projects" },
      { label: "Contact Amrit", href: "/contact" },
    ],
    shareTitle: "Amrit Gaudel | Civil Engineering Student",
  },

  contactPage: {
    kicker: "Let’s connect",
    heading: "Let’s build",
    headingHighlight: "something useful",
    intro:
      "If you need help with civil engineering design work, drawings, or a creative collaborator, send me a message.\nI’m open to internships, collaborations, and thoughtful project work.",
    emailCardTitle: "Drop me a line",
    emailCardText:
      "The fastest way to reach me. I check email throughout the day and usually reply within a few hours.",
    responseTime: "Response time: faster than her replies",
    basedInBody: "Working and studying from Kathmandu, the heart of Nepal.",
    timezoneBody: "UTC+5:45. Usually online from 9 AM to 6 PM.",
    takeActionTitle: "Take action",
    takeActionText: "Choose the next step that works best for you.",
    actions: {
      github: {
        title: "View GitHub",
        body: "Explore repositories and recent code.",
      },
      linkedin: {
        title: "Connect on LinkedIn",
        body: "View my professional profile and experience.",
      },
      instagram: {
        title: "Follow on Instagram",
        body: "See updates and moments beyond work.",
      },
    },
  },

  openGraph: {
    home: {
      role: "Civil Engineering Student",
      description:
        "Structural design, AutoCAD, and creative visual work from Kathmandu, Nepal.",
    },
    about: {
      subtitle: "About Amrit",
      description:
        "Civil engineering background, experience, and technical skills.",
    },
    projects: {
      subtitle: "Projects",
      description: "Selected civil engineering projects and competitions with context.",
    },
    contact: {
      subtitle: "Contact",
      description:
        "Available for internships, collaborations, and project work.",
    },
  },

  sections: {
    about: true,
    projects: true,
    contact: true,
    showExperience: true,
    showEducation: true,
    showSkills: true,
    showPrinciples: true,
    showAvailability: true,
    showHeroStats: true,
    projectLabels: {
      live: "Live demo",
      source: "Source",
    },
  },

  introduction: `
I’m Amrit Gaudel, a Final year Civil Engineering student based in Kathmandu, Nepal.
I have a strong passion for design and creativity, with skills in AutoCAD, video
editing, and visual design.

I enjoy learning new things and combining my technical knowledge with creative
ideas to make useful and attractive designs. I care about clear structural
thinking, practical problem-solving, and work that stays functional as it scales
from concept to real-world application.

I’m currently continuing my studies at the Institute of Engineering, Thapathali
Campus, and I'm eager to gain real-world experience and grow as a creative
engineer.
`,

  workExperience: [
    {
      title: "Secretary",
      company: "SODEN Student Club, Thapathali Campus",
      period: "Present",
      description:
        "Serving as secretary of the SODEN student club at Thapathali Campus, coordinating club activities, communication, and event planning.",
    },
    {
      title: "Base Isolation and TMD Structure",
      company: "Tech Fest, Thapathali Campus",
      period: "2024",
      description:
        "Designed and built a base isolation and tuned mass damper (TMD) civil model for an inter-college competition to demonstrate vibration control in buildings. Won 1st prize.",
    },
    {
      title: "Shake Table Experiment",
      company: "Tech Fest, Thapathali Campus",
      period: "2025",
      description:
        "Participated in a shake table event to study the behavior of structures during simulated earthquakes and observed vibration effects on different models.",
    },
    {
      title: "Paper Bridge Competition",
      company: "Tech Fest, Thapathali Campus",
      period: "2025",
      description:
        "Designed and built a lightweight paper bridge model to test load-carrying capacity and structural efficiency during an inter-college competition.",
    },
    {
      title: "Survey Camp",
      company: "Tribhuvan University",
      period: "2025",
      description:
        "Completed a 10-day field survey camp involving practical applications of surveying techniques, data collection, and mapping as part of academic training.",
    },
  ],

  education: [
    {
      title: "Bachelor's in Civil Engineering",
      school: "Institute of Engineering, Thapathali Campus, Kathmandu",
      info: "Final year running",
    },
    {
      title: "Higher Secondary (10+2)",
      school: "Shree Amarsingh Secondary School, Pokhara",
      info: "2021 — 2023",
    },
    {
      title: "Secondary Education (up to S.E.E.)",
      school: "Shree Matedewal Janashayog Secondary School, Parbat",
      info: "2017 — 2020",
    },
    {
      title: "Middle School",
      school: "Parbat Sunlight Academy, Parbat",
      info: "Up to Class 6",
    },
  ],

  skills: {
    frontend: ["AutoCAD", "Civil 3D", "Etabs", "Surveying"],
    backend: ["Photoshop", "Canva"],
    tools: ["Critical Thinking", "Leadership", "Nepali", "English"],
  },
};

export default portfolio;