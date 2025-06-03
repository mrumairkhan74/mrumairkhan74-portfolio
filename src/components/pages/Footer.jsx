import React, { useEffect } from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Umair Khan. All rights reserved.
      </p>
      <div className="mt-3 flex justify-center space-x-6">
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
