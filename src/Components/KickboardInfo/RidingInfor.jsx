import React from 'react';
import styled from 'styled-components';
import Kickboard from "../Box/img/메이커톤 킥보드 1.png"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const Box = styled.div`
    border-radius: 50px 50px 0px 0px;
    background: #F0F0F0;
    box-shadow: 0px 0px 70px 0px rgba(0, 0, 0, 0.25);
    width: 390px;
    height: 45%;  
    position: fixed;
    bottom: 0;
    z-index: 5;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
`
const Top = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 62px;
    background-color: white;
    border-radius: 10px;
    justify-content: space-evenly;
    align-items: center;
`
const Middle = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 12px;
    font-weight: bold;
    gap:27px;
`
const WhiteBox = styled.div`
    width: 157px;
    height: 32px;
    background-color: white;
    border-radius: 10px;
    text-align: center;
    line-height: 32px;
`
const KickboardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
`
const KickboardText1 = styled.p`
    font-size: 10px;
    font-weight: bold;
`
const KickboardText2 = styled.p`
    font-size: 10px;
    color: #9E9E9E;
    span{
        color: #A2CB28;
    }
`
const Img = styled.div`
    background-image: url(${Kickboard});
    background-size: cover;
    width:64px;
    height:64px;
`
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
`
const Box2 = styled.div`
    width: 350px;
    height: 32px;
    border-radius: 10px;
    background: #D3FF52;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
const Text1 = styled.p`
    font-size: 13px;
    font-weight: bold;
    .v-line {
        border-left : solid black 0.5px;
        height : 25px;
}

`
const RidingInfor = () => {
    return (
        <>
        <Box>
        <Top>
          <div style={{ width: 54, height: 54 }}>
            <CircularProgressbar value={66} text={'66%'} strokeWidth={15}
            styles={buildStyles({
                textColor: "black",
                pathColor: "#D3FF52",
                trailColor: "black"
              })}/>
        </div>
            <KickboardInfo>
                <KickboardText1>Max Pro</KickboardText1>
                <KickboardText2>234125</KickboardText2>
                <KickboardText2>약 <span>24km</span>주행할 수 있어요!</KickboardText2>
            </KickboardInfo>
            <Img/>
          </Top>
        <Middle>
            <WhiteBox>
                1분당 180원
            </WhiteBox>
            <WhiteBox>
                리워드 혜택 받기
            </WhiteBox>
        </Middle>
        <Box2>
            <Text1>시간</Text1>
            <Text1>1분</Text1>
            <Text1><div class='v-line'></div></Text1>
            <Text1>거리</Text1>
            <Text1>1km</Text1>
        </Box2>
        <Buttonbox3>
                주차하기
         </Buttonbox3>
        </Box>
        
        </>
    );
};

export default RidingInfor;