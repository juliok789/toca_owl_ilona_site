import './header.scss'
import {Link} from 'react-router-dom'





function Header ({children}) { 
    return (
        <header className='header'>
          
          {children}
          <nav className='header__nav'>
            
            <Link to='/'>
              <li className='header__nav-link'>Главная</li>
            </Link>
            <Link to='/Rules'>
              <li className='header__nav-link'>Правила</li>
            </Link>
          </nav>
        </header>
    )}

export default Header