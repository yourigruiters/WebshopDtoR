import React from "react";
import { CartProduct, Product } from "../../typings/defaultTypes";
import ProductImage from "../../images/temp/temp-product.jpg";

interface IProps {
  product: Product | undefined;
  cartProduct: CartProduct;
  changeProductAmount?: (id: number, amount: number) => void;
  removeFromCart?: (id: number) => void;
  type: "checkout" | "cart";
}

const CompleteProduct: React.FC<IProps> = ({
  product,
  cartProduct,
  changeProductAmount,
  removeFromCart,
  type,
}) => {
  const handleChange = (e: any) => {
    if (type !== "checkout") {
      changeProductAmount &&
        changeProductAmount(cartProduct.productID, parseInt(e.target.value));
    }
  };

  return product ? (
    <tr>
      <td>
        <img src={ProductImage} alt="product" className="zoom" />
      </td>
      <td>{product?.title}</td>
      {type === "checkout" ? (
        <td>{cartProduct.amount}</td>
      ) : (
        <td>
          <input
            type="number"
            min="1"
            max="10"
            value={cartProduct.amount}
            onChange={(e: any) => handleChange(e)}
          />
        </td>
      )}
      <td>{product?.price}</td>
      <td>
        <strong>{(product?.price * cartProduct.amount).toFixed(2)}</strong>
      </td>
      {type !== "checkout" && (
        <td
          className="error"
          onClick={() => {
            removeFromCart && removeFromCart(cartProduct.productID);
          }}
        >
          Delete
        </td>
      )}
    </tr>
  ) : (
    <tr>
      <td colSpan={5}>No product found</td>
    </tr>
  );
};

export default CompleteProduct;
