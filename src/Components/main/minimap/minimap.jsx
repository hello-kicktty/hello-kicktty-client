import React from "react";
import styled from "styled-components";
import minimap from "./minimap.png";
import { useNavigate } from "react-router-dom";

const MiniMapContainer = styled.div`
z-index:2;
  display: flex;
  width: 100%;
  height: 330px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  margin-top: 105px;
  background: linear-gradient(
    180deg,
    rgba(211, 255, 82, 0) 0%,
    #d3ff52 22.92%,
    rgba(211, 255, 82, 0.63) 69.79%,
    rgba(211, 255, 82, 0) 100%
  );
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: 15px;
`;
const MiniMapText1 = styled.p`
  display: flex;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 7px;
`;
const MiniMapText = styled.p`
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 12px;
  margin-left: 7px;
`;

const MiniMapBox = styled.div`
  width: 349px;
  height: 155px;
  background-color: ${(props) =>
    props.boxColor ? props.boxColor : "#ffffff;"};
  border-radius: 1.5rem;
  background-image: url(${minimap});
  background-position: center;
	background-repeat: no-repeat;
`;

const MiniMap = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <MiniMapContainer>
        <TextWrapper>
          <MiniMapText1>주차구역 확인하고 킥보드 찾기</MiniMapText1>
          <MiniMapText>{props.text}</MiniMapText>
        </TextWrapper>
        <MiniMapBox
          boxColor={props.boxColor}
          onClick={() => {
            navigate("/map");
          }}
        ></MiniMapBox>
      </MiniMapContainer>
    </>
  );
};

export default MiniMap;
