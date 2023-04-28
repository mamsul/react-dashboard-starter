import React from "react";
import { sidebarMenu } from "../../utils/sidebar";
import MenuItem from "./MenuItem";

const MenuWrapper = ({ pathname }) => {
  return (
    <div className="mt-6 w-full h-screen overflow-auto pb-48">
      <ul>
        {sidebarMenu.map((item, i) => (
          <MenuItem key={i} data={item} currentPath={pathname} />
        ))}
      </ul>
    </div>
  );
};

export default MenuWrapper;
