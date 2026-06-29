import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // define state variable
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrMessage, setEmailErrMessage] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [passwordErrMessage, setPasswordErrMessage] = useState("");

  const [loginErr, setLoginErr] = useState("");
  const navigate = useNavigate();
  // handler for submit login button
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginErr("");
    // store credential
    const formData = {
      email: email,
      password: password,
    };
    // send credentials to backend to compare if valid
    if (validateInput()) {
      try {
        const response = await axios.post(`/api/login`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        //
        resetForm();
        if (response.status === 200) {
          setTimeout(() => {
            navigate("/admin");
          }, 700);
        }
      } catch (err) {
        setLoginErr("Invalid credentials email and password");
      }
    }
  };
  // handlder to check if input credentials are valid or not
  const validateInput = () => {
    let isValid = true;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailErr(true);
      setEmailErrMessage("please enter a valid email");
      isValid = false;
    } else {
      setEmailErr(false);
      setEmailErrMessage("");
    }
    if (!password || password.length < 12) {
      setPasswordErr(true);
      setPasswordErrMessage("please enter valid password");
      isValid = false;
    } else {
      setPasswordErr(false);
      setPasswordErrMessage("");
    }
    return isValid;
  };
  // reset state variables when login success or not
  const resetForm = () => {
    setEmail("");
    setPassword("");
    setPasswordErr(false);
    setEmailErr(false);
    setEmailErrMessage("");
    setPasswordErrMessage("");
  };
  return (
    <>
      <div className="login-container">
        <div className="heading">
          <h2>LogIn Your Self</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              required
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {emailErr && <p className="error">{emailErrMessage}</p>}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {passwordErr && <p className="error">{passwordErrMessage}</p>}
            {loginErr && <p className="error">{loginErr}</p>}
            <div className="btns">
              <button type="submit" className="btn">
                Login
              </button>
              <button type="button" className="btn" onClick={()=>navigate('/signup')}>SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
