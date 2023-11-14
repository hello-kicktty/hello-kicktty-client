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

        var drawingFlag = false; // 원이 그려지고 있는 상태를 가지고 있을 변수입니다
        var centerPosition; // 원의 중심좌표 입니다
        var drawingCircle; // 그려지고 있는 원을 표시할 원 객체입니다
        var drawingLine; // 그려지고 있는 원의 반지름을 표시할 선 객체입니다
        var drawingOverlay; // 그려지고 있는 원의 반경을 표시할 커스텀오버레이 입니다
        var drawingDot; // 그려지고 있는 원의 중심점을 표시할 커스텀오버레이 입니다

        var circles = []; // 클릭으로 그려진 원과 반경 정보를 표시하는 선과 커스텀오버레이를 가지고 있을 배열입니다

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
        var imageSrc = require("./marker.png");

        for (var i = 0; i < positions.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new window.kakao.maps.Size(30.91, 40);

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
        // 지도를 클릭한 위치에 표출할 마커입니다
        var marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
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
            marker.setPosition(latlng);
            // 마커 위에 인포윈도우를 표시합니다
            infowindow.open(map, marker);
            displayLevel();
          }
        );

        // 지도에 마우스무브 이벤트를 등록합니다
        // 원을 그리고있는 상태에서 마우스무브 이벤트가 발생하면 그려질 원의 위치와 반경정보를 동적으로 보여주도록 합니다
        window.kakao.maps.event.addListener(
          map,
          "mousemove",
          function (mouseEvent) {
            // 마우스무브 이벤트가 발생했을 때 원을 그리고있는 상태이면
            if (drawingFlag) {
              removeCircles();
              // 마우스 커서의 현재 위치를 얻어옵니다
              var mousePosition = mouseEvent.latLng;

              // 그려지고 있는 선을 표시할 좌표 배열입니다. 클릭한 중심좌표와 마우스커서의 위치로 설정합니다
              var linePath = [centerPosition, mousePosition];

              // 그려지고 있는 선을 표시할 선 객체에 좌표 배열을 설정합니다
              drawingLine.setPath(linePath);

              // 원의 반지름을 선 객체를 이용해서 얻어옵니다
              var length = drawingLine.getLength();

              if (length > 0) {
                // 그려지고 있는 원의 중심좌표와 반지름입니다
                var circleOptions = {
                  center: centerPosition,
                  radius: length,
                };

                // 그려지고 있는 원의 옵션을 설정합니다
                drawingCircle.setOptions(circleOptions);

                // 반경 정보를 표시할 커스텀오버레이의 내용입니다
                var radius = Math.round(drawingCircle.getRadius()),
                  content =
                    '<div class="info">반경 <span class="number">' +
                    radius +
                    "</span>m</div>";

                // 반경 정보를 표시할 커스텀 오버레이의 좌표를 마우스커서 위치로 설정합니다
                drawingOverlay.setPosition(mousePosition);

                // 반경 정보를 표시할 커스텀 오버레이의 표시할 내용을 설정합니다
                drawingOverlay.setContent(content);

                // 그려지고 있는 원을 지도에 표시합니다
                drawingCircle.setMap(map);

                // 그려지고 있는 선을 지도에 표시합니다
                drawingLine.setMap(map);

                // 그려지고 있는 원의 반경정보 커스텀 오버레이를 지도에 표시합니다
                drawingOverlay.setMap(map);
              } else {
                drawingCircle.setMap(null);
                drawingLine.setMap(null);
                drawingOverlay.setMap(null);
              }
            }
          }
        );

        // 지도에 마우스 오른쪽 클릭이벤트를 등록합니다
        // 원을 그리고있는 상태에서 마우스 오른쪽 클릭 이벤트가 발생하면
        // 마우스 오른쪽 클릭한 위치를 기준으로 원과 원의 반경정보를 표시하는 선과 커스텀 오버레이를 표시하고 그리기를 종료합니다
        window.kakao.maps.event.addListener(
          map,
          "rightclick",
          function (mouseEvent) {
            if (drawingFlag) {
              // 마우스로 오른쪽 클릭한 위치입니다
              var rClickPosition = mouseEvent.latLng;

              // 원의 반경을 표시할 선 객체를 생성합니다
              var polyline = new window.kakao.maps.Polyline({
                path: [centerPosition, rClickPosition], // 선을 구성하는 좌표 배열입니다. 원의 중심좌표와 클릭한 위치로 설정합니다
                strokeWeight: 3, // 선의 두께 입니다
                strokeColor: "#00a0e9", // 선의 색깔입니다
                strokeOpacity: 1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
                strokeStyle: "solid", // 선의 스타일입니다
              });

              // 원 객체를 생성합니다
              var circle = new window.kakao.maps.Circle({
                center: centerPosition, // 원의 중심좌표입니다
                radius: polyline.getLength(), // 원의 반지름입니다 m 단위 이며 선 객체를 이용해서 얻어옵니다
                strokeWeight: 1, // 선의 두께입니다
                strokeColor: "#00a0e9", // 선의 색깔입니다
                strokeOpacity: 0.1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
                strokeStyle: "solid", // 선의 스타일입니다
                fillColor: "#00a0e9", // 채우기 색깔입니다
                fillOpacity: 0.2, // 채우기 불투명도입니다
              });

              var radius = Math.round(circle.getRadius()), // 원의 반경 정보를 얻어옵니다
                content = getTimeHTML(radius); // 커스텀 오버레이에 표시할 반경 정보입니다

              // 반경정보를 표시할 커스텀 오버레이를 생성합니다
              var radiusOverlay = new window.kakao.maps.CustomOverlay({
                content: content, // 표시할 내용입니다
                position: rClickPosition, // 표시할 위치입니다. 클릭한 위치로 설정합니다
                xAnchor: 0,
                yAnchor: 0,
                zIndex: 1,
              });

              // 원을 지도에 표시합니다
              circle.setMap(map);

              // 선을 지도에 표시합니다
              polyline.setMap(map);

              // 반경 정보 커스텀 오버레이를 지도에 표시합니다
              radiusOverlay.setMap(map);

              // 배열에 담을 객체입니다. 원, 선, 커스텀오버레이 객체를 가지고 있습니다
              var radiusObj = {
                polyline: polyline,
                circle: circle,
                overlay: radiusOverlay,
              };

              // 배열에 추가합니다
              // 이 배열을 이용해서 "모두 지우기" 버튼을 클릭했을 때 지도에 그려진 원, 선, 커스텀오버레이들을 지웁니다
              circles.push(radiusObj);

              // 그리기 상태를 그리고 있지 않는 상태로 바꿉니다
              drawingFlag = false;

              // 중심 좌표를 초기화 합니다
              centerPosition = null;

              // 그려지고 있는 원, 선, 커스텀오버레이를 지도에서 제거합니다
              drawingCircle.setMap(null);
              drawingLine.setMap(null);
              drawingOverlay.setMap(null);
            } else {
              // 클릭 이벤트가 발생했을 때 원을 그리고 있는 상태가 아니면 중심좌표를 클릭한 지점으로 설정합니다
              if (!drawingFlag) {
                // 상태를 그리고있는 상태로 변경합니다
                drawingFlag = true;

                // 원이 그려질 중심좌표를 클릭한 위치로 설정합니다
                centerPosition = mouseEvent.latLng;

                // 그려지고 있는 원의 반경을 표시할 선 객체를 생성합니다
                if (!drawingLine) {
                  drawingLine = new window.kakao.maps.Polyline({
                    strokeWeight: 3, // 선의 두께입니다
                    strokeColor: "#00a0e9", // 선의 색깔입니다
                    strokeOpacity: 1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
                    strokeStyle: "solid", // 선의 스타일입니다
                  });
                }

                // 그려지고 있는 원을 표시할 원 객체를 생성합니다
                if (!drawingCircle) {
                  drawingCircle = new window.kakao.maps.Circle({
                    strokeWeight: 1, // 선의 두께입니다
                    strokeColor: "#00a0e9", // 선의 색깔입니다
                    strokeOpacity: 0.1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
                    strokeStyle: "solid", // 선의 스타일입니다
                    fillColor: "#00a0e9", // 채우기 색깔입니다
                    fillOpacity: 0.2, // 채우기 불투명도입니다
                  });
                }

                // 그려지고 있는 원의 반경 정보를 표시할 커스텀오버레이를 생성합니다
                if (!drawingOverlay) {
                  drawingOverlay = new window.kakao.maps.CustomOverlay({
                    xAnchor: 0,
                    yAnchor: 0,
                    zIndex: 1,
                  });
                }
              }
            }
          }
        );

        // 지도에 표시되어 있는 모든 원과 반경정보를 표시하는 선, 커스텀 오버레이를 지도에서 제거합니다
        function removeCircles() {
          for (var i = 0; i < circles.length; i++) {
            circles[i].circle.setMap(null);
            circles[i].polyline.setMap(null);
            circles[i].overlay.setMap(null);
          }
          circles = [];
        }

        // 마우스 우클릭 하여 원 그리기가 종료됐을 때 호출하여
        // 그려진 원의 반경 정보와 반경에 대한 도보, 자전거 시간을 계산하여
        // HTML Content를 만들어 리턴하는 함수입니다
        function getTimeHTML(distance) {
          // 도보의 시속은 평균 4km/h 이고 도보의 분속은 67m/min입니다
          var walkkTime = (distance / 67) | 0;
          var walkHour = "",
            walkMin = "";

          // 계산한 도보 시간이 60분 보다 크면 시간으로 표시합니다
          if (walkkTime > 60) {
            walkHour =
              '<span class="number">' +
              Math.floor(walkkTime / 60) +
              "</span>시간 ";
          }
          walkMin = '<span class="number">' + (walkkTime % 60) + "</span>분";

          // 자전거의 평균 시속은 16km/h 이고 이것을 기준으로 자전거의 분속은 267m/min입니다
          var bycicleTime = (distance / 227) | 0;
          var bycicleHour = "",
            bycicleMin = "";

          // 계산한 자전거 시간이 60분 보다 크면 시간으로 표출합니다
          if (bycicleTime > 60) {
            bycicleHour =
              '<span class="number">' +
              Math.floor(bycicleTime / 60) +
              "</span>시간 ";
          }
          bycicleMin =
            '<span class="number">' + (bycicleTime % 60) + "</span>분";

          // 거리와 도보 시간, 자전거 시간을 가지고 HTML Content를 만들어 리턴합니다
          var content = '<ul class="info">';
          content += "    <li>";
          content +=
            '        <span class="label">총거리</span><span class="number">' +
            distance +
            "</span>m";
          content += "    </li>";
          content += "    <li>";
          content +=
            '        <span class="label">도보</span>' + walkHour + walkMin;
          content += "    </li>";
          content += "    <li>";
          content +=
            '        <span class="label">자전거/헬로킥티</span>' +
            bycicleHour +
            bycicleMin;
          content += "    </li>";
          content += "</ul>";

          return content;
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
  return (
    <MapBox>
      <MapContainer id="map" />
      <Information />
    </MapBox>
  );
}

export default Map;
