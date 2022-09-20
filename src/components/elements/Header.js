import './header.scss'



function Header ({Title, back}) { 
    return (
        <header className='header'>
          
          <h1 className="header__title">{Title}</h1>
          
        </header>
    )}

export default Header