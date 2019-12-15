import React, { Component } from 'react';

class AccountLogin extends Component {
    state = {
        email: "",
        password: ""
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
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <div className="col-12 col-sm-6 offset-sm-3 col-lg-3 offset-lg-2 mb-5">
                <h3>Already registered? <strong>Login here!</strong></h3>
                <form className="pt-3" onSubmit={this.handleSubmit} >
                    <label>E-mail/Username</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                    <label>Password</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                    <button className="button">Login</button>
                </form>
            </div>
        )
    }
}

export default AccountLogin;