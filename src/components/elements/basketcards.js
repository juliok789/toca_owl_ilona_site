import './basketcards.scss'



function BasketCard ({id,img,title, price,handledelProduct }) {
 
    
  
    return (
        <div className="basket__body-cards basket-card">
            <img className="basket-card__preview"src={img} alt="" />
            <h2 className="basket-card__description-title">{title}</h2>
            <div className="basket-card__price">{price}</div>
            <button onClick={handledelProduct} className="basket-card__btn">+</button>
            
        </div>
    );
    
    
};

export default BasketCard;