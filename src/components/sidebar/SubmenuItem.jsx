import React from "react";
import TextMenu from "./TextMenu";

const SubmenuItem = ({ subMenu, currentPath }) => {
  return (
    <ul className="flex flex-col mb-3">
      {subMenu.map((data, i) => (
        <a
          key={i}
          href={data.path}
          className={`pr-3 pl-8 py-2.5 rounded-md flex items-center group hover:bg-[#D7EDFF] transition-all duration-300 ${
            currentPath.includes(data.path) && "bg-[#D7EDFF]"
          }`}
        >
          <TextMenu data={data} isActive={currentPath.includes(data.path)} />
        </a>
      ))}
    </ul>
  );
};

export default SubmenuItem;
