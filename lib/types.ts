export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  link?: string
  github?: string
  featured: boolean
  technologies: string[]
}

export interface Skill {
  category: string
  skills: string[]
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  image?: string
}

export interface NavItem {
  label: string
  href: string
}
