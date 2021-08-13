import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import M from "materialize-css";
import history from "history/browser";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
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
              <li>
                <button
                  className="btn btn-s waves-effect waves-light #c62828 red darken-3"
                  onClick={() => {
                    history.push("/signin");
                    localStorage.clear();
                    dispatch({ type: "CLEAR" });
                    M.toast({
                      html: "Logged out successfully",
                      classes: "#2e7d32 green darken-3",
                    });
                  }}
                >
                  Log out
                </button>
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
