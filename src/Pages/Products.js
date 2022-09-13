import './products.scss'
import Card from '../components/elements/cards'
import {products} from '../products'
import { Link } from 'react-router-dom'



function Products () {

  
  // const [count, setCount] = useState (0)

  // const addProduct = () => {
  //   setCount(count+1)
  // }
  // const [sum, setSum] = useState (0)

  // const addSum = (price) => {
  //   setSum (sum+price)
  // }

  return (
    <main className="main">
      <div className="container">
        <header className='header'>
          <h1 className="header__title">наша продукция</h1>
          <div className="header__basket basket-header">
            <p className="basket-header__desc"><span>  товара</span><br/>на сумму   </p>
            
            <Link to='/Basket'>
              <img src='images/header-basket.svg' alt=''></img>
            </Link>

          </div>
        </header>

        <div className="menu">
        {products.map(item => <Card
            key={item.id}
            img={item.img}
            title={item.name}
            description={item.description}
            price={item.price}
            weight={item.weight}
            
          />
          )}
        </div>
        
      </div>
    </main>
  );
}

export default Products;