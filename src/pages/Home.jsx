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
        <article className="w-full text-font-family-color flex flex-col justify-center z-[8] px-4 md:px-8 lg:px-12 xl:px-16 md:w-[50%] pt-6 sm:pt-0">
          <h2 className="text-2xl lg:text-3xl py-6  lg:py-10 xl:py-14 text-center">
            Sponsor a Tree: Our Mission
          </h2>
          <p className="font-semibold">
            Join us in a green revolution with a simple act that leaves a
            lasting impact. Our mission is to enrich the South German landscape
            by planting a tree for every sponsorship we receive. Each tree
            contributes to the biodiversity of the region, supports local
            ecosystems, and combats climate change. When you sponsor a tree,
            you're not just planting roots in the ground; you're growing a
            legacy that will flourish for generations to come.
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
          <h2 className="text-2xl lg:text-3xl py-6 lg:py-10 xl:py-14 text-center">
            About Us: Solawi Zabergäu
          </h2>
          <p className="font-semibold">
            At Solawi Zabergäu, we're more than just farmers; we're stewards of
            the earth. Nestled in the lush valleys of Southern Germany, our
            community-supported agriculture initiative is dedicated to
            sustainable farming practices that respect and nourish the land. Our
            collective efforts focus on producing organic, locally-sourced food
            while strengthening the bond between the people and the planet. By
            supporting us, you become a part of a movement that cherishes
            nature's bounty and upholds the values of ecological responsibility
            and harmony.
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
