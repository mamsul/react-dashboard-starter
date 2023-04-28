import React from "react";
import Rocket from "../../assets/icons/Rocket";

const TopSidebar = () => {
  return (
    <div className="px-3 flex items-center space-x-3">
      <Rocket className="w-5 h-auto text-blue-600" />
      <h1 className="text-lg font-semibold text-[#252C32]">Dashboard</h1>
    </div>
  );
};

export default TopSidebar;
