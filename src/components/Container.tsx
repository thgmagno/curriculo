'use client'

import { SkillType } from '@/types/SkillType'
import { Education } from './Education'
import { Header } from './Header'
import { InfoProfile } from './InfoProfile'
import { Languages } from './Languages'
import { Profile } from './Profile'
import dataProfile from '@/data/dataProfile.json'
import html2canvas from 'html2canvas'
import { jsPDF as JsPDF } from 'jspdf'
import { useRef, useState } from 'react'

export function Container() {
  const { wantedJobTitle, country, city, state, email, phone } =
    dataProfile.header
  const { imgSrc, firstName, lastName } = dataProfile.profile
  const { summary, skills } = dataProfile.infoProfile
  const education = dataProfile.education
  const languages = dataProfile.languages

  const containerRef = useRef<HTMLDivElement | null>(null)
  const [downloaded, setDownloaded] = useState(false)

  const Hr = () => <div className="border-b border-zinc-600" />

  const handleDownloadPDF = async () => {
    const element = containerRef.current
    const canvas = await html2canvas(element as HTMLDivElement)
    const imgData = canvas.toDataURL('image/png')
    const pdf = new JsPDF()
    const imgWidth = 210
    const pageHeight = 295
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    let heightLeft = imgHeight
    let position = 0

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    pdf.save('Thiago_magno.pdf')
    setDownloaded(true)
  }

  return (
    <>
      <div
        ref={containerRef}
        className="a4-container flex flex-col space-y-4 rounded-lg border border-zinc-600 bg-neutral-900 shadow-md"
      >
        <Header
          wantedJobTitle={wantedJobTitle}
          country={country}
          city={city}
          state={state}
          email={email}
          phone={phone}
        />
        <Hr />
        <Profile imgSrc={imgSrc} firstName={firstName} lastName={lastName} />
        <Hr />
        <InfoProfile summary={summary} skills={skills as SkillType[]} />
        <Hr />
        <Education education={education} />
        <Hr />
        <Languages languages={languages as SkillType[]} />
      </div>
      {!downloaded && (
        <button
          onClick={handleDownloadPDF}
          className="fixed bottom-5 right-5 mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Baixar em PDF
        </button>
      )}
      {downloaded && (
        <p className="fixed bottom-5 right-5 cursor-default rounded bg-emerald-600 px-4 py-2 font-bold text-white">
          O PDF foi baixado!
        </p>
      )}
    </>
  )
}
