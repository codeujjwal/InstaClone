import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main_container">
      <div class="card login-card">
        <h2 className="brand-logo">Instagram</h2>
        <input className="Input" type="text" placeholder="Email" />
        <input className="Input" type="text" placeholder="Password" />
        <button className="btn waves-effect waves-light">Login</button>
      </div>
      <Link to="/signup">Dont have a account ? Sign up</Link>
    </div>
  );
};

export default Login;
