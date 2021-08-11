import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import M from "materialize-css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = async () => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const formData = JSON.stringify({ email, password });
      const res = await axios.post("/api/auth/signin", formData, config);
      localStorage.setItem("jwt", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      M.toast({
        html: "Signed In successfully",
        classes: "#2e7d32 green darken-3",
      });
      history.push("/");
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data.msg) {
        M.toast({
          html: error.response.data.msg,
          classes: "#c62828 red darken-3",
        });
      }
      if (error.response.data.errors) {
        M.toast({
          html: error.response.data.errors[0].msg,
          classes: "#c62828 red darken-3",
        });
      }
    }
  };
  return (
    <div className="main_container">
      <div className="card login-card">
        <h2 className="brand-logo">Instagram</h2>
        <input
          className="Input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="Input"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn btn-s waves-effect waves-light #64b5f6 blue darken-1"
          onClick={() => submit()}
        >
          Login
        </button>
      </div>
      <Link to="/signup">Dont have a account ? Sign up</Link>
    </div>
  );
};

export default Login;
