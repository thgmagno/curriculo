export function Qualifications() {
  return (
    <div className="flex flex-col text-sm sm:flex-row">
      <h2 className="mb-2 w-1/4 font-bold uppercase">Qualificações</h2>
      <div className="sm:w-3/4">
        <div>
          <ul className="flex flex-col space-y-1.5">
            <li>
              <em>
                <b>Implementação de funcionalidades</b> (ex.: implantação de
                formulários, anexo de documentos, etc.)
              </em>
            </li>
            <li>
              <em>
                <b>Correção de bugs</b> (ex.: problemas com cadastro,
                duplicidade de dados)
              </em>
            </li>
            <li>
              <em>
                <b>Customização de grids e relatórios</b>
              </em>
            </li>
            <li>
              <em>
                <b>Parametrização e documentação</b> (ex.: Criação de
                documentação API)
              </em>
            </li>
            <li>
              <em>
                <b>Desenvolvimento de telas, layouts e interfaces</b>
              </em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
