import React from "react";
import "./Cart.css";

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;
    let total = 0;
    let totalitems = 0;
    cartItems.forEach((it) => {
      total += it.price * it.count;
      totalitems += it.count;
    });


    return (
      <div>
        <div>
          {cartItems.length === 0 ? (
            <div className="cart-header">Cart is empty</div>
          ) : (
            <div className="cart-header">
              You have <h4> {totalitems} </h4> item in the cart.
            </div>
          )}
        </div>
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map((item) => {
              return (
                <li key={item.id}>
                  {" "}
                  <h5>{item.name} </h5>
                  <div className="right">
                    {" "}
                    $ {item.price} x {item.count}
                    <img
                      src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/svg/minus.svg"
                      onClick={() => this.props.removeFromCart(item)}
                    ></img>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {cartItems.length !== 0 && (
          <div className="cart">
            <div className="total">
              {" "}
              <h5> TOTAL : $ {total}</h5>
              <button>Checkout</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
