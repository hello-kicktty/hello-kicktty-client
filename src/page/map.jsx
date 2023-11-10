import React, { useEffect } from "react";
import styled from "styled-components";
import Information from "../Components/KickboardInfo/Information";
import RidingInfor from "../Components/KickboardInfo/RidingInfor";
import toast, { Toaster } from "react-hot-toast";
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

        // 마커를 표시할 위치와 title 객체 배열입니다
        var positions = [
          {
            title: "인하안경",
            latlng: new window.kakao.maps.LatLng(
              37.45088642579393,
              126.65829774165455
            ),
          },
          {
            title: "인하안경2",
            latlng: new window.kakao.maps.LatLng(
              37.45109669691925,
              126.65779104112308
            ),
          },
        ];

        // 마커 이미지의 이미지 주소입니다
        var imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (var i = 0; i < positions.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new window.kakao.maps.Size(24, 35);

          // 마커 이미지를 생성합니다
          var markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize
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
              message = '<div style="padding:5px;">&_&헬로킥티</div>'; // 인포윈도우에 표시될 내용입니다

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
          });

          var iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;

          // 인포윈도우를 생성합니다
          var infowindow = new window.kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable,
          });

          // 인포윈도우를 마커위에 표시합니다
          infowindow.open(map, marker);

          // 지도 중심좌표를 접속위치로 변경합니다
          map.setCenter(locPosition);
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
        };
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);
  const fetchTweets = async () => {
    try {
      const response = await fetch('https://api.example.com/tweets');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching tweets:', error);
      return [];
    }
  };

  return (
    <MapBox>
      <MapBoxTextBox>카카오 맵 입니다
      </MapBoxTextBox>
      <MapContainer id="map" />
      <RidingInfor/>
      </MapBox>
  );
}

export default Map;
