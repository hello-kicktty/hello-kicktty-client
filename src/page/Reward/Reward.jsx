import React from 'react';
import img from '../../Components/Box/img/Group 236.png'
import img1 from '../../Components/Box/img/Group 147.png'
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as Img4 } from './지금까지 받은 리워드 11월 견인 리워드 11월 주차 리워드.svg';

const Img = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 345px;
  height: 85px;
  margin-top: 60px;
`;
const Img1 = styled.div`
    background-image: url(${img1});
    background-size: cover;
    width: 27px;
    height: 27px;
    margin-top: 10px;
`
const Box = styled.div`
  width: 350px;
  height: 230px;
  border-radius: 20px;
  background: #d3ff52;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Top = styled.div`
    display: flex;
    flex-direction: row;
    margin-left:-90px;
    margin-bottom: 13px;
    margin-top: 10px;
`
const Box3 = styled.div`
    width: 320px;
    height: 94px;
    background-color: white;
    border-radius: 20px;
    margin-top: 11px;
    margin-bottom: 13px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const TextWrapper = styled.div`
  margin-left: 11.75px;
  margin-top: 6px;
`;
const Text = styled.p`
  font-size: 12px;
  font-weight: bold;
`;
const Text1 = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
const Text2 = styled.p`
    font-size: 12px;
    color: #506B00;
    margin-top: 5px;
`
const Text5 = styled.p`
    font-size: 11px;
    font-weight: 500;
`
const TextWrraper2 = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
`
const Box1 = styled.div`
    width: 320px;
    height: 31px;
    background-color: #4A6300;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 5px;
    color: white;
`
const Text3 = styled.p`
  font-size: 10px;
  margin-top: 22px;
  margin-left: auto;
  margin-right: 10%;
`;
const RewardAll = styled.div`
  gap: 16px;
  margin-top: 10px;
`;
const RewardBox = styled.div`
  width: 350px;
  height: 104px;
  border-radius: 20px;
  background: #fff;
`;

`
const Buttonbox = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    height:32px;
    background-color: white;
    border-radius: 10px;
    margin-top: 20px;
`

const Reward = () => {
    let [btnActive, setBtnActive] = useState("");
    let [btnActive1, setBtnActive1] = useState("");
    const data = ['리워드 적립 내역', '리워드 사용 내역'];
    const data1 = ['ON', 'OFF'];
    const toggleActive = (e) => {
        setBtnActive((prev) => {
          return e.target.value;
        });
      };
      const toggleActive1 = (e) => {
        setBtnActive1((prev) => {
          return e.target.value;
        });
      };
  
    return (
        <>
        <Img></Img>
        <Box>
            <Top>
                <Img1></Img1>
                    <TextWrapper>
                        <Text1>SONNY님</Text1>
                        <Text2>SONNY님! 1000P 달성하셨네요!</Text2>
                    </TextWrapper>
            </Top>
            <Box1>
                <Text>사용가능한 리워드</Text>
                <Text>1000 P</Text>
            </Box1>
            <Box1>
                <Text>오늘 받은 리워드</Text>
                <Text>20 P</Text>
            </Box1>
            <Box3>
                <Img4></Img4>
                <TextWrraper2>
                    <Text5>15400P</Text5>
                    <Text5>15400P</Text5>
                    <Text5>15400P</Text5>
                </TextWrraper2>
            </Box3>
        </Box>
        <Buttonbox>
            {data.map((item, idx) => (
             <button
             value={idx}
             className={"btn1" + (idx == btnActive ? " active" : "")}
             onClick={toggleActive}
           >
             {item}
           </button>
            ))}
            </Buttonbox>
        <Text3>최신순</Text3>
        
        <RewardAll>
        <Outlet/>
        </RewardAll>
        </>
    );
};

export default Reward;
