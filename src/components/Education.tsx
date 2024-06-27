import { Education as EducationType } from '@/lib/cosmic-types'
import Link from 'next/link'

interface Props {
  education: EducationType[]
}

export function Education({ education }: Props) {
  return (
    <div className="flex flex-col text-sm sm:flex-row">
      <h2 className="mb-2 w-1/4 font-bold uppercase">Formação</h2>
      <ul className="flex flex-col space-y-1.5 sm:w-3/4">
        {education.map((education) => (
          <li key={education.degree}>
            <Link
              href={education.document_url}
              target="_blank"
              className="hover:underline"
            >
              <b>
                {education.degree}, {education.instituition}
              </b>{' '}
              <em>({education.duration} horas)</em>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
