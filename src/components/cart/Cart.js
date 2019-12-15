import React, { Component } from 'react';

import CartProduct from '../products/CartProduct';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 0,
            total: 0
        }
        
        this.updateCart = this.updateCart.bind(this);
    }


    componentDidMount() {
        let cart = JSON.parse(localStorage.getItem("cart"));
        let productList = this.props.products;

        let amount = 0;
        let total = 0;

        cart.map(cartProduct => {
            let product = productList.filter(product => product.id === cartProduct.id)
            total = total + (product[0].price * cartProduct.amount);
            amount = amount + cartProduct.amount;
            return product[0].price;
        })

        this.setState({
            amount,
            total: total.toFixed(2)
        })
    }

    updateCart() {
        let cart = JSON.parse(localStorage.getItem("cart"));
        let productList = this.props.products;

        let amount = 0;
        let total = 0;

        cart.map(cartProduct => {
            let product = productList.filter(product => product.id === cartProduct.id)
            total = total + (product[0].price * cartProduct.amount);
            amount = amount + cartProduct.amount;
            return product[0].price;
        })

        this.setState({
            amount,
            total: total.toFixed(2)
        })
    }

    deleteFromCart = (id) => {
        let cart = JSON.parse(localStorage.getItem("cart"));

        cart = cart.filter(product => 
            product.id !== id
        )

        localStorage.setItem("cart", JSON.stringify(cart));

        this.props.changeCart();
        this.updateCart();
    }

    handleSubmit = (e) => {
        e.preventDefault();

        alert("Unavailable");
    }

    render() {
        let cart = JSON.parse(localStorage.getItem("cart"));

        if (cart == null) cart = [];

        const cartList = cart.length ? (
            cart.map(product => {
                return <CartProduct key={product.id} id={product.id} amount={product.amount} products={this.props.products} changeCart={this.props.changeCart} updateCart={this.updateCart} deleteFromCart={this.deleteFromCart} /> 
            })
        ) : (
            <tr>
                <td colSpan="5">Nothing in your cart...</td>
            </tr>
        );

        return (
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Shopping cart</h3>
                        </div>
                        <div className="col-12 col-xl-8">
                            <div className="shoppingTable mt-5">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Product details</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { cartList }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 offset-md-3 col-xl-3 offset-xl-1">
                            <div className="shoppingTotal mt-5 p-4">
                                <h4>Order summary</h4>
                                <hr />
                                <table className="table">                      
                                    <thead>
                                        <tr>
                                            <td>Items</td>
                                            <td><strong>{this.state.amount}</strong></td>
                                        </tr>              
                                        <tr>
                                            <td>Total Price</td>
                                            <td><strong>$ {this.state.total}</strong></td>
                                        </tr>
                                    </thead>
                                </table>
                                <form onSubmit={this.handleSubmit} >
                                    <button className="button w-100 no-styles mt-2">Checkout</button>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }

    
}

export default Cart;