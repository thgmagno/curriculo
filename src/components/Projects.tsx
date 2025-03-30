import { Repository } from '@/lib/repository-types'
import Link from 'next/link'

export async function Projects({ repos }: { repos: Repository[] }) {
  const generateTitle = (name: string) =>
    name.replaceAll('-', ' ').replaceAll('_', ' ')

  return (
    <div className="flex flex-col text-sm sm:flex-row">
      <h2 className="mb-2 w-1/4 font-bold uppercase">Projetos recentes</h2>
      <div className="sm:w-3/4">
        <ul className="flex flex-col space-y-1.5">
          {repos
            .slice(0, 5)
            .sort(
              (a, b) =>
                new Date(b.updated_at).getTime() -
                new Date(a.updated_at).getTime(),
            )
            .map((repo) => (
              <li
                key={repo.id}
                className="mb-2 border-b border-neutral-400 pb-2 last:border-none"
              >
                <em>
                  <strong className="capitalize">
                    <Link href={repo.html_url} target="_blank">
                      {generateTitle(repo.name)}
                    </Link>
                  </strong>
                  : {repo.description || 'Sem descrição'}
                  <ul className="list-inside list-disc">
                    <li>
                      <span className="font-medium">
                        Linguagem de programação
                      </span>
                      : {repo.language}
                    </li>
                    <li>
                      <span className="font-medium">Data de criação</span>:{' '}
                      {new Date(repo.created_at).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </li>
                    <li>
                      <span className="font-medium">Última atualização</span>:{' '}
                      {new Date(repo.updated_at).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </li>
                    <li>
                      <span className="font-medium">Repositório</span>:{' '}
                      <Link href={repo.html_url} target="_blank">
                        {repo.html_url}
                      </Link>
                    </li>
                    <li>
                      <span className="font-medium">Deploy</span>:{' '}
                      {repo.homepage ? (
                        <Link href={repo.homepage} target="_blank">
                          {repo.homepage}
                        </Link>
                      ) : (
                        'Sem deploy'
                      )}
                    </li>
                  </ul>
                </em>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
