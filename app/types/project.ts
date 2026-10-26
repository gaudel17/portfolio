import { type Project } from "@/app/types";

const projects: Project[] = [
  {
    id: "1",
    title: "Base Isolation & TMD Structure",
    description:
      "A structural model demonstrating base isolation and tuned mass damper (TMD) vibration control. Won 1st prize at Tech Fest.",
    longDescription:
      "Designed and built a civil model showcasing base isolation and a tuned mass damper (TMD) for an inter-college competition at Tech Fest, Thapathali Campus. The model demonstrated how these systems reduce vibrations in buildings during earthquakes and won 1st prize.",
    role: "Design & build",
    image: "/works/base-isolation.jpg",
    images: ["/works/base-isolation.jpg", "/works/base-isolation-team.jpeg"],
    tags: ["AutoCAD", "Structural Design", "Vibration Control", "Model Making"],
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: "2",
    title: "Shake Table Experiment",
    description:
      "Studied the behavior of structures under simulated earthquake conditions using a shake table.",
    longDescription:
      "Participated in a shake table event at Tech Fest, Thapathali Campus, studying how structures respond to simulated earthquakes and observing vibration effects on different building models.",
    role: "Experiment & analysis",
    image: "/works/shake-table-tower.png",
    tags: ["Earthquake Engineering", "Structural Dynamics"],
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: "3",
    title: "Paper Bridge Competition",
    description:
      "A lightweight paper bridge model built to test load-carrying capacity and structural efficiency.",
    longDescription:
      "Designed and built a lightweight paper bridge model for an inter-college competition at Tech Fest, Thapathali Campus, testing load-carrying capacity and exploring structural efficiency with minimal material.",
    role: "Design & build",
    image: "/works/popsicle-bridge.png",
    tags: ["Structural Efficiency", "Load Analysis", "Model Making"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: "4",
    title: "Survey Camp",
    description:
      "A 10-day field survey camp covering practical surveying techniques, data collection, and mapping.",
    longDescription:
      "Completed a 10-day field survey camp as part of academic training at Tribhuvan University, involving practical applications of surveying techniques, field data collection, and mapping exercises.",
    role: "Field work",
    files: [
      { label: "Survey Report 1", href: "/works/survey-report-1.pdf" },
      { label: "Survey Report 2", href: "/works/survey-report-2.pdf" },
    ],
    tags: ["Surveying", "Data Collection", "Mapping"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
];

export function getProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}
