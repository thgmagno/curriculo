interface Props {
  education: {
    school: string
    degree: string
    startAt: string
    endAt: string | null
  }[]
}

export function Education({ education }: Props) {
  return (
    <div className="flex p-5">
      <span className="min-w-40 text-sm font-semibold">EDUCAÇÃO</span>
      <div className="flex flex-1 flex-col space-y-3">
        {education.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-lg font-medium">
              {item.degree}, {item.school.toUpperCase()}.
            </span>
            <span className="text-sm font-light">
              {item.startAt} - {item.endAt ?? 'atual'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
