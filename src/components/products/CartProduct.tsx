import React from "react";
import { CartProduct, Product } from "../../typings/defaultTypes";

interface IProps {
  product: Product | undefined;
  cartProduct: CartProduct;
  changeProductAmount: (id: number, amount: number) => void;
  removeFromCart: (id: number) => void;
}

const CompleteProduct: React.FC<IProps> = ({
  product,
  cartProduct,
  changeProductAmount,
  removeFromCart,
}) => {
  const handleChange = (e: any) => {
    changeProductAmount(cartProduct.productID, parseInt(e.target.value));
  };

  return product ? (
    <tr>
      <td>{product?.title}</td>
      <td>
        <input
          type="number"
          min="1"
          max="10"
          value={cartProduct.amount}
          onChange={(e: any) => handleChange(e)}
        />
      </td>
      <td>{product?.price}</td>
      <td>
        <strong>{(product?.price * cartProduct.amount).toFixed(2)}</strong>
      </td>
      <td
        className="error"
        onClick={() => {
          removeFromCart(cartProduct.productID);
        }}
      >
        Delete
      </td>
    </tr>
  ) : (
    <tr>
      <td colSpan={5}>No product found</td>
    </tr>
  );
};

export default CompleteProduct;
