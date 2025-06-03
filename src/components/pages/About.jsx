import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="md:h-[600px] bg-purple-200 py-20 px-6 md:px-16"
      id="about"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-purple-600">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Hi! I'm{" "}
          <span className="text-purple-600 font-semibold">Umair Khan</span>, a
          dedicated <strong>MERN Stack Developer</strong> who loves crafting
          modern web applications with clean and scalable code.
          <br />
          <br />
          I specialize in building robust full-stack apps using
          <span className="font-mono"> MongoDB</span>,
          <span className="font-mono"> Express.js</span>,
          <span className="font-mono"> React</span>, and
          <span className="font-mono"> Node.js</span>. Whether it's developing
          efficient REST APIs, designing sleek UIs, or managing databases, I
          strive for both performance and user experience.
          <br />
          <br />
          I'm always excited to learn and grow — constantly exploring new tech,
          contributing to team projects, and keeping up with the latest trends
          in JavaScript and web development.
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full shadow-md">
            React
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full shadow-md">
            Node.js
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full shadow-md">
            Express
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full shadow-md">
            MongoDB
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full shadow-md">
            JavaScript
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full shadow-md">
            REST APIs
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
