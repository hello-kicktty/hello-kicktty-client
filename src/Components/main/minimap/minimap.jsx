import React from "react";
import styled from "styled-components";

const MiniMapContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-weight: bold;
`;

const MiniMapBox = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #d4d4d4;
  border-radius: 1.5rem;
`;

const MiniMap = () => {
  return (
    <>
      <MiniMapContainer>
        <p>킥보드 위치를 확인하세요!</p>
        <MiniMapBox></MiniMapBox>
      </MiniMapContainer>
    </>
  );
};

export default MiniMap;
