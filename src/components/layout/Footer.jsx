import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Unavailable");

    setEmail("");
  };

  return (
    <footer>
      <div className="discount py-4 bg-second">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-center white no-styles">
                Get 20% discount with code -<strong> discount20</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 d-none d-lg-block">
              <h5 className="text-uppercase second">Explore</h5>
              <ul>
                <li>
                  <Link to="/" className="grey">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="grey">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="grey">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="grey">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="grey">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="grey">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 about">
              <h5 className="text-uppercase second">About us</h5>
              <p className="grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                dolorem voluptate exercitationem vero, alias, necessitatibus
                culpa delectus repudiandae expedita in et nihil itaque maiores!
                At!
              </p>
              <p className="grey no-styles">
                We accept the following payment methods:
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 connect">
              <h5 className="text-uppercase second">Connect</h5>
              <p className="grey">Join our mailing list for updates</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <input type="email" />
                <button
                  className="button"
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter email..."
                  value={email}
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <h6 className="no-styles grey copyrighttext">
                  Copyright © Pantheon Genetics 2022
                </h6>
              </div>
              <div className="col-12 col-md-6">
                <h6 className="no-styles grey copyrightmade">
                  Designed and coded by{" "}
                  <span className="first">
                    <a href="http://www.yourigruiters.com" className="first">
                      Youri Gruiters
                    </a>
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
