import React from 'react';
import styled from 'styled-components';
import Profileimg from './img/profile.png';
import {Link} from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const All = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 100%;
    height: 304px;
    background-color: white;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    
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
    font-weight: 800;
    margin-bottom: 5px;
    margin-left: 5px;
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
    width:21px;
    height:21px;
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
    background: #4A6300;;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 12px;
`
const BlackText = styled.p`
    font-size: 12px;
    font-weight: 600;
    color: #FFF;
`
const BlackText1 = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #FFF;
`
const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    gap:20px;
    margin-top: 20px;
`
const Rewardbox = styled(Link)`
    width: 145px;
    height: 28px;
    border-radius: 10px;
    background: #D3FF52;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
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
                        <div style={{ width: 92, height: 92 }}>
                            <CircularProgressbar value={66} text={'66%'} strokeWidth={15}
                            styles={buildStyles({
                                textColor: "black",
                                pathColor: "#D3FF52",
                                trailColor: "black"
                            })}/>
                        </div>
                    </Midle>
                <Bottom>
                    <Rewardbox to = '/reward'>리워드 적립 내역 보기</Rewardbox>
                    <Rewardbox to = '/reward'>리워드 사용 내역 보기</Rewardbox>
                </Bottom>
            </Box>
        </All>
        </>
    );
};

export default Profile;