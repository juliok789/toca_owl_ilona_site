import './footer.scss'
import { useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
function Footer () {
    const cart = useSelector((state) => state.cart.cart)
    const getTotal = () => {
  
      let totalPrice = 0
      cart.forEach(item => {
  
        totalPrice += item.price * item.quantity
      })
      return {totalPrice}
    }
    return (

      <footer className="footer-wrap">
        <div className="cart-container">
          <div className="footer">
                <div className="footer__cart-total cart-total">
                    <p className="cart-total__text">Заказ на сумму:
                    <span className="cart-total__amount"> {getTotal().totalPrice}₽</span></p>
                </div>
                <Link to='/LoginPage'> 
                  <button className="footer__btn orange-rect-button">Оформить заказ</button>
                </Link>
          </div>
        </div>
      </footer>
    )}

    export default Footer