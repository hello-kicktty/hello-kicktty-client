import React, { useEffect } from "react";
import styled from "styled-components";
import BackBtn from "./backbtn.png";
import ReloadBtn from "./reloadbtn.png";
import { useNavigate } from "react-router-dom";
import OnlyMap from "../onlymap";
import toast, { Toaster } from "react-hot-toast";
import ParkingSpotInformation from "./ParkingSpotInformation";

const apiKey = "759cc21177f7d8714e0d75a11877c4ab";

const MapBox = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const BackBtnImg = styled.img`
  width: 41px;
  height: 41px;
  position: absolute;
  top: 4rem;
  left: 2rem;
  z-index: 2;
`;

const ReloadBtnImg = styled.img`
  width: 41px;
  height: 41px;
  position: absolute;
  top: 24rem;
  left: 22rem;
  z-index: 2;
  cursor: pointer;
`;

function ParkingSpot() {
  const navigate = useNavigate();
  useEffect(() => {
    const mapScript = document.createElement("script");

    const handleReloadButtonClick = () => {
      window.location.reload(); // 페이지 새로고침
    };
    const handleBackButtonClick = () => {
      navigate(-1); // -1은 뒤로가기를 의미함
    };

    document
      .getElementById("backBtn")
      .addEventListener("click", handleBackButtonClick);

    document
      .getElementById("reloadBtn")
      .addEventListener("click", handleReloadButtonClick);

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services,clusterer,drawing`;

    document.head.appendChild(mapScript);
  });

  return (
    <>
      <MapBox>
        <BackBtnImg id="backBtn" src={BackBtn} />
        <ReloadBtnImg id="reloadBtn" src={ReloadBtn}></ReloadBtnImg>
        <MapContainer id="map" />
        <ParkingSpotInformation />
      </MapBox>
    </>
  );
}

export default ParkingSpot;
