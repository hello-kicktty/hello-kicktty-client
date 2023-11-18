import React from 'react';
import styled from 'styled-components';
import Toggle from "./toggle.png";
import { useEffect,useState } from 'react';
import * as api from "../../Api";
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
const Top = ({
    isAccordionOpen,
    handleAccordionToggle,
    selectedLocation,
    handleAccordionItemClick,
    onDataToParent,
    kickid,
  }) => {
    const kickid1 = kickid;
    const [data, setData] = useState([]); 
    const sendDataToParent = () => {
        const dataToSend = data;
        onDataToParent(dataToSend);
      };
    console.log(kickid1)
    const getData = async () => {
        console.log(kickid1)
        const fetchedData = await api.getKickRecommend(parseInt(kickid1));
        console.log(typeof (fetchedData));
        setData(fetchedData);
        localStorage.setItem("TractionData", JSON.stringify(fetchedData));
        sendDataToParent();
    };
  
    useEffect(() => {
     if(kickid1)getData();
    }, [kickid1]);
    if(data) {
    }
    return (
    <StyledTop isAccordionOpen={isAccordionOpen}>
      {selectedLocation}
      <TopToggle onClick={handleAccordionToggle}>
        {" "}
        <TopToggleImg src={Toggle} isAccordionOpen={isAccordionOpen} />{" "}
      </TopToggle>
      {isAccordionOpen && (
        <AccordionContent isAccordionOpen={isAccordionOpen}>
          {/* 아코디언 내용 */}
          <AccordionInner>
            <AccordionInnerEach
              onClick={() => handleAccordionItemClick("인하대 본관")}
            >
              {JSON.parse(localStorage.getItem("getNamespace"))[data.clusters[0].cluster_id]}
            </AccordionInnerEach>
            <AccordionInnerEach
              onClick={() => handleAccordionItemClick("인하대 5호관 남")}
            >
              {JSON.parse(localStorage.getItem("getNamespace"))[data.clusters[1].cluster_id]}
            </AccordionInnerEach>
            <AccordionInnerEach
              onClick={() => handleAccordionItemClick("인하대 서호관")}
            >
              {JSON.parse(localStorage.getItem("getNamespace"))[data.clusters[2].cluster_id]}
            </AccordionInnerEach>
            <AccordionInnerEach
              onClick={() => handleAccordionItemClick("인하대 하이테크관")}
            >
              {JSON.parse(localStorage.getItem("getNamespace"))[data.clusters[3].cluster_id]}
            </AccordionInnerEach>
          </AccordionInner>
        </AccordionContent>
      )}
    </StyledTop>
      );
    }
  
  export default Top;