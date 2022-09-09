// import Card from "../components/elements/cards";

import BasketCard from "../components/elements/basketcards"
import {products} from '../products';
import './basket.scss';
import {Link} from 'react-router-dom'
function Basket() {
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
            {products.slice(0,3).map(key => {
            const{img, name,  price} = key
            return (
              <BasketCard
              img={img}
              title={name}
              price={price}
            />
            )
            })}
          </div>      
        </div>
        <footer className="basket__footer">
          <div className="basket__container">
            <div className="basket__footer-content">
            <div className="basket__footer-total total">
              <div className="total__title">Заказ на сумму:</div>
              <div className="total__sum">6 220</div>
            </div>
            <button className="basket__footer-btn">Оформить заказ</button>
            </div> 
          </div>
          </footer>
      </div>
    );
  } 
  export default Basket;
  