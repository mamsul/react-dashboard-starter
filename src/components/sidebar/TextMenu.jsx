import React from "react";

const TextMenu = ({ data, isActive }) => {
  return (
    <span
      className={`text-sm flex group-hover:text-[#0E73F6] transition-all duration-300 ${
        !isActive ? "text-[#252C32] font-normal" : "text-[#0E73F6] font-semibold"
      }`}
    >
      {data.icon}
      <span className="ml-3">{data.title}</span>
    </span>
  );
};

export default TextMenu;
