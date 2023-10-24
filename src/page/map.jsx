import React, { useEffect } from "react";
import { styled } from "styled-components";

const apiKey = "759cc21177f7d8714e0d75a11877c4ab";

function Map() {
  useEffect(() => {
    const apiKey = "759cc21177f7d8714e0d75a11877c4ab";

    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        new window.kakao.maps.Map(mapContainer, mapOption);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <div>
      <div id="map" className="w-96 h-96"></div>
    </div>
  );
}

export default Map;
