import { fetchData } from '@/actions'
import { Container } from '@/components/Container'
import { Repository } from '@/lib/repository-types'

const fetcherRepositories = async (): Promise<Repository[]> =>
  fetch(`https://api.github.com/user/repos`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  }).then((res) => res.json())

export default async function Home() {
  const metadata = await fetchData().then((res) => res.object.metadata)
  const repos = await fetcherRepositories()

  return <Container metadata={metadata} repos={repos} />
}
