import React, { useState, useEffect } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useElements, useStripe } from "@stripe/react-stripe-js";

interface IProps {
  amount: number;
  total: number;
}

const CheckoutForm: React.FC<IProps> = ({ amount, total }) => {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!stripe || !elements) return;
  }, [stripe, elements]);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);
    setMessage("Processing order...");

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

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
        <form onSubmit={handleSubmit}>
          <PaymentElement id="payment-element" />
          <button className="button w-100 no-styles mt-2">Pay</button>
        </form>
        {isLoading && (
          <div className="overlay">
            <div className="charging"></div>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
