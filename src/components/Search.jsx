import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "../utils/axiosInstance";

// eslint-disable-next-line react/prop-types
export default function Search({ updateTree }) {
  const [searchParam, setSearchParam] = useState("");
  const searchHandler = async () => {
    try {
      const response = await axios.get(`/api/tree/search/${searchParam}`);
      console.log("Search Item Front:", response.data);
      if (response.status === 200) {
        console.log(response.data);
        updateTree(response.data);
      }
    } catch (error) {
      console.error("Error fetching Trees:", error.message);
      throw error;
    }
  };

  return (
    <>
      <div className="backdrop-search"></div>
      <div className="py-10 h-20 bg-lighter-primary px-2">
        <div className="max-w-auto mx-auto rounded-lg overflow-hidden md:max-w-xl md:max-h-m sm:max-w-xs">
          <div className="md:flex">
            <div className="w-full p-3">
              <div className="relative md:max-h-m">
                <i className="absolute fa fa-search text-gray-100 top-5 left-4"></i>
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-white h-14 w-full px-12 rounded-lg border-darker-primary input hover:cursor-pointer text-xl italic !important"
                  name=""
                  defaultValue={searchParam}
                  onChange={(event) => setSearchParam(event.target.value)}
                ></input>
                <button
                  className="absolute top-4 right-5 border-l pl-4 cursor-pointer"
                  onClick={searchHandler}
                >
                  <IoIosSearch className="iconsearch text-darker-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
