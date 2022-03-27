import React from "react";
import { CartProduct } from "../../typings/defaultTypes";

interface IProps {
  cartProduct: CartProduct;
  changeProductAmount: (id: number, amount: number) => void;
  removeFromCart: (id: number) => void;
}

const CompleteProduct: React.FC<IProps> = ({
  cartProduct,
  changeProductAmount,
  removeFromCart,
}) => {
  const handleChange = (e: any) => {
    changeProductAmount(cartProduct.product.id, parseInt(e.target.value));
  };

  return (
    <tr>
      <td>{cartProduct.product.title}</td>
      <td>
        <input
          type="number"
          min="1"
          max="10"
          value={cartProduct.amount}
          onChange={(e: any) => handleChange(e)}
        />
      </td>
      <td>{cartProduct.product.price}</td>
      <td>
        <strong>{cartProduct.product.price * cartProduct.amount}</strong>
      </td>
      <td
        className="error"
        onClick={() => {
          removeFromCart(cartProduct.product.id);
        }}
      >
        Delete
      </td>
    </tr>
  );
};

export default CompleteProduct;
