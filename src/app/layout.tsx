import type { Metadata } from 'next'
import { Bai_Jamjuree as Baijamjuree } from 'next/font/google'
import './globals.css'

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
      <body className={baijamjuree.className}>{children}</body>
    </html>
  )
}
