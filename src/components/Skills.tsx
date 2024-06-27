import Image from 'next/image'
import Link from 'next/link'

export function Skills() {
  const Item = ({
    imageSrc,
    label,
    href,
  }: {
    imageSrc: string
    label: string
    href: string
  }) => (
    <Link href={href} className="flex gap-1 hover:underline">
      <Image src={imageSrc} width={20} height={20} alt={`Logotipo ${label}`} />
      <b>{label}</b>
    </Link>
  )

  return (
    <div className="flex text-sm">
      <h2 className="w-1/4 font-bold uppercase">Habilidades</h2>
      <div className="grid w-3/4 grid-cols-3 gap-2">
        <Item imageSrc="/icons/node.svg" label="Node" href="#" />
        <Item imageSrc="/icons/react.svg" label="React" href="#" />
        <Item imageSrc="/icons/next.svg" label="Next.JS" href="#" />
        <Item imageSrc="/icons/typescript.svg" label="Typescript" href="#" />
        <Item imageSrc="/icons/sql.svg" label="SQL" href="#" />
        <Item imageSrc="/icons/prisma.svg" label="Prisma" href="#" />
        <Item imageSrc="/icons/api.svg" label="API Rest" href="#" />
        <Item imageSrc="/icons/tailwind.svg" label="Tailwind" href="#" />
        <Item imageSrc="/icons/html.svg" label="HTML/CSS/JS" href="#" />
      </div>
    </div>
  )
}
