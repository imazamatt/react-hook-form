import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <header className={'header'}>
      <div className={'container'}>
        <div className={'header-content'}>
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
