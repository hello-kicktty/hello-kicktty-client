import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./page/map";
import Layout from "./Components/Layout/Layout";
import LogoWelcome from "./page/Welcome/Welcome";
import Main from "./page/Main/Main";
import RidingQR from "./page/Riding/RidingQR";
import Reward from "./Components/reward/reward";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/Map" element={<Map />} />
          <Route path="" element={<LogoWelcome />} />
          <Route path="/main" element={<Main />} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/RidingQR" element={<RidingQR />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
