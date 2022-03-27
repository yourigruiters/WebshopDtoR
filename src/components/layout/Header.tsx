import React from "react";
import Banner from "./Banner";
import Nav from "./Nav";

interface IProps {
  cartSize: number;
}

const Header: React.FC<IProps> = ({ cartSize }) => {
  return (
    <header id="top">
      <Banner cartSize={cartSize} />
      <Nav cartSize={cartSize} />
    </header>
  );
};

export default Header;
