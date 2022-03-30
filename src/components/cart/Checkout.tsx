import React, { useState, useEffect } from "react";
import {
  CartProduct as CartProductType,
  Product,
} from "../../typings/defaultTypes";
import CartProduct from "../products/CartProduct";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KiLz6BRtCL2UFepMEpbe9lZZOjl4sPW6cly6PkeGebrOZmURexs7glgsm9rhGFee9JeywQefavidsj4hmjt7vHw00RSoiCrvE"
);

interface IProps {
  cart: CartProductType[];
  products: Product[];
}

const Checkout: React.FC<IProps> = ({ cart, products }) => {
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    console.log(clientSecret);
  }, [clientSecret]);

  useEffect(() => {
    let amt = 0;
    let ttl = 0;

    cart &&
      cart.forEach((cartProduct) => {
        const product = products.find(
          (product) => product.id === cartProduct.productID
        );

        if (product) {
          ttl = ttl + product.price * cartProduct.amount;
          amt = amt + cartProduct.amount;
        }
      });

    setAmount(amt);
    setTotal(ttl);

    console.log(ttl);

    axios
      .post("http://localhost:4000/create-payment-intent", {
        amount: parseInt(ttl.toFixed(2)) * 100,
      })
      .then((res) => res.data)
      .then((data) => setClientSecret(data.clientSecret));
  }, [cart, products]);

  const appearance = {
    theme: "stripe" as "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Shopping cart</h3>
          </div>
          <div className="col-12">
            <div className="shoppingTable mt-5">
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length ? (
                    cart.map((cartProduct) => {
                      const product = products.find(
                        (product) => product.id === cartProduct.productID
                      );

                      return (
                        <CartProduct
                          key={cartProduct.productID}
                          product={product}
                          cartProduct={cartProduct}
                          type="checkout"
                        />
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6}>Nothing in cart...</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {clientSecret && (
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm amount={amount} total={total} />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
