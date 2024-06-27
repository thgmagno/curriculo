interface Props {
  about: [string, string]
}

export function About({ about }: Props) {
  return (
    <div className="flex text-sm">
      <h2 className="w-1/4 font-bold uppercase">Sobre</h2>
      <div className="flex w-3/4 flex-col space-y-3">
        {about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}
