import PageBreadcrumb from "../components/PageBreadcrumb";
import { HiHome } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import { TreeData } from "../components/TreeData";
import footerImage from "../assets/images/biobaum_gallery_footer_img.webp";
import Pagination from "../components/Pagination";
import "../components/Tress.css";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/gallery_images/leaves_background_03.png";

const Sponsor = () => {
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Trees" };
  const [tree, setTree] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);
  const [err, setErr] = useState("");
  const lasttree = currentPage * postPerPage;
  const firsttree = lasttree - postPerPage + 1;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const getTrees = async () => {
      try {
        const data = await TreeData();
        setTree(data);
      } catch (error) {
        setErr("Data was not brought");
      }
    };

    getTrees();
  }, []);

  const indexofLastPost = currentPage * postPerPage;
  const indexofFirstPost = indexofLastPost - postPerPage;
  const currentPosts = tree.slice(indexofFirstPost, indexofLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {" "}
      <PageBreadcrumb
        activeLinks={aLinkValues}
        deActiveLink={daLinkValues}
      />{" "}
      <p>{err}</p> <div className="w-full backdrop-search"></div>{" "}
      <div className="py-10 h-20 bg-lighter-primary px-2">
        {" "}
        <div className="max-w-auto mx-auto rounded-lg overflow-hidden md:max-w-xl md:max-h-m sm:max-w-xs">
          {" "}
          <div className="md:flex">
            {" "}
            <div className="w-full p-3 ">
              {" "}
              <div className="relative md:max-h-m">
                {" "}
                <i className="absolute fa fa-search text-gray-100 top-5 left-4"></i>{" "}
                <input
                  type="text"
                  placeholder="Search "
                  className="bg-white h-14 w-full px-12 rounded-lg border-darker-primary input hover:cursor-pointer text-xl italic !important"
                  name=""
                ></input>{" "}
                <span className="absolute top-4 right-5 border-l pl-4 cursor-pointer">
                  {" "}
                  <IoIosSearch className="iconsearch text-darker-primary" />{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
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

        <div className="relative w-full mx-auto p-4  md:pb-[40px] lg:pb-[100px] xl:pb-[120px]  border-t-2 border-bg-header-footer flex  justify-center flex-wrap gap-10 pt-40 pb-40">
          {/* Overlay with background image and opacity */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top z-[-1]"
            style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.1 }}
          ></div>
          <div className=" h-auto absolute top-[0px] right-[-80px] dropdown z-[8]">
            {" "}
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
          {currentPosts.map((item, index) => (
            <div key={index} className="flex  pr items-center ">
              <div className="w-60 p-4 h-65 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
                <img
                  className="w-40 h-40 object-cover rounded-t-md"
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
      </div>{" "}
      <Pagination
        postPerPage={postPerPage}
        currentPage={currentPage}
        totalpost={tree.length}
        paginate={paginate}
        firsttree={firsttree}
        lasttree={lasttree}
      />
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
export default Sponsor;
