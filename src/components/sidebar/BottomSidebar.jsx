import React from "react";
import Logout from "../../assets/icons/Logout";

const BottomSidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.assign("/");
  };

  return (
    <div className="absolute bottom-0 w-full bg-[#F6F8F9] h-14 py-2 pl-4 pr-4">
      <button
        onClick={handleLogout}
        className="px-3 py-2.5 rounded-md flex items-center space-x-3"
      >
        <Logout className="w-4 hauto text-red-500" />
        <span className="text-sm text-red-500 font-normal">Logout</span>
      </button>
    </div>
  );
};

export default BottomSidebar;
