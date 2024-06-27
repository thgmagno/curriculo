interface Props {
  about: [string, string]
}

export function About({ about }: Props) {
  return (
    <div className="flex flex-col text-sm sm:flex-row">
      <h2 className="mb-2 w-1/4 font-bold uppercase">Sobre</h2>
      <div className="flex flex-col space-y-3 sm:w-3/4">
        {about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}
