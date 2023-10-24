import React, { useEffect } from "react";
import { styled } from "styled-components";

const MainBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  color: blue;
  background-color: orange;
  font-size: 1rem;
`;

const Map = () => {
  const apiKey = "759cc21177f7d8714e0d75a11877c4ab";
  // 페이지가 로드될 때 Kakao Maps 스크립트를 동적으로 로드
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    script.async = true;
    script.onload = initializeMap;
    document.head.appendChild(script);
  }, []);

  const initializeMap = () => {
    if (window.kakao && window.kakao.maps) {
      var container = document.getElementById("map");
      var options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // LatLng 생성자 사용
        level: 3,
      };

      var map = new window.kakao.maps.Map(container, options);
    }
  };

  return (
    <>
      <h1>Map Page</h1>
      <MainBtn id="map">둘러보기</MainBtn>
      <div id="map" style={{ width: "100%", height: "400px" }}>
        map
      </div>
    </>
  );
};

export default Map;
