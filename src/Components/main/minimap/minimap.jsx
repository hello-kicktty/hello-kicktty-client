import React from "react";
import styled from "styled-components";
import minimap from "./minimap.png";

const MiniMapContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-weight: bold;
  margin-top: 38px;
`;

const MiniMapText = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MiniMapBox = styled.div`
  width: 100%;
  height: 10rem;
  background-color: ${(props) =>
    props.boxColor ? props.boxColor : "#d4d4d4;"};
  border-radius: 1.5rem;
  background-image: url(${minimap});
  background-size: cover;
`;

const MiniMap = (props) => {
  return (
    <>
      <MiniMapContainer>
        <MiniMapText>{props.text}</MiniMapText>
        <MiniMapBox boxColor={props.boxColor}></MiniMapBox>
      </MiniMapContainer>
    </>
  );
};

export default MiniMap;
