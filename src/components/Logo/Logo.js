import Link from 'next/link'
import Image from 'next/image'
import LogoPng from '/public/logo.png'

function Logo() {
  return (
    <div className={'logo'}>
      <Link href={'/'}>
        <a className={'logo-link'}>
          <Image
            className={'logo-image'}
            src={LogoPng}
            width={150}
            height={41}
            alt={'Logo'}
          />
        </a>
      </Link>
    </div>
  )
}

export default Logo