import './product-item.scss'
import { useDispatch} from 'react-redux'
import {addToCart} from '../../store/reducers/CartSlice'
import {products} from '../../products'
import {useParams} from 'react-router-dom'

function ProductItem ({img,title,description,price,weight}) {
    const dispatch = useDispatch ()
    
    const params = useParams () 
    const id = params.id
    const item = products.find((item) => item.id === id)
    
    

    return (
        <div className="product-item"> 
            <img className="product-item__preview"src={item.img} alt="" />
            <div className="product-item__description">
                
                <h2 className="product-item__description-title">{item.name}</h2>
                <p className="product-item__description-text">{item.description}</p>
                 
                <div className="product-item__description-item item">
                    
                    <div className="item__price">{item.price}₽</div>
                    <div className="item__weight">/{item.weight}</div>
                    
                    <button onClick={() => 
                    dispatch (addToCart({
                    id, title,description, img, price, weight
                    }))} className="item__btn">В корзину</button>
                </div>
            </div>
        </div>
    );
    
}

export default ProductItem;