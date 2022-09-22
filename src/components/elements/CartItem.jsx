import './cartitem.scss'
import {useDispatch} from 'react-redux'
import {removeItem,decrementQuantity,incrementQuantity } from '../../store/reducers/CartSlice'
import {useNavigate} from 'react-router-dom'

function CartItem ({id,img,title, price, quantity=0}) {
const dispatch = useDispatch ()
const navigate = useNavigate ()
  
  
    return (
        <div className="cart-item">
            <img onClick={() => navigate('/'+id) }className="cart-item__preview"src={img} alt="" />
            <h2 onClick={() => navigate('/'+id) }className="cart-item__description-title">{title}</h2>
            <div className="cart-item__price">{price}</div>
            <div className="cart-item__incrDec">
                <button className="cart-item__dec" onClick={() => dispatch(decrementQuantity(id))}>-</button>
                <p>{quantity}</p>
                <button className="cart-item__incr" onClick={() => dispatch(incrementQuantity(id))}>+</button>
            </div>
            <button onClick={() => dispatch(removeItem(id))}
                className="cart-item__remove">+</button>
        </div>
    );
    
    
};

export default CartItem;