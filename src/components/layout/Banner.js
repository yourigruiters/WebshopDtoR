import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo/logotype_pantheon_genetics_gold_transparent.png';

const Banner = ({cartItems}) => {
    return (
        <div className="banner" id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-none d-md-block">
                        <p className="no-styles"><span><i className="fas fa-star third"></i></span><strong>High</strong> Quality</p>
                        <p className="no-styles"><span><i className="fas fa-truck third"></i></span><strong>Fast</strong> US shipping</p>
                    </div>
                    <div className="col-6 col-md-4">
                        <Link to="/"><img src={Logo}
                        className="mx-auto temp-image" alt="logo" /></Link>
                    </div>
                    <div className="col-6 col-md-4 text-right">
                        <p className="no-styles"><Link to="/login"><span><i className="fas fa-user third"></i></span><strong>Login</strong></Link></p>
                        <p className="no-styles"><Link to="/cart"><span><i className="fas fa-shopping-cart third"></i></span><strong>Shopping</strong> cart
                        ({cartItems})</Link></p>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Banner;