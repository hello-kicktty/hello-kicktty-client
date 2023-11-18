import React from "react";
import styled from "styled-components";
import Toggle from "./toggle.png";
import Line from "./line.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useState } from "react";
import * as api from "../../Api";
import { useEffect } from "react";
import Top from "./Top";
import { useNavigate } from "react-router";

const Box = styled.div`
  border-radius: 50px 50px 0px 0px;
  background: #f0f0f0;
  /* box-shadow: 0px 0px 70px 0px rgba(0, 0, 0, 0.25); */
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
  &:hover {
    background-color: #d3ff52; // 마우스 호버 시 변경될 배경색
  }
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
  transition: transform 0.2s ease; // transform 속성에 transition 효과 추가
  transform: ${(props) =>
    props.isAccordionOpen ? "rotate(0deg)" : "rotate(180deg)"};
`;

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: bold;
  width: 350px;
  height: 180px;
  gap: 27px;
  top: 6rem;
  background-color: white;
  border-radius: 10px;
`;
const WhiteBox = styled.div`
  width: fit-content;
  border-radius: 10px;
  text-align: center;
  line-height: 32px;
  margin-left: 15px;
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
  top: 18rem;
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
  background-color: ${(props) => props.color};
  color: ${(props) => props.fontcolor};

  width: 86px;
  height: 32px;
  justify-content: center;
  margin-top: ${(props) => props.margintop};

  border-radius: 10px;
`;

const InnerBox2 = styled.div`
  display: flex;
  background-color: #d3ff52;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  width: 170px;
  height: 32px;
  color: ${(props) => props.fontcolor};
  padding-left: 15px;
  margin-top: ${(props) => props.margintop};
`;

const LineImg = styled.img`
  width: auto;
  height: 50px;
  position: absolute;
  transform: translate(1500%, 150%) rotate(1.3deg);
  top: 5.5rem;
  left: 2rem;
  z-index: 50;
`;

const InformBox = styled.div`
  display: flex;
  width: 190px;
  height: 22px;
  background-color: #f0f0f0;
  position: absolute;
  border-radius: 10px;
  transform: translate(75%, 390%);
  justify-content: space-evenly;
  align-items: center;
`;

const InformInner = styled.div`
  display: flex;
  width: 69px;
  height: 12px;
  font-size: 8.5px;
`;

const AddressBox1 = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  position: absolute;
  color: #6b8f00;
  font-size: x-small;
  transform: translate(0%, -15%);
`;

const AddressBox2 = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  position: absolute;
  color: #648700;
  font-size: x-small;

  transform: translate(0%, -15%);
`;


const ParkingSpotInformation = ({id,name}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] =useState("추천 주차지 선택하기");
  const [data, setData] = useState("");
  const [TractionData, setTractionData] = useState("");
  const kickname=name;
  console.log(id);
  const kickid=id;
  const navigate = useNavigate();
  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);

  };
  const handleDataFromTop = (receivedData) => {
    console.log('자식 컴포넌트에서 받은 데이터:', receivedData);
    // 여기서 받은 데이터로 상태 업데이트나 필요한 작업 수행
  };
const handleTractionButtonClick = () => {
  localStorage.removeItem("Tractionid");
  localStorage.removeItem("TractionData");
  navigate('/TractionQr')
}

  const handleAccordionItemClick = (location) => {
    setSelectedLocation(location);
    setIsAccordionOpen(false); // close the accordion after selecting a location
    // Perform any additional actions if needed
  };

  // useEffect(() => {
  //   const storedTractionData = localStorage.getItem("TractionData");
  //   if (storedTractionData) {
  //     const tractionData = JSON.parse(storedTractionData);
  //     if (tractionData.my_name) {
  //       setTractionData(tractionData.my_name);
  //       console.log(tractionData.my_name);
  //     }
  //   }
  // }, [TractionData]); // Make sure the dependencies are correctly set
  
  // console.log(TractionData);
  return (
    <>
      <Box>
        <Top
          onDataToParent={handleDataFromTop}
          isAccordionOpen={isAccordionOpen}
          handleAccordionToggle={handleAccordionToggle}
          selectedLocation={selectedLocation}
          handleAccordionItemClick={handleAccordionItemClick}
          kickid = {kickid}
        />
        <Middle>
          <WhiteBox>
            <InnerBox1 margintop="20px">출발</InnerBox1> <LineImg src={Line} />
            <InnerBox1 margintop="70px" color="#648700" fontcolor="white">
              도착
            </InnerBox1>
          </WhiteBox>
          <InformBox>
            <InformInner>견인거리 | 467m</InformInner>
            <InformInner>소요시간 | 8m</InformInner>
          </InformBox>
          <WhiteBox>
            <InnerBox2 margintop="20px">{kickname}</InnerBox2>{" "}
            <AddressBox1>인천광역시 미추홀구 인하로 100 인하대학교</AddressBox1>
            <InnerBox2
              margintop="70px"
              selectedLocation={selectedLocation}
              color="#648700"
              fontcolor="white"
            >
              {" "}
              {selectedLocation}
            </InnerBox2>
            <AddressBox2>인천광역시 미추홀구 인하로 100 인하대학교</AddressBox2>
          </WhiteBox>
        </Middle>
        {/* <Box2>
          <Text1>시간</Text1>
          <Text1>1분</Text1>
          <Text1>
            <div class="v-line"></div>
          </Text1>
          <Text1>거리</Text1>
          <Text1>1km</Text1>
        </Box2> */}
        <Buttonbox3 onClick={handleTractionButtonClick}>견인하기</Buttonbox3>
      </Box>
    </>
  );
};

export default ParkingSpotInformation;
