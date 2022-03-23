import React, { useState, useEffect } from "react";
import CartProduct from "../products/CartProduct";

const Cart = ({ products, changeCart }) => {
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    let productList = products;

    let amount = 0;
    let total = 0;

    cart &&
      cart.map((cartProduct) => {
        let product = productList.filter(
          (product) => product.id === cartProduct.id
        );
        total = total + product[0].price * cartProduct.amount;
        amount = amount + cartProduct.amount;
        return product[0].price;
      });

    setAmount(amount);
    setTotal(total.toFixed(2));
  }, []);

  const updateCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let productList = products;

    let amount = 0;
    let total = 0;

    cart.map((cartProduct) => {
      let product = productList.filter(
        (product) => product.id === cartProduct.id
      );
      total = total + product[0].price * cartProduct.amount;
      amount = amount + cartProduct.amount;
      return product[0].price;
    });

    setAmount(amount);
    setTotal(total.toFixed(2));
  };

  const deleteFromCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart = cart.filter((product) => product.id !== id);

    localStorage.setItem("cart", JSON.stringify(cart));

    changeCart();
    updateCart();
  };

  handleSubmit = (e) => {
    e.preventDefault();

    alert("Unavailable");
  };

  const renderCartList = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart == null) cart = [];

    const cartList = cart.length ? (
      cart.map((product) => {
        return (
          <CartProduct
            key={product.id}
            id={product.id}
            amount={product.amount}
            products={this.props.products}
            changeCart={this.props.changeCart}
            updateCart={this.updateCart}
            deleteFromCart={this.deleteFromCart}
          />
        );
      })
    ) : (
      <tr>
        <td colSpan="5">Nothing in cart...</td>
      </tr>
    );
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
                <tbody>{renderCartList()}</tbody>
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
                      <strong>{this.state.amount}</strong>
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
