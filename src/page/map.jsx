import React, { useEffect } from "react";
import styled from "styled-components";

const apiKey = "759cc21177f7d8714e0d75a11877c4ab";

const MapBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 90vw;
  height: 90vh;
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
          center: new window.kakao.maps.LatLng(37.44978, 126.6586),
          level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 클릭 이벤트 핸들러 등록
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            const latlng = mouseEvent.latLng;
            const lat = latlng.getLat();
            const lng = latlng.getLng();
            console.log("클릭한 위치의 위도:", lat);
            console.log("클릭한 위치의 경도:", lng);
          }
        );

        // 지도 타입 컨트롤 생성
        const mapTypeControl = new window.kakao.maps.MapTypeControl();

        // 지도 타입 컨트롤을 지도에 표시
        map.addControl(
          mapTypeControl,
          window.kakao.maps.ControlPosition.TOPRIGHT
        );
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <MapBox>
      <MapBoxTextBox>카카오 맵 입니다</MapBoxTextBox>
      <MapContainer id="map" />
    </MapBox>
  );
}

export default Map;
