interface Props {
  occupationArea: string
  info: {
    address: string
    email: string
    phone: string
  }
}

export function Header({ occupationArea, info }: Props) {
  return (
    <header className="flex items-center justify-between text-sm md:text-base">
      <b>{occupationArea}</b>
      <section className="text-end text-xs sm:text-sm md:text-base">
        <p>{info.address}</p>
        <p>{info.email}</p>
        <p>{info.phone}</p>
      </section>
    </header>
  )
}
