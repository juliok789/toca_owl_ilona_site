import './card.css'


function Card ({url,title, description, price, weight}) {
    return (
        <div className="card">
            <img className="card__preview"src={url} alt="" />
            <div className="card__decription">
                <h2 className="card__title">{title}</h2>
                <p className="card__text-desc">{description}</p>
            </div>
            
            <div className="card__order order-card">
                <div className="order-card__value">
                <div className="order-card__price">{price}</div>
                <div className="order-card__weight">{weight}</div>
                </div>
                <svg className = "order-card__img" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="14.5" stroke="none"/>
                <path d="M15 9.28564V20.3571" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <path d="M20.3569 14.8214L9.28551 14.8213" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
        </div>
    );
};

export default Card;