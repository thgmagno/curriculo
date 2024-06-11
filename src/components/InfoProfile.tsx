import { Skill } from './Skill'

interface Props {
  summary: {
    title: string
    description: string
  }[]
  skills: {
    title: string
    level: 1 | 2 | 3 | 4
  }[]
}

export function InfoProfile({ summary, skills }: Props) {
  return (
    <div className="flex p-5">
      <span className="min-w-40 text-sm font-semibold">PERFIL</span>
      <div className="flex flex-1 flex-col space-y-3">
        <ul className="flex flex-col">
          {summary.map((item) => (
            <li key={item.title} className="mb-3 list-disc text-justify">
              <b>{item.title}:</b> {item.description}
            </li>
          ))}
        </ul>
        <div className="flex flex-col space-y-3">
          <p>Habilidades:</p>
          <div className="grid grid-cols-3 gap-3">
            {skills.map((skill) => (
              <Skill
                key={skill.title}
                title={skill.title}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
