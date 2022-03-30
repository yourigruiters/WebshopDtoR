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

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
      border: "1px solid #adadad",
      padding: "15px!important",
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

interface IProps {
  amount: number;
  total: number;
}

const CheckoutForm: React.FC<IProps> = ({ amount, total }) => {
  const [succes, setSucces] = useState(false);
  const [charging, setCharging] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (succes) {
      navigate("/payment");
    }
  }, [succes, navigate]);

  const handleSubmit = async (e: any) => {
    await e.preventDefault();
    setCharging(true);
  };

  //   const handleSubmit = async (e: any) => {
  //     e.preventDefault();
  //     setCharging(true);

  //     const { error, paymentMethod } = await stripe.createPaymentMethod({
  //       type: "card",
  //       card: elements.getElement(CardElement) as any,
  //     });

  //     if (!error) {
  //       try {
  //         const { id } = paymentMethod;
  //         const response = await axios.post(
  //           "http://localhost:4000/card-payment",
  //           {
  //             amount: total * 100,
  //             id,
  //           }
  //         );

  //         if (response.data.success) {
  //           setSucces(true);
  //         }
  //       } catch (err) {
  //         console.log("erro", err);
  //       }
  //     } else {
  //       setCharging(false);
  //       console.log(error.message);
  //     }
  //   };

  return (
    <div className="col-12 col-md-9 col-xl-6">
      <div className="shoppingTotal mt-5 p-4">
        <h4>Order summary</h4>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <td>Items</td>
              <td>
                <strong>{amount}</strong>
              </td>
            </tr>
            <tr>
              <td>Total Price</td>
              <td>
                <strong>$ {total.toFixed(2)}</strong>
              </td>
            </tr>
          </thead>
        </table>
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
      </div>
    </div>
  );
};

export default CheckoutForm;
