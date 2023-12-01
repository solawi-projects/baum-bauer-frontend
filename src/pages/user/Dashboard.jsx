import React, { useContext } from "react";
import DashboardLinks from "../../components/DashboardLinks";
import MobileDashboardLinks from "../../components/MobileDashboardLinks";
import backgroundImage from "../../assets/images/leaves_background_01.webp";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import PageBreadcrumb from "../../components/PageBreadcrumb";
import { AuthContext } from "../../contexts/AuthContext";

const DashboardContent = () => {
  const { authUser } = useContext(AuthContext);

  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Dashboard" };

  return (
    <main>
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <div className="relative w-full mx-auto xs:p-0 p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex items-center justify-center text-font-family-color">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top z-[-1]"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}
        ></div>

        <div className="w-[100%] lg:w-[90%] xl:w-[80%] bg-white rounded-[15px] p-6 xs:p-2 md:p-4 lg:p-8 z-9 shadow-lg mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]">
          <div className="bg-secondary-color rounded-[15px] w-[100%] p-4 mx-auto text-white flex flex-row">
            <div
              className="rounded-full bg-white w-[40px] h-[40px] mr-[10px]"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="src/assets/images/tree_icon.svg"
                alt=""
                style={{ width: "35px", height: "35px", borderRadius: "50%" }}
              />
            </div>{" "}
            <h3 className="text-4xl font-main-font"> Dashboard</h3>
          </div>
          <div className="flex flex-col md:flex-row mt-10 gap-[1rem] lg:gap-[2rem]">
            {/* Dashboard Links */}
            <DashboardLinks />
            <MobileDashboardLinks />
            {/* Sponsorships */}
            <div className="w-[100%] md:w-[25%]">
              <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                Welcome,&nbsp;{authUser.firstName}&nbsp;{authUser.lastName}
              </h3>
              <div className="flex flex-col justify-center items-center gap-[2rem] bg-white rounded-[10px] border border-bg-header-footer mt-4 p-4">
                <h3 className="text-3xl text-secondary-color font-main-font tracking-wide">
                  Sponsorships
                </h3>
                <div className="w-16 h-24 bg-secondary-color rounded-full flex items-center justify-center">
                  <p className="text-white text-4xl font-main-font">0</p>
                </div>{" "}
                <Link
                  to="/user_sponsorships"
                  className="underline hover:scale-110 transition-transform duration-400 ease-linear hover:text-dark-gray"
                >
                  <img
                    src="/src/assets/tree.png"
                    alt="Tree Icon"
                    className="w-[40px] h-[40px] block mx-auto"
                  />
                  View Sponsorships
                </Link>
              </div>
            </div>{" "}
            {/* Delivery Address */}
            <div className="w-[100%] md:w-[50%]">
              <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                Delivery Address
              </h3>
              <div className="flex flex-col justify-center items-start gap-[0.4rem] bg-white rounded-[10px] border border-bg-header-footer mt-4 xs:p-2 p-4">
                <p className="text-font-family-color italic">
                  <span className="font-semibold">Full Name:</span>&nbsp;
                  {authUser.firstName}&nbsp;{authUser.lastName}
                </p>{" "}
                <p className="text-font-family-color italic">
                  <span className="font-semibold">Email:</span>
                  &nbsp;{authUser.email}
                </p>{" "}
                <p className="text-font-family-color italic">
                  <span className="font-semibold">Phone Number:</span>&nbsp;
                  {authUser.mobilePhone}
                </p>{" "}
                <p className="text-font-family-color italic">
                  <span className="font-semibold">Address:</span>&nbsp;
                  {authUser.address.address1};&nbsp;{authUser.address.address2}
                </p>{" "}
                <p className="text-font-family-color italic">
                  <span className="font-semibold">City:</span>&nbsp;
                  {authUser.address.city}
                </p>{" "}
                <p className="text-font-family-color italic">
                  <span className="font-semibold">Postcode:</span>&nbsp;
                  {authUser.address.zipCode}
                </p>{" "}
                <p className="text-font-family-color italic">
                  <span className="font-semibold">State:</span>&nbsp;
                  {authUser.address.state}
                </p>{" "}
                <p className="text-font-family-color italic">
                  <span className="font-semibold">Country:</span>&nbsp;
                  {authUser.address.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <img
        src="src/assets/images/biobaum_gallery_footer_img.webp"
        alt="Footer Image"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </main>
  );
};

export default DashboardContent;
