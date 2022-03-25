import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductImage from "../../images/temp/temp-product.jpg";

const CompleteProduct = ({ products, addToCart, match }) => {
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState("");
  const [product, setProduct] = useState({
    id: "",
    title: "",
    content: "",
    price: "",
  });

  useEffect(() => {
    const urlProductID = parseInt(match.params.id);
    const currentProduct = products.find(
      (product) => product.id === urlProductID
    );

    setProduct(currentProduct);
  }, [match.params.id, products]);

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
    <div id="content">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="divider pb-5">
              <hr />
              <h6 className="text-center text-uppercase mx-auto bg-white">
                Product
              </h6>
            </div>
          </div>
        </div>
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
              Quantity{" "}
              <span className="quantity">(10 seeds per 1 quantity)</span>
            </h6>
            <p className="error">{error}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="number"
                min="1"
                max="10"
                value={amount}
                onChange={(e) => handleChange(e)}
              />
              <button className="button w-100">Add to cart</button>
              <Link to="/shop">
                <button className="button bg-grey w-100">Back to shop</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteProduct;
