import CartItem from '../components/elements/CartItem'
import './cart.scss';
import {Link} from 'react-router-dom'
import { useSelector} from 'react-redux'



function Cart () {

  const cart = useSelector((state) => state.cart.cart)
  const getTotal = () => {

    let totalPrice = 0
    cart.forEach(item => {

      totalPrice += item.price * item.quantity
    })
    return {totalPrice}
  }





    return (
      <div className="basket">
        <div className="basket__container">
          <header className="basket__header">
          <Link to='/' className="basket__header-arrow">
            <img src='images/arrow.svg' alt=''></img>
            </Link>
            <h1 className="basket__header-title">Корзина с выбранными товарами</h1>
          </header>
          <div className="basket__body">
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price} 
          
            />
    ))}
          </div>      
        </div>
        <footer className="basket__footer">
          <div className="basket__container">
            <div className="basket__footer-content">
            <div className="basket__footer-total total">
              <div className="total__title">Заказ на сумму:</div>
              <div className="total__sum">{getTotal().totalPrice}</div>
            </div>
            <button className="basket__footer-btn">Оформить заказ</button>
            </div> 
          </div>
          </footer>
      </div>
    );
  } 
  export default Cart;
  