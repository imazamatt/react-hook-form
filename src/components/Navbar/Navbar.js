import Link from 'next/link'

function Navbar() {
  return (
    <nav className={'nav'}>
      <ul>
        <li>
          <Link href={'/register'}>
            <a>Sign&nbsp;Up</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar