import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./containers/components/Header";
import Footer from "./components/layout/Footer";
import Home from "./containers/pages/Home";
import Shop from "./containers/pages/Shop";
import About from "./components/About";
import Payment from "./containers/pages/Payment";
import Contact from "./components/Contact";
import CompleteProduct from "./containers/components/CompleteProduct";
import Login from "./components/auth/Login";
import Cart from "./containers/pages/Cart";
import Checkout from "./containers/pages/Checkout";
import Error404 from "./components/error/Error404";
import "./App.css";

interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <div className="webshop">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<CompleteProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
