import './products.scss'
import Card from '../components/elements/cards'
import {products} from '../products'
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'





function Products () {
  // const dispatch = useDispatch ()
  // const handleaddProducts = (item) => {

  // dispatch (addProducts (item))}
  const totalPrice = useSelector(state=>state.basket.totalPrice)
  const quantity = useSelector(state=>state.basket.quantity)
  return (
    <main className="main">
      <div className="container">
        <header className='header'>
          <h1 className="header__title">наша продукция</h1>
          <div className="header__basket basket-header">
            <p className="basket-header__desc"><span>{quantity} товара</span><br/>на сумму {totalPrice}  </p> 
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