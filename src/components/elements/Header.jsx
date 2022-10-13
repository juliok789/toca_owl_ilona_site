import './header.scss'
import LogOutBtn from '../ui/LogOutBtn';



function Header ({Title, children}) { 
    return (
        <header className='header'>
          
          <h1 className="header__title">{Title}</h1>
          <div className='header__wrap'>
            {children}
            <LogOutBtn/>
            
          </div>
        </header>
    )}

export default Header