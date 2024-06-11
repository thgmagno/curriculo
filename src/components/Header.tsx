import { capitalizeStr } from '@/utils/capitalizeStr'

interface Props {
  wantedJobTitle: string
  country: string
  city: string
  email: string
  phone: string
}

export function Header({ wantedJobTitle, country, city, email, phone }: Props) {
  return (
    <div className="flex items-center justify-between">
      <span>{wantedJobTitle}</span>
      <div className="flex flex-col items-end">
        <span>{(capitalizeStr(city), capitalizeStr(country))}</span>
        <span>{email}</span>
        <span>{phone}</span>
      </div>
    </div>
  )
}
