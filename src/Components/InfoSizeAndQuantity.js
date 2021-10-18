import React from "react";
import StarRating from "./StarRating.js";

function InfoSizeAndQuantity({ info, ratingStar }) {
  return (
    <div className="grid grid-flow-row gap-14">
      <div>
        <StarRating rating={ratingStar} />
      </div>
      <div className="text-gray-800 info">
        <h5>{info.category}</h5>
        <h3>{info.name}</h3>
        <p>{info.default_price}</p>
      </div>
    </div>
  );
}

export default InfoSizeAndQuantity;
