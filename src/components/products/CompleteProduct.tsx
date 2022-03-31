import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CartProduct, Product } from "../../typings/defaultTypes";
import ProductImage from "../../images/temp/temp-product.jpg";

interface IProps {
  products: Product[];
  cart: CartProduct[];
  addToCart: (id: number, amount: number) => void;
}

const CompleteProduct: React.FC<IProps> = ({ products, cart, addToCart }) => {
  const [amount, setAmount] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: "",
    content: "",
    price: 0,
  });

  const urlProductID = useParams().id;

  useEffect(() => {
    if (urlProductID) {
      const currentProduct = products.find(
        (product) => product.id === parseInt(urlProductID)
      );

      if (currentProduct) {
        setProduct(currentProduct);
      }
    }
  }, [urlProductID, products]);

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
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                min="1"
                max="10"
                value={amount}
                onChange={handleChange}
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
