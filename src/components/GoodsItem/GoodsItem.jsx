import './goodsItem.css';

const GoodsItem = (props) => {
    const {
        mainId,
        displayName,
        displayDescription,
        addToBusket
    } = props;

    const price = props.price.regularPrice;

    return (
        <div className="card" id={mainId}>
            <div className="card-image">
                <img src={props.displayAssets[0].background} alt="image" />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button
                    onClick={() => addToBusket({
                        mainId,
                        displayName,
                        price
                    })}
                    className="btn"
                >Купить</button>
                <span className="right flow-text">{price} руб.</span>
            </div>
        </div>
    );
}

export default GoodsItem;