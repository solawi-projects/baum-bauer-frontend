import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaGear } from "react-icons/fa6";

const MobileDashboardLinks = () => {
  const [activeLink, setActiveLink] = useState("/dashboard");
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleMobile = () => {
    setIsMobile(!isMobile);
  };

  const closeDropdown = () => {
    setIsMobile(false);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className="md:hidden pb-[60px] relative">
      <button
        onClick={handleToggleMobile}
        className="bg-bg-header-footer w-[60px] h-[60px] rounded-[15px] absolute xs:top-[-20px] top-[-20px]  xs:left-0 left-0 z-20 flex justify-center items-center"
      >
        <FaGear className="text-[3rem] text-white-color" />
      </button>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <>
          <div className="w-[50%] absolute xs:top-[40px] top-[40px] xs:left-0 left-0 bg-white rounded-[10px] border border-bg-header-footer z-[1]">
            <div className="flex flex-col w-full">
              <NavLink
                aria-label="Dashboard"
                to="/dashboard"
                activeClassName="bg-bg-header-footer"
                className={`text-font-family-color block border-b rounded-t-[10px] border-bg-header-footer py-4 text-start pl-4 hover:bg-bg-header-footer ${
                  activeLink === "/dashboard" ? "bg-bg-header-footer" : ""
                }`}
              >
                Dashboard
              </NavLink>
              <NavLink
                aria-label="Update Profile"
                to="/update_profile"
                activeClassName="bg-bg-header-footer"
                className={`text-font-family-color block border-b  border-bg-header-footer py-4 text-start pl-4 hover:bg-bg-header-footer ${
                  activeLink === "/update_profile" ? "bg-bg-header-footer" : ""
                }`}
              >
                Profile
              </NavLink>
              <NavLink
                aria-label="Sponsorships"
                to="/user_sponsorships"
                activeClassName="bg-bg-header-footer"
                className={`text-font-family-color block border-b  border-bg-header-footer py-4 text-start pl-4 hover:bg-bg-header-footer ${
                  activeLink === "/user_sponsorships"
                    ? "bg-bg-header-footer"
                    : ""
                }`}
              >
                Sponsorships
              </NavLink>
              <NavLink
                aria-label="Change Password"
                to="/password_change"
                activeClassName="bg-bg-header-footer"
                className={`text-font-family-color block border-b  border-bg-header-footer py-4 text-start pl-4 hover:bg-bg-header-footer ${
                  activeLink === "/password_change" ? "bg-bg-header-footer" : ""
                }`}
              >
                Change Password
              </NavLink>
              <NavLink
                aria-label="Sign Out"
                to="/signout"
                activeClassName="bg-bg-header-footer"
                className={`text-font-family-color py-4 text-start pl-4 rounded-b-[10px] hover:bg-bg-header-footer ${
                  activeLink === "/signout" ? "bg-bg-header-footer" : ""
                }`}
              >
                Sign Out
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileDashboardLinks;
