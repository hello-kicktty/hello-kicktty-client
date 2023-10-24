import React, { useEffect } from "react";
import styled from "styled-components";

const apiKey = "759cc21177f7d8714e0d75a11877c4ab";

const MapBox = styled.div`
  display: flex;
  justify-content: center; // 수평 가운데 정렬
  align-items: center; // 수직 가운데 정렬
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: wheat;
`;

const MapBoxTextBox = styled.div`
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
`;

const MapContainer = styled.div`
  width: 90vw; // 원하는 너비로 설정
  height: 90vh; // 원하는 높이로 설정
  display: flex;
`;

function Map() {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services,clusterer,drawing`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.44978, 126.6586), //지도 시작 위치 (위도, 경도)
          level: 3, // 확대,축소 정도
        };
        new window.kakao.maps.Map(mapContainer, mapOption);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <>
      <MapBox>
        <MapBoxTextBox>카카오 맵 입니다</MapBoxTextBox>
        <MapContainer id="map" />
      </MapBox>
    </>
  );
}

export default Map;
