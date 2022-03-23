import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Unavailable");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h3>Contact</h3>
            <p className="grey font15">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              reprehenderit quam neque sunt iste quia omnis dicta at ducimus
              pariatur unde doloribus earum provident adipisci nam, numquam
              corporis vel quidem, dignissimos, id itaque dolorem blanditiis
              repellat atque! Dolore, obcaecati iure.
            </p>
            <form className="pt-3" onSubmit={(e) => handleSubmit(e)}>
              <label>Name</label>
              <input type="text" id="name" onChange={(e) => handleChange(e)} />
              <label>E-mail</label>
              <input
                type="email"
                id="email"
                onChange={(e) => handleChange(e)}
              />
              <label>Subject</label>
              <input
                type="text"
                id="subject"
                onChange={(e) => handleChange(e)}
              />
              <label>Message</label>
              <textarea
                onChange={(e) => handleChange(e)}
                id="message"
              ></textarea>
              <button className="button">Hit us up!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
