export function Language() {
  return (
    <div className="flex flex-col text-sm sm:flex-row">
      <h2 className="mb-2 w-1/4 font-bold uppercase">Idiomas</h2>
      <div className="w-3/4">
        <div className="grid sm:grid-cols-2">
          <span>
            <b>Portugês:</b> <em>Nativo</em>
          </span>
          <span>
            <b>Inglês:</b> <em>Intermediário</em>
          </span>
        </div>
      </div>
    </div>
  )
}
