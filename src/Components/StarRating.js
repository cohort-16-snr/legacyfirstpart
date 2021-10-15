import React from "react";
import StarRatings from "react-star-ratings";

class StarRating extends React.Component {
  render() {
    // aggregateRating = 2.35;
    return (
      <StarRatings rating={3.403} starDimension="15px" starSpacing="0.2px" />
    );
  }
}

export default StarRating;
