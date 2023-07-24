import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext.jsx";

export const SnekerInfo = () => {

  const { cartItems,setCartItems } = useContext(CartContext)
    const [count, setCount] = useState(0)

    const plus = () => {
      setCount(count => count + 1)
    }
    
    const minus = () => {
      if(count === 0) return 
      setCount(count => count - 1)
    }

    const addToCart = () => {
      if (count === 0) {
        return 
      }
      setCartItems(cartItem => {
        return [...cartItem, {
          id: cartItems.length + 1,
          url: "./images/image-product-1-thumbnail.jpg",
          title: "Fall Limited Edition Sneakers",
          price: 125.00,
          quantity: count,
        }]
      })
      setCount(0)
    }

    
    return (
      <div className="info_container pl-5 pr-5 mt-5">
      <span className="info_hl">Sneaker Company</span>
      <h2 className="info_container--title mt-5">Fall Limited Edition Sneakers</h2>
      <p className="info_container--p">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
     <div className="info_price--container mt-5">
    <div className="info_price--priceNdiscount">
    <h2 className="info_price">
        $125.00 
      </h2>
      <span className="info_discount">50%</span>
    </div>
      <p className="price_before">$250.00</p>
     </div>

     <div className="button_counter-container">
     <div className="numberOfItems mt-5">
        <img src="./images/icon-minus.svg" className="mathsigns pointer" onClick={minus}/>
        <p className="count">{count}</p>
        <img src="./images/icon-plus.svg" className="mathsigns pointer" onClick={plus}/>
     </div>
      <button className="addToCartBtn mt-5 btn pointer" onClick={addToCart}>
        <img src="./images/icon-cart.svg" alt="cart-icon" className="mr-1 cart-btn-logo" /> Add
        to cart
      </button>
     </div>
    </div>
  );
};
