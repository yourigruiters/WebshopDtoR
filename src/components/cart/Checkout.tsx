import React, { useState, useEffect } from "react";
import {
  CartProduct as CartProductType,
  Product,
} from "../../typings/defaultTypes";
import CartProduct from "../products/CartProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KiLz6BRtCL2UFepMEpbe9lZZOjl4sPW6cly6PkeGebrOZmURexs7glgsm9rhGFee9JeywQefavidsj4hmjt7vHw00RSoiCrvE"
);

interface IProps {
  cart: CartProductType[];
  products: Product[];
}

const Checkout: React.FC<IProps> = ({ cart, products }) => {
  const [succes, setSucces] = useState(false);
  const [charging, setCharging] = useState(false);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  useEffect(() => {
    let amount = 0;
    let total = 0;

    cart &&
      cart.forEach((cartProduct) => {
        const product = products.find(
          (product) => product.id === cartProduct.productID
        );

        if (product) {
          total = total + product.price * cartProduct.amount;
          amount = amount + cartProduct.amount;
        }
      });

    setAmount(amount);
    setTotal(total);
  }, [cart, products]);

  useEffect(() => {
    if (succes) {
      navigate("/payment");
    }
  }, [succes, navigate]);

  if (!stripe || !elements) return null;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setCharging(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement) as any,
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:4000/card-payment",
          {
            amount: total * 100,
            id,
          }
        );

        if (response.data.success) {
          setSucces(true);
        }
      } catch (err) {
        console.log("erro", err);
      }
    } else {
      setCharging(false);
      console.log(error.message);
    }
  };

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
          <Elements stripe={stripePromise} options={options}>
            <form onSubmit={(e: any) => handleSubmit(e)}>
              <CardElement options={CARD_ELEMENT_OPTIONS} />
              <button className="button w-100 no-styles mt-2">Pay</button>
            </form>
            {charging && (
              <div className="overlay">
                <div className="charging"></div>
                <p>Processing order...</p>
              </div>
            )}
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
