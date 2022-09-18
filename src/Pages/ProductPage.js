
import { useSelector} from 'react-redux'
import {useNavigate, Link, useParams} from 'react-router-dom'
import './productpage.scss'
import ProductItem from '../components/elements/ProductItem'
import {products} from '../products'





function ProductPage() {
  const params = useParams () 
  const id = params.id
  let item = products.find((item)=>item.id === id)
  
  
  const navigate = useNavigate ()
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
      <main className="product">
        <div className="container">
          <header className='product__header header'>
            
            <img onClick = {()=>navigate(-1)} src='images/arrow.svg' alt=''/>
            
            <div className="header__basket basket-header">
              <p className="basket-header__desc"><span>{getTotal().totalQuantity} товара</span><br/>на сумму {getTotal().totalPrice}  </p> 
              <Link to='/Cart'>
                <img src='images/header-basket.svg' alt=''></img>
            </Link>
            </div>
          </header>
          <div className="product__body">
          
       
            <ProductItem
              id={item.id}
              key={item.id}
              img={item.img}
              title={item.name}
              description={item.description}
              price={item.price}
              weight={item.weight}
            />

           
          </div>
        </div>
      </main>
    );
  }
  
  export default ProductPage;