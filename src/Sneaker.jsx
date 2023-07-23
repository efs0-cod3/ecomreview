import { useState } from "react";
import { ImageSlider } from "./components/ImageSlider";
import { Navbar } from "./components/Navbar";
import { CartContext } from "./components/context/CartContext";
import { SnekerInfo } from "./components/SnekerInfo";
import {DsktopImgs} from "./components/DsktopImgs"

export const Sneaker = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Navbar />
        <div className="main">
          <ImageSlider />
          <DsktopImgs />

          <SnekerInfo />
        </div>
      </CartContext.Provider>
    </>
  );
};
