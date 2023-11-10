import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./page/map";
import Layout from "./Components/Layout/Layout";
import LogoWelcome from "./page/Welcome/Welcome";
import Main from "./page/Main/Main";
import RidingQR from "./page/Riding/RidingQR";
import Reward from "./Components/reward/reward";
import ParkingComplete from "./Components/parking/parkingcomplete";
import Receipt from "./page/Receipt/Receipt";
import Reward from "./page/Reward/Reward";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/Map" element={<Map />} />
          <Route path="" element={<LogoWelcome />} />
          <Route path="/main" element={<Main />} />
          <Route path="/RidingQR" element={<RidingQR text="주행하기"/>} />
          <Route path="/tractionQR" element={<RidingQR text="견인하기"/>} />
          <Route path="/parkingQR" element={<RidingQR text="주차하기"/>} />
          <Route path="/receipt" element={<Receipt/>} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/ParkingComplete" element={<ParkingComplete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
