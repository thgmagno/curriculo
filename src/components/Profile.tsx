import Image from 'next/image'

interface Props {
  imgSrc: string
  firstName: string
  lastName: string
}

export function Profile({ imgSrc, firstName, lastName }: Props) {
  return (
    <div className="flex justify-between">
      <Image src={imgSrc} height={200} width={200} alt="Imagem do usuário" />
      <h1 className="text-3xl">
        {firstName} {lastName}
      </h1>
    </div>
  )
}
