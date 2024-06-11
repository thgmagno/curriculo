interface Props {
  title: string
  level: 1 | 2 | 3 | 4
}

export function Skill({ title, level }: Props) {
  const iconLevel = {
    1: 'border-l-4',
    2: 'border-l-4 border-b-4',
    3: 'border-l-4 border-b-4 border-r-4',
    4: 'border-4',
  }

  return (
    <div className="flex items-center gap-2">
      <div className={`h-5 w-5 rounded-full ${iconLevel[level]}`} />
      <b>{title}</b>
    </div>
  )
}
