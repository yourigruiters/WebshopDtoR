import React from "react";
import { CartProduct } from "../../defaultTypes";
import Banner from "./Banner";
import Nav from "./Nav";

interface IProps {
  cart: CartProduct[];
}

const Header: React.FC<IProps> = ({ cart }) => {
  return (
    <header id="top">
      <Banner cart={cart} />
      <Nav cart={cart} />
    </header>
  );
};

export default Header;
