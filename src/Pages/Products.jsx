import './products.scss'
import Card from '../components/elements/card'
import {products} from '../products'
import Header from '../components/elements/Header';
import CartCounter from '../components/elements/CartCounter'


function Products () {
  
  return (
    <main className="products">
      <div className="container">
        
        
        <Header Title= {'наша продукция'}>
        <CartCounter/>
        </Header>
        <div className="products-list">
          
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