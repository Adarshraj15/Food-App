import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="flex justify-between bg-pink-200 shadow-md">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-6 m-6">
          <li>
            <Link to="/" className="no-underline-link px-4">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="no-underline-link px-4">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="no-underline-link px-4">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="no-underline-link px-4">
              Grocery
            </Link>
          </li>
          <li className="px-4">Cart</li>
          <li>
            <button
              className="login px-4"
              onClick={() =>
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
              }
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
