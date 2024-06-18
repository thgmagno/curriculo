import { capitalizeStr } from '@/utils/capitalizeStr'
import { HeaderType } from '../types/UserProfileType'

export function Header({
  wantedJobTitle,
  country,
  city,
  state,
  email,
  phone,
}: HeaderType) {
  return (
    <div className="flex items-center justify-between p-5">
      <span>{wantedJobTitle.map((job) => capitalizeStr(job)).join(' / ')}</span>
      <div className="flex flex-col items-end">
        <span>
          {capitalizeStr(city)}-{state.toUpperCase()}, {capitalizeStr(country)}
        </span>
        <span>{email}</span>
        <span>{phone}</span>
      </div>
    </div>
  )
}
