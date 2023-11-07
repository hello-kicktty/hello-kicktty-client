import React from 'react';
import ScanBox from '../../Components/Box/ScanBox';
import QRCodeScanner from '../../Components/Camera/Camera';
import React from "react";
import Header from "../../Components/header/header";
import UserWelcome from "../../Components/main/UserWelcome/UserWelcome";
import MiniMap from "../../Components/main/minimap/minimap";

const Main = () => {
  return (
    <>
      <Header />
      <UserWelcome username="이선재" />
      <MiniMap text="킥보드 위치를 확인하세요!" boxColor="#D3FF52"></MiniMap>
    </>
  );
};

export default Main;
