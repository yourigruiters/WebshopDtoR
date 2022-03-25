import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CartProduct } from "../../typings/defaultTypes";
import Logo from "../../images/logo/logomark_pantheon_genetics_gold_transparent.png";

interface IProps {
  cart: CartProduct[];
}

const Nav: React.FC<IProps> = ({ cart }) => {
  return (
    <nav id="navbar" className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-none d-sm-block">
            <ul className="navigation">
              <li>
                <NavLink to="/" className="text-uppercase">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="text-uppercase">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-uppercase">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-uppercase">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 d-block d-sm-none">
            <div className="mx-auto hamburger" id="hamburgerToggle">
              <span>
                <i className="fas fa-bars first"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="sticked-logo">
        <div className="">
          <a href="#top">
            <img src={Logo} alt="logo" className="temp-image2" />
          </a>
        </div>
      </div>
      <div className="sticked-cart">
        <div className="cart">
          <Link to="/cart">
            <p className="no-styles">
              <span>
                <i className="fas fa-shopping-cart first"></i>
              </span>
              <strong> {cart.length}</strong>
            </p>
          </Link>
        </div>
      </div>
      <div id="hamburgerMenu" className="hamburgerMenu">
        <ul>
          <li>
            <NavLink to="/" className="text-uppercase">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="text-uppercase">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-uppercase">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-uppercase">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
