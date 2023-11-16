import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/images/leaves_background_03.png";
import closeMenu from "../assets/images/close_menu.svg";
import { Fade } from "react-awesome-reveal";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showAllImages, setShowAllImages] = useState(window.innerWidth > 1024);
  const [selectedIndex, setSelectedIndex] = useState(null); // Add this line

  /* Image Urls */
  const imageUrls = [
    "src/assets/images/biobaum_sapling_01.png",
    "src/assets/images/biobaum_sapling_02.png",
    "src/assets/images/biobaum_sapling_03.png",
    "src/assets/images/biobaum_sapling_04.png",
    "src/assets/images/biobaum_sapling_01.png",
    "src/assets/images/biobaum_sapling_02.png",
    "src/assets/images/biobaum_sapling_03.png",
    "src/assets/images/biobaum_sapling_04.png",
    "src/assets/images/biobaum_sapling_01.png",
    "src/assets/images/biobaum_sapling_02.png",
    "src/assets/images/biobaum_sapling_03.png",
    "src/assets/images/biobaum_sapling_04.png",
    "src/assets/images/biobaum_sapling_01.png",
    "src/assets/images/biobaum_sapling_02.png",
    "src/assets/images/biobaum_sapling_03.png",
    "src/assets/images/biobaum_sapling_04.png",
  ];

  /* Image Titles */
  const imageTitles = [
    "Title for image 1",
    "Title for image 2",
    "Title for image 3",
    "Title for image 4",
    "Title for image 5",
    "Title for image 6",
    "Title for image 7",
    "Title for image 8",
    "Title for image 9",
    "Title for image 10",
    "Title for image 11",
    "Title for image 12",
    "Title for image 13",
    "Title for image 14",
    "Title for image 15",
    "Title for image 16",
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

  return (
    <main>
      <Breadcrumb
        aria-label=""
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Gallery</Breadcrumb.Item>
      </Breadcrumb>
      <div className="relative w-full mx-auto p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px]">
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
                <img src={selectedImg} alt="" className="w-full h-auto" />
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
      {/* Footer Image */}
      <img
        src="src/assets/images/biobaum_gallery_footer_img.png"
        alt="Footer Image"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </main>
  );
};

export default Gallery;
