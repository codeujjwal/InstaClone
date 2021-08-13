import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import M from "materialize-css";

const SignUp = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  // const history = useHistory();
  const submit = async () => {
    if (password !== password1) {
      M.toast({
        html: "passwords dont match",
        classes: "#c62828 red darken-3",
      });
      setEmail("");
      setName("");
      setPassword("");
      setPassword1("");
    }
    if (password === password1) {
      try {
        const config = {
          headers: { "Content-Type": "application/json" },
        };
        const formData = JSON.stringify({ name, email, password });
        await axios.post("/api/auth/signup", formData, config);
        M.toast({
          html: "Signed Up successfully",
          classes: "#2e7d32 green darken-3",
        });
        history.push("/signin");
      } catch (error) {
        console.log(error);
        if (error.response) {
          M.toast({
            html: error.response.data.msg || error.response.data.errors[0].msg,
            classes: "#c62828 red darken-3",
          });
        }
      }
    }
  };
  return (
    <div className="main_container">
      <div className="card signup-card">
        <h2 className="brand-logo">Instagram</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
        <button
          className="btn btn-s btn-m waves-effect waves-light #64b5f6 blue darken-1"
          onClick={() => submit()}
        >
          Signup
        </button>
      </div>
      <Link to="/signin">Already have a account? Sign In</Link>
    </div>
  );
};

export default SignUp;
