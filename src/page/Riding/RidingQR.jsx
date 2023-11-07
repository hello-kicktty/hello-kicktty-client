import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #d3ff52;
  align-items: center;
  justify-content: center;
`;

const RidingTextBox = styled.div`
  background-color: #f0f0f0;
  width: 273px;
  height: 44px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const QRBox = styled.div`
  background-color: #f0f0f0;
  width: 273px;
  height: 273px;
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
`;

const BackBtn = styled.button`
  background-color: black;
  width: 157px;
  height: 58px;
  color: white;
  cursor: pointer;
  margin-right: 1rem;
  border-radius: 10px;
`;

const RidingBtn = styled.button`
  background-color: black;
  width: 157px;
  height: 58px;
  color: white;
  cursor: pointer;
  border-radius: 10px;
`;

const RidingQR = () => {
  return (
    <>
      <Container>
        <RidingTextBox>주행하기</RidingTextBox>
        <QRBox></QRBox>
        <QRText>QR을 인식해주세요</QRText>
        <BtnBox>
          <BackBtn>돌아가기</BackBtn>
          <RidingBtn>주행하기</RidingBtn>
        </BtnBox>
      </Container>
    </>
  );
};

export default RidingQR;