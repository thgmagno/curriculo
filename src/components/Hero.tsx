import Image from 'next/image'

interface Props {
  imageUrl: string
  fullName: string
}

export function Hero({ fullName, imageUrl }: Props) {
  const name = fullName.split(' ')[0]
  const surName = fullName.split(' ')[1]

  return (
    <div className="mx-auto flex justify-between gap-5">
      <div className="flex flex-1 items-center justify-center">
        <Image
          src={imageUrl}
          height={150}
          width={150}
          alt={`imagem de ${fullName}`}
          className="rounded-full ring-4 ring-zinc-600"
        />
      </div>
      <h1 className="flex flex-1 -translate-x-10 flex-col justify-center gap-3 text-6xl uppercase">
        <span>{name}</span>
        <span>{surName}</span>
      </h1>
    </div>
  )
}
