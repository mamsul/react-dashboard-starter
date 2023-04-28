import React from "react";
import Bell from "../../assets/icons/Bell";
import ChatBauble from "../../assets/icons/ChatBauble";
import User from "../../assets/icons/User";
import Bars from "../../assets/icons/Bars";

const Index = ({ handleBar }) => {
  return (
    <div className="w-full h-12 sm:h-14 shadow-sm pr-4 pl-5 lg:pr-10 bg-white">
      <div className="w-full h-full flex justify-between items-center">
        <button onClick={handleBar}>
          <Bars className="lg:hidden w-4 h-auto text-[#B0BABF]" />
        </button>
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2.5">
            <ChatBauble className="w-3.5 sm:w-4 h-auto text-[#B0BABF]" />
            <span className="text-xs sm:text-sm text-[#5B6871]">Feedback?</span>
          </button>
          <div className="flex items-center space-x-2.5">
            <Bell className="w-3.5 sm:w-4 h-auto text-[#B0BABF] cursor-pointer" />
            <User className="w-3.5 sm:w-4 h-auto text-[#B0BABF] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
