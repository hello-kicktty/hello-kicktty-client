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
import KicklayerData from "../ziko_restrictLayers.json"
import ParkingSpotInformation from "./ParkingSpot/ParkingSpotInformation";
import TractionInfor from "../Components/KickboardInfo/TracktionInfo";
import { position } from "stylis";
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
  position: fixed;
  top: 2rem; /* 위에서 2rem만큼 */
  left: 2rem; /* 왼쪽에서 2rem만큼 */
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
  const [tractionId, setTractionId] = useState("");
  const [data, setData] = useState([]);
  const [namespace, setNamespace] = useState([]);
  const [kickname, setKickname] = useState("");
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    localStorage.removeItem("Tractionid");
    navigate(-1); // Navigate back
  };


  const getData = async () => {
    const data = await api.getKickList();
    const data2 = await api.getnamespace();
    console.log(data);
    console.log(data2);
    localStorage.setItem("getData", JSON.stringify(data));
    localStorage.setItem("getNamespace", JSON.stringify(data2));
    setData(data);
    setNamespace(data2);

  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const storedTractionId = localStorage.getItem("Tractionid");
    if (storedTractionId) {
      setInfo(true);
      setTractionId(storedTractionId);
    }

    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services,clusterer,drawing`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const defaultPosition = new window.kakao.maps.LatLng(37.44978, 126.6586);
        const mapOption = {
          center: defaultPosition,
          level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
    
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const locPosition = new window.kakao.maps.LatLng(lat, lon);
            const message = '<div style="padding:5px;">내 위치</div>';

            const marker = new window.kakao.maps.Marker({
              map: map,
              position: locPosition,
              UsermarkerImage
            });
    
            map.setCenter(locPosition);
    
            const infowindow = new window.kakao.maps.InfoWindow({
              content: message,
            });
            infowindow.open(map, marker);
          });
        } else {
          const message = "Geolocation을 사용할 수 없어요..";
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: defaultPosition,
            image: "./userlocation.png"
          });
    
          const infowindow = new window.kakao.maps.InfoWindow({
            content: message,
          });
          infowindow.open(map, marker);
        }
        var positions = [];

      
        if (data.kickboards && data.kickboards.length > 0) {
          var positions = [];
          data.kickboards.forEach((kickboard) => {
            if(!kickboard.danger) return;
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
        const markers = [
          require("../markers2/KakaoTalk_20231118_223628799.png"),
          require("../markers2/KakaoTalk_20231118_223628799_01.png"),
          require("../markers2/KakaoTalk_20231118_223628799_02.png"),
          require("../markers2/KakaoTalk_20231118_223628799_03.png"),
          require("../markers2/KakaoTalk_20231118_223628799_04.png"),
          require("../markers2/KakaoTalk_20231118_223628799_05.png"),
          require("../markers2/KakaoTalk_20231118_223628799_06.png"),
          require("../markers2/KakaoTalk_20231118_223628799_07.png"),
        ];
        
        for (var i = 0; i < positions.length; i++) {
          const randomIndex = Math.floor(Math.random() * markers.length);
          const randomMarkerImageSrc = markers[randomIndex];
        
          // 마커 이미지의 이미지 크기입니다
          var imageSize = new window.kakao.maps.Size(33, 94);
        
          // 랜덤 마커 이미지 객체를 생성합니다
          var markerImage = new window.kakao.maps.MarkerImage(
            randomMarkerImageSrc,
            imageSize
          );
        

          // 마커 이미지의 이미지 크기 입니다
          var UserimageSize = new window.kakao.maps.Size(40, 40);
          var UserimageSize1 = new window.kakao.maps.Size(34, 40);
          var userlocation = require("./userlocation.png");
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
          (function (marker, pos) {
            window.kakao.maps.event.addListener(marker, 'click', function() {
              console.log(pos);

              let pos_id = pos.title.split(" ")[1];
              const namespace = JSON.parse(localStorage.getItem("getNamespace"));
              namespace.kickboards.forEach(kick=>{
                if(kick.id == pos_id)setKickname(kick);
              })
              localStorage.setItem("Tractionid", pos_id)
              setTractionId(pos_id);
            });
            
          })(marker, positions[i]);
        }

        //console.log(data.clusters.length);

        if (data.clusters && data.clusters.length > 0) {
          var tmp = data.clusters;
          var userlocation = require("./Group 498.png");
          var ClustermarkerImage = new window.kakao.maps.MarkerImage(
            userlocation,
            UserimageSize1
          );

          tmp.forEach(cluster => {
            if(cluster.cluster_id == -1) return;
            const center = new window.kakao.maps.LatLng(cluster.center.lat, cluster.center.lng)
            var layerLatLng = []
            cluster.borders.forEach(latlng => {
              layerLatLng.push(new window.kakao.maps.LatLng(latlng.lat, latlng.lng))
            })
            var polygon = new window.kakao.maps.Polygon({
              path: layerLatLng, // 그려질 다각형의 좌표 배열입니다
              strokeWeight: 30, // 선의 두께입니다
              strokeColor: '#DBFF00B2', // 선의 색깔입니다
              strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
              strokeStyle: 'longdash', // 선의 스타일입니다
              fillColor: '##DBFF00B2', // 채우기 색깔입니다
              fillOpacity: 1 // 채우기 불투명도 입니다
            });
            
            // 지도에 다각형을 표시합니다
            polygon.setMap(map);
            var marker = new window.kakao.maps.Marker({
              map: map, // 마커를 표시할 지도
              position: center, // 마커를 표시할 위치
              title: cluster.cluster_id, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              image: ClustermarkerImage, // 마커 이미지
            });
          });
          
        }

        console.log(KicklayerData)
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
          localStorage.removeItem("Tractionid");
        };
      });
    };
    console.log(kickname)
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, [data,tractionId,Info]);
  
  return (
    <MapBox>
      <MapContainer id="map" />
      <BackBtnImg id="backBtn" src={BackBtn} onClick={handleBackButtonClick} />
      {console.log("Info 값:", Info)}
      {localStorage.getItem("Tractionid") && <ParkingSpotInformation id={kickname.id} name ={kickname.name}/>}
      {localStorage.getItem("TractionData_toRiding") && <TractionInfor/>}
    </MapBox>
  );
}

export default Map;
