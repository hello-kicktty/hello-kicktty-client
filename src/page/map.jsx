import React, { useEffect } from "react";
import styled from "styled-components";

import coordinatesData from "../data/10250930.json"

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
        
        var positions = [];
        // 마커를 표시할 위치와 title 객체 배열입니다 
        for(var i = 0; i < coordinatesData.items.length; i++){
          positions.push({
            title: coordinatesData.items[i].place,
            latlng: new window.kakao.maps.LatLng(coordinatesData.items[i].lat, coordinatesData.items[i].lng)
          })
        } 
        console.log(positions);
        for(var i = 0; i < positions.length; i ++){
          // 마커를 생성합니다
          var marker = new window.kakao.maps.Marker({
              map: map, // 마커를 표시할 지도
              position: positions[i].latlng, // 마커를 표시할 위치
              title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          });
        }
        // 지도에 마커를 표시합니다
        marker.setMap(map);
        
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
          const level = map.getLevel(); // 현재 지도 레벨을 가져옵니다
          console.log("현재 지도의 레벨 :" + level);
        }

        // 클릭 이벤트 핸들러 등록
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            const latlng = mouseEvent.latLng;
            const lat = latlng.getLat();
            const lng = latlng.getLng();
            
            positions.push(
              {
              title: '카카오', 
              latlng: new window.kakao.maps.LatLng(37.449865, 126.65331)
              }
            )
            var marker = new window.kakao.maps.Marker({
              map: map, // 마커를 표시할 지도
              position: latlng, // 마커를 표시할 위치
              title : 1, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          });       
            console.log(lat + " " + lng);
            displayLevel();
          }
        );

        // 이벤트 리스너 추가: 마우스 스크롤 이벤트
        const handleMouseWheel = (e) => {
          // e.deltaY 값이 양수면 스크롤을 아래로 내리고 음수면 위로 올립니다
          if (e.deltaY > 0) {
            zoomOut();
          } else {
            zoomIn();
          }

          // 이벤트 기본 동작(페이지 스크롤)을 막습니다
          e.preventDefault();
        };

        // 스크롤 이벤트 리스너 등록
        mapContainer.addEventListener("wheel", handleMouseWheel, {
          passive: false,
        });

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
          mapContainer.removeEventListener("wheel", handleMouseWheel);
        };
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
