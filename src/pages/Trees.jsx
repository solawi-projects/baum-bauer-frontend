import PageBreadcrumb from "../components/PageBreadcrumb";
import { HiHome } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import { TreeData } from "../components/TreeData";

import footerImage from "../assets/images/biobaum_gallery_footer_img.webp";
import Search from "../components/Search";
import "../components/Trees.css";

import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/gallery_images/leaves_background_03.png";

const Tree = () => {
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Trees" };
  const [tree, setTree] = useState([]);

  const [err, setErr] = useState("");
  const [totalTree, setTotalTree] = useState(0);
  const limit = 4;
  const [skip, setSkip] = useState(0);
 
  const handlePrev = () => {
    const newSkip = skip - limit;
    if (newSkip <= 0) {
      setSkip(0);
    }
    setSkip(newSkip);
  };

  const handleNex = () => {
    setSkip(limit + skip);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const getTrees = async () => {
    try {
      const data = await TreeData(limit, skip);
      console.log(data.trees);

      setTree(data.trees);
      setTotalTree(data.total);
    } catch (error) {
      setErr("Data was not brought");
    }
  };
  let endvalue=skip+limit;
  let startvalue=skip+1
  if(endvalue>=totalTree){
    endvalue=totalTree
  }

  
  useEffect(() => {
    getTrees();
  }, [skip]);

  return (
    <div>
      {" "}
      <PageBreadcrumb
        activeLinks={aLinkValues}
        deActiveLink={daLinkValues}
      />{" "}
      <p>{err}</p>
      <Search updateTree={setTree} limit={limit} skip={skip}/>
      <div className=" flex  justify-center flex-wrap gap-10 pt-20 pb-40">
        <div className="flex flex-row justify-start">
          <div className="flex flex-row justify-start infinite-animation">
            <div className="text-3xl font-main-font text-secondary-color tracking-wide border-b-2 border-bg-header-footer inline-block ">
              Stand with us for a greener world – sponsor a tree and grow a
              legacy of environmental stewardship.
            </div>
            <img
              src="/src/assets/tree.png"
              alt="Small Photo"
              className="w-[40px] h-[40px] ml-2"
            />
          </div>
        </div>

        <div className="relative w-full mx-auto p-4  md:pb-[40px] lg:pb-[100px] xl:pb-[120px]  border-t-2 border-bg-header-footer flex flex-col  justify-center flex-wrap gap-10 pt-40 pb-40">
          {/* Overlay with background image and opacity */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top z-[-1]"
            style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.1 }}
          ></div>

          <div className=" h-auto absolute top-[0px] right-[-80px] dropdown z-[8]">
            <div
              id="dropdown-button "
              onClick={toggleDropdown}
              className="w-[250px] select-none border h-auto absolute top-10 right-40  border-bg-header-footer rounded-[10px] px-5 py-4 cursor-pointer flex justify-between items-center text-font-family-color text-lg bg-white-color"
            >
              Options
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
              } absolute top-[94px]   h-auto right-40 w-[250px] rounded-[10px] border border-bg-header-footer bg-white shadow-md mt-2 transition-all duration-300 text-font-family-color`}
            >
              <div className="py-4 px-4 cursor-pointer hover:bg-bg-header-footer border-b border-bg-header-footer rounded-t-[10px] text-lg">
                Popularity
              </div>
              <div className="py-4 px-4 cursor-pointer hover:bg-bg-header-footer border-b border-bg-header-footer text-lg">
                Latest
              </div>
              <div className="py-4 px-4 cursor-pointer hover:bg-bg-header-footer border-b border-bg-header-footer text-lg">
                Price: Low-High
              </div>
              <div className="py-4 px-4 cursor-pointer hover:bg-bg-header-footer rounded-b-[10px] text-lg">
                Price: High-Low
              </div>
            </div>
          </div>

          <h2 className="container mx-auto my-5 pt-16 text-2xl flex justify-center items-center">
            Showing {startvalue} to {endvalue} of {totalTree} Trees
          </h2>

          <div className="flex justify-center items-center gap-8">
            {tree.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className=" w-60 p-4 h-65 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
                  <img
                    className="w-full h-[220px] object-cover rounded-[10px] mb-10"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="mt-2">
                    <div className="flex items-center mb-4">
                      <img
                        src="/src/assets/tree.png"
                        alt="Tree Icon"
                        className="w-[30px] h-[30px] mr-2"
                      />{" "}
                      <h3 className="text-2xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                        {item.name}
                      </h3>
                    </div>
                    <button className="block text-md text-secondary-color cursor-auto">{`€ ${parseFloat(
                      item.price.$numberDecimal
                    )}`}</button>

                    <div className="mt-2 mb-1 flex justify-start">
                      <Link
                        to={`/trees/${item._id}`}
                        className="text-center w-full px-4 py-2 bg-bg-header-footer text-font-family-color rounded-[10px]   hover:bg-lighter-primary transition duration-4000 ease-linear mt-4 sm:mt-0"
                      >
                        view more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-2xl flex justify-center gap-7 m-4 text-font-family-color">
          <button onClick={handlePrev} disabled={skip === 0}>
            Previous
          </button>
          <button onClick={handleNex} disabled={skip + limit >= totalTree}>
            Next
          </button>
        </div>
      </div>
      {/* pagination buttons */}
      <img
        src={footerImage}
        alt="Footer Image"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </div>
  );
};
export default Tree;
