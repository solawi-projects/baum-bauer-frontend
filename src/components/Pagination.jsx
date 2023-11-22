import  { useState } from 'react'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
// eslint-disable-next-line react/prop-types
const Pagination = ({postPerPage,totalpost,paginate,firsttree,lasttree,currentPage}) => {       
console.log(totalpost)
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(totalpost/postPerPage);i++) {
        pageNumbers.push(i)
