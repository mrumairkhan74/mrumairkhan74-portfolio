import React from "react";
import "../styles/styles.css";

const Loading = () => {
  return (
    <div className="relative w-full min-h-screen bg-transparent flex items-center justify-center">
      <img
        src="./images/logo.png"
        className="w-16 sm:w-20 md:w-24 z-10"
        alt="Logo"
      />
      <span className="absolute spin2 rounded-full w-40 h-40 border-[6px] border-t-blue-800 border-r-purple-800 border-l-0 border-b-0"></span>
      <span className="absolute reserve rounded-full w-28 h-28 border-[6px] border-l-purple-800 border-b-blue-800 border-t-0 border-r-0"></span>
    </div>
  );
};

export default Loading;
