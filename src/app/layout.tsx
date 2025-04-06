import type { Metadata } from 'next'
import { Bai_Jamjuree as Baijamjuree } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const baijamjuree = Baijamjuree({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Thiago Magno',
  description: 'Conheça meu portfólio através deste site moderno e responsivo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={baijamjuree.className}>
        <Providers
          ipInfoToken={process.env.IPINFO_TOKEN!}
          appToken={process.env.APP_TOKEN!}
          appName={process.env.APP_NAME!}
          appApiUrl={process.env.APP_API_URL!}
        >
          {children}
        </Providers>
      </body>
    </html>
  )
}
