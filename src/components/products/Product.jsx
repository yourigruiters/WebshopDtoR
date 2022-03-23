import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductImage from "../../images/temp/temp-product.jpg";

const Product = ({ id, title, price, changeCart }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [number, setNumber] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let item = {
      id: id,
      amount: number,
    };

    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart == null) cart = [];

    const found = cart.find((cartItem) => cartItem.id === item.id);

    found ? setError("Already in cart") : (cart = [...cart, item]);

    localStorage.setItem("cart", JSON.stringify(cart));

    changeCart();
  };
  return isLoaded ? (
    <div className="col-12 col-sm-6 col-xl-4 pb-5 fadeIn">
      <div className="product">
        <div className="product-image">
          <img src={ProductImage} alt="product" className="zoom" />
        </div>
        <h4 className="second pb-1">{title}</h4>
        <h6 className="second pb-1">
          $ {price} <span className="error">{error ? "- " + error : ""}</span>
        </h6>
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="number"
              min="1"
              max="10"
              value={number}
              onChange={(e) => handleChange(e)}
            />
            <button className="button cartbutton">Add to cart</button>
          </form>
          <Link to={`/shop/${id}`}>
            <button className="button bg-grey w-100">More details</button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <p>Product is loading.</p>
  );
};

export default Product;
