import './rulesPage.scss'
import {rules} from '../rules'
import Header from '../components/elements/Header';
import BackButton from '../components/ui/BackButton';
import {Link, useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import Footer from '../components/elements/Footer';



function Rules () {
  const navigate = useNavigate ()
  const variants = {
    visible: i =>({ 
      opacity: 1,
      y: 0,
      transition:{
        delay: i * 0.5,}
  }),
    hidden: { opacity: 0, y: 100}
}
  return (
    <div className="rulesPage">
      <div className="container">
       <Header>
        <BackButton
        handleClick={()=>navigate(-1)}/>
       </Header>
       
        <h1 className="rulesPage__title">Правила Toca </h1>
        <ul className="rulesPage__list">
        {
            rules.map(rule => 
                <Link key={rule.id} to={`/Rules/${rule.id}`}>
                <motion.li className="rulesPage__item"
                initial= 'hidden'
                animate= 'visible'
                variants={variants}
                custom={rule.id}
                >
                  {rule.title}</motion.li>
                </Link>
                )
        }
        </ul>
        <Footer/>
      </div>

    </div>
    
  );
}

export default Rules;