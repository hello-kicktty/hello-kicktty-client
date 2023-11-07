import React from 'react';
import styled from 'styled-components';

const Wrapper=  styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 43px;
`
const TopText = styled.p`
        color: #000;
        font-size: 12px;
        font-weight: 600;
`
const Box = styled.div`
    width: 349px;
    height: 404px;
    border-radius: 20px;
    background: #D3FF52;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: 13px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const GuideText = styled.p`
    color: #000;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 25px;
    margin-right: 220px;
`
const BoxWrapper = styled.div`
     display: grid;
    grid-template-columns: repeat(2, 1fr); // 2개의 열
    gap: 16px; // 그리드 아이템 간의 간격
`
const GuideBox = styled.div`
    width: 141.311px;
    height: 141.311px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

`
const Guide = () => {
    return (
        <div>
            <Wrapper>
                <TopText>안전한 주행을 위해 확인해주세요.</TopText>
                <Box>
                    <GuideText>이용 가이드!</GuideText>
                    <BoxWrapper>
                        <GuideBox></GuideBox>
                        <GuideBox></GuideBox>
                        <GuideBox></GuideBox>
                        <GuideBox></GuideBox>
                    </BoxWrapper>
                </Box>
            </Wrapper>
        </div>
    );
};

export default Guide;