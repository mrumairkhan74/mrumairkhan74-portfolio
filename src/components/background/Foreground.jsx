import React from 'react';

const Foreground = () => {
  return (
    <div className="relative w-full min-h-screen z-10 flex items-center justify-center">
      <img
        src="./images/pfp.png"
        alt="Profile"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg transition-all duration-300 ease-in-out"
      />
    </div>
  );
};

export default Foreground;
