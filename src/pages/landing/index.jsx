import React from "react";

function Landing() {
  const handleEnter = () => {
    localStorage.setItem("token", "yes");
    window.location.assign('/overview');
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        className="px-4 py-2.5 rounded-lg shadow-sm hover:shadow-lg hover:scale-125 transition-all duration-300"
        onClick={handleEnter}
      >
        <span className="text-sm text-gray-600 hover:text-gray-900">
          To dashboard
        </span>
      </button>
    </div>
  );
}

export default Landing;
