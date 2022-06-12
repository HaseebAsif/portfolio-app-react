import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./componenets/About";
import Home from "./componenets/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default App;
