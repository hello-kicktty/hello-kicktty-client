import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import coin from "./coin.png";

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
  width: 369px;
  height: 163px;
`;

const Reward = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <TextBox>
          <Text1>주차하기 완료</Text1>
          <Text2>리워드를 확인해보세요!</Text2>
        </TextBox>
        <CoinImg src={coin}></CoinImg>
        <BtnContainer>
          <HomeBtn
            onClick={() => {
              navigate("/main");
            }}
            btnColor={"rgba(0, 0, 0, 0.25)"}
          >
            Home
          </HomeBtn>
          <HomeBtn>리워드 확인하러 가기</HomeBtn>
          <HomeBtn>주행 영수증 보러가기</HomeBtn>
        </BtnContainer>
      </Container>
    </>
  );
};

export default Reward;
