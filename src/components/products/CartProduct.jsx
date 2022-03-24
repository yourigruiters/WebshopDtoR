import React from "react";

const CompleteProduct = ({ product, changeProductAmount, removeFromCart }) => {
  const handleChange = (e) => {
    changeProductAmount(product.product.id, parseInt(e.target.value));
  };

  console.log(product.product.total, product.amount);

  return (
    <tr>
      <td>{product.product.title}</td>
      <td>
        <input
          type="number"
          min="1"
          max="10"
          value={product.amount}
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
