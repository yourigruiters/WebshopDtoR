import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductImage from "../../images/temp/temp-product.jpg";

const Product = ({ product, addToCart }) => {
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = addToCart(product, amount);

    if (!result) {
      setError("Already in cart");
    }
  };

  return (
    <div className="col-12 col-sm-6 col-xl-4 pb-5 fadeIn">
      <div className="product">
        <div className="product-image">
          <img src={ProductImage} alt="product" className="zoom" />
        </div>
        <h4 className="second pb-1">{product.title}</h4>
        <h6 className="second pb-1">
          $ {product.price}{" "}
          <span className="error">{error ? "- " + error : ""}</span>
        </h6>
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="number"
              min="1"
              max="10"
              value={amount}
              onChange={(e) => handleChange(e)}
            />
            <button className="button cartbutton">Add to cart</button>
          </form>
          <Link to={`/shop/${product.id}`}>
            <button className="button bg-grey w-100">More details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
