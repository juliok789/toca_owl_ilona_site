import './header.scss'
import LogOutBtn from '../ui/LogOutBtn';



function Header ({Title, backbtn}) { 
    return (
        <header className='header'>
          
          <h1 className="header__title">{Title}</h1>
          <LogOutBtn/>
        </header>
    )}

export default Header