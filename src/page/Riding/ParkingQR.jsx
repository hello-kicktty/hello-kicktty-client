import React from "react";
import styled from "styled-components";
import QRCodeScanner from "../../Components/Camera/Camera";
import img1 from "../../Components/Box/img/Group 237.png";
import img2 from "../../Components/Box/img/Group 238.png";
import img3 from "../../Components/Box/img/Subtract.png";
import { useNavigate } from "react-router-dom";
import QRCodeScanner1 from "../../Components/Camera/CameraPark";
import { useEffect, useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
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
`;
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
`;
const Img2 = styled.div`
  background-image: url(${img2});

  width: 82px;
  height: 84px;
`;
const Img3 = styled.div`
  background-image: url(${img3});

  width: 236px;
  height: 236px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
`;
const Box1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
const ParkingQR = (props) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [renderTime, setRenderTime] = useState(null); // 렌더링 시간 상태
  const navigate = useNavigate();

  useEffect(() => {
    const renderTimestamp = new Date();
    const hours = renderTimestamp.getHours();
    const minutes = ("0" + renderTimestamp.getMinutes()).slice(-2);
    const seconds = ("0" + renderTimestamp.getSeconds()).slice(-2);

    // 시간을 24시간 형식으로 표시
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    setRenderTime(formattedTime);
    console.log(formattedTime);

    var start_time_str = localStorage.getItem("start_time");

    if (start_time_str) {
      var timeComponents = start_time_str.split(":");
      var hours1 = parseInt(timeComponents[0], 10);
      var minutes1 = parseInt(timeComponents[1], 10);
      var seconds1 = parseInt(timeComponents[2], 10);

      var start_time = new Date();
      start_time.setHours(hours1);
      start_time.setMinutes(minutes1);
      start_time.setSeconds(seconds1);

      console.log("start_time as Date object:", start_time);

      // 두 Date 객체 간의 차이를 밀리초 단위로 계산
      var timeDifferenceInMilliseconds = renderTimestamp - start_time;

      // 밀리초를 시, 분, 초로 변환
      var secondsDifference =
        Math.floor(timeDifferenceInMilliseconds / 1000) % 60;
      var minutesDifference =
        Math.floor(timeDifferenceInMilliseconds / (1000 * 60)) % 60;
      var hoursDifference = Math.floor(
        timeDifferenceInMilliseconds / (1000 * 60 * 60)
      );

      // hh:mm:ss 형식의 문자열로 변환
      var rating = `${("0" + hoursDifference).slice(-2)}:${(
        "0" + minutesDifference
      ).slice(-2)}:${("0" + secondsDifference).slice(-2)}`;

      console.log(typeof rating);
      console.log(rating);
      localStorage.setItem("rating", rating);
    } else {
      console.error("Invalid or missing start_time in localStorage");
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // 위도와 경도 값을 상태에 설정
        setLatitude(latitude);
        setLongitude(longitude);
        console.log(`위도: ${latitude}, 경도: ${longitude}`);
      },
      (error) => {
        console.error("Error getting user location:", error);
        // 위치 정보를 가져오는 데 실패한 경우에 대한 처리
      }
    );
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정

  return (
    <>
      <Container>
        <Box>
          <RidingTextBox>{props.text}</RidingTextBox>
          <QRBox>
            <QRCodeScanner1 latitude={latitude} longitude={longitude} />
            <Img3></Img3>
          </QRBox>
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

export default ParkingQR;
