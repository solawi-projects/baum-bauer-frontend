import Apple from "../assets/Trees/Apples.jpg";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

import { IoIosSearch } from "react-icons/io";
import { Dropdown } from 'flowbite-react';

import "../components/Tress.css";
const Sponsor = () => {
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
      name: "Apple Tree",
      price: 19.99,
      currency: "€",
      image: Apple,
    },
    {
      id: 3,
      name: "Apple Tree",
      price: 19.99,
      currency: "€",
      image: Apple,
    },
    {
      id: 4,
      name: "Apple Tree",
      price: 19.99,
      currency: "€",
      image: Apple,
    },
    {
      id: 5,
      name: "Apple Tree",
      price: 19.99,
      currency: "€",
      image: Apple,
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
      name: "Apple Tree",
      price: 19.99,
      currency: "€",
      image: Apple,
    },
    {
      id: 8,
      name: "Apple Tree",
      price: 19.99,
      currency: "€",
      image: Apple,
    },
    {
      id: 9,
      name: "Apple Tree",
      price: 19.99,
      currency: "€",
      image: Apple,
    },
    {
      id: 10,
      name: "Apple Tree",
      price: 19.99,
      currency: "€",
      image: Apple,
    },
  ];
  return (
    <div> <Breadcrumb
    aria-label=""
    className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
  >
    <Breadcrumb.Item href="/" icon={HiHome}>
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item>Sponsor</Breadcrumb.Item>
  </Breadcrumb>
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
      <Dropdown  label="Dropdown" inline >
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
      <div className=" flex  justify-center items-center flex-wrap gap-10 pt-40">
        {data.map((item, index) => (
          <div key={index} className="flex  items-center ">
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

                <div className="mt-2 mb-1 flex justify-between pl-1 pr-1">
                  <button className="block text-xl font-semibold text-gray-700 cursor-auto">{`$${item.price}`}</button>
                  <button className=" Sponsorbutton text-lg block font-semibold py-2 px-4 text-green-100 hover:text-white rounded-lg shadow hover:shadow-md transition duration-300">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sponsor;
