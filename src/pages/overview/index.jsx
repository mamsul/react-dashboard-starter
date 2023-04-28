import React from "react";

function Overview() {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl md:text-4xl text-[#252C32] font-bold">
        Overview
      </h1>

      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="w-full h-16 bg-white shadow-md"></div>
        <div className="w-full h-16 bg-white shadow-md"></div>
        <div className="w-full h-16 bg-white shadow-md"></div>
        <div className="w-full h-16 bg-white shadow-md"></div>
        <div className="w-full h-16 bg-white shadow-md"></div>
      </div>
    </div>
  );
}

export default Overview;
