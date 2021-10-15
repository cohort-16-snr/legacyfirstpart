import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const images = [
  {
    original: "https://picsum.photos/id/1018/798/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/798/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/798/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

function DemoCarousel() {
  return (
    <Carousel>
      {images.map((img, i) => (
        <div key={i}>
          <img src={img.original} alt="" />
        </div>
      ))}
    </Carousel>
  );
}
export default DemoCarousel;
