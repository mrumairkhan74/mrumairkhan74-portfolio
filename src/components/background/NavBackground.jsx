import React from "react";
import "../styles/styles.css"
const NavBackground = () => {
  return (
    <div
      className="
          absolute top-0 left-0 w-full h-full
          bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400
          opacity-60
          rounded-md
          animate-pulse
          -z-10
        "
      style={{ filter: "blur(12px)" }}
    />
  );
};

export default NavBackground;
