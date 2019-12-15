import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductImage from '../../images/temp/temp-product.jpg';

class CompleteProduct extends Component  {
    state = {
        isLoaded: false,
        number: 1,
        error: "",
        id: "",
        title: "",
        content: "",
        price: ""
    }

    componentDidMount() {
        let productList = this.props.products;

        let random = Math.floor(Math.random() * productList.length) + 1;

        const currentProduct = productList.find(product =>
                product.id === random
            )

        this.setState({
            isLoaded: true,
            id: currentProduct.id,
            title: currentProduct.title,
            content: currentProduct.content,
            price: currentProduct.price
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
            id: this.state.id,
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
                <div className="row">
                    <div className="col-12 col-lg-4 mb-4">
                        <div className="product-image">
                        <img src={ProductImage} alt="product" className="zoom" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-5 mb-4">
                        <h4 className="second pb-3">{this.state.title}</h4>
                        <p className="grey font15">{this.state.content}</p>
                        <ul className="grey font15 list-icons">
                            <li>Example information</li>
                            <li>Example information</li>
                            <li>Example information</li>
                            <li>Example information</li>
                            <li>Example information</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <h4 className="second pb-3">{this.state.price}</h4>
                        <h6 className="second">Quantity <span className="quantity">(Items included)</span></h6>
                        <p className="error">{this.state.error}</p>
                        <form onSubmit={this.handleSubmit} >
                            <input type="number" min="1" max="10" value={this.state.number} onChange={this.handleChange} />
                            <button className="button w-100">Add to cart</button>
                        </form>
                        <Link to={`/shop/${this.state.id}`}><button className="button bg-grey w-100">More details</button></Link>
                    </div>
                </div>
            ) : (
                <p>Product is loading.</p>
            )
        )
    }

}

export default CompleteProduct;