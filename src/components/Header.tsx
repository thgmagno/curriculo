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
    <header className="flex items-center justify-between">
      <b>{occupationArea}</b>
      <section className="text-end">
        <p>{info.address}</p>
        <p>{info.email}</p>
        <p>{info.phone}</p>
      </section>
    </header>
  )
}
