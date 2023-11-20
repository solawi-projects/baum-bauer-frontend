import React from "react";
import backgroundImage from "../assets/images/leaves_background_01.webp";
import { Link } from "react-router-dom";

const Signout = () => {
  return (
    <main>
      <div className="relative w-full mx-auto p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex items-center justify-center text-font-family-color">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top z-[-1]"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}
        ></div>

        <div className="flex flex-col justify-center items-center gap-[2rem] w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] bg-white rounded-[15px] p-8 z-9 shadow-lg mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]">
          <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
            Sign Out
          </h3>
          <p className="text-3xl text-secondary-color font-main-font tracking-wide mt-6 text-center">
            Are you sure you want to sign out?
          </p>
          <Link
            to="/"
            className="mt-4 px-8 py-2 bg-bg-header-footer text-font-family-color rounded-[50px] hover:scale-110 border border-[#9c988e] transition duration-4000 ease-linear"
            aria-label="Sign Out and go to the Home page"
          >
            Sign Out
          </Link>
        </div>
      </div>

      {/* Footer Image */}
      <img
        src="src/assets/images/biobaum_news_footer_img.webp"
        alt="Footer Image"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </main>
  );
};

export default Signout;
