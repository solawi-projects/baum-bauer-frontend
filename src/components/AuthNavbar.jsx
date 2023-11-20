/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import authBgImage from "../assets/images/biobaum_landing_top_nav_img.png";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const AuthNavbar = () => {
  return (
    <nav
      className="flex justify-end items-center px-4 md:px-6 lg:px-10 font-general-font text-white-color text-[1rem] md:text-[1.2rem]"
      style={{
        backgroundImage: `url(${authBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80px",
        width: "100%",
      }}
    >
      {/* Auth Navbar Links */}
      <div className="flex space-x-2">
        <Link
          to="/login"
          className="navIcon flex items-center transition-transform duration-75 ease-linear"
          aria-label="Login page"
        >
          <div className="flex items-center transition-transform duration-75 ease-linear">
            <div
              className="rounded-full bg-bg-header-footer w-[50px] h-[50px]"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaUser className="ani text-secondary-color text-2xl" />
            </div>
          </div>
        </Link>
        <Link
          to="/register"
          className="navIcon transition-transform duration-75 ease-linear"
          aria-label="Register page"
        >
          {" "}
          <div className="flex items-center transition-transform duration-75 ease-linear">
            <div
              className="rounded-full bg-bg-header-footer w-[50px] h-[50px]"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="ani font-semibold text-secondary-color text-2xl">
                R
              </span>{" "}
            </div>
          </div>
        </Link>{" "}
        <Link
          to="/signout"
          className="navIcon flex items-center transition-transform duration-75 ease-linear"
          aria-label="Sign Out page"
        >
          <div className="flex items-center transition-transform duration-75 ease-linear">
            <div
              className="rounded-full bg-bg-header-footer w-[50px] h-[50px]"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FiLogOut className="ani text-secondary-color text-2xl" />
            </div>
          </div>
        </Link>
        <Link
          to="/cart"
          className="navIcon transition-transform duration-75 ease-linear"
          aria-label="Cart page"
        >
          <div
            className="rounded-full bg-bg-header-footer w-[50px] h-[50px] relative transform origin-center hover:rotate-360"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              className="ani"
              src="src/assets/images/tree_icon.svg"
              alt=""
              style={{ width: "45px", height: "45px", borderRadius: "50%" }}
            />
            <div
              className="absolute top-[0.2rem] right-[0.2rem] bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
              style={{ transform: "translate(50%, -50%)" }}
            >
              0
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default AuthNavbar;
