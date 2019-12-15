import React, { Component } from 'react';

class AccountRegister extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        repassword: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        alert("Unavailable");

        this.setState({
            name: "",
            email: "",
            password: "",
            repassword: ""
        })
    }

    render() {
        return (
            <div className="col-12 col-sm-6 offset-sm-3 col-lg-3 offset-lg-2">
                <h3>Register a new account</h3>
                <form className="pt-3" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label>E-mail</label>
                    <input type="text" id="email" onChange={this.handleChange} />
                    <label>Password</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                    <label>Password repeat</label>
                    <input type="password" id="repassword" onChange={this.handleChange} />
                    <button className="button">Register account</button>
                </form>
            </div>
        )
    }
}

export default AccountRegister;