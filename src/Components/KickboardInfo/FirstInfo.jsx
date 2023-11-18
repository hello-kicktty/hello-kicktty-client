import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  border-radius: 50px 50px 0px 0px;
  background: #f0f0f0;
  box-shadow: 0px 0px 70px 0px rgba(0, 0, 0, 0.25);
  width: 390px;
  height: 17%;
  position: fixed;
  bottom: 0;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
`;
const Buttonbox = styled.div`
  width: 165px;
  height: 58px;
  border-radius: 10px;
  background: #202b00;
  color: white;
  font-size: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const FirstInfo = () => {
  const navigate = useNavigate();

  const handleDriveClick = () => {
    navigate("/ridingQR");
  };

  const handleTractionClick = () => {
    navigate("/tractionQR");
  };
  return (
    <div>
      <Box>
        <Buttonbox onClick={handleDriveClick}>주행하기</Buttonbox>
        <Buttonbox onClick={handleTractionClick}>견인하기</Buttonbox>
      </Box>
    </div>
  );
};

export default FirstInfo;
