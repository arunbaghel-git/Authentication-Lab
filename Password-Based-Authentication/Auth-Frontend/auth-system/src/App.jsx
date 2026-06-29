import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./components/authentication/Login.jsx";
import Register from "./components/authentication/Register.jsx";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </Router>
  );
};

export default App;
