import React from 'react';
import styled from 'styled-components';
import Profileimg from './img/profile.png';
import Chart from '../Chart/Chart';

const All = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 105%;
    height: 304px;
    background-color: white;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-left: -10px;
    
`
const Box = styled.div`
    width: 350px;
    height: 188px;
    border-radius: 20px;
    margin-top: 11px;
    background: #EFEFEF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.p`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
`
const Top = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: -150px;
    margin-bottom: -20px;
    `
const Img = styled.div`
    background-image: url(${Profileimg});
    background-size: cover;
    width:25px;
    height:26px;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:1px;
    margin-left: 7px;
`
const TextWrapper1 = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: 15px;
`
const TextName = styled.p`
    font-size: 12px;
    font-weight: 600;
`
const TextNext = styled.p`
    font-size:8px;
    font-weight: 500;
`
const Midle = styled.div`
    display: flex;
    flex-direction: row;
    gap:18px;
    margin-top: 5px;
`
const Boxcontainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`
const BlackBox = styled.div`
    width: 201px;
    height: 24px;
    border-radius: 10px;
    background: #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
`
const BlackText = styled.p`
    font-size: 10px;
    font-weight: bold;
    color: #FFF;
`
const BlackText1 = styled.p`
    font-size: 10px;
    font-weight: bold;
    color: #FFF;
`
const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    gap:20px;
    margin-top: 20px;
`
const Rewardbox = styled.div`
    width: 145px;
    height: 28px;
    border-radius: 10px;
    background: #D3FF52;
    font-size: 10px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    
`
const Profile = () => {
    return (
        <>
        <All>
            <TextWrapper1>
                <Title>SONNY님!</Title>
                <Title>오늘의 리워드를 확인해보세요.</Title>
            </TextWrapper1>
            <Box>
                <Top>
                    <Img/>
                    <TextWrapper>
                        <TextName>SONNY님</TextName>
                        <TextNext>SONNY님의 리워드를 확인해보세요.</TextNext>
                    </TextWrapper>
                </Top>
                    <Midle>
                        <Boxcontainer>
                            <BlackBox>
                                <BlackText>누적된 리워드</BlackText>
                                <BlackText1>1500 P</BlackText1>
                            </BlackBox>
                            <BlackBox>
                                <BlackText>오늘 받은 리워드</BlackText>
                                <BlackText1>1500 P</BlackText1>
                            </BlackBox>
                        </Boxcontainer>
                        <Chart></Chart>
                    </Midle>
                <Bottom>
                    <Rewardbox>리워드 혜택보러 가기</Rewardbox>
                    <Rewardbox>리워드 확인하러 가기</Rewardbox>
                </Bottom>
            </Box>
        </All>
        </>
    );
};

export default Profile;