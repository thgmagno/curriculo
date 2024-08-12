'use client'

import { Metadata } from '@/lib/cosmic-types'
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { ButtonPrint } from './ButtonPrint'
import { Header } from './Header'
import { Hero } from './Hero'
import { Profile } from './Profile'
import { Education } from './Education'
import { Language } from './Language'
import { About } from './About'
import { Skills } from './Skills'
import { Social } from './Social'

export function Container({ metadata }: { metadata: Metadata }) {
  const contentDocument = useRef<HTMLDivElement | null>(null)

  const handlePrint = useReactToPrint({
    content: () => contentDocument.current,
  })

  return (
    <>
      <ButtonPrint handlePrint={handlePrint} />
      <div
        ref={contentDocument}
        className="m-5 mx-auto w-[96%] max-w-2xl space-y-10 rounded-2xl border-2 bg-stone-200 p-5 text-zinc-600"
      >
        <Header
          occupationArea={metadata.home['occupation-area'].portuguese}
          info={{
            address: 'Biguaçu-SC, Brasil',
            email: 'thgmgn@gmail.com',
            phone: '(48) 99180-8906',
          }}
        />
        <Hero
          fullName={metadata.home.fullname}
          imageUrl={metadata.home['image-profile'].url}
        />
        <About
          about={[
            metadata.home['about-me'].portuguese.data[0],
            metadata.home['about-me'].portuguese.data[1],
          ]}
        />
        <Profile />
        <Skills />
        <Education education={metadata.education} />
        <Language />
        <Social />
      </div>
    </>
  )
}
