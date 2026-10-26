const profile = {
  name: "Amrit Gaudel",
  role: "Civil Engineering Student and Graphics Designer",
  location: "Parbat, Nepal ",
  image: "/about.png",
} as const;

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/gaudel17", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/amrit-gaudel-66a585266/", icon: "linkedin" },
  { name: "Facebook", url: "https://www.facebook.com/amrit.gaudel.35", icon: "facebook" },
  { name: "Instagram", url: "https://www.instagram.com/gaudel.amrit/", icon: "instagram" },
];

const introduction = `
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
`;

const workExperience = [
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
] as const;

const studies = [
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
] as const;

const technicalSkills = {
  designing: ["AutoCAD", "Civil 3D", "Etabs", "Surveying"],
  backend: ["Photoshop", "Canva"],
  tools: ["Critical Thinking", "Leadership", "Nepali", "English"],
} as const;

export function getAboutData() {
  return {
    profile,
    socialLinks,
    introduction,
    workExperience,
    studies,
    technicalSkills,
  };
}
