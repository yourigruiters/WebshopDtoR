import React, { useState, useEffect } from "react";

const CompleteProduct = ({
  deleteFromCart,
  products,
  amount,
  changeCart,
  updateCart,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [number, setNumber] = useState(0);
  const [error, setError] = useState("");
  const [product, setProduct] = useState({
    id: "",
    title: "",
    content: "",
    price: "",
  });
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    let productId = product.id;

    let productList = products;

    const found = productList.find((cartItem) => cartItem.id === productId);

    let total = parseInt(amount) * found.price;

    setIsLoaded(true);
    setNumber(amount);
    setTotalPrice(total.toFixed(2));
  }, []);

  const handleChange = (e) => {
    let total = parseInt(e.target.value) * product.price;

    let cart = JSON.parse(localStorage.getItem("cart"));

    let objIndex = cart.findIndex((product) => product.id === product.id);

    cart[objIndex].amount = parseInt(e.target.value);

    localStorage.setItem("cart", JSON.stringify(cart));

    changeCart();

    updateCart();

    setNumber(parseInt(e.target.value));
    setTotalPrice(total.toFixed(2));
  };

  return isLoaded ? (
    <tr>
      <td>{product.title}</td>
      <td>
        <input
          type="number"
          min="1"
          max="10"
          value={product.number}
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td>{product.price}</td>
      <td>
        <strong>{product.total}</strong>
      </td>
      <td
        className="error"
        onClick={() => {
          deleteFromCart(product.id);
        }}
      >
        Delete
      </td>
    </tr>
  ) : (
    <tr>
      <td colSpan="5">Product is loading.</td>
    </tr>
  );
};

export default CompleteProduct;
