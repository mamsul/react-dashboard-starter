import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const Layout = () => {
  return (
    <>
      <div className="fixed w-60 h-full bg-[#F6F8F9] z-10">
        <Sidebar />
      </div>

      <div className="w-full h-full pl-60">
        <div className="w-full min-h-screen bg-white p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
