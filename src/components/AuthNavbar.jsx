import React from "react";
import { Link } from "react-router-dom";
import authBgImage from "../assets/images/biobaum_landing_top_nav_img.png";

const AuthNavbar = () => {
  return (
    <header
      className="flex justify-end items-end pb-2 px-6 font-general-font text-white-color text-[1rem] md:text-[1.2rem]"
      style={{
        backgroundImage: `url(${authBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80px",
        width: "100%",
      }}
    >
      {/* Auth Navbar Links */}
      <div className="flex space-x-4">
        <Link to="/login" aria-label="Login page">
          <span>Login</span>
        </Link>
        <Link to="/register" aria-label="Register page">
          <span className="font-semibold">Register</span>
        </Link>
      </div>
    </header>
  );
};

export default AuthNavbar;
