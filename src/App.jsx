import { useState } from "react";
import "./App.css";
//import react router dom
import { Route, Routes, useLocation } from "react-router-dom";
//import pages
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
//import AnimatePresence
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navigation/Navbar";
import Blog from "./Components/Pages/Blog";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
