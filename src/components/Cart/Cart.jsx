import './cart.css';

const Cart = (props) => {
    const { quantity = [], handleBusketShow = Function.prototype } = props;
    return (
        <div className="cart blue darken-4 white-text" onClick={handleBusketShow}>
            <i className="material-icons">shopping_cart</i>
            <span className="cart-quantity">{quantity.length}</span>
        </div>
    );
}

export default Cart;