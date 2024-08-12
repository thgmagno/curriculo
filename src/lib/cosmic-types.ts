interface OccupationArea {
  portuguese: string
  english: string
}

interface ImageProfile {
  url: string
}

interface SocialLink {
  href: string
  label: string
}

interface AboutMeData {
  title: string
  data: string[]
}

interface AboutMe {
  portuguese: AboutMeData
  english: AboutMeData
}

interface Interests {
  portuguese: AboutMeData
  english: AboutMeData
}

interface AboutPortfolio {
  portuguese: AboutMeData
  english: AboutMeData
}

interface Home {
  fullname: string
  'occupation-area': OccupationArea
  'image-profile': ImageProfile
  social: SocialLink[]
  'about-me': AboutMe
  interests: Interests
  'about-portfolio': AboutPortfolio
}

interface InstituitionLogo {
  url: string
}

interface Degree {
  portuguese: string
  english: string
}

interface Category {
  key: string
  value: string
}

export interface Education {
  instituition: string
  'instituition-logo': InstituitionLogo
  degree: Degree
  duration: number
  startedAt: string
  endedAt: string
  category: Category
  'document-url': string
}

interface ProjectDescription {
  portuguese: string
  english: string
}

interface ProjectObjective {
  portuguese: string
  english: string
}

interface ProjectFeature {
  title: string
  description: string
}

interface ProjectFeatures {
  portuguese: ProjectFeature[]
  english: ProjectFeature[]
}

interface Technology {
  title: string
  url: string
}

interface ProjectData {
  title: string
  slug: string
  description: ProjectDescription
  objective: ProjectObjective
  url: string
  features: ProjectFeatures
  technologies: Technology[]
}

interface ProjectImage {
  url: string
}

interface Project {
  data: ProjectData
  image: ProjectImage
  createdAt: string
  done: boolean
}

export interface Metadata {
  home: Home
  education: Education[]
  projects: Project[]
}

export interface CosmicObject {
  object: {
    metadata: Metadata
  }
}
