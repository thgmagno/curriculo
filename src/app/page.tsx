import { fetchData } from '@/actions'
import { Container } from '@/components/Container'

export default async function Home() {
  const metadata = await fetchData().then((res) => res.object.metadata)

  return <Container metadata={metadata} />
}
