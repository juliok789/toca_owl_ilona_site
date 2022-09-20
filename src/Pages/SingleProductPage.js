

import {useNavigate, useParams} from 'react-router-dom'
import './singleProductPage.scss'
import ProductItem from '../components/elements/ProductItem'
import {products} from '../products'
import CartCounter from '../components/elements/CartCounter'
import Header from '../components/elements/Header'

function SingleProductPage() {
  
  const navigate = useNavigate ()


  const params = useParams () 
  const id = params.id
  let item = products.find((item)=>item.id === id)
  
    return (
      <div className="productPage">
        <div className="container">
          <Header/>
          <button className='transp-rect-button'>Выйти</button>
          <button onClick = {()=>navigate(-1)}className='back-arrow-btn'>&#8592;</button>
          <CartCounter/>
          
        <div className="productPage__item"> 
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
      </div>
    );
  }
  
  export default SingleProductPage;