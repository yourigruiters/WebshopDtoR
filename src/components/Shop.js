import React, { Component } from 'react';

import Product from './products/Product';

class Shop extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            products: "",
            search: "",
            filter: 0
        }
        
    }

    componentDidMount() {
        this.setState({
            isLoaded: true,
            products: this.props.products
        })
    }

    handleSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleSelect = (e) => {

        let productList = this.state.products;

        switch(e.target.value) {
            case "1":
                productList.sort((a, b) => (a.title > b.title) ? 1 : -1)
                break;
            case "2": 
                productList.sort((a, b) => (a.title < b.title) ? 1 : -1)
                break;
            case "3": 
                productList.sort((a, b) => (a.price > b.price) ? 1 : -1)
                break;
            case "4": 
                productList.sort((a, b) => (a.price < b.price) ? 1 : -1)
                break;
            default:
                break;
        }

        this.setState({
            products: productList
        })

    }

    render() {

        const productList = this.state.isLoaded ? (
            this.state.products.map(product => {
                if(product.title.includes(this.state.search)) {
                    return <Product key={product.id} id={product.id} title={product.title} price={product.price} changeCart={this.props.changeCart} /> 
                }
                return null;
            })
        ) : (
            <p>No products available...</p>
        );

        return (
            <div id="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-2 offset-lg-1">
                            <h4 className="filters">Filters</h4>
                            <div className="divider">
                                <hr />
                            </div>
                            <div className="pb-3">
                                <h6 className="pb-2">Search</h6>
                                <input type="text" value={this.state.search} onChange={this.handleSearch} placeholder="Enter product..." />
                                <h6 className="pb-2">Order by</h6>
                                <select onChange={this.handleSelect}>
                                    <option value="1">Name | A-Z</option>
                                    <option value="2">Name | Z-A</option>
                                    <option value="3">Price | Lowest first</option>
                                    <option value="4">Price | Highest first</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="divider pb-5">
                                        <hr />
                                        <h6 className="text-center text-uppercase mx-auto bg-white">Products</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    { productList }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shop;