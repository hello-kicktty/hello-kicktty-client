import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Map from "./page/map";

import "./App.css";

const StyledApp = styled.div`
  /* background-color: wheat; */
  /* min-height: 100vh; */
`;

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

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <a href="/map">map으로 이동</a>
      <a href="/page/map2">map2로 이동</a>
    </>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

export default App;
