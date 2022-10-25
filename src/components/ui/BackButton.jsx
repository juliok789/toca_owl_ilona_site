import './backButton.scss'
import {motion} from 'framer-motion'

const BackButton = ({handleClick}) => {
return (
    <motion.button 
    className="back-btn"
    onClick = {handleClick}
    animate={{ rotate: 360, scale: 1 }}
    
    
    >


    </motion.button>

    )}

export default BackButton