import { useState } from "react";
import { IconContext } from "react-icons"
import { FaSearch } from "react-icons/fa"
// import { RxHamburgerMenu } from "react-icons/rx";
function SearchBar() {

  return (
    <div className="container">
      <div className="d-flex justify-center my-4 gap-x-2">
        {/* <button className="btn btn-dark w-10 h-10 block md:hidden">
          <RxHamburgerMenu />
        </button> */}

        <div className="relative w-full">
          <form>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FaSearch />
            </div>
            <div className="">
              <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 
              text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
            </div>
          </form>
        </div>
        <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-black rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <FaSearch />
        </button>
      </div>
    </div>
  )
}

export default SearchBar