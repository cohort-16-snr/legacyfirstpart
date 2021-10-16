import React from "react";
import "./ProductReview.css";
import Cart from "./Cart";
import InfoSizeAndQuantity from "./InfoSizeAndQuantity";
import Nav from "./Nav";
import Slides from "./Slides";
import StyleSelect from "./StyleSelect";

function ProductDetails() {
  return (
    <div className="App min-h-screen container mx-auto">
      <Nav />
      <div className=" grid grid-flow-col  ">
        <div className=" bg-transparent ">
          <Slides />
        </div>
        <div className="grid grid-flow-row">
          <InfoSizeAndQuantity />
          <StyleSelect />
          <Cart />
        </div>
      </div>
      <div className="grid grid-flow-col">
        <div className="">
          <h5>DesTITLE</h5>
          <p>Description</p>
        </div>
        <div className="">
          <ul>
            <li className="flex flex-auto">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Some Stuff about guarantee
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
