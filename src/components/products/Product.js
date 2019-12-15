import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductImage from '../../images/temp/temp-product.jpg';

class Product extends Component  {
    state = {
        isLoaded: false,
        number: 1,
        error: ""
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    handleChange = (e) => {
        this.setState({
            number: parseInt(e.target.value)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let item = {
            id: this.props.id,
            amount: this.state.number
        }

        let cart = JSON.parse(localStorage.getItem("cart"));

        if (cart == null) cart = [];
    
        const found = cart.find(cartItem => 
          cartItem.id === item.id 
        )
    
        found ? this.setState({
            error: "Already in cart"
        }) : cart = [...cart, item];
    
        localStorage.setItem("cart", JSON.stringify(cart));

        this.props.changeCart();
    }

    render() {

        return (
            this.state.isLoaded ? (
                <div className="col-12 col-sm-6 col-xl-4 pb-5 fadeIn">
                    <div className="product">
                        <div className="product-image">
                            <img src={ProductImage} alt="product" className="zoom" />
                        </div>
                        <h4 className="second pb-1">{this.props.title}</h4>
                        <h6 className="second pb-1">$ {this.props.price} <span className="error">{this.state.error ? "- " + this.state.error : ""}</span></h6>
                        <div>
                            <form onSubmit={this.handleSubmit} >
                                <input type="number" min="1" max="10" value={this.state.number} onChange={this.handleChange} />
                                <button className="button cartbutton">Add to cart</button>
                            </form>
                            <Link to={`/shop/${this.props.id}`}><button className="button bg-grey w-100">More details</button></Link>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Product is loading.</p>
            )
        )
    }

}

export default Product;