
import './card.scss'
import {useDispatch} from 'react-redux'
import {addProducts} from '../../store/reducers/basketSlice'
import {v4 as uuidv4} from 'uuid'


function Card ({img,title, description, price, weight}) {
    const dispatch = useDispatch ()
    const handleaddProducts = () => {
        let item = {
            id: uuidv4 (),
            img:img,
            title:title,
            price:price
        }

    dispatch (addProducts (item))}

    return (
        <div className="card">
            <img className="card__preview"src={img} alt="" />
            <div className="card__decription">
                <h2 className="card__description-title">{title}</h2>
                <p className="card__description-text">{description}</p>
            </div>
            
            <div className="card__info">
                <div className="card__info-desc card-info">
                    <div className="card-info__price">{price}</div>
                    <div className="card-info__weight">{weight}</div>
                </div>
                <button onClick={handleaddProducts} className="card__info-btn btn">+</button>
            </div>
        </div>
    );
    
    
};

export default Card;