import React from "react";

function StyleSelect(props) {
  // const data = props.styles.map((el) => el.photos);
  return (
    <div className="grid grid-flow-row items-center">
      <p> "STYLE / SELECTED STYLE"</p>
      <div className="grid grid-flow-col">
        <div
          onClick={() => props.styleSelector(props.styles.style_id)}
          className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center"
        ></div>
        <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center"></div>
        <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center"></div>
      </div>
      <div className="grid grid-flow-col">
        <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center"></div>
        <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center"></div>
        <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center"></div>
      </div>
    </div>
  );
}

export default StyleSelect;
