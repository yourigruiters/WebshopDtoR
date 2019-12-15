import React from 'react';
import Banner from './Banner';
import Nav from './Nav';

const Header = ({cartItems}) => {
    return (
        <header id="top">
            <Banner cartItems={cartItems} />
            <Nav cartItems={cartItems} />
        </header>
    )
}

export default Header;