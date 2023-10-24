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

        function displayLevel() {
          if (map) {
            const levelEl = document.getElementById("maplevel");
            const level = map.getLevel(); // 현재 지도 레벨을 가져옵니다

            // 콘솔에 레벨을 출력합니다
            console.log("현재 지도 레벨은 " + level + " 레벨 입니다.");

            // HTML 엘리먼트에 레벨을 표시합니다
            levelEl.innerHTML = "현재 지도 레벨은 " + level + " 레벨 입니다.";
          }
        }

        // 지도 레벨은 지도의 확대 수준을 의미합니다
        // 지도 레벨은 1부터 14레벨이 있으며 숫자가 작을수록 지도 확대 수준이 높습니다
        function zoomIn() {
          // 현재 지도의 레벨을 얻어옵니다
          var level = map.getLevel();

          // 지도를 1레벨 내립니다 (지도가 확대됩니다)
          map.setLevel(level - 1);

          // 지도 레벨을 표시합니다
          displayLevel();
        }

        function zoomOut() {
          // 현재 지도의 레벨을 얻어옵니다
          var level = map.getLevel();

          // 지도를 1레벨 올립니다 (지도가 축소됩니다)
          map.setLevel(level + 1);

          // 지도 레벨을 표시합니다
          displayLevel();
        }

        function displayLevel() {
          var levelEl = document.getElementById("maplevel");
        }

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
            displayLevel();
          }
        );

        // 지도 타입 컨트롤 생성
        const mapTypeControl = new window.kakao.maps.MapTypeControl();

        // 지도 타입 컨트롤을 지도에 표시 (지도/스카이뷰 선택 기능)
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
