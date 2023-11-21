/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/images/gallery_images/leaves_background_03.png";
import closeMenu from "../assets/images/close_menu.svg";
import { Fade } from "react-awesome-reveal";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import PageBreadcrumb from "../components/PageBreadcrumb";
import Feedback from "../components/Feedback";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showAllImages, setShowAllImages] = useState(window.innerWidth > 1024);
  const [selectedIndex, setSelectedIndex] = useState(null); // Add this line

  /* Image Urls */
  const imageUrls = [
    "src/assets/images/galleryImages/biobaum_gallery_img_01.webp",
    "src/assets/images/galleryImages/biobaum_gallery_img_02.webp",
    "src/assets/images/galleryImages/biobaum_gallery_img_03.webp",
    "src/assets/images/galleryImages/biobaum_gallery_img_04.webp",
    "src/assets/images/galleryImages/biobaum_gallery_img_05.webp",
    "src/assets/images/galleryImages/biobaum_gallery_img_06.webp",
    "src/assets/images/galleryImages/biobaum_gallery_img_07.webp",
    "src/assets/images/galleryImages/biobaum_gallery_img_08.webp",
    "src/assets/images/galleryImages/biobaum_gallery_img_09.webp",
    "src/assets/images/galleryImages/biobaum_gallery_img_10.webp",
    "src/assets/images/galleryImages/biobaum_gallery_img_11.webp",
    "src/assets/images/galleryImages/biobaum_gallery_img_12.webp",
    "src/assets/images/galleryImages/biobaum_gallery_img_13.webp",
    "src/assets/images/galleryImages/biobaum_gallery_img_14.webp",
    "src/assets/images/galleryImages/biobaum_gallery_img_15.webp",
    "src/assets/images/biobaum_sapling_03.webp",
  ];

  /* Image Titles */
  const imageTitles = [
    "Planting Hope: The First Sapling",
    "Sustainable Futures: Planting the Seeds of Change",
    "Nurturing Nature: Young Trees in Caring Hands",
    "Eco Warriors: Volunteers Growing a Greener Tomorrow",
    "Shades of Green: People and Saplings in Perfect Harmony",
    "Seeds of Change: Individuals Making a Forest Impact",
    "Sustainable Steps: Walking Towards a Greener Tomorrow",
    "Sapling Stories: Each Tree Tells a Tale of Hope",
    "Eco-Heroes Unite: Planting Trees for Generations to Come",
    "United for Green: People and Saplings in Solidarity",
    "Budding Bonds: Planting Friendship, Growing Trees",
    "Raising Green Champions: Community Tree Planting",
    "Tree of Life: A Symphony of Saplings and Smiles",
    "Earth's Symphony: People and Saplings in Harmony",
    "Green Pawsitivity: Cats Spreading Joy, One Sapling at a Time",
    "Shaping Tomorrow: Individuals Crafting a Forest Legacy",
  ];

  /* Handele ShowAllImages and ShowFewerImages on Screens <= 1024 */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000 && !showAllImages) {
        setShowAllImages(true);
      } else if (window.innerWidth <= 1024 && showAllImages) {
        setShowAllImages(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showAllImages]);

  const toggleShowAllImages = () => {
    setShowAllImages(!showAllImages);
  };

  const displayedImages = showAllImages ? imageUrls : imageUrls.slice(0, 6);

  /* Handle Open Image */
  const openImage = (imgSrc) => {
    setSelectedImg(imgSrc);
  };

  /* Handle Close Image */
  const closeImage = () => {
    setSelectedImg(null);
  };

  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Gallery" };
  return (
    <div className="bg-bg-page-color text-font-family-color">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <div className="relative w-full mx-auto p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-top"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.1 }}
        ></div>

        <div className="relative z-9">
          <h2 className="text-5xl md:text-7xl mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px] mb-[15px] text-center font-main-font tracking-wide text-[#5a6448]">
            Gallery
          </h2>

          {/* Gallery Page Description */}
          <p className="w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto text-center text-font-family-color text-md lg:text-xl xl:text-2xl mb-[25px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px]">
            Welcome to our gallery, where each tree tells a story of growth,
            resilience, and the enduring bond between nature and us. This
            collection of images captures the heart of our tree sponsorship
            program – a testament to the positive impact we can make on the
            environment and future generations. Journey through the seasons with
            us and witness the remarkable transformation of each tree, fostered
            by the care and dedication of our community of sponsors.
          </p>

          {/* Image content */}
          <Fade delay={100} cascade damping={0.1} duration={3000}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:px-10 lg:px-20 xl:px-40">
              {displayedImages.map((url, index) => (
                <div
                  key={index}
                  className="aspect-square relative cursor-pointer border border-bg-header-footer overflow-hidden"
                  onClick={() => openImage(url)}
                  style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: "cover",
                    borderWidth: "2px",
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onMouseLeave={() => setSelectedIndex(null)}
                >
                  <img
                    src={url}
                    alt={`Image ${imageTitles[index]}`}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 transition-transform duration-300 ${
                      selectedIndex === index ? "scale-100" : "scale-0"
                    }`}
                  >
                    <p className="text-white text-center text-sm md:text-base lg:text-lg whitespace-normal">
                      {imageTitles[index]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Fade>

          {/* Toggle Button for Show All/Fewer Images */}
          <button
            onClick={toggleShowAllImages}
            className="block lg:hidden mx-auto px-8 py-2 mt-4 bg-bg-header-footer text-font-family-color rounded-[50px] hover:scale-110 hover:border border-[#9c988e] transition duration-4000 ease-linear"
            aria-label="Show All/Fewer Images"
          >
            {showAllImages ? "Show Fewer Photos" : "Show All Images"}
          </button>
        </div>

        {/* Modal for Selected Image */}
        {selectedImg && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
            onClick={closeImage}
          >
            <Fade delay={100} cascade damping={0.1} duration={1000}>
              <div
                className="bg-white p-2 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end p-2 mb-2">
                  {/* Close Menu Button */}
                  <button
                    onClick={closeImage}
                    className="text-lg font-bold w-[25px] h-[25px]"
                    aria-label="Close modal"
                  >
                    <img src={closeMenu} alt="Close Menu" />
                  </button>
                </div>
                <img src={selectedImg} alt="" className="w-full h-[800px]" />
                {/* Image Title */}
                <div className="text-center p-2 absolute bottom-0 left-0 right-0">
                  <p className="bg-white bg-opacity-80 p-4 text-dark-gray">
                    {imageTitles[imageUrls.indexOf(selectedImg)]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        )}
      </div>{" "}
      <Feedback />
      {/* Footer Image */}
      <img
        src="src/assets/images/biobaum_gallery_footer_img.png"
        alt="Footer Image"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </div>
  );
};

export default Gallery;
