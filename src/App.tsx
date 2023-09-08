import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { UserCart } from "./data/Context";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import ViewCart from "./pages/ViewCart";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Success from "./pages/Success";

import ScrollToTop from "./ScrollToTop";

export default function App() {
  // gets the cart from previous session
  const tempCart = localStorage.getItem("cart");

  // starts a new cart or continues from the last session
  const [cart, setCart] = useState(
    tempCart == null ? ([] as any[]) : (JSON.parse(tempCart) as any[])
  );

  // function to add an item to the cart
  const addToCart = (item: any) => {
    setCart([...cart, item]);
  };

  // function to remove an item from the cart based on its index
  const removeFromCart = (index: number) => {
    setCart([...cart.slice(0, index), ...cart.slice(index + 1, cart.length)]);
  };

  // sets the quantity an item has in a cart based on its index
  const setQuantity = (index: number, quantity: number) => {
    const tempItem = cart[index];
    tempItem.quantity = quantity;

    setCart([
      ...cart.slice(0, index),
      tempItem,
      ...cart.slice(index + 1, cart.length),
    ]);
  };

  // clears the cart after a successful purchase
  const clearCart = () => {
    setCart([]);
  };

  // everytime the cart is changed, save the cart again for the next session
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <UserCart.Provider
      value={{
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        setQuantity: setQuantity,
        clearCart: clearCart,
      }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<ViewCart />} />
            <Route path="item" element={<ProductPage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="success" element={<Success />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserCart.Provider>
  );
}
