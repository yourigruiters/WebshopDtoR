import React, { useState, useEffect } from "react";
import CartProduct from "../products/CartProduct";

const Cart = ({ cart, changeProductAmount, removeFromCart }) => {
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(cart);
    let amount = 0;
    let total = 0;

    cart &&
      cart.map((cartProduct) => {
        total = total + cartProduct.product.price * cartProduct.amount;
        amount = amount + cartProduct.amount;
        return cartProduct.product.price;
      });

    setAmount(amount);
    setTotal(total.toFixed(2));
  }, [cart]);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Unavailable");
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
                    cart.map((product) => {
                      console.log(product);
                      console.log(product.product.id);
                      console.log("######################");
                      return (
                        <CartProduct
                          key={product.product.id}
                          product={product}
                          changeProductAmount={changeProductAmount}
                          removeFromCart={removeFromCart}
                        />
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5">Nothing in cart...</td>
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
                      <strong>$ {total}</strong>
                    </td>
                  </tr>
                </thead>
              </table>
              <form onSubmit={(e) => handleSubmit(e)}>
                <button className="button w-100 no-styles mt-2">
                  Checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
