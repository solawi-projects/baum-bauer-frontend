
import PageBreadcrumb from "../components/PageBreadcrumb";
import { HiHome } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useState,useEffect } from "react";

import axios from "../utils/axiosInstance";
import Pagination from "../components/Pagination";

import "../components/Tress.css";
const Sponsor = () => {
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Trees" };
  const [tree,setTree] = useState([]);
 const [currentPage,setCurrentPage] = useState(1);
 const [postPerPage]=useState(4)
  const [err, setErr] = useState("");
const lasttree=currentPage*postPerPage;
const firsttree=lasttree-postPerPage+1
const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const getTrees = async() => {
    try {
     await axios
        .get(`/api/Tree/get`)
        .then((response) => {
          console.log("Res:", response);
          if (response.status === 200) {
            console.log(response.data)
            setTree(response.data);
          }
        })
        .catch((Err) => {
          if (Err.response.status === 500) {
            setErr("Data was not brought");
          }
        });
    } catch (error) {
      console.error("Error fetching Trees:", error.message);
      throw error;
    }
    
  };
  useEffect(() => {
    getTrees();
  }, []);
  const indexofLastPost =currentPage*postPerPage;
const indexofFirstPost=indexofLastPost-postPerPage;
const currentPosts=tree.slice(indexofFirstPost,indexofLastPost)
const paginate=(pageNumber)=>setCurrentPage(pageNumber)
return ( <div> <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} /> <p>{err}</p> <div className=" backdrop-search"></div> <div className="py-10 h-20 bg-gray-100 px-2"> <div className="max-w-auto mx-auto rounded-lg overflow-hidden md:max-w-xl md:max-h-m sm:max-w-xs"> <div className="md:flex"> <div className="w-full p-3 "> <div className="relative md:max-h-m"> <i className="absolute fa fa-search text-gray-100 top-5 left-4"></i> <input type="text" className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer" name="" ></input> <span className="absolute top-4 right-5 border-l pl-4"> <IoIosSearch className="iconsearch" /> </span> </div> </div> </div> </div> </div> <div className="h-auto relative dropdown"> <div id="dropdown-button " onClick={toggleDropdown} className="select-none border h-auto absolute top-10 right-40 w-40 border-gray-400 rounded px-5 py-2 cursor-pointer flex justify-between" > Options

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
