import React from "react";
import styled from "styled-components";
import QRCodeScanner from "../../Components/Camera/Camera";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #d3ff52;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;
const RidingTextBox = styled.div`
  background-color: #f0f0f0;
  width: 273px;
  height: 44px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 7px;
`;

const QRBox = styled.div`
  background-color: #ffffff;
  width: 273px;
  height: 320px;
  border-radius: 10px;
  margin-bottom: 13px;
`;

const QRText = styled.div`
  width: 273px;
  height: 22px;
  font-size: 16px;
  display: flex;
  justify-content: center;
`;

const BtnBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
`;

const BackBtn = styled.div`
  background-color: black;
  width: 157px;
  height: 58px;
  color: white;
  margin-right: 1rem;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RidingBtn = styled.div`
  background-color: black;
  width: 157px;
  height: 58px;
  color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RidingQR = (props) => {
  return (
    <>
      <Container>
        <Box>
          <RidingTextBox>{props.text}</RidingTextBox>
          <QRBox>
            <QRCodeScanner />
          </QRBox>
          <QRText>QR을 인식해주세요</QRText>
        </Box>
        <BtnBox>
          <BackBtn>돌아가기</BackBtn>
          <RidingBtn>{props.text}</RidingBtn>
        </BtnBox>
      </Container>
    </>
  );
};

export default RidingQR;
