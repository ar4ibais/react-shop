import { useContext } from "react";
import { ShopContext } from "../../context";

import BusketItem from "../BusketItem/BusketItem";
import './busketList.css';

const BusketList = () => {
    const { order, handleBusketShow } = useContext(ShopContext)

    const totalPrice = order.reduce((summ, accum) => {
        return summ + accum.price * accum.quantity
    }, 0);

    return (
        <ul className="collection busket-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item => (
                    <BusketItem key={item.mainId} {...item} />
                )) : <li className="collection-item">Корзина пуста</li>
            }
            <li className="collection-item active">Общаяя стоимость: {totalPrice} руб.</li>
            <i className="material-icons busket-close" onClick={handleBusketShow}>close</i>
        </ul>
    );
}

export default BusketList;