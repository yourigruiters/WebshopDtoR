import React from "react";
import { Link } from "react-router-dom";
import FeaturedProduct from "./products/FeaturedProduct";

const Home = ({ products, addToCart }) => {
  return (
    <div>
      <div>
        <div className="jumbo">
          <div className="overlay">
            <Link to="/shop">
              <button className="button bg-second">Checkout our shop!</button>
            </Link>
          </div>
        </div>
      </div>
      <div id="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="divider pb-5">
                <hr />
                <h6 className="text-center text-uppercase mx-auto bg-white">
                  Featured product
                </h6>
              </div>
            </div>
          </div>
          <FeaturedProduct products={products} addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default Home;
