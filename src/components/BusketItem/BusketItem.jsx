import './busketItem.css'

const BusketItem = (props) => {
    const {
        mainId,
        displayName,
        price,
        quantity
    } = props;
    return (
        <li className="collection-item">
            {displayName} x {quantity} = {price * quantity}
            <span className="secondary-content">
                <i className="material-icons busket-delete">close</i>
            </span>
        </li>
    );
}

export default BusketItem;