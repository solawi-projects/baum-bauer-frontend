
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