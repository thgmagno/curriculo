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
    <div className="flex">
      <span className="min-w-40 text-sm font-semibold">PERFIL</span>
      <div className="flex flex-1 flex-col">
        <ul>
          {summary.map((item) => (
            <li key={item.title}>
              <b>{item.title}:</b> {item.description}
            </li>
          ))}
        </ul>
        <div className="flex flex-col">
          <p>Habilidades:</p>
          <div className="grid grid-cols-3">
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
