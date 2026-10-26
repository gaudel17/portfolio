export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  image?: string;
  images?: string[];
  files?: { label: string; href: string }[];
  tags: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
  featured: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  image: string;
}

export interface Skill {
  name: string;
  category: string;
  icon?: string;
  proficiency?: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  tooltip?: string;
}

export interface GeoConfig {
  city: string;
  country: string;
  countryCode?: string;
  timezone?: string;
  flag?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface ProfileConfig {
  name: string;
  role: string;
  tagline?: string;
  image: string;
  availability?: string;
  location: string;
}

export interface ContactConfig {
  email: string;
  phone?: string;
  showPhone?: boolean;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface Principle {
  icon: string;
  title: string;
  body: string;
}

export interface StatusConfig {
  label: string;
  note?: string;
}

export interface EducationItem {
  title: string;
  school: string;
  info?: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SeoConfig {
  title: string;
  titleTemplate?: string;
  description: string;
  applicationName?: string;
  keywords?: string[];
  sameAs?: string[];
  googleVerification?: string;
  image?: string;
}

export interface OpenGraphCopy {
  role?: string;
  subtitle?: string;
  description: string;
}

export interface SectionsConfig {
  about: boolean;
  projects: boolean;
  contact: boolean;
  showExperience: boolean;
  showEducation: boolean;
  showSkills: boolean;
  showPrinciples: boolean;
  showAvailability: boolean;
  showHeroStats: boolean;
  projectLabels: {
    live: string;
    source: string;
  };
}

export interface PortfolioConfig {
  url: string;
  profile: ProfileConfig;
  geo: GeoConfig;
  seo: SeoConfig;
  analytics?: {
    umamiId?: string;
  };
  contact: ContactConfig;
  socials: SocialLink[];
  hero: {
    kicker: string;
    heading: string;
    primaryCta: NavItem;
    secondaryCta: NavItem;
  };
  heroStats: HeroStat[];
  principles: Principle[];
  home: {
    principlesKicker: string;
    principlesTitle: string;
    principlesDescription: string;
    workKicker: string;
    workTitle: string;
    workDescription: string;
  };
  status: StatusConfig;
  navigation: NavItem[];
  footer: {
    description: string;
    nav: FooterLink[];
    shareTitle: string;
  };
  contactPage: {
    kicker: string;
    heading: string;
    headingHighlight: string;
    intro: string;
    emailCardTitle: string;
    emailCardText: string;
    responseTime: string;
    basedInBody: string;
    timezoneBody: string;
    takeActionTitle: string;
    takeActionText: string;
    actions: {
      github: { title: string; body: string };
      linkedin: { title: string; body: string };
      instagram: { title: string; body: string };
    };
  };
  openGraph: {
    home: OpenGraphCopy;
    about: OpenGraphCopy;
    projects: OpenGraphCopy;
    contact: OpenGraphCopy;
  };
  sections: SectionsConfig;
  introduction: string;
  workExperience: Experience[];
  education: EducationItem[];
  skills: Record<string, string[]>;
}
