import './cart.css';

const Cart = (props) => {
    const { quantity = [] } = props;
    return (
        <div className="cart blue darken-4 white-text">
            <i className="material-icons">shopping_cart</i>
            {
                quantity.length != 0 ? (
                    <span className="cart-quantity">{quantity.length}</span>
                ) : null
            }
        </div>
    );
}

export default Cart;