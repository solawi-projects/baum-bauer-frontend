import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthNavbar from "./AuthNavbar";

const DesktopNavbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  /* Handle DesktopNavbar on Scroll */
  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarVisible(window.scrollY <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const desktopNavbarStyle = {
    position: isNavbarVisible ? "sticky" : "fixed",
    top: "0",
    width: "100%",
    zIndex: 1000,
  };

  return (
    <>
      {isNavbarVisible && <AuthNavbar />}
      <nav
        className="flex justify-center items-center bg-bg-header-footer h-[70px] font-general-font text-font-family-color text-[1rem]"
        style={desktopNavbarStyle}
      >
        {/* DesktopNavbar Links */}
        <div className="flex justify-center items-center h-[60px] w-[90%] bg-white-color rounded-[50px]">
          <div className="border-r px-2 sm:px-4 lg:px-8 xl:px-14 flex items-center hover:scale-110 transition-transform duration-400 ease-linear hover:text-dark-gray">
            <Link to="/" aria-label="Home page">
              Home
            </Link>
          </div>
          <div className="border-r px-2 sm:px-4 lg:px-8 xl:px-14 flex items-center hover:scale-110 transition-transform duration-400 ease-linear hover:text-dark-gray">
            <Link to="/sponsor" aria-label="Sponsor page">
              Sponsor
            </Link>
          </div>
          <div className="border-r px-2 sm:px-4 lg:px-8 xl:px-14 flex items-center hover:scale-110 transition-transform duration-400 ease-linear hover:text-dark-gray">
            <Link to="/news" aria-label="News page">
              News
            </Link>
          </div>
          <div className="border-r px-2 sm:px-4 lg:px-8 xl:px-14 flex items-center hover:scale-110 transition-transform duration-400 ease-linear hover:text-dark-gray">
            <Link to="/about" aria-label="About page">
              About
            </Link>
          </div>
          <div className="border-r px-2 sm:px-4 lg:px-8 xl:px-14 flex items-center hover:scale-110 transition-transform duration-400 ease-linear hover:text-dark-gray">
            <Link to="/gallery" aria-label="Gallery page">
              Gallery
            </Link>
          </div>
          <div className="border-r px-2 sm:px-4 lg:px-8 xl:px-14 flex items-center hover:scale-110 transition-transform duration-400 ease-linear hover:text-dark-gray">
            <Link to="/faq" aria-label="FAQ page">
              FAQ
            </Link>
          </div>
          <div className="px-2 sm:px-4 lg:px-8 xl:px-14 flex items-center hover:scale-110 transition-transform duration-400 ease-linear hover:text-dark-gray">
            <Link to="/contact" aria-label="Contact page">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DesktopNavbar;
