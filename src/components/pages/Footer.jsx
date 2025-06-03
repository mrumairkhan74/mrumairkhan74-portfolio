import React, { useEffect } from "react";

const Footer = () => {
  return (
<footer className="bg-purple-700 text-white py-6 px-4 text-center w-full flex items-center justify-center gap-5">
      <p className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Umair Khan. All rights reserved.
      </p>

      <div className=" flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base">
        <a
          href="https://github.com/mrumairkhan74"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-300 transition-colors"
          aria-label="GitHub"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/mrumairkhan75"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-300 transition-colors"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href="mailto:mrumairkhan74@gmail.com"
          className="hover:text-purple-300 transition-colors"
          aria-label="Email"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
