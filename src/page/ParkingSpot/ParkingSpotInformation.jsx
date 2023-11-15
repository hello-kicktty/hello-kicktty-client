import React from "react";
import styled from "styled-components";
import Toggle from "./toggle.png";
import Line from "./line.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useState } from "react";

const Box = styled.div`
  border-radius: 50px 50px 0px 0px;
  background: #f0f0f0;
  box-shadow: 0px 0px 70px 0px rgba(0, 0, 0, 0.25);
  width: 390px;
  height: 45%;
  position: absolute;
  bottom: 0;
  z-index: 5;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`;

/* eslint-disable no-undef */
const Top = ({ isAccordionOpen, handleAccordionToggle }) => (
  <StyledTop isAccordionOpen={isAccordionOpen}>
    추천 주차지 선택하기
    <TopToggle onClick={handleAccordionToggle}>
      {" "}
      <TopToggleImg src={Toggle} />{" "}
    </TopToggle>
    {isAccordionOpen && (
      <AccordionContent isAccordionOpen={isAccordionOpen}>
        {/* 아코디언 내용 */}
        <AccordionInner>
          <AccordionInnerEach
            onClick={() => handleAccordionItemClick("인하대 본관")}
          >
            인하대 본관
          </AccordionInnerEach>
          <AccordionInnerEach
            onClick={() => handleAccordionItemClick("인하대 5호관 남")}
          >
            인하대 5호관 남
          </AccordionInnerEach>
          <AccordionInnerEach
            onClick={() => handleAccordionItemClick("인하대 서호관")}
          >
            인하대 서호관
          </AccordionInnerEach>
          <AccordionInnerEach
            onClick={() => handleAccordionItemClick("인하대 하이테크관")}
          >
            인하대 하이테크관
          </AccordionInnerEach>
        </AccordionInner>
      </AccordionContent>
    )}
  </StyledTop>
);

const AccordionInner = styled.div`
  display: flex;
  width: 308px;
  height: 145px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const AccordionInnerEach = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: center;
  width: 287px;
  height: 29px;
  border-radius: 10px;
  background-color: #f0f0f0;
  align-items: center;
  cursor: pointer;
`;

const StyledTop = styled.div`
  display: flex;
  width: 350px;
  height: 32px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 50px;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  overflow: ${(props) => (props.isAccordionOpen ? "visible" : "hidden")};
  z-index: 10;
  transition: height 0.3s ease; /* height 속성에 transition 효과 추가 */

  &:hover {
    cursor: pointer;
  }
`;

const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 13px;
  background-color: white;
  position: absolute;
  top: -10rem;
  right: 3rem;
  height: 145px;
  overflow: hidden;
  opacity: ${(props) => (props.isAccordionOpen ? "1" : "0")};
  transition: height 1s ease, opacity 1s ease;
`;

const TopToggle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: black;
  position: absolute;
  left: 310px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopToggleImg = styled.img`
  width: auto;
  height: auto;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: bold;
  gap: 27px;
  position: absolute;
  top: 6rem;
  right: 2rem;
`;
const WhiteBox = styled.div`
  width: fit-content;
  height: 32px;
  border-radius: 10px;
  text-align: center;
  line-height: 32px;
  margin-left: -10px;
`;
const Buttonbox3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  height: 58px;
  background-color: black;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 15px;
  color: white;
  font-size: 17px;
  font-weight: bold;
  position: absolute;
  top: 17rem;
`;
const Box2 = styled.div`
  width: 350px;
  height: 32px;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 14rem;
`;
const Text1 = styled.p`
  font-size: 13px;
  font-weight: bold;
  .v-line {
    border-left: solid black 0.5px;
    height: 25px;
  }
`;

const InnerBox1 = styled.div`
  display: flex;
  background-color: #d3ff52;
  width: 86px;
  height: 32px;
  justify-content: center;
  margin-top: 20px;
`;

const InnerBox2 = styled.div`
  display: flex;
  background-color: #d3ff52;
  width: 185px;
  height: 32px;
  padding-left: 30px;
  margin-top: 20px;
`;

const LineImg = styled.img`
  width: auto;
  height: auto;
  position: absolute;
  top: 3.5rem;
  left: 2rem;
`;

const ParkingSpotInformation = () => {
  const [selectedLocation, setSelectedLocation] =
    useState("추천 주차지 선택하기");

  const handleAccordionItemClick = (location) => {
    setSelectedLocation(location);
    // Perform any additional actions if needed
  };
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <>
      <Box>
        <Top
          isAccordionOpen={isAccordionOpen}
          handleAccordionToggle={handleAccordionToggle}
        />
        <Middle>
          <WhiteBox>
            <InnerBox1>출발</InnerBox1> <InnerBox1>도착</InnerBox1>
          </WhiteBox>
          <LineImg src={Line} />
          <WhiteBox>
            <InnerBox2>현위치</InnerBox2>{" "}
            <InnerBox2> 인하대 비룡플라자</InnerBox2>
          </WhiteBox>
        </Middle>
        <Box2>
          <Text1>시간</Text1>
          <Text1>1분</Text1>
          <Text1>
            <div class="v-line"></div>
          </Text1>
          <Text1>거리</Text1>
          <Text1>1km</Text1>
        </Box2>
        <Buttonbox3>견인 시작하기</Buttonbox3>
      </Box>
    </>
  );
};

export default ParkingSpotInformation;
