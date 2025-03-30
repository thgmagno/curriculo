import Image from 'next/image'
import Link from 'next/link'

export function Social() {
  return (
    <div className="flex flex-col text-sm sm:flex-row">
      <h2 className="mb-2 w-1/4 font-bold uppercase">Social</h2>
      <div className="sm:w-3/4">
        <div className="mb-5 mr-5 flex w-full justify-between">
          <div className="flex flex-col truncate sm:flex-1">
            <b>Github</b>
            <Link
              target="_blank"
              href="https://github.com/thgmagno"
              className="mr-5 max-w-sm truncate"
            >
              https://github.com/thgmagno
            </Link>
          </div>
          <Image
            src="/qrcode/github.svg"
            height={100}
            width={100}
            alt="QRCode Github"
          />
        </div>
        <div className="mb-5 mr-5 flex w-full justify-between">
          <div className="flex flex-col truncate sm:flex-1">
            <b>Linkedin</b>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/thgmagno"
              className="mr-5 max-w-sm truncate"
            >
              https://www.linkedin.com/in/thgmagno
            </Link>
          </div>
          <Image
            src="/qrcode/linkedin.svg"
            height={100}
            width={100}
            alt="QRCode Linkedin"
          />
        </div>
        <div className="mb-5 mr-5 flex w-full justify-between">
          <div className="flex flex-col truncate sm:flex-1">
            <b>Portfólio</b>
            <Link
              target="_blank"
              href="https://thgmagno.vercel.app/"
              className="mr-5 max-w-sm truncate"
            >
              https://thgmagno.vercel.app/
            </Link>
          </div>
          <Image
            src="/qrcode/portfolio.svg"
            height={100}
            width={100}
            alt="QRCode Portfólio"
          />
        </div>
      </div>
    </div>
  )
}
