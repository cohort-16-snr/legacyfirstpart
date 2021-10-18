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

  return (
    <div>
      <StarRatings rating={r} starDimension="15px" starSpacing="0.2px" />
      <div>
        <b>
          <u>Read All Review</u>
        </b>
      </div>
    </div>
  );
}

export default StarRating;
