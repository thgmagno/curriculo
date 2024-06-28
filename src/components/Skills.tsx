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
    <div className="flex flex-col text-sm sm:flex-row">
      <h2 className="mb-2 w-1/4 font-bold uppercase">Habilidades</h2>
      <div className="grid grid-cols-3 gap-2 text-xs sm:w-3/4 sm:text-sm md:text-base">
        <Item
          imageSrc="/icons/node.svg"
          label="Node"
          href="https://nodejs.org/"
        />
        <Item
          imageSrc="/icons/react.svg"
          label="React"
          href="https://react.dev/"
        />
        <Item
          imageSrc="/icons/next.svg"
          label="Next.JS"
          href="https://nextjs.org/"
        />
        <Item
          imageSrc="/icons/typescript.svg"
          label="Typescript"
          href="https://www.typescriptlang.org/"
        />
        <Item
          imageSrc="/icons/sql.svg"
          label="SQL"
          href="https://www.postgresql.org/"
        />
        <Item
          imageSrc="/icons/prisma.svg"
          label="Prisma"
          href="https://www.prisma.io/"
        />
        <Item
          imageSrc="/icons/api.svg"
          label="API Rest"
          href="https://www.w3schools.in/restful-web-services/intro#google_vignette"
        />
        <Item
          imageSrc="/icons/tailwind.svg"
          label="Tailwind"
          href="https://tailwindcss.com/"
        />
        <Item
          imageSrc="/icons/html.svg"
          label="HTML/CSS/JS"
          href="https://www.w3schools.com/html/"
        />
      </div>
    </div>
  )
}
