import React, { useState, useEffect } from "react";
import Loading from "../background/Loading";
import { Typewriter } from "react-simple-typewriter";
import HomeBg from "../background/HomeBg";
import "../styles/styles.css"; // make sure spinning-border CSS is here
import About from "./About";
import Projects from "../Project/Projects";
import Contact from "./Contact";
import Skills from "./Skills";

// import "aos/dist/aos.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  // const [fadeIn, setFadeIn] = useState(false);

  const titles = [
    "Web Developer",
    "MERN Stack Developer",
    "Node.js API Developer",
  ];

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //     setFadeIn(true);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  if (loading) return <Loading />;

  return (
    <>

      <main
        className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto 
          px-12 py-32 md:py-40 gap-16 z-10 "
      >
        {/* Text Content */}
        <div className="text-center md:text-left md:flex-1">
          <h1 className="text-4xl sm:text-5xl font-semibold bounce mb-6">
            Hello! I'm{" "}
            <span className="text-purple-500 font-mono">
              Umair <span>Khan</span>
            </span>
          </h1>

          <h2 className="text-[16px] sm:text-xl text-purple-600 font-mono mb-10">
            <Typewriter
              words={titles}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <a
            href="https://drive.google.com/file/d/1PDzwgE3HYjAQWPmhxjITFoOhNEQVGO0_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 px-6 py-3 rounded-md text-white text-base hover:bg-purple-700 transition-colors"
          >
            Download Resume
          </a>
        </div>

        {/* Profile Picture with Spinning Borders */}
        <div className="relative md:flex-1 flex justify-center items-center max-w-[300px] sm:max-w-[350px] w-full">
          <img
            src="./images/pfp.png"
            alt="Profile"
            className="w-full rounded-full shadow-md shadow-purple-600 hover:rotate-360 transition-transform duration-500"
          />
          {/* Outer spinning border */}
          <span className="absolute inset-0 border-4 border-r-purple-500 border-l-transparent border-t-transparent border-b-transparent rounded-full spinning-border pointer-events-none" />
          {/* Inner reverse spinning border */}
          <span className="absolute inset-2 border-4 border-r-purple-400 border-l-transparent border-t-transparent border-b-transparent rounded-full spinning-border2 pointer-events-none" />
        </div>
      </main>

      {/* Other Sections */}
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
