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
import { CartProduct, Product } from "./typings/defaultTypes";
import "./App.css";

const products: Product[] = [
  { id: 1, title: "Product 1", content: "Content...", price: 39.99 },
  { id: 2, title: "Product 2", content: "Content...", price: 29.99 },
  { id: 3, title: "Product 3", content: "Content...", price: 19.99 },
  { id: 4, title: "Product 4", content: "Content...", price: 25.99 },
];

interface IProps {}

const App: React.FC<IProps> = () => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (newProduct: Product, amount: number): boolean => {
    const product = cart.find(
      (cartItem) => cartItem.product.id === newProduct.id
    );

    if (!product) {
      setCart([...cart, { product: newProduct, amount }]);
      return true;
    }

    return false;
  };

  const changeProductAmount = (id: number, amount: number) => {
    const productIndex = cart.findIndex(
      (cartItem) => cartItem.product.id === id
    );

    let newCart = cart;
    newCart[productIndex].amount = amount;

    setCart(newCart);
  };

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((cartItem) => cartItem.product.id !== id);

    setCart(newCart);
  };

  return (
    <div className="webshop">
      <Header cart={cart} />
      <Routes>
        <Route
          path="/"
          element={<Home products={products} addToCart={addToCart} />}
        />
        <Route
          path="/shop"
          element={<Shop products={products} addToCart={addToCart} />}
        />
        <Route
          path="/shop/:id"
          element={
            <CompleteProduct products={products} addToCart={addToCart} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
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
