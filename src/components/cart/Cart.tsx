import React, { useState, useEffect } from "react";
import {
  CartProduct as CartProductType,
  Product,
} from "../../typings/defaultTypes";
import CartProduct from "../products/CartProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

interface IProps {
  cart: CartProductType[];
  products: Product[];
  changeProductAmount: (id: number, amount: number) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<IProps> = ({
  cart,
  products,
  changeProductAmount,
  removeFromCart,
}) => {
  const [succes, setSucces] = useState(false);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const stripe = useStripe();
  const elements = useElements();

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

  if (!stripe || !elements) return null;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement) as any,
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log("Succesful payment");
          setSucces(true);
        }
      } catch (err) {
        console.log("erro", err);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Shopping cart</h3>
          </div>
          <div className="col-12 col-xl-8">
            <div className="shoppingTable mt-5">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product details</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Delete</th>
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
                          changeProductAmount={changeProductAmount}
                          removeFromCart={removeFromCart}
                        />
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={5}>Nothing in cart...</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 offset-md-3 col-xl-3 offset-xl-1">
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
              {!succes ? (
                <form onSubmit={(e: any) => handleSubmit(e)}>
                  <CardElement />
                  <button className="button w-100 no-styles mt-2">Pay</button>
                </form>
              ) : (
                <div>Ole</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
