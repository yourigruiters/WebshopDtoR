import React from 'react';
import { Link } from 'react-router-dom';

import FeaturedProduct from './products/FeaturedProduct';

const Home = (props) => {
    return (
        <div>
            <div>
                <div className="jumbo">
                    <div className="overlay">
                        <Link to="/shop"><button className="button bg-second">Enter the shop!</button></Link>
                    </div>
                </div>
            </div>
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="divider pb-5">
                            <hr />
                            <h6 className="text-center text-uppercase mx-auto bg-white">Featured product</h6>
                            </div>
                        </div>
                    </div>
                    <FeaturedProduct products={props.products} changeCart={props.changeCart} />
                </div>
            </div>
        </div>
    )
}

export default Home;