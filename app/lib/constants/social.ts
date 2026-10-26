import { Github, Linkedin, Mail, Instagram, Facebook } from 'lucide-react'

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/gaudel17',
    icon: Github,
    tooltip: "Where I store my bugs...",
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/amrit-gaudel-66a585266/',
    icon: Linkedin,
    tooltip: "Professional me (I promise I'm fun)",
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/amrit.gaudel.35',
    icon: Facebook,
    tooltip: "Hot takes and cold coffee ☕",
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/gaudel.amrit/',
    icon: Instagram,
    tooltip: "Hot takes and cold coffee ☕",
  },
  {
    name: 'Email',
    href: 'mailto:amrit.079bce012@tcioe.edu.np',
    icon: Mail,
    tooltip: "Let's build something cool together",
  },
] as const
