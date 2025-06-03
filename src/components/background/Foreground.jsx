import React from 'react';

const Foreground = () => {
  return (
    <div className="relative w-full min-h-screen z-10">
      <img
        src="./images/pfp.png"
        alt="Profile"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 object-cover rounded-full shadow-lg"
      />
    </div>
  );
};

export default Foreground;
