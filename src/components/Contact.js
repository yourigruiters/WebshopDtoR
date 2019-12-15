import React, { Component } from 'react';

class Contact extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: ""
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
            subject: "",
            message: ""
        })
    }

    render() {
        return (
            <div id="content">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8 offset-lg-2">
                  <h3>Contact</h3>
                  <p className="grey font15">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reprehenderit quam neque sunt
                    iste quia omnis dicta at ducimus pariatur unde doloribus earum provident adipisci nam, numquam corporis vel
                    quidem, dignissimos, id itaque dolorem blanditiis repellat atque! Dolore, obcaecati iure.</p>
                  <form className="pt-3" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label>E-mail</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                    <label>Subject</label>
                    <input type="text" id="subject" onChange={this.handleChange} />
                    <label>Message</label>
                    <textarea onChange={this.handleChange} id="message" ></textarea>
                    <button className="button">Hit us up!</button>
                  </form>
        
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Contact;