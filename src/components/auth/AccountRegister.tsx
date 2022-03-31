import React, { useState } from "react";

interface IProps {}

const AccountRegister: React.FC<IProps> = () => {
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({ ...account, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Unavailable");

    setAccount({
      name: "",
      email: "",
      password: "",
      repassword: "",
    });
  };

  return (
    <div className="col-12 col-sm-6 offset-sm-3 col-lg-3 offset-lg-2">
      <h3>Register a new account</h3>
      <form className="pt-3" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" id="name" onChange={handleChange} />
        <label>E-mail</label>
        <input type="text" id="email" onChange={handleChange} />
        <label>Password</label>
        <input type="password" id="password" onChange={handleChange} />
        <label>Password repeat</label>
        <input type="password" id="repassword" onChange={handleChange} />
        <button className="button">Register account</button>
      </form>
    </div>
  );
};

export default AccountRegister;
