import React from "react";
import Banner from "./Banner";
import Nav from "./Nav";

const Header = ({ cart }) => {
  return (
    <header id="top">
      <Banner cart={cart} />
      <Nav cart={cart} />
    </header>
  );
};

export default Header;
