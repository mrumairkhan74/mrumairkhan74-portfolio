import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/pages/Navbar";
import { useState, useEffect } from "react";
import Loading from "./components/background/Loading";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/Project/Projects";
import Contact from "./components/pages/Contact";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
