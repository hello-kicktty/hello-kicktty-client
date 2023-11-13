import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import stars from "./stars.png";
import kickboard from "./kickboard.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(211, 255, 82, 1), rgba(211, 255, 82, 0));
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`;

const Text1 = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Text2 = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;

const BtnContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-direction: column;
`;

const HomeBtn = styled.button`
  background-color: ${(props) => (props.btnColor ? props.btnColor : "Black")};
  width: 350px;
  height: 58px;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 15px;
  font-size: 16px;
  border: 0rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CoinImg = styled.img`
  width: 360px;
  height: 300px;
  margin-top: 1rem;
`;

// 애니메이션 효과 정의
const slideInAnimation = keyframes`
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 309px;
    height: 56px;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const appearStars = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SlideInPopup = styled.div`
  width: 309px;
  height: 56px;
  background-color: white;
  position: absolute;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 121px;
  left: 50%;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  /* 애니메이션 적용 */
  animation: ${slideInAnimation} 0.4s ease-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  /* 새로운 애니메이션 적용 */
  &::before {
    content: "주행이 완료되었습니다!";
    opacity: 0;
    animation: ${fadeIn} 0.4s ease-out 0.4s forwards; /* fadeIn animation with a delay */
  }
`;

const Stars1 = styled.img`
  width: 48px;
  height: 48px;
  position: absolute;
  transform: translate(-310%, -630%);
  opacity: 0; /* Initially set opacity to 0 */
  animation: ${appearStars} 0.5s ease-out 0.8s forwards;
`;

const Stars2 = styled.img`
  width: 48px;
  height: 48px;
  position: absolute;
  transform: translate(300%, -520%);
  opacity: 0; /* Initially set opacity to 0 */
  animation: ${appearStars} 0.5s ease-out 0.8s forwards;
`;

const ParkingComplete = (props) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // 페이지 렌더링 후 0.5초 후에 팝업을 보여줍니다.
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Container>
        {/* 애니메이션이 적용된 팝업 */}
        {showPopup && <SlideInPopup />}
        <Stars1 src={stars}></Stars1>
        <Stars2 src={stars}></Stars2>
        <TextBox>
          <Text1>주차하기 완료!</Text1>
          <Text2>주행영수증을 확인해보세요!</Text2>
        </TextBox>
        <CoinImg src={kickboard}></CoinImg>
        <BtnContainer>
          <HomeBtn
            onClick={() => {
              navigate("/main");
            }}
            btnColor={"rgba(0, 0, 0, 0.25)"}
          >
            Home
          </HomeBtn>
          <HomeBtn>주행 영수증 보러가기</HomeBtn>
        </BtnContainer>
      </Container>
    </>
  );
};

export default ParkingComplete;
