import './cartitem.scss'
import {useDispatch} from 'react-redux'
import {removeItem} from '../../store/reducers/CartSlice'





function CartItem ({id,img,title, price, quantity=1}) {
const dispatch = useDispatch ()
  
       
    
  
    return (
        <div className="basket__body-cards cart-item">
            <img className="cart-item__preview"src={img} alt="" />

            <h2 className="cart-item__description-title">{title}</h2>
            <div className="cart-item__price">{price}</div>
            {/* <div className="cart-item__incrDec">
            <button className="cart-item__dec" onClick={() => dispatch(decrementQuantity(id))}>-</button>
            <p>{quantity}</p>
            <button className="cart-item__incr" onClick={() => dispatch(incrementQuantity(id))}>+</button>
            </div> */}
            <button  onClick={() => dispatch(removeItem(id))}
                className="cart-item__btn">+</button>
            
        </div>
    );
    
    
};

export default CartItem;