import React from "react";
import { useLocation } from "react-router";

import TopSidebar from "./TopSidebar";
import BottomSidebar from "./BottomSidebar";
import MenuWrapper from "./MenuWrapper";

const Sidebar = () => {
  const pathname = useLocation().pathname;

  return (
    <div className="h-full w-full relative">
      <div className="py-4 pl-4 flex flex-col">
        <TopSidebar />

        <MenuWrapper pathname={pathname} />
      </div>

      <BottomSidebar />
    </div>
  );
};

export default Sidebar;
