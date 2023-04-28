import React from "react";

function Backdrop({ handleClick }) {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-white/30 z-10"
      onClick={handleClick}
    />
  );
}

export default Backdrop;
