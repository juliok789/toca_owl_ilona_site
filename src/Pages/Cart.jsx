import CartItem from '../components/elements/CartItem'
import './cart.scss';
import {Link} from 'react-router-dom'
import { useSelector} from 'react-redux'
import Footer from '../components/elements/Footer'
import Header from '../components/elements/Header'
// import '../components/ui/buttons.scss'


function Cart () {
  const cart = useSelector((state) => state.cart.cart)
 
    return (
      <div className="cart">
        <div className="cart-container">
        <Link to='/'>
          <button className='back-arrow-btn'>&#8592;</button>
        </Link>
          <Header
          Title={'Корзина с выбранными товарами'}/>
          
          <ul className="cart__list">
            <li>
            {cart?.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                quantity={item.quantity} 
              />
              ))}
              </li>
          </ul>  
          
        </div>
        <Footer/>      
      </div>
    );
  } 
  export default Cart;
  