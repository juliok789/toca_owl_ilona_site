import '../elements/productItem.scss'
import { useDispatch} from 'react-redux'
import {addToCart} from '../../store/reducers/CartSlice'


function ProductItem ({id,img,title,description,price,weight}) {
    const dispatch = useDispatch ()
    return (
        <div className="product-item"> 
            <img className="product-item__preview"src={img} alt="" />
            <div className="product-item__description">  
                <h2 className="product-item__description-title">{title}</h2>
                <p className="product-item__description-text">{description}</p>
                <div className="product-item__description-item item">
                    <div className="item__price">{price}₽</div>
                    <div className="item__weight">/{weight}</div>
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