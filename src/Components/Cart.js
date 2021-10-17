import React from "react";

function Cart() {
  return (
    <div className="grid grid-flow-col">
      <div className="grid grid-flow-row">
        <div className="flex  gap-6">
          <select class="bg-transparent items-center flex flex-auto h-10 px-5 text-black transition-colors duration-150 border border-black  focus:shadow-outline hover:bg-black hover:text-indigo-100 justify-items-end">
            <option value="">SELECT SIZE</option>
            <option>S</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
          <select className="bg-transparent items-center flex flex-auto h-10 px-5 text-black transition-colors duration-150 border border-black  focus:shadow-outline hover:bg-black hover:text-indigo-100 justify-items-end">
            <option value="">Q</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div className="flex flex-auto gap-6">
          <button className=" items-center flex flex-row h-10 px-5 text-black transition-colors duration-150 border border-black  focus:shadow-outline hover:bg-black hover:text-indigo-100 ">
            ADD TO BAG
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <button className=" items-center flex flex-row h-10 px-5 text-black transition-colors duration-150 border border-black  focus:shadow-outline hover:bg-black hover:text-indigo-100 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
