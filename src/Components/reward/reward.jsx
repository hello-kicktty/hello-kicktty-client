import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import coin from "./coin.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #d3ff52;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  width: fit-content;
  height: fit-content;
`;

const Text1 = styled.div``;

const Text2 = styled.div``;

const BtnContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-direction: column;
`;

const HomeBtn = styled.button`
  background-color: black;
  width: 350px;
  height: 58px;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 15px;
  font-size: 16px;
`;

const CoinImg = styled.img`
  width: 369px;
  height: 163px;
`;

const Reward = () => {
  return (
    <>
      <Container>
        <TextBox>
          <Text1>주차하기 완료</Text1>
          <Text2>리워드를 확인해보세요!</Text2>
        </TextBox>
        <CoinImg src={coin}></CoinImg>
        <BtnContainer>
          <HomeBtn>Home</HomeBtn>
          <HomeBtn>Home</HomeBtn>
          <HomeBtn>Home</HomeBtn>
        </BtnContainer>
      </Container>
    </>
  );
};

export default Reward;
