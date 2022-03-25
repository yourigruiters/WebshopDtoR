import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import CompleteProduct from "./components/products/CompleteProduct";
import Login from "./components/auth/Login";
import Cart from "./components/cart/Cart";
import Error404 from "./components/error/Error404";
import "./App.css";

const products = [
  { id: 1, title: "Product 1", content: "Content...", price: 39.99 },
  { id: 2, title: "Product 2", content: "Content...", price: 29.99 },
  { id: 3, title: "Product 3", content: "Content...", price: 19.99 },
  { id: 4, title: "Product 4", content: "Content...", price: 25.99 },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct, amount) => {
    const product = cart.find(
      (cartItem) => cartItem.product.id === newProduct.id
    );

    if (!product) {
      setCart([...cart, { product: newProduct, amount }]);
      return true;
    }

    return false;
  };

  const changeProductAmount = (id, amount) => {
    const productIndex = cart.findIndex(
      (cartItem) => cartItem.product.id === id
    );
    // const newProduct = { ...cart[productIndex], amount: amount };

    // console.log(newProduct);
    // const newCart = [...cart, (cart[productIndex].amount = amount)];

    // console.log("newCart", newCart);

    let newCart = cart;
    console.log(newCart);
    newCart[productIndex].amount = amount;
    console.log(newCart);

    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((cartItem) => cartItem.product.id !== id);

    setCart(newCart);
  };

  return (
    <div className="webshop">
      <Header cart={cart} />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home products={products} addToCart={addToCart} />}
        />
        <Route
          path="/shop"
          exact
          element={<Shop products={products} addToCart={addToCart} />}
        />
        <Route
          path="/shop/:id"
          exact
          element={
            <CompleteProduct products={products} addToCart={addToCart} />
          }
        />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/login" exact element={<Login />} />
        <Route
          path="/cart"
          exact
          element={
            <Cart
              cart={cart}
              addToCart={addToCart}
              changeProductAmount={changeProductAmount}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
