export interface HeaderType {
  wantedJobTitle: string[]
  country: string
  city: string
  state: string
  email: string
  phone: string
}

export interface ProfileType {
  imgSrc: string
  firstName: string
  lastName: string
}

export interface SummaryType {
  title: string
  description: string
}

export interface SkillType {
  title: string
  level: 1 | 2 | 3 | 4
}

export interface InfoProfileType {
  summary: SummaryType[]
  skills: SkillType[]
}

export interface EducationType {
  school: string
  degree: string
  startAt: string
  endAt: string | null
  href: string
}

export interface LanguageType {
  title: string
  level: 1 | 2 | 3 | 4
}

export interface UserProfileType {
  header: HeaderType
  profile: ProfileType
  infoProfile: InfoProfileType
  education: EducationType[]
  languages: LanguageType[]
}
