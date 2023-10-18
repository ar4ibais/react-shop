import BusketItem from "../BusketItem/BusketItem";
import './busketList.css';

const BusketList = (props) => {

    const { order = [],
        handleBusketShow = Function.prototype,
        removeFromBusket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype
    } = props;

    const totalPrice = order.reduce((summ, accum) => {
        return summ + accum.price * accum.quantity
    }, 0);

    return (
        <ul className="collection busket-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item => (
                    <BusketItem
                        key={item.mainId}
                        removeFromBusket={removeFromBusket}
                        decQuantity={decQuantity}
                        incQuantity={incQuantity}
                        {...item}
                    />
                )) : <li className="collection-item">Корзина пуста</li>
            }
            <li className="collection-item active">Общаяя стоимость: {totalPrice} руб.</li>
            <i className="material-icons busket-close" onClick={handleBusketShow}>close</i>
        </ul>
    );
}

export default BusketList;