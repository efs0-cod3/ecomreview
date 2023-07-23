import { useContext } from "react";
import { CartContext } from "./context/CartContext";

/* eslint-disable react/prop-types */
export const Cart = ({ cartItems, cartClosed }) => {
  const { setCartItems } = useContext(CartContext)

  const deleteItem = (id) => {
    setCartItems(cartItems.filter(items => items.id !== id))
  }

  return (
    <div
      className={`cartComponent ${
        cartClosed ? "noShow" : "animate__animated animate__fadeIn"
      }`}
    >
      <h2>Cart</h2>
      <hr />
      <div className="cartComponent__cart-items">
        {cartItems <= 0 ? (
          <div className="empty-text">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <div>
            {cartItems.map((item, i) => (
              <div
                key={item.title + i}
                className="cartComponent__cart-items-list"
              >
                <div className="cart-item-img_container">
                  <img src={item.url} alt={item.title} />
                </div>
                <div className="cart-item_info">
                  <p className="cart-item_title">{item.title}</p>
                  <div className="cart-item-price">
                    <p>
                      ${item.price}.00 x {item.quantity}{" "}
                      <span className="cart-item_total">
                        ${item.price * item.quantity}.00
                      </span>
                    </p>
                  </div>
                </div>
                <img className="trashcan" src="/images/icon-delete.svg" onClick={() => deleteItem(item.id)}/>
              </div>
            ))}
            <button className="btn checkout">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};
