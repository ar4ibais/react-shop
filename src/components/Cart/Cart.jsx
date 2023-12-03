import { useContext } from 'react';
import './cart.css';
import { ShopContext } from '../../context';

const Cart = () => {
    const { order, handleBusketShow } = useContext(ShopContext);

    return (
        <div className="cart blue darken-4 white-text" onClick={handleBusketShow}>
            <i className="material-icons">shopping_cart</i>
            <span className="cart-quantity">{order.length}</span>
        </div>
    );
}

export default Cart;