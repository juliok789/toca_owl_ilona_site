import './products.scss'
import Card from '../components/elements/card'
import {products} from '../products'
import { Link} from 'react-router-dom'
import { useSelector} from 'react-redux'



function Products () {
 
 
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
    <main className="main">
      <div className="container">
        <header className='header'>
          <h1 className="header__title">наша продукция</h1>
          <div className="header__basket basket-header">
            <p className="basket-header__desc"><span> {getTotal().totalQuantity} товара</span><br/>на сумму {getTotal().totalPrice} </p> 
            <Link to='/Cart'>
              <img src='images/header-basket.svg' alt=''></img>
            </Link>
          </div>
        </header>
        <div className="menu">
        
        {products.map(item => (
       
          <Card
            id={item.id}
            key={item.id}
            img={item.img}
            title={item.name}
            description={item.description}
            price={item.price}
            weight={item.weight}
          />

          
          
          )
        )}
          
        </div>
        
      </div>
    </main>
  );
}

export default Products;