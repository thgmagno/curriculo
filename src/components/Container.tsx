import { SkillType } from '@/types/SkillType'
import { Education } from './Education'
import { Header } from './Header'
import { InfoProfile } from './InfoProfile'
import { Languages } from './Languages'
import { Profile } from './Profile'
import dataProfile from '@/data/dataProfile.json'

export function Container() {
  const { wantedJobTitle, country, city, state, email, phone } =
    dataProfile.header
  const { imgSrc, firstName, lastName } = dataProfile.profile
  const { summary, skills } = dataProfile.infoProfile
  const education = dataProfile.education
  const languages = dataProfile.languages

  const Hr = () => <div className="border-b border-zinc-600" />

  return (
    <div className="a4-container flex flex-col space-y-4 rounded-lg border border-zinc-600 shadow-md">
      <Header
        wantedJobTitle={wantedJobTitle}
        country={country}
        city={city}
        state={state}
        email={email}
        phone={phone}
      />
      <Hr />
      <Profile imgSrc={imgSrc} firstName={firstName} lastName={lastName} />
      <Hr />
      <InfoProfile summary={summary} skills={skills as SkillType[]} />
      <Hr />
      <Education education={education} />
      <Hr />
      <Languages languages={languages as SkillType[]} />
    </div>
  )
}
