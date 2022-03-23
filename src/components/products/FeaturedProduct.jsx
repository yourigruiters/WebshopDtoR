import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductImage from "../../images/temp/temp-product.jpg";

const CompleteProduct = ({ products, changeCart }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [number, setNumber] = useState(1);
  const [error, setError] = useState("");
  const [product, setProduct] = useState({
    id: "",
    title: "",
    content: "",
    price: "",
  });

  useEffect(() => {
    let productList = products;

    let random = Math.floor(Math.random() * productList.length) + 1;

    const currentProduct = productList.find((product) => product.id === random);

    setIsLoaded(true);
    setProduct({
      id: currentProduct.id,
      title: currentProduct.title,
      content: currentProduct.content,
      price: currentProduct.price,
    });
  }, []);

  const handleChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let item = {
      id: product.id,
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
    <div className="row">
      <div className="col-12 col-lg-4 mb-4">
        <div className="product-image">
          <img src={ProductImage} alt="product" className="zoom" />
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-5 mb-4">
        <h4 className="second pb-3">{product.title}</h4>
        <p className="grey font15">{product.content}</p>
        <ul className="grey font15 list-icons">
          <li>Example information</li>
          <li>Example information</li>
          <li>Example information</li>
          <li>Example information</li>
          <li>Example information</li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <h4 className="second pb-3">{product.price}</h4>
        <h6 className="second">
          Quantity <span className="quantity">(Items included)</span>
        </h6>
        <p className="error">{error}</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="number"
            min="1"
            max="10"
            value={number}
            onChange={(e) => handleChange(e)}
          />
          <button className="button w-100">Add to cart</button>
        </form>
        <Link to={`/shop/${product.id}`}>
          <button className="button bg-grey w-100">More details</button>
        </Link>
      </div>
    </div>
  ) : (
    <p>Product is loading.</p>
  );
};

export default CompleteProduct;