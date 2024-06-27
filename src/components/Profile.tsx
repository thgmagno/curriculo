export function Profile() {
  return (
    <div className="flex flex-col text-sm sm:flex-row">
      <h2 className="mb-2 w-1/4 font-bold uppercase">Interesses</h2>
      <div className="sm:w-3/4">
        <ul className="flex flex-col space-y-1.5">
          <li>
            <b>Desenvolvimento Front-end:</b>{' '}
            <em>
              Criação de interfaces responsivas e otimizadas, garantindo
              compatibilidade entre dispositivos.
            </em>
          </li>
          <li>
            <b>Desenvolvimento Back-end:</b>{' '}
            <em>
              Implementação de sistemas robustos e escaláveis, com foco em
              segurança e performance.
            </em>
          </li>
          <li>
            <b>Integração de APIs:</b>{' '}
            <em>
              Conexão de serviços e dados de diversas fontes para fornecer
              funcionalidade avançadas.
            </em>
          </li>
          <li>
            <b>UX/UI Design:</b>{' '}
            <em>
              Aplicação de princípios de design para melhorar a interação do
              usuário e a estética visual.
            </em>
          </li>
        </ul>
      </div>
    </div>
  )
}
