import React from 'react';
import ScanBox from '../../Components/Box/ScanBox';
import Profile from '../../Components/Box/Profile';
import Header from "../../Components/header/header";
import UserWelcome from "../../Components/main/UserWelcome/UserWelcome";
import MiniMap from "../../Components/main/minimap/minimap";

const Main = () => {
    return (
        <div>
            <ScanBox/>
            <Profile/>
        </div>
    );
    }
export default Main;
