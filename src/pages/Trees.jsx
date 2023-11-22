
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