import React from "react";
import '../styles/styles.css'

const Loading = () => {
  return (
    <div className="relative w-full min-h-screen bg-transparent">
      <img
        src="./images/logo.png"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-1/2"
        alt=""
      />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-1/2 spin2 animate-spin bg-transparent rounded-[50%] p-16 border-7 border-t-blue-800 border-r-purple-800 border-l-0 border-b-0 "></span>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-1/2 reserve bg-transparent rounded-[50%] p-12 border-7 border-l-purple-800 border-b-blue-800 border-t-0 border-r-0 "></span>
    </div>
  );
};

export default Loading;
