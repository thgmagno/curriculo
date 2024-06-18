import { LanguageType } from '../types/UserProfileType'
import { Skill } from './Skill'

export function Languages({ languages }: { languages: LanguageType[] }) {
  return (
    <div className="flex p-5">
      <span className="min-w-40 text-sm font-semibold">IDIOMAS</span>
      <div className="grid flex-1 grid-cols-3 gap-3">
        {languages.map((item) => (
          <Skill key={item.title} title={item.title} level={item.level} />
        ))}
      </div>
    </div>
  )
}
