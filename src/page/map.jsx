import React, { useEffect } from "react";
import styled from "styled-components";
import BackBtn from "./backbtn.png";
import { useNavigate } from "react-router-dom";
import Information from "../Components/KickboardInfo/Information";
import RidingInfor from "../Components/KickboardInfo/RidingInfor";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import FirstInfo from "../Components/KickboardInfo/FirstInfo";
import * as api from "../Api";
import axios from "axios";
import KicklayerData from "../ziko_restrictLayers.json";
const apiKey = "759cc21177f7d8714e0d75a11877c4ab";

const MapBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const BackBtnImg = styled.img`
  width: 41px;
  height: 41px;
  position: absolute;
  top: 4rem;
  left: 2rem;
  z-index: 5;
`;

const MapBoxTextBox = styled.div`
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

function Map() {
  const [Info, setInfo] = useState(false);
  const [kickId, setKickId] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(-1); // Navigate back
  };

  const getData = async () => {
    const data = await api.getKickList();
    console.log(data);
    localStorage.setItem("getData", JSON.stringify(data));
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const storedKickId = localStorage.getItem("Kickid");
    if (storedKickId) {
      setInfo(true);
      setKickId(storedKickId);
    }
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

        if (data.kickboards && data.kickboards.length > 0) {
          var positions = [];
          data.kickboards.forEach((kickboard) => {
            positions.push({
              title: `Kickboard ${kickboard.id}`,
              latlng: new window.kakao.maps.LatLng(
                kickboard.lat,
                kickboard.lng
              ),
            });
          });
          console.log(positions);
        }
        // 마커 이미지의 이미지 주소입니다
        var imageSrc = require("./marker.png");
        var userlocation = require("./userlocation.png");

        for (var i = 0; i < positions.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new window.kakao.maps.Size(30.91, 40);

          // 마커 이미지를 생성합니다
          var markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize
          );

          // 마커 이미지의 이미지 크기 입니다
          var UserimageSize = new window.kakao.maps.Size(40, 40);

          // 유저 위치마커 이미지를 생성합니다
          var UsermarkerImage = new window.kakao.maps.MarkerImage(
            userlocation,
            UserimageSize
          );

          // 마커를 생성합니다
          var marker = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });
        }
        // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
        if (navigator.geolocation) {
          // GeoLocation을 이용해서 접속 위치를 얻어옵니다
          navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도

            var locPosition = new window.kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
              message = '<div style="padding:5px;">내위치</div>'; // 인포윈도우에 표시될 내용입니다

            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message);
          });
        } else {
          // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

          var locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667),
            message = "geolocation을 사용할수 없어요..";

          displayMarker(locPosition, message);
        }

        // 지도에 마커와 인포윈도우를 표시하는 함수입니다
        function displayMarker(locPosition, message) {
          // 고정마커를 생성합니다
          var marker = new window.kakao.maps.Marker({
            map: map,
            position: locPosition,
            image: UsermarkerImage,
          });

          var iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;

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
              // 마커 위치를 클릭한 위치로 옮깁니다
              // marker.setPosition(latlng);
              displayLevel();
            }
          );

          // 인포윈도우를 마커위에 표시합니다

          // 지도 중심좌표를 접속위치로 변경합니다
          map.setCenter(locPosition);
        }
        console.log(KicklayerData);
        if (KicklayerData && KicklayerData.restrictLayers) {
          KicklayerData.restrictLayers.forEach((layerObj) => {
            const polygonPath = layerObj.layer.map((latlng) => {
              return new window.kakao.maps.LatLng(latlng.lat, latlng.lng);
            });

            const polygon = new window.kakao.maps.Polygon({
              path: polygonPath,
              strokeWeight: 3,
              strokeColor: "#F6B0A8",
              strokeOpacity: 0.8,
              strokeStyle: "longdash",
              fillColor: "#F6B0A8",
              fillOpacity: 0.7,
            });

            polygon.setMap(map); // Assuming 'map' is your kakao map instance
          });
        }

        function zoomIn() {
          var level = map.getLevel();

          if (level > 5) {
            map.setLevel(level - 1);
            displayLevel();
          }
        }

        function zoomOut() {
          var level = map.getLevel();

          // Limit the maximum zoom level to 1
          if (level < 1) {
            map.setLevel(level + 1);
            displayLevel();
          }
        }
        function displayLevel() {
          const level = map.getLevel(); // 현재 지도 레벨을 가져옵니다
          console.log("현재 지도의 레벨 :" + level);
        }

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
          localStorage.removeItem("Kickid");
        };
      });
    };

    mapScript.addEventListener("load", onLoadKakaoMap);
  }, [data]);
  return (
    <MapBox>
      <MapContainer id="map" />
      <BackBtnImg id="backBtn" src={BackBtn} onClick={handleBackButtonClick} />

      {Info && <Information Title={kickId} />}
      <RidingInfor></RidingInfor>
      <FirstInfo></FirstInfo>
    </MapBox>
  );
}

export default Map;
