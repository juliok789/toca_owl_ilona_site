import Card from './components/elements/cards';
import { products } from './products';
import './Basket.css';




function App() {
  return (
    <div className="basket">
      <div className="container">
        <header className="basket__header">
          <h1 className="basket__title">Корзина с выбранными товарами</h1>
        </header>
        <div className="basket__body">
        {products.slice(0,3).map(key => {
          const{img, name,  price} = key
          return (
            <Card
            img={img}
            title={name}
            price={price}
           
          />
          )
          })
  }
        
        
          
  

        </div>
      </div>
      <footer className="basket__footer">
        <div className="container">
          <div className="basket__footer-content">
          <div className="basket__footer-total total">
            <div className="total__title">Заказ на сумму:</div>
            <div className="total__sum">6 220 ₽</div>
          </div>
          <button className="basket__footer-btn">Оформить заказ</button>
          </div>
          
        </div>
        </footer>

    </div>

    
  );
}

export default App;
