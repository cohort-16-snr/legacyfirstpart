import React from "react";

function Nav() {
  return (
    <div>
      <nav class="bg-gray-600 flex items-center justify-between flex-wrap bg-teal-500 p-3">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">
            <u>Logo</u>
          </span>
        </div>
        <div class="block lg:hidden">
          <div class="flex justify-between rounde-md rounded-md">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"></div>
      </nav>
      <div>
        <h5>
          SITE-WIDE ANNOUCEMENT MESSAGE ! -- SALE/DISCOUNT <b>OFFER </b>--{" "}
          <u>NEW PRODUCT HIGHLIGHT</u>
        </h5>
      </div>
    </div>
  );
}

export default Nav;
