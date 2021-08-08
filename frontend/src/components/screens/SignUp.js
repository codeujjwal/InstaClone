import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="main_container">
      <div class="card signup-card">
        <h2 className="brand-logo">Instagram</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button className="btn waves-effect waves-light">Signup</button>
      </div>
      <Link to="/signin">Already have a account? Sign In</Link>
    </div>
  );
};

export default SignUp;
