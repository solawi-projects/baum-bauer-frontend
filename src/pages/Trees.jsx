import Apple from "../assets/images/trees_images/Apple.jpg";
import Apricot from "../assets/images/trees_images/Apricot.jpg";
import Cherry from "../assets/images/trees_images/Cherry.jpg";
import Peach from "../assets/images/trees_images/Peach.jpg";
import Plums from "../assets/images/trees_images/Plums.jpg";

import PageBreadcrumb from "../components/PageBreadcrumb";
import { HiHome } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import "../components/Tress.css";
const Sponsor = () => {
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Trees" };
  const data = [
    {
      id: 1,
      name: "Apple Tree",
      price: 19.99,
      currency: "€",
      image: Apple,
    },
    {
      id: 2,
      name: "Apricot Tree",
      price: 19.99,
      currency: "€",
      image: Apricot,
    },
    {
      id: 3,
      name: "Cherry Tree",
      price: 19.99,
      currency: "€",
      image: Cherry,
    },
    {
      id: 4,
      name: "Peach Tree",
      price: 19.99,
      currency: "€",
      image: Peach,
    },
    {
      id: 5,
      name: "Plums Tree",
      price: 19.99,
      currency: "€",
      image: Plums,
    },
    {
      id: 6,
      name: "Apple Tree",
      price: 19.99,
      currency: "€",
      image: Apple,
    },
    {
      id: 7,
      name: "Apricot Tree",
      price: 19.99,
      currency: "€",
      image: Apricot,
    },
    {
      id: 8,
      name: "Cherry Tree",
      price: 19.99,
      currency: "€",
      image: Cherry,
    },
    {
      id: 9,
      name: "Peach Tree",
      price: 19.99,
      currency: "€",
      image: Peach,
    },
    {
      id: 10,
      name: "Plums Tree",
      price: 19.99,
      currency: "€",
      image: Plums,
    },
    {
      id: 11,
      name: "Apple Tree",
      price: 19.99,
      currency: "€",
      image: Apple,
    },
    {
      id: 12,
      name: "Apricot Tree",
      price: 19.99,
      currency: "€",
      image: Apricot,
    },
    {
      id: 13,
      name: "Cherry Tree",
      price: 19.99,
      currency: "€",
      image: Cherry,
    },
    {
      id: 14,
      name: "Peach Tree",
      price: 19.99,
      currency: "€",
      image: Peach,
    },
    {
      id: 15,
      name: "Plums Tree",
      price: 19.99,
      currency: "€",
      image: Plums,
    },
  ];
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <div className=" backdrop-search"></div>
      <div className="py-10 h-20 bg-gray-100 px-2">
        <div className="max-w-auto mx-auto rounded-lg overflow-hidden md:max-w-xl md:max-h-m sm:max-w-xs">
          <div className="md:flex">
            <div className="w-full p-3 ">
              <div className="relative md:max-h-m">
                <i className="absolute fa fa-search text-gray-100 top-5 left-4"></i>
                <input
                  type="text"
                  className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                  name=""
                ></input>
                <span className="absolute top-4 right-5 border-l pl-4">
                  <IoIosSearch className="iconsearch" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto relative dropdown">
        <div
          id="dropdown-button "
          onClick={toggleDropdown}
          className="select-none border h-auto absolute top-10 right-40 w-40 border-gray-400 rounded px-5 py-2 cursor-pointer flex justify-between"
        >
          Options
          <IoIosArrowDown />
        </div>
        <div
          id="dropdown-menu"
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } absolute top-50 absolute top-20 h-auto right-40 w-400 border border-gray-300 bg-white shadow-md mt-2 transition-all duration-300`}
        >
          <div className="py-4 px-4 cursor-pointer hover:bg-gray-100">
            popularity
          </div>
          <div className="py-4 px-4 cursor-pointer hover:bg-gray-100">
            Latest
          </div>
          <div className="py-4 px-4 cursor-pointer hover:bg-gray-100">
            Price:Low-High
          </div>

          <div className="py-4 px-4 cursor-pointer hover:bg-gray-100">
            Price:High-Low
          </div>
        </div>
      </div>
      <div className=" flex  justify-center flex-wrap gap-10 pt-40 pb-40 ml-20 mr-20">
        {data.map((item, index) => (
          <div key={index} className="flex  pr items-center ">
            <div className="w-60 p-10 h-65 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
              <img
                className="w-40 h-40 object-cover rounded-t-md"
                src={item.image}
                alt={item.name}
              />
              <div className="mt-2">
                <h2 className="text-2xl font-bold text-gray-700">
                  {item.name}
                </h2>
                <button className="block text-xl font-semibold text-gray-700 cursor-auto">{`$${item.price}`}</button>

                <div className="mt-2 mb-1 flex justify-between ">
                  <button className=" Sponsorbutton text-lg block font-semibold py-2 px-4 text-green-100 hover:text-white rounded-lg shadow hover:shadow-md transition duration-300">
                    Sponsor
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">10</span> of{" "}
              <span className="font-medium">97</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <IoIosArrowDropleftCircle
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </a>
              {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-green-900 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                2
              </a>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                ...
              </span>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <IoIosArrowDroprightCircle
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sponsor;
