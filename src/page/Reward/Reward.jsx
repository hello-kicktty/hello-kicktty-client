import React from 'react';
import img from '../../Components/Box/img/Group 236.png'
import img1 from '../../Components/Box/img/Group 147.png'
import styled from 'styled-components';
const Img = styled.div`
    background-image: url(${img});
    background-size: cover;
    width: 345px;
    height: 85px;
    margin-top: 60px;
`
const Img1 = styled.div`
    background-image: url(${img1});
    background-size: cover;
    width: 37.5px;
    height: 39px;
`
const Box = styled.div`
    width: 350px;
    height: 230px;
    border-radius: 20px;
    background: #D3FF52;
    margin-top: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Top = styled.div`
    display: flex;
    flex-direction: row;
    margin-left:-90px;
    margin-bottom: 13px;
`
const TextWrapper = styled.div`
    margin-left: 11.75px;
    margin-top: 6px;
`
const Text = styled.p`
    font-size: 12px;
    font-weight: bold;
`
const Text1= styled.p`
    font-size:16px;
    font-weight: bold;
`
const Text2 = styled.p`
    font-size: 12px;
    color: #506B00;
    margin-top: 5px;
`
const Box1 = styled.div`
    width: 320px;
    height: 31px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 5px;
`
const Text3 = styled.p`
    font-size: 10px;
    margin-top: 22px;
    margin-left: auto;
    margin-right: 10%;
`
const RewardAll = styled.div`
    gap:16px;
    margin-top: 10px;
`
const RewardBox = styled.div`
    width: 350px;
    height: 104px;
    border-radius: 20px;
    background: #FFF;

`

const Reward = () => {
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
                <Text>누적된 리워드</Text>
                <Text>1000 P</Text>
            </Box1>
            <Box1>
                <Text>오늘 받은 리워드</Text>
                <Text>20 P</Text>
            </Box1>
        </Box>
        <Text3>최신순</Text3>
        <RewardAll>
            <RewardBox></RewardBox>
        </RewardAll>
        </>
    );
};

export default Reward;