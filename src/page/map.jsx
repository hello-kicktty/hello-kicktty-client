import React, { useEffect } from "react";
import styled from "styled-components";

const apiKey = "759cc21177f7d8714e0d75a11877c4ab";

const MapContainer = styled.div`
  width: 100%; // 원하는 너비로 설정
  height: 100vh; // 원하는 높이로 설정
`;

function Map() {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        new window.kakao.maps.Map(mapContainer, mapOption);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  return <MapContainer id="map" />;
}

export default Map;
