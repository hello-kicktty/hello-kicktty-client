import React from 'react';
import styled from 'styled-components';

const Wrapper=  styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 43px;
    margin-left: -15px;

`
const TopText = styled.p`
        color: #000;
        font-size: 12px;
        font-weight: 600;
`
const Box = styled.div`
    width: 105%;
    height: 247px;
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
    margin-right: auto;
    margin-left: 30px;
    margin-top:10px;
    margin-bottom: 20px;
`
const GuideText1 = styled.p`
    color: #000;
    font-size: 15px;
    font-weight: bold;
    margin-right: auto;
    margin-left: 30px;
    margin-top:50px;
`
const SliderXItems = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  gap:25px;
  margin-left: 30px;
`;
const SliderXwrapper = styled.div`
  position: relative;
  overflow-x: scroll;
  min-height: 200px;
  width: 100%;
  scroll-snap-type: x mandatory;
`;
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
                <Box>
                    <GuideText1>헬로킥티 이용 가이드</GuideText1>
                    <GuideText>안전한 주행을 위해 확인해주세요.</GuideText>
                        <SliderXwrapper>
                            <SliderXItems>
                                <GuideBox></GuideBox>
                                <GuideBox></GuideBox>
                                <GuideBox></GuideBox>
                                <GuideBox></GuideBox>
                            </SliderXItems>
                        </SliderXwrapper>
                </Box>
            </Wrapper>
        </div>
    );
};

export default Guide;