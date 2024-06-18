import Image from 'next/image'
import { ProfileType } from '../types/UserProfileType'

export function Profile({ imgSrc, firstName, lastName }: ProfileType) {
  return (
    <div className="flex justify-between p-5">
      <div className="mx-10 flex rounded-full border-4 border-zinc-300 shadow-md">
        <Image
          src={imgSrc}
          height={200}
          width={200}
          alt="Imagem do usuário"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center space-y-2 font-serif text-7xl font-medium tracking-widest">
        <span>{firstName.toUpperCase()}</span>
        <span>{lastName.toUpperCase()}</span>
      </div>
    </div>
  )
}
