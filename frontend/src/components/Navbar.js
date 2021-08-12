import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const { state } = useContext(UserContext);
  return (
    <div>
      <nav>
        <div className="nav-wrapper white">
          <Link to={state ? "/" : "/signin"} className="brand-logo">
            Instagram
          </Link>
          {state ? (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/addpost">Add Post</Link>
              </li>
            </ul>
          ) : (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/signin">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
