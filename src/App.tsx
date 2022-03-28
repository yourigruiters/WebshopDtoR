import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./containers/components/Header";
import Footer from "./components/layout/Footer";
import Home from "./containers/pages/Home";
import Shop from "./containers/pages/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import CompleteProduct from "./containers/components/CompleteProduct";
import Login from "./components/auth/Login";
import Cart from "./containers/pages/Cart";
import Error404 from "./components/error/Error404";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";

const stripePromise = loadStripe(
  "pk_test_51KiLz6BRtCL2UFepMEpbe9lZZOjl4sPW6cly6PkeGebrOZmURexs7glgsm9rhGFee9JeywQefavidsj4hmjt7vHw00RSoiCrvE"
);

interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="webshop">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<CompleteProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </Elements>
  );
};

export default App;
