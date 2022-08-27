import './card.css'


function Card ({img,title, description, price, weight}) {
    return (
        <div className="card">
            <img className="card__preview"src={img} alt="" />
            <div className="card__decription">
                <h2 className="card__title">{title}</h2>
                <p className="card__text-desc">{description}</p>
            </div>
            
            <div className="card__order order-card">
                <div className="order-card__value">
                <div className="order-card__price">{price}</div>
                <div className="order-card__weight">{weight}</div>
                </div>
               <button className="order-card__btn">+</button>
            </div>
        </div>
    );
};

export default Card;