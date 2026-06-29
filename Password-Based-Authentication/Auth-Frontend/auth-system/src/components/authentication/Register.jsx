import React, { useState } from "react";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="Register-container">
        <div className="heading">
          <h2>SignUp Your Self</h2>
        </div>
        <form action="">
          <input type="text" name="" id="" placeholder="username" required autoFocus/>
          <input type="email" name="" id="" placeholder="email" required autoFocus/>
          <input type="password" name="" id="" placeholder="password" required autoFocus/>
        </form>
        <button className="btn">Register</button>
      </div>
    </>
  );
};

export default Register;
