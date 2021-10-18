import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slides({ styles }) {
  return (
    <Carousel>
      {styles.photos?.map((img, i) => (
        <div key={i}>
          <img src={img.url} alt="" />
        </div>
      ))}
    </Carousel>
  );
}
export default Slides;
