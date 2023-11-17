import React, { useEffect } from "react";
import styled from "styled-components";
import Information from "../Components/KickboardInfo/Information";
import RidingInfor from "../Components/KickboardInfo/RidingInfor";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import FirstInfo from "../Components/KickboardInfo/FirstInfo";
import * as api from "../Api";
import axios from "axios";

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

        var drawingFlag = false; // 원이 그려지고 있는 상태를 가지고 있을 변수입니다
        var centerPosition; // 원의 중심좌표 입니다
        var drawingCircle; // 그려지고 있는 원을 표시할 원 객체입니다
        var drawingLine; // 그려지고 있는 원의 반지름을 표시할 선 객체입니다
        var drawingOverlay; // 그려지고 있는 원의 반경을 표시할 커스텀오버레이 입니다
        var drawingDot; // 그려지고 있는 원의 중심점을 표시할 커스텀오버레이 입니다

        var circles = []; // 클릭으로 그려진 원과 반경 정보를 표시하는 선과 커스텀오버레이를 가지고 있을 배열입니다

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
        // 지도를 클릭한 위치에 표출할 마커입니다
        var marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
          image: UsermarkerImage,
        });

        // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
        var iwContent = '<div style="padding:1px;">내위치</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
          iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        // 인포윈도우를 생성합니다
        var infowindow = new window.kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        //console.log(data.clusters.length);

        if (data.clusters && data.clusters.length > 0) {
          var tmp = data.clusters;
          console.log(data.clusters)
          tmp.forEach(cluster => {
            var layerLatLng = []
            cluster.borders.forEach(latlng => {
              layerLatLng.push(new window.kakao.maps.LatLng(latlng.lat, latlng.lng))
            })
            var polygon = new window.kakao.maps.Polygon({
              path: layerLatLng, // 그려질 다각형의 좌표 배열입니다
              strokeWeight: 20, // 선의 두께입니다
              strokeColor: '#39DE2A', // 선의 색깔입니다
              strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
              strokeStyle: 'longdash', // 선의 스타일입니다
              fillColor: '#39DE2A', // 채우기 색깔입니다
              fillOpacity: 0.7 // 채우기 불투명도 입니다
            });
            // 지도에 다각형을 표시합니다
            polygon.setMap(map);
          });
        }
/*
          for(var cluster = 0; cluster < data.clusters.length; cluster++) {
            var tmpClusterPolygonPathData = []
            for(var cluster_node = 0; cluster_node<data.clusters[cluster].borders.length; cluster_node){
              var cluster_kickboard = data.clusters[cluster].borders[cluster_node];
              tmpClusterPolygonPathData.push(new window.kakao.maps.LatLng(cluster_kickboard.lat, cluster_kickboard.lng))
            }
            console.log(tmpClusterPolygonPathData);
            var polygon = new window.kakao.maps.Polygon({
              path:tmpClusterPolygonPathData, // 그려질 다각형의 좌표 배열입니다
              strokeWeight: 20, // 선의 두께입니다
              strokeColor: '#39DE2A', // 선의 색깔입니다
              strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
              strokeStyle: 'longdash', // 선의 스타일입니다
              fillColor: '#A2FF99', // 채우기 색깔입니다
              fillOpacity: 0.7 // 채우기 불투명도 입니다
            });
            // 지도에 다각형을 표시합니다
            polygon.setMap(map);
          }
        }

*/

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
            console.log("클릭한 위치의 위도:", lat);
            console.log("클릭한 위치의 경도:", lng);
            // 마커 위치를 클릭한 위치로 옮깁니다
            // marker.setPosition(latlng);
            // 마커 위에 인포윈도우를 표시합니다
            infowindow.open(map, marker);
            displayLevel();
          }
        );

        // 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
        var polygonPath = [
          new window.kakao.maps.LatLng(37.44530517404025, 126.65925260652892),
          new window.kakao.maps.LatLng(37.44651469242157, 126.66000427818024),
          new window.kakao.maps.LatLng(37.446927240459104, 126.66012107084096),
          new window.kakao.maps.LatLng(37.44698632517772, 126.66030161834878),
          new window.kakao.maps.LatLng(37.44680349317251, 126.66252872192162),
          new window.kakao.maps.LatLng(37.44640528757706, 126.66349108185493),
          new window.kakao.maps.LatLng(37.445269676731115, 126.66575347654735),
          new window.kakao.maps.LatLng(37.4433459033457, 126.66412347940455),
          new window.kakao.maps.LatLng(37.443495052892274, 126.66350129063738),
          new window.kakao.maps.LatLng(37.44384519506977, 126.66306182998811),
          new window.kakao.maps.LatLng(37.44389407327951, 126.66282430112803),
          new window.kakao.maps.LatLng(37.444493380676285, 126.66129603739688),
          new window.kakao.maps.LatLng(37.44473037072315, 126.66067626198775),
          new window.kakao.maps.LatLng(37.44487390578653, 126.66045807706557),
          new window.kakao.maps.LatLng(37.444967584982074, 126.6601355860088),
          new window.kakao.maps.LatLng(37.44515802305834, 126.65977875410422),
        ];

        // 지도에 표시할 다각형을 생성합니다
        var polygon = new window.kakao.maps.Polygon({
          path: polygonPath, // 그려질 다각형의 좌표 배열입니다
          strokeWeight: 3, // 선의 두께입니다
          strokeColor: "#F6B0A8", // 선의 색깔입니다
          strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: "longdash", // 선의 스타일입니다
          fillColor: "#F6B0A8", // 채우기 색깔입니다
          fillOpacity: 0.7, // 채우기 불투명도 입니다
        });

        // 지도에 다각형을 표시합니다
        polygon.setMap(map);

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
      {Info && <Information Title={kickId} />}
      <FirstInfo></FirstInfo>
    </MapBox>
  );
}

export default Map;
