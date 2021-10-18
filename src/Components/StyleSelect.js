import React from "react";

function StyleSelect({ styles, styleSelector }) {
  console.log(styles);
  return (
    <div className="grid grid-flow-row items-center">
      <p> "STYLE / SELECTED STYLE"</p>
      <div className="grid grid-flow-col">
        <div
          onClick={() => styleSelector(240500)}
          className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center"
        >
          <img
            className=" doura rounded-full"
            src={styles[0]?.photos[0].thumbnail_url}
            alt=" Unloaded"
          ></img>
        </div>
        <div
          onClick={() => styleSelector(240501)}
          className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center"
        >
          <img
            className="doura  rounded-full"
            src={styles[1]?.photos[0].thumbnail_url}
            alt=" Unloaded"
          ></img>
        </div>
        <div
          onClick={() => styleSelector(240502)}
          className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center"
        >
          <img
            className="doura  rounded-full"
            src={styles[2]?.photos[0].thumbnail_url}
            alt=" Unloaded"
          ></img>
        </div>
      </div>
      <div className="grid grid-flow-col">
        <div
          onClick={() => styleSelector(240503)}
          className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center"
        >
          <img
            className="doura  rounded-full"
            src={styles[3]?.photos[0].thumbnail_url}
            alt=" Unloaded"
          ></img>
        </div>
        <div
          onClick={() => styleSelector(240504)}
          className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center"
        >
          <img
            className=" doura rounded-full"
            src={styles[4]?.photos[0].thumbnail_url}
            alt=" Unloaded"
          ></img>
        </div>
        <div
          onClick={() => styleSelector(240505)}
          className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center"
        >
          <img
            className=" doura rounded-full"
            src={styles[5]?.photos[0].thumbnail_url}
            alt=" Unloaded"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default StyleSelect;
