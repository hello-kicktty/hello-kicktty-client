import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./page/map";
import Map1 from "./page/map1";
import Layout from "./Components/Layout/Layout";
import LogoWelcome from "./page/Welcome/Welcome";
import Main from "./page/Main/Main";
import RidingQR from "./page/Riding/RidingQR";
import ParkReward from "./Components/reward/reward";
import ParkingComplete from "./Components/parking/parkingcomplete";
import Receipt from "./page/Receipt/Receipt";
import Reward from "./page/Reward/Reward";
import Guide from "./page/Guide.jsx/Home";
import Riding from "./page/Guide.jsx/Riding";
import Parking from "./page/Guide.jsx/Parking";
import Traction from "./page/Guide.jsx/Traction";
import TractionComplete from "./page/Riding/tractionComplete";
import ParkingSpot from "./page/ParkingSpot/ParkingSpot";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ParkingQR from "./page/Riding/ParkingQR";
import TractionQR from "./page/Riding/TracktionQr";
import Intro from "./page/Welcome/Welcome";
import Get from "./page/Reward/Get";
import Use from "./page/Reward/Use";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/Map" element={<Map />} />
          <Route path="/Map1" element={<Map1/>} />
          <Route path="" element={<Intro />} />
          <Route path="/main" element={<Main />} />
          <Route path="/RidingQR" element={<RidingQR text="주행하기" />} />
          <Route path="/tractionQR" element={<TractionQR text="견인하기" />} />
          <Route path="/parkingQR" element={<ParkingQR text="주차하기" />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/TractionComplete" element={<TractionComplete />} />
          <Route path="/ParkingComplete" element={<ParkingComplete />} />
          <Route path="/ParkingReward" element={<ParkReward />} />
          <Route exact path="/Guide" element={<Guide />}>
            <Route path="Riding" element={<Riding />} />
            <Route path="Parking" element={<Parking />} />
            <Route path="Traction" element={<Traction />} />
          </Route>
          <Route exact path="/Reward" element={<Reward />}>
            <Route path="get" element={<Get />} />
            <Route path="use" element={<Use />} />
          </Route>
          <Route path="/ParkingSpot" element={<ParkingSpot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
