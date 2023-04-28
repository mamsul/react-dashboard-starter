import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Header from "../header";
import Backdrop from "./Backdrop";

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {openMenu && <Backdrop handleClick={handleMenu} />}

      <div
        className={`fixed w-60 h-full bg-[#F6F8F9] transition-all duration-500 z-20 lg:z-0 ${
          !openMenu ? "-left-60 lg:left-0" : "left-0 lg:-left-60"
        }`}
      >
        <Sidebar />
      </div>

      <div className="fixed left-0 lg:left-60 right-0">
        <Header handleBar={handleMenu} />
      </div>

      <div className="w-full h-full lg:pl-60 pt-12 lg:pt-20">
        <div className="w-full bg-white p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
