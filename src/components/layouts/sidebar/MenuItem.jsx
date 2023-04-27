import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SubmenuItem from "./SubmenuItem";
import TextMenu from "./TextMenu";

function MenuItem({ data, currentPath }) {
  const navigate = useNavigate();
  const [showChild, setShowChild] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (currentPath.includes(data.path)) {
      setShowChild(true);
      setIsActive(true);
    }
  }, [currentPath, data.path]);

  return (
    <>
      {data.subMenu ? (
        <div className="mr-4">
          <button
            className={`w-full px-3 py-2.5 rounded-md flex items-center group hover:bg-[#D7EDFF] transition-all duration-300 ${
              isActive && "bg-[#D7EDFF]"
            }`}
            onClick={() => {
              setShowChild(!showChild);
              data.isLinked && navigate(data.path);
            }}
          >
            <TextMenu data={data} isActive={isActive} />
          </button>
          {data.subMenu && showChild && (
            <SubmenuItem subMenu={data.subMenu} currentPath={currentPath} />
          )}
        </div>
      ) : (
        <a
          href={data.path}
          className={`px-3 py-2.5 mr-4 rounded-md flex items-center group hover:bg-[#D7EDFF] transition-all duration-300 ${
            isActive && "bg-[#D7EDFF]"
          }`}
        >
          <TextMenu data={data} isActive={isActive} />
        </a>
      )}
    </>
  );
}

export default MenuItem;
