import Image from 'next/image'

interface Props {
  imageUrl: string
  fullName: string
}

export function Hero({ fullName, imageUrl }: Props) {
  const name = fullName.split(' ')[0]
  const surName = fullName.split(' ')[1]

  return (
    <div className="grid grid-cols-2 items-center gap-5">
      <div className="relative mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full ring-4 ring-zinc-600 sm:h-32 sm:w-32 md:h-40 md:w-40">
        <Image
          src={imageUrl}
          alt={`imagem de ${fullName}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="flex -translate-x-8 flex-col justify-center gap-3 font-serif text-3xl uppercase sm:text-6xl">
        <span>{name}</span>
        <span>{surName}</span>
      </h1>
    </div>
  )
}
