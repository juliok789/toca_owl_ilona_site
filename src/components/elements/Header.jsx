import './header.scss'
import BurgerMenu from './BurgerMenu'





function Header ({children}) { 
    return (
        <header className='header'>
          <div className="header__children">
          {children}
          </div>
          <div className="header__burger">
          <BurgerMenu/>
          </div>
        </header>
    )}

export default Header

