import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CartProduct,
  Product as ProductType,
} from "../../typings/defaultTypes";
import ProductImage from "../../images/temp/temp-product.jpg";

interface IProps {
  product: ProductType;
  cart: CartProduct[];
  addToCart: (id: number, amount: number) => void;
}

const Product: React.FC<IProps> = ({ product, cart, addToCart }) => {
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const foundProduct = cart.find(
      (cartItem) => cartItem.productID === product.id
    );

    if (foundProduct) {
      setError("Already in cart");
      return;
    }

    setError("");
    addToCart(product.id, amount);
  };

  return (
    <div className="col-12 col-sm-6 col-xl-4 pb-5 fadeIn">
      <div className="product">
        <div className="product-image">
          <Link to={`/shop/${product.id}`}>
            <img src={ProductImage} alt="product" className="zoom" />
          </Link>
        </div>
        <h4 className="second pb-1">{product.title}</h4>
        <h6 className="second pb-1">
          $ {product.price}{" "}
          <span className="error">{error ? "- " + error : ""}</span>
        </h6>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              min="1"
              max="10"
              value={amount}
              onChange={handleChange}
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
