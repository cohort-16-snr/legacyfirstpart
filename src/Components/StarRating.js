import React from "react";
import StarRatings from "react-star-ratings";

function StarRating({ rating }) {
  let sr = rating.map((el) => el.rating);
  let r = 0;
  function Srating() {
    for (let el of sr) {
      r += el / sr.length;
    }
  }
  Srating();
  // aggregateRating = 2.35;
  return <StarRatings rating={r} starDimension="15px" starSpacing="0.2px" />;
}

export default StarRating;
