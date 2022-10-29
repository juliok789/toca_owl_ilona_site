import './burger.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const BurgerMenu = () => {
return (
  <label>
    <input type="checkbox"/>
      <span className='menu'><span className="hamburger"></span></span>
      <ul className="menu__box">
      <Link to='/'>
        <motion.li className='menu__nav-link'
                whileHover={{
                  scale: 1.5,
                  transition: { duration: 1 },
                  color: "#000"
                }}
                whileTap={{ scale: 0.9 }}>
                  Главная</motion.li>
      </Link>
      <Link to='/Rules'>
        <motion.li className='menu__nav-link'
        whileHover={{
          scale: 1.5,
          transition: { duration: 1 },
          color: "#000"
        }}
        whileTap={{ scale: 0.9 }}>
          Правила</motion.li>
      </Link>
      </ul>
  </label>
    
    )}

    export default BurgerMenu




    // <div className="burger-menu">
    //     <input id="menu__toggle" type="checkbox" />
    //     <label className="menu__btn" for="menu__toggle">
    //         <span></span>
    //     </label>
    //         <ul className="menu__box">
    //         <Link to='/'>
    //           <li className='menu__nav-link'>Главная</li>
    //         </Link>
    //         <Link to='/Rules'>
    //           <li className='menu__nav-link'>Правила</li>
    //         </Link>
    //         </ul>
    // </div>