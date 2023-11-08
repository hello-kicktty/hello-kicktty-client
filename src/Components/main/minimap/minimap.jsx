import React from "react";
import styled from "styled-components";
import minimap from "./minimap.png";

const MiniMapContainer = styled.div`
  display: flex;
  width: 105%;
  height: 330px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  margin-top: 38px;
  margin-left: -10px;
  background: linear-gradient(180deg, rgba(211, 255, 82, 0.00) 0%, #D3FF52 22.92%, rgba(211, 255, 82, 0.63) 69.79%, rgba(211, 255, 82, 0.00) 100%);
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
    margin-left: 15px;
`
const MiniMapText1 = styled.p`
  display: flex;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const MiniMapText = styled.p`
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MiniMapBox = styled.div`
  width: 349px;
  height: 155px;
  background-color: ${(props) =>
    props.boxColor ? props.boxColor : "#d4d4d4;"};
  border-radius: 1.5rem;
  background-image: url(${minimap});
  background-size: cover;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const MiniMap = (props) => {
  return (
    <>
      <MiniMapContainer>
        <TextWrapper>
          <MiniMapText1>주차구역 확인하고 킥보드 찾기</MiniMapText1>
          <MiniMapText>{props.text}</MiniMapText>
        </TextWrapper>
        <MiniMapBox boxColor={props.boxColor}></MiniMapBox>
      </MiniMapContainer>
    </>
  );
};

export default MiniMap;
