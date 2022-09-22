import { Link} from 'react-router-dom'
import { useSelector} from 'react-redux'
import './CartCounter.scss'

function CartCounter () {

    const cart = useSelector((state) => state.cart.cart)
    const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
  return (
    <div className="cart-counter">
        <p className="cart-counter__text"><span> {getTotal().totalQuantity} товара</span><br/>на сумму {getTotal().totalPrice}₽</p> 
        <Link to='/Cart'>
            <img src='images/header-basket.svg' alt=''></img>
        </Link>
  </div>
)}

export default CartCounter