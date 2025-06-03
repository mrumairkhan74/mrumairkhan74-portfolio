import React from "react";
import "../styles/styles.css";

const NavBackground = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 opacity-50 rounded-md animate-pulse -z-10 pointer-events-none"
      style={{ filter: "blur(10px)", willChange: "transform, opacity" }}
    />
  );
};

export default NavBackground;
