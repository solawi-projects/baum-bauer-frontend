/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "../components/HeroSection";
import backgroundImage from "../assets/images/leaves_background_03.png";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />
      <section className="relative flex flex-col items-center justify-center p-0 md:flex-row md:justify-between md:p-10 xl:p-20">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center bg-bg-header-footer"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: 0.2,
          }}
        ></div>

        {/* Content */}
        {/* Article - Sponsor a Tree: Our Mission */}
        <article className="w-full text-font-family-color flex flex-col justify-center z-[8] px-4 md:px-8 lg:px-12 xl:px-16 md:w-[50%]">
          <h2 className="text-2xl lg:text-3xl py-6 lg:py-10 xl:py-14 text-center font-semibold">
            Sponsor a Tree: Our Mission
          </h2>
          <p className="font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="py-4 md:py-8 lg:py-12 xl:py-16 flex flex-row justify-center gap-[1rem]">
            <img
              src="src/assets/images/biobaum_sapling_01.png"
              alt="Sapling Tree"
              className="w-[50%] border border-white"
              style={{ borderWidth: "10px" }}
              width="100%"
              height="100%"
              loading="lazy"
            />
            <img
              src="src/assets/images/biobaum_sapling_02.png"
              alt="Sapling Tree"
              className="w-[50%] border border-white"
              style={{ borderWidth: "10px" }}
              width="100%"
              height="100%"
              loading="lazy"
            />
          </div>
        </article>
        {/* Article - About Us: Solawi Zabergäu */}
        <article className="w-full text-font-family-color flex flex-col justify-center z-[8] px-4 md:px-8 lg:px-12 xl:px-16 md:w-[50%]">
          <h2 className="text-2xl lg:text-3xl py-6 lg:py-10 xl:py-14 text-center font-semibold">
            About Us: Solawi Zabergäu
          </h2>
          <p className="font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>{" "}
          <div className="py-4 md:py-8 lg:py-12 xl:py-16 flex flex-row justify-center gap-[1rem]">
            <img
              src="src/assets/images/biobaum_sapling_03.png"
              alt="Sapling Tree"
              className="w-[50%] border border-white"
              style={{ borderWidth: "10px" }}
              width="100%"
              height="100%"
              loading="lazy"
            />
            <img
              src="src/assets/images/biobaum_sapling_04.png"
              alt="Sapling Tree"
              className="w-[50%] border border-white"
              style={{ borderWidth: "10px" }}
              width="100%"
              height="100%"
              loading="lazy"
            />
          </div>
        </article>
      </section>
      {/* Footer Image */}
      <img
        src="src/assets/images/biobaum_landing_footer_img.png"
        alt="Footer Image"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </main>
  );
};

export default Home;
