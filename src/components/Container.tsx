import { SkillType } from '@/types/SkillType'
import { Education } from './Education'
import { Header } from './Header'
import { InfoProfile } from './InfoProfile'
import { Languages } from './Languages'
import { Profile } from './Profile'
import dataProfile from '@/data/dataProfile.json'

export function Container() {
  const { wantedJobTitle, country, city, email, phone } = dataProfile.header
  const { imgSrc, firstName, lastName } = dataProfile.profile
  const { summary, skills } = dataProfile.infoProfile
  const education = dataProfile.education
  const languages = dataProfile.languages

  return (
    <div className="flex flex-col rounded-lg border">
      <Header
        wantedJobTitle={wantedJobTitle}
        country={country}
        city={city}
        email={email}
        phone={phone}
      />
      <Profile imgSrc={imgSrc} firstName={firstName} lastName={lastName} />
      <InfoProfile summary={summary} skills={skills as SkillType[]} />
      <Education education={education} />
      <Languages languages={languages as SkillType[]} />
    </div>
  )
}
