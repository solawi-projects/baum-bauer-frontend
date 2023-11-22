import  { useState } from 'react'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
// eslint-disable-next-line react/prop-types
const Pagination = ({postPerPage,totalpost,paginate,firsttree,lasttree,currentPage}) => {       
console.log(totalpost)
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(totalpost/postPerPage);i++) {
        pageNumbers.push(i)

      }       

      const [activePage,setActivePage] = useState(1)
      const handlePageClick=(number)=>{
          setActivePage(number)
          paginate(number)
      }
      const handleNext = () => {
          const nextPage = currentPage + 1;
          paginate(nextPage);
          setActivePage(nextPage);
        };
        const handlePrev = () => {
          const prevPage = currentPage - 1;
          paginate(prevPage);
          setActivePage(prevPage);
        };