export type ThemeMode = "dark" | "light";

export type ProjectSlug =
  | "rodneyai"
  | "aegis"
  | "mirar"
  | "bridgent-consulting"
  | "ayinke-consulting"
  | "ara";

export interface Profile {
  name: string;
  role: string;
  email: string;
  avatarSrc: string;
}

export interface HeroContent {
  title: string;
  accent: string;
  paragraphs: string[];
}

export interface ExperienceItem {
  company: string;
  title: string;
  date: string;
  logoSrc: string;
  contain?: boolean;
}

export interface ProjectSummary {
  slug: ProjectSlug;
  title: string;
  category: string;
  coverImage: string;
  coverAlt: string;
}

export interface ShotItem {
  src: string;
  alt: string;
}

export interface StackItem {
  name: string;
  category: string;
  iconSrc: string;
}

export interface Award {
  title: string;
  label: string;
  description: string;
  year: string;
}

export interface SocialLink {
  label: string;
  text: string;
  href: string;
  icon: "mail" | "linkedin" | "dribbble" | "behance";
}

export interface ProjectSection {
  title: string;
  body: string;
  images: string[];
  singleColumn?: boolean;
  containImages?: boolean;
}

export interface ProjectDetail extends ProjectSummary {
  meta: string;
  intro: string;
  coverCaption: string;
  externalUrl?: string;
  sections: ProjectSection[];
}
