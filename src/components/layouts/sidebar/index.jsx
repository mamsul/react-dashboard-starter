import React from "react";
import { useLocation } from "react-router";

import { sidebarMenu } from "../../../utils/sidebar";
import MenuItem from "./MenuItem";
import Rocket from "../../../assets/icons/Rocket";
import Logout from "../../../assets/icons/Logout";

const Sidebar = () => {
  const pathname = useLocation().pathname;

  return (
    <div className="h-full w-full relative">
      <div className="py-4 pl-4 flex flex-col">
        <div className="px-3 flex items-center space-x-3">
          <Rocket className="w-5 h-auto text-blue-600" />
          <h1 className="text-lg font-semibold text-[#252C32]">Aplikasi.ku</h1>
        </div>

        <div className="mt-6 w-full h-screen overflow-auto pb-48">
          <ul>
            {sidebarMenu.map((item, i) => (
              <MenuItem key={i} data={item} currentPath={pathname} />
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-[#F6F8F9] h-14 py-2 pl-4 pr-4">
        <a
          href="/"
          className="px-3 py-2.5 rounded-md flex items-center space-x-3"
        >
          <Logout className="w-4 hauto text-red-500" />
          <span className="text-sm text-red-500 font-normal">Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
