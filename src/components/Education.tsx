import Link from 'next/link'
import type { EducationType } from '../types/UserProfileType'

interface Props {
  education: EducationType[]
}

export function Education({ education }: Props) {
  return (
    <div className="flex p-5">
      <span className="min-w-40 text-sm font-semibold">FORMAÇÃO</span>
      <div className="flex flex-1 flex-col space-y-3">
        {education.map((item, index) => (
          <div key={index} className="flex flex-col">
            <Link
              href={item.href}
              target="_blank"
              className="text-lg font-medium hover:underline"
            >
              {item.degree}, {item.school.toUpperCase()}.
            </Link>
            <span className="text-sm font-light">
              {item.startAt} - {item.endAt ?? 'atual'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
