import PageBreadcrumb from "../components/PageBreadcrumb";
import { HiHome } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import { TreeData } from "../components/TreeData";

import Search from '../components/Search'

import "../components/Tress.css";
import { Link } from "react-router-dom";

const Sponsor = () => {
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
      const data = await TreeData(limit,skip);
      console.log(data.trees)

      setTree(data.trees);
      setTotalTree(data.total);
    } catch (error) {
      setErr("Data was not brought");
    }
  };
  useEffect(() => {
    
    getTrees();
  },[skip]);

 
  return (
    <div>
      {" "}
      <PageBreadcrumb
        activeLinks={aLinkValues}
        deActiveLink={daLinkValues}
      />{" "}
      <p>{err}</p>     
           <Search updateTree={setTree}/>
  
      <div className="h-auto relative dropdown">
        {" "}
        <div
          id="dropdown-button "
          onClick={toggleDropdown}
          className="select-none border h-auto absolute top-10 right-40 w-40 border-gray-400 rounded px-5 py-2 cursor-pointer flex justify-between"
        >
          {" "}
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
        {tree.map((item, index) => (
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
                <button className="block text-xl font-semibold text-gray-700 cursor-auto">{`€${parseFloat(
                  item.price.$numberDecimal
                )}`}</button>

                <div className="mt-2 mb-1 flex justify-between ">
                  <Link
                    to={`/trees/${item._id}`}
                    className=" Sponsorbutton text-lg block font-semibold py-2 px-4 hover:text-white hover:bg-lime-800 rounded-lg shadow hover:shadow-md transition duration-300"
                  >
                    view more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* pagination buttons */}<h2>
          Showing {limit} to {skip + limit} of {totalTree} FAQs
        </h2>
      <div className="text-2xl flex justify-center gap-7 m-4 text-font-family-color">
        <button onClick={handlePrev} >
          Previous
        </button>
        <button onClick={handleNex}>
          Next
        </button>
      </div>

    </div>
  );
};
export default Sponsor;
