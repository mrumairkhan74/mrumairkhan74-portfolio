import React, { useState, useEffect } from "react";
import Loading from "../background/Loading";
import { Typewriter } from "react-simple-typewriter";
import HomeBg from "../background/HomeBg";
import "../styles/styles.css";
import About from "./About";
import Projects from "../Project/Projects";
import Contact from "./Contact";
import Skills from "./Skills";

import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const titles = [
    "Web Developer",
    "MERN Stack Developer",
    "Node.js API Developer",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFadeIn(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <HomeBg />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        data-aos="fade-up"
        className={`px-4 py-10 md:py-20 relative flex flex-col md:flex-row justify-around items-center transition-opacity duration-1000 z-10 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Left: Text section */}
        <div className="flex-1 m-5 p-5 rounded-lg text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Hello! I'm{" "}
            <span className="text-purple-500 font-mono">
              Umair <span>Khan</span>
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-purple-600 font-mono mt-4 px-2">
            <Typewriter
              words={titles}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <div className="flex justify-center md:justify-start mt-6">
            <a
              href="https://drive.google.com/file/d/1PDzwgE3HYjAQWPmhxjITFoOhNEQVGO0_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 px-6 py-3 rounded-md text-base md:text-lg text-white hover:bg-purple-700 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right: Image section */}
        <div className="flex-1 m-5 flex justify-center items-center relative">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
            <img
              src="/images/pfp.png"
              alt="Portrait of Umair Khan"
              className="w-full h-full object-cover rounded-full shadow-md shadow-purple-600 hover:rotate-360 transition-transform duration-500"
              loading="lazy"
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-5 border-r-purple-500 border-l-0 border-t-0 border-b-0 p-[120%] spinning-border rounded-full"></span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-5 border-r-purple-500 border-l-0 border-t-0 border-b-0 p-[120%] spinning-border2 rounded-full"></span>
          </div>
        </div>
      </motion.main>

      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
