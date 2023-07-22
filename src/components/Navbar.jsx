import { useContext, useState } from "react";
import { Cart } from "./Cart";
import { CartContext } from "./context/CartContext";

export const Navbar = () => {
  const items = ["Collections", "Men", "Women", "About", "Contact"];
  const { cartItems } = useContext(CartContext);
  const totalItems =
    cartItems.length <= 0
      ? ""
      : cartItems.map((item) => item.quantity).reduce((a, b) => a + b, 0);

  const [closed, setClosed] = useState(true);
  const [cartClosed, setCartClosed] = useState(true);

  const toggleMenu = () => {
    setClosed(!closed);
  };

  const toggleCart = () => {
    setCartClosed(!cartClosed);
  };

  return (
    <>
      <nav className="navbar_main pt-5 pr-5 pl-5 pb-5">
        <div className="navbar_menu">
          <img
            src="/images/icon-menu.svg"
            alt="bars"
            className="ham mr-5 pointer"
            onClick={toggleMenu}
          />
          <img src="/images/logo.svg" alt="logo" className="logo" />
        </div>
        <ul
          className={`navbar-items animate__animated ${
            closed ? "animate__slideOutLeft noShow-nav" : "animate__slideInLeft"
          }`}
        >
          <div className="close-menu">
            <img
              src="/images/icon-close.svg"
              alt="bars"
              className="ham mr-5 mt-5 mb-5 pointer"
              onClick={toggleMenu}
            />
          </div>
          {items.map((item) => (
            <li className="navbar_items-list pointer" key={item}>
              {item}
            </li>
          ))}
        </ul>

        <ul className={`desktop-navbar`}>
          {items.map((item) => (
            <li className="navbar_items-list ml-5 mr-5 pointer" key={item}>
              {item}
            </li>
          ))}
        </ul>

        <div className="navbar-utils">
          <div className="cart__container pointer" onClick={toggleCart}>
            <img src="/images/icon-cart.svg" alt="cart" className="cart mr-1" />
            <span className="cartItemsLength">{totalItems}</span>
          </div>
          <img
            src="/images/image-avatar.png"
            alt="user-avatar"
            className="avatar ml-1"
          />
        </div>
      </nav>

      <Cart cartClosed={cartClosed} cartItems={cartItems} />
    </>
  );
};
