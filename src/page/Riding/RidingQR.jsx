import React from "react";
import styled from "styled-components";
import QRCodeScanner from "../../Components/Camera/Camera";
import img1 from '../../Components/Box/img/Group 237.png'
import img2 from '../../Components/Box/img/Group 238.png'
import img3 from '../../Components/Box/img/Subtract.png'
import { useNavigate } from "react-router-dom";
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
  margin-bottom: 30px;
  `
const RidingTextBox = styled.div`
 background: #000;
  width: 273px;
  height: 44px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 7px;
  color: white;
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
  margin-top: 35px;
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

const Img1 = styled.div`
    background-image: url(${img1});

    width: 82px;
    height: 84px;
`
const Img2 = styled.div`
    background-image: url(${img2});

    width: 82px;
    height: 84px;
`
const Img3 = styled.div`
    background-image: url(${img3});

    width: 236px;
  height: 236px;
  position: absolute;
  top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
`
const Box1 = styled.div`
  display: flex;
  flex-direction: row;
  gap:30px;
`
const RidingQR = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Box>
        <RidingTextBox>{props.text}</RidingTextBox>
        <QRBox><QRCodeScanner/><Img3></Img3></QRBox>
        <QRText>QR을 인식해주세요</QRText>
        </Box>
        <Box1>
          <Img1></Img1>
          <Img2></Img2>
        </Box1>
        <BtnBox>
          <BackBtn
            onClick={() => {
              navigate(-1);
            }}
          >
            돌아가기
          </BackBtn>
        </BtnBox>
      </Container>
    </>
  );
};

export default RidingQR;
