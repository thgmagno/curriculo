import { capitalizeStr } from '@/utils/capitalizeStr'
import { SkillType } from '../types/SkillType'

export function Skill({ title, level }: SkillType) {
  const iconClasses = {
    1: 'border-4 border-l-zinc-300  border-transparent',
    2: 'border-4 border-l-zinc-300 border-b-zinc-300 border-transparent',
    3: 'border-4 border-l-zinc-300 border-b-zinc-300 border-r-zinc-300 border-transparent',
    4: 'border-4 border-zinc-300',
  }

  return (
    <div className="flex items-center gap-2">
      <div className={`h-5 w-5 rounded-full ${iconClasses[level]}`} />
      <b>{capitalizeStr(title)}</b>
    </div>
  )
}
