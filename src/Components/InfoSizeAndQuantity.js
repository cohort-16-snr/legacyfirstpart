import React from "react";
import StarRating from "./StarRating.js";

function InfoSizeAndQuantity() {
  return (
    <div className="grid grid-flow-row gap-14">
      <div>
        <StarRating />
      </div>
      <div className="text-gray-800 info">
        <h5>CATEGORY</h5>
        <h3>Product Name Extended</h3>
        <p>$369</p>
      </div>
    </div>
  );
}

export default InfoSizeAndQuantity;
