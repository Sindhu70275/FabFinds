import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from "./common/Context/cartContext";
import Home from "./components/Home";
import Products from "./components/products/Products";
import Navbar from "./components/Navbar";
import ProductItemDetails from "./components/products/ProductItemDetails";
import Cart from "./components/cart/Cart";

const App = () => {
  const [cartList, setCartList] = useState([]);

  const addCartItem = (newItem) => {
    setCartList((prevCartList) => {
      const existingItemIndex = prevCartList.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        const updatedCartList = [...prevCartList];
        updatedCartList[existingItemIndex] = {
          ...updatedCartList[existingItemIndex],
          productQuantity: newItem.productQuantity,
        };
        return updatedCartList;
      } else {
        return [...prevCartList, newItem];
      }
    });
  };

  const deleteCartItem = (itemId) => {
    setCartList((prevCartList) =>
      prevCartList.filter((item) => item.id !== itemId)
    );
  };

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cartList, addCartItem, deleteCartItem }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductItemDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
