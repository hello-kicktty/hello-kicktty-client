import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Img from './img/메이커톤 이용가이드-01 1.png';
import Img1 from './img/Mask group.png';
import Img2 from './img/메이커톤 이용가이드-03 1.png';
import Img4 from './img/123.png';


const Wrapper=  styled.div`
    display: flex;
    flex-direction: column;
    margin-left: -193px;
    margin-top: 3px;
`
const Box = styled.div`
    width: 200%;
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
const GuideBox = styled(Link)`
    width: 141.311px;
    height: 141.311px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: black;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    text-decoration: none;
`
const GuideboxText = styled.p`
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 10%;
`
const Guide = () => {
    return (
        <>
            <Wrapper>
                <Box>
                    <GuideText1>헬로킥티 이용 가이드</GuideText1>
                    <GuideText>안전한 주행을 위해 확인해주세요.</GuideText>
                        <SliderXwrapper>
                            <SliderXItems>
                            <GuideBox to="/guide/riding" style={{ 
  backgroundImage: `url(${Img4})`,
  backgroundSize: "cover"
}}>
  <GuideboxText>리워드 안내</GuideboxText>
</GuideBox>

<GuideBox to="/guide/parking" style={{ 
  backgroundImage: `url(${Img1})`,
  backgroundSize: "cover"
}}>
  <GuideboxText>주차하기</GuideboxText>
</GuideBox>

<GuideBox to="/guide/traction" style={{ 
  backgroundImage: `url(${Img2})`,
  backgroundSize: "cover"
}}>
  <GuideboxText>견인하기</GuideboxText>
</GuideBox>

<GuideBox to="/main" style={{ 
  backgroundImage: `url(${Img})`,
  backgroundSize: "cover"
}}>
  <GuideboxText>주행하기</GuideboxText>
</GuideBox>

                            </SliderXItems>
                        </SliderXwrapper>
                </Box>
            </Wrapper>
        </>
    );
};

export default Guide;