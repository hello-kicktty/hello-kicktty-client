import React from 'react';
import ScanBox from '../../Components/Box/ScanBox';
import Profile from '../../Components/Box/Profile';
import Header from "../../Components/header/header";
import UserWelcome from "../../Components/main/UserWelcome/UserWelcome";
import MiniMap from "../../Components/main/minimap/minimap";
import Guide from '../../Components/Box/Guide';

const Main = () => {
    return (
        <div>
          <Header/>
            <UserWelcome/>
            <MiniMap text="킥보드 위치를 확인하세요."></MiniMap>
            <ScanBox/>
            <Profile/>
            <Guide/>
        </div>
    );
    }
export default Main;
