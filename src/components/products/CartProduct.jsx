import React, { useEffect, useState } from "react";

const CompleteProduct = ({ product, changeProductAmount, removeFromCart }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(product.amount);
  }, [product]);

  const handleChange = (e) => {
    changeProductAmount(product.product.id, parseInt(e.target.value));
  };

  return (
    <tr>
      <td>{product.product.title}</td>
      <td>
        <input
          type="number"
          min="1"
          max="10"
          value={amount}
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td>{product.product.price}</td>
      <td>
        <strong>{product.product.price * product.amount}</strong>
      </td>
      <td
        className="error"
        onClick={() => {
          removeFromCart(product.product.id);
        }}
      >
        Delete
      </td>
    </tr>
  );
};

export default CompleteProduct;
