import React, { useState } from "react";

const AccountLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Unavailable");

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="col-12 col-sm-6 offset-sm-3 col-lg-3 offset-lg-2 mb-5">
      <h3>
        Already registered? <strong>Login here!</strong>
      </h3>
      <form className="pt-3" onSubmit={(e) => handleSubmit(e)}>
        <label>E-mail/Username</label>
        <input type="email" id="email" onChange={(e) => handleChange(e)} />
        <label>Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => handleChange(e)}
        />
        <button className="button">Login</button>
      </form>
    </div>
  );
};

export default AccountLogin;
