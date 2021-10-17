import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

function DemoCarousel({ styles }) {
  const images = styles.map((el) => el.photos);
  let arr = [];
  function image() {
    for (let i = 0; i < images.length; i++) {
      // the index 0 i should be able to handle to toggle between styles on click
      arr.push(images[0][i].url);
    }
    return arr;
  }
  image();
  return (
    <Carousel>
      {arr.map((img, i) => (
        <div key={i}>
          <img src={img} alt="" />
        </div>
      ))}
    </Carousel>
  );
}
export default DemoCarousel;
