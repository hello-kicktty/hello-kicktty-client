import React from "react";
import ScanBox from "../../Components/Box/ScanBox";
import QRCodeScanner from "../../Components/Camera/Camera";
import Profile from "../../Components/Box/Profile";
import Header from "../../Components/header/header";
import UserWelcome from "../../Components/main/UserWelcome/UserWelcome";
import MiniMap from "../../Components/main/minimap/minimap";
import Guide from "../../Components/Box/Guide";
import styled from "styled-components";
import Footer from "../../Components/main/Footer";
import { useEffect } from "react";


const Main = () => {
    localStorage.removeItem("Kickid_receipt");
    localStorage.removeItem("parking_time");
    localStorage.removeItem("getNamespace");
    localStorage.removeItem("Tractionid_toRiding");
    localStorage.removeItem("rating");
    localStorage.removeItem("start_time");
    localStorage.removeItem("getData");


    return (
           <>
            <Header/>
            <MiniMap text="가까운 전동 킥보드를 찾아보세요"></MiniMap>
            <ScanBox/>
            <Profile/>
            <Guide/>
            <Footer/>
        </>
    );
}
export default Main;

