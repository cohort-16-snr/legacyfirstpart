import React from "react";
import StarRating from "./StarRating.js";

function InfoSizeAndQuantity(props) {
  return (
    <div className="grid grid-flow-row gap-14">
      <div>
        <StarRating rating={props.ratingStar} />
      </div>
      <div className="text-gray-800 info">
        <h5>{props.info.category}</h5>
        <h3>{props.info.name}</h3>
        <p>{props.info.default_price}</p>
      </div>
    </div>
  );
}

export default InfoSizeAndQuantity;
