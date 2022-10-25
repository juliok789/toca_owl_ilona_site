import './home.scss'
import { motion } from 'framer-motion';
import Header from '../components/elements/Header';
import Footer from '../components/elements/Footer';
 


function Home () {
  
  return (
    <div className="homePage">
      <div className="container">
          <Header/>
          <div className="homePage__content">
          <motion.h1 className="homePage__title"
          whileHover={{
            scale: 1.5,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          
          
          >
            toca_owl2022</motion.h1>
            </div>
        <Footer/>

      </div>

    </div>
    
  );
}

export default Home;