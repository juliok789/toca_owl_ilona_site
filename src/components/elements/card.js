
import './card.scss'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../store/reducers/CartSlice'
import { useNavigate } from 'react-router-dom'


function Card ({id,img,title, description, price, weight}) {
    const dispatch = useDispatch()
    const navigate = useNavigate ()
  
    return (
        
        <div  className="card" >
            <img onClick={() => navigate('/'+id) } className="card__preview"src={img} alt="" />
            <div onClick={() => navigate('/'+id) } className="card__decription">
                <h2 className="card__description-title">{title}</h2>
                <p className="card__description-text">{description}</p>
            </div>
            <div className="card__info">
                <div className="card__info-desc card-info">
                    <div className="card-info__price">{price}</div>
                    <div className="card-info__weight">{weight}</div>
                </div>
                <button onClick={() => 
                    dispatch (addToCart({id, title,description, img, price,weight}))}className="card__info-btn">+</button>
            </div>
        </div>
    );
};

export default Card;