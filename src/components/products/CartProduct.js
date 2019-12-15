import React, { Component } from 'react';

class CompleteProduct extends Component  {
    state = {
        isLoaded: false,
        number: 0,
        id: "",
        title: "",
        content: "",
        price: "",
        total: ""
    }

    componentDidMount() {
        let productId = this.props.id;

       let productList = this.props.products;
    
        const found = productList.find(cartItem => 
          cartItem.id === productId 
        )

        let total = parseInt(this.props.amount) * found.price; 

        this.setState({
            isLoaded: true,
            number: this.props.amount,
            id: found.id,
            title: found.title,
            content: found.content,
            price: found.price,
            total: total.toFixed(2)
        })
    }

    handleChange = (e) => {
        let total = parseInt(e.target.value) * this.state.price; 
        
        let cart = JSON.parse(localStorage.getItem("cart"));

        let objIndex = cart.findIndex((product => product.id === this.state.id));

        cart[objIndex].amount = parseInt(e.target.value);

        localStorage.setItem("cart", JSON.stringify(cart));

        this.props.changeCart();

        this.props.updateCart();

        this.setState({
            number: parseInt(e.target.value),
            total: total.toFixed(2)
        })
    }

    render() {

        return (
            this.state.isLoaded ? (
                <tr>
                    <td>{this.state.title}</td>
                    <td><input type="number" min="1" max="10" value={this.state.number} onChange={this.handleChange} /></td>
                    <td>{this.state.price}</td>
                    <td><strong>{this.state.total}</strong></td>
                    <td className="error" onClick={() => {this.props.deleteFromCart(this.state.id)}}>Delete</td>
                </tr>
            ) : (
                <tr>
                    <td colSpan="5">Product is loading.</td>
                </tr>
            )
        )
    }

}

export default CompleteProduct;