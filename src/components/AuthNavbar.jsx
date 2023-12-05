/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import authBgImage from "../assets/images/biobaum_landing_top_nav_img.png";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdLogIn,
  IoMdLogOut,
} from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CartContext } from "../store/CartContext";
import { AuthContext } from "../contexts/AuthContext";
import { Tooltip } from "flowbite-react";

const AuthNavbar = () => {
  const { loggedIn, authUser } = useContext(AuthContext);
  const { cartTrees } = useContext(CartContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
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
      <div className="flex space-x-4 items-center">
        {!loggedIn && (
          <Link
            to="/login"
            className="navIcon flex items-center"
            aria-label="Login page"
          >
            <Tooltip content="click here to login">
              <div className="flex items-center text-2xl text-bold py-2 px-3 hover:bg-darkgreen-color hover:text-bg-header-footer rounded-md">
                <IoMdLogIn className="" />
                <span>&nbsp;Login</span>
              </div>
            </Tooltip>
          </Link>
        )}
        {loggedIn && (
          <div className="flex items-center">
            <span className="text-lg">Welcome,</span>
            <div className="h-auto dropdown">
              <div
                id="dropdown-button"
                onClick={toggleDropdown}
                className="w-full select-none h-auto top-10 right-40  border-bg-header-footer rounded-[10px] px-5 py-4 cursor-pointer flex justify-between items-center text-font-family-color text-lg"
              >
                <Tooltip content="click for seeing logout button">
                  <Link
                    to="/dashboard"
                    aria-label="user dashboard, link to dashboard"
                  >
                    <span className="text-xl text-bg-header-footer font-bold">
                      {authUser.lastName}&nbsp;
                    </span>
                  </Link>
                </Tooltip>
                {isDropdownOpen ? (
                  <IoIosArrowUp className="text-2xl" />
                ) : (
                  <IoIosArrowDown className="text-2xl" />
                )}
              </div>
              <div
                id="dropdown-menu"
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } absolute top-[72px]  h-auto right-20 w-auto rounded-[8px] border border-bg-header-footer bg-white shadow-lg mt-2 transition-all duration-300 text-font-family-color`}
              >
                <div className="py-4 px-6 cursor-pointer hover:bg-bg-header-footer border-b border-bg-header-footer rounded-t-[2px] text-lg">
                  <Link
                    to="/dashboard"
                    className="navIcon flex items-center transition-transform duration-75 ease-linear"
                    aria-label="dashboard page"
                  >
                    <Tooltip content="navigate to user profile">
                      <div className="flex items-center gap-3">
                        <CgProfile className="ani text-secondary-color text-xl" />
                        <span>Profile</span>
                      </div>
                    </Tooltip>
                  </Link>
                </div>
                <div className="py-4 px-6 cursor-pointer hover:bg-bg-header-footer border-b border-bg-header-footer text-lg">
                  <Link
                    to="/signout"
                    className="navIcon flex items-center transition-transform duration-75 ease-linear"
                    aria-label="Sign Out page"
                  >
                    <div className="flex items-center transition-transform duration-75 ease-linear">
                      <Tooltip content="click here to logout">
                        <div className="flex items-center justify-start gap-3">
                          <IoMdLogOut className="ani text-secondary-color text-xl" />
                          <span>Logout</span>
                        </div>
                      </Tooltip>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/cart"
              className="navIcon transition-transform duration-75 ease-linear"
              aria-label="Cart page"
            >
              <Tooltip content="click here to your cart detail">
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
                    src="/src/assets/images/tree_icon.svg"
                    alt=""
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                    }}
                  />
                  <div
                    className="absolute top-[0.2rem] right-[0.2rem] bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                    style={{ transform: "translate(50%, -50%)" }}
                  >
                    {cartTrees.length}
                  </div>
                </div>
              </Tooltip>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AuthNavbar;
