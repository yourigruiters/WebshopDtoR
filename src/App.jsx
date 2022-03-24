import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import { useEffect } from "react";

const products = [
  { id: 1, title: "Product 1", content: "Content...", price: 39.99 },
  { id: 2, title: "Product 2", content: "Content...", price: 29.99 },
  { id: 3, title: "Product 3", content: "Content...", price: 19.99 },
  { id: 4, title: "Product 4", content: "Content...", price: 25.99 },
];

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = (newProduct, amount) => {
    const product = cart.find((cartItem) => cartItem.id === newProduct.id);

    if (!product) {
      setCart([...cart, { product: newProduct, amount }]);
      return true;
    }

    return false;
  };

  const changeProductAmount = (id, amount) => {
    const ProductIndex = cart.findIndex(
      (cartItem) => cartItem.product.id === id
    );
    const newCart = [...cart, (cart[ProductIndex].amount = amount)];

    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((cartItem) => cartItem.product.id !== id);

    setCart(newCart);
  };

  return (
    <BrowserRouter>
      <div className="webshop">
        <Header cart={cart} />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home {...props} products={products} addToCart={addToCart} />
            )}
          />
          <Route
            path="/shop"
            exact
            render={(props) => (
              <Shop {...props} products={products} addToCart={addToCart} />
            )}
          />
          <Route
            path="/shop/:id"
            exact
            render={(props) => (
              <CompleteProduct
                {...props}
                products={products}
                addToCart={addToCart}
              />
            )}
          />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route
            path="/cart"
            exact
            render={(props) => (
              <Cart
                {...props}
                cart={cart}
                addToCart={addToCart}
                changeProductAmount={changeProductAmount}
                removeFromCart={removeFromCart}
              />
            )}
          />
          <Route path="/" component={Error404} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
