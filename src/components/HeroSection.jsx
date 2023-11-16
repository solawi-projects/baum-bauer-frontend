import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/BioBaumBauer_Logo.svg";
import backgroundImage from "../assets/images/biobaum_landing_background_img.png";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[650px] xs:h-[700px] sm:h-[600px] md:h-[800px] bg-cover bg-left-bottom"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Logo Image */}
      <div className="flex justify-center items-start pt-4 md:pt-8">
        <img
          src={logoImage}
          alt="BioBaumBauer Logo"
          className="h-[200px] w-[200px] md:h-[350px] md:w-[350px]"
          width="100%"
          height="100%"
        />
      </div>

      {/* Hero Text and Button */}
      <div className="w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] m-auto">
        <div className="flex flex-col justify-center items-center mt-8">
          <h1 className="text-4xl md:text-5xl text-white font-main-font tracking-widest">
            Hero Title
          </h1>
          <p className="mt-2 text-[1rem] md:text-[1.2rem] text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
          <Link
            to="/sponsor"
            className="mt-4 px-8 py-2 bg-bg-header-footer text-font-family-color rounded-[50px] hover:scale-110 hover:border border-[#9c988e] transition duration-4000 ease-linear"
            aria-label="Sponsor page"
          >
            Learn More...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
