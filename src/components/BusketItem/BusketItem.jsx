import { useContext } from 'react';
import { ShopContext } from '../../context';
import './busketItem.css'

const BusketItem = (props) => {
    const {
        mainId,
        displayName,
        price,
        quantity
    } = props;

    const { removeFromBusket, decQuantity, incQuantity } = useContext(ShopContext);


    return (
        <li className="collection-item">
            {displayName} x <i
                className="material-icons busket-quantity"
                onClick={() => decQuantity(mainId)}
            >remove</i> {quantity} <i className="material-icons busket-quantity" onClick={() => incQuantity(mainId)}>add</i> = {price * quantity} руб.
            <span className="secondary-content">
                <i
                    onClick={() => removeFromBusket(mainId)}
                    className="material-icons busket-delete"
                >close</i>
            </span>
        </li>
    );
}

export default BusketItem;