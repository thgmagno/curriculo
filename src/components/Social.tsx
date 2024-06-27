import Image from 'next/image'
import Link from 'next/link'

export function Social() {
  return (
    <div className="flex text-sm">
      <h2 className="w-1/4 font-bold uppercase">Social</h2>
      <div className="w-3/4">
        <div className="mb-5 mr-5 flex">
          <div className="flex flex-1 flex-col">
            <b>Github</b>
            <Link
              href="https://github.com/thgmagno"
              className="hover:underline"
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
        <div className="mb-5 mr-5 flex">
          <div className="flex flex-1 flex-col">
            <b>Linkedin</b>
            <Link
              href="https://www.linkedin.com/in/thgmagno"
              className="hover:underline"
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
        <div className="mb-5 mr-5 flex">
          <div className="flex flex-1 flex-col">
            <b>Portfólio</b>
            <Link
              href="https://portfolio-six-tan-13.vercel.app"
              className="hover:underline"
            >
              https://portfolio-six-tan-13.vercel.app
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
