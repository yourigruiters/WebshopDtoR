import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartProduct, Product } from "../../typings/defaultTypes";
import ProductImage from "../../images/temp/temp-product.jpg";

interface IProps {
  randomProduct: Product | undefined;
  cart: CartProduct[];
  addToCart: (id: number, amount: number) => void;
}

const CompleteProduct: React.FC<IProps> = ({
  randomProduct,
  cart,
  addToCart,
}) => {
  const [amount, setAmount] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: "",
    content: "",
    price: 0,
  });

  useEffect(() => {
    if (randomProduct) {
      setProduct(randomProduct);
    }
  }, [randomProduct]);

  const handleChange = (e: any) => {
    setAmount(parseInt(e.target.value));
  };

  const handleSubmit = (e: any) => {
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
        <form onSubmit={(e: any) => handleSubmit(e)}>
          <input
            type="number"
            min="1"
            max="10"
            value={amount}
            onChange={(e: any) => handleChange(e)}
          />
          <button className="button w-100">Add to cart</button>
        </form>
        <Link to={`/shop/${product.id}`}>
          <button className="button bg-grey w-100">More details</button>
        </Link>
      </div>
    </div>
  );
};

export default CompleteProduct;
