import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./page/map";

import "./App.css";



function App() {
  return (
    // <StyledApp>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Map />} />
        {/* <Route path="/map" element={<Map />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    // </StyledApp>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

export default App;
