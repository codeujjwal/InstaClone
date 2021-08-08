import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper white">
          <a href="/" className="brand-logo">
            Instagram
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/signin">Login</a>
            </li>
            <li>
              <a href="/signup">SignUp</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
