import { Skill } from './Skill'

interface Props {
  languages: {
    title: string
    level: 1 | 2 | 3 | 4
  }[]
}

export function Languages({ languages }: Props) {
  return (
    <div className="flex p-5">
      <span className="min-w-40 text-sm font-semibold">IDIOMAS</span>
      <div className="grid flex-1 grid-cols-3">
        {languages.map((item) => (
          <Skill key={item.title} title={item.title} level={item.level} />
        ))}
      </div>
    </div>
  )
}
