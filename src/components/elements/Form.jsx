import {useState} from 'react';
import {Link} from 'react-router-dom'
import "./Form.scss"

const Form = ({title, handleClick, link, linkTitle,button }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className='form'>
            <Link to={link} className='form__link'>{linkTitle}</Link>
            <h1 className='form__title'>{title}</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Логин"
            />
            
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Пароль"
            />
           

            <input 
                type="radio"
                className = "radiobtn"
                id="subscribe"
            />
            <label htmlFor="subscribe">Я согласен получать обновления на почту</label>
         
            <button
                onClick={() => handleClick(email, pass)}
                className ="form__button orange-rect-button"
            >
                {button}
            </button>
        </div>
    )
}

export default Form