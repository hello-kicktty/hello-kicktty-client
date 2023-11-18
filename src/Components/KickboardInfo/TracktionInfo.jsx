import React from "react";
import styled from "styled-components";
import Kickboard from "../Box/img/메이커톤 킥보드 1.png";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
import { ReactComponent as Icon1 } from "./Assets/Group 181.svg";
import { ReactComponent as Icon2 } from "./Assets/🦆 icon _coin_.svg";
import { ReactComponent as Icon3 } from "./Assets/🦆 icon _map_.svg";
import { ReactComponent as Icon4 } from "./Assets/🦆 icon _organic food_.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { MotionConfig } from "framer-motion";
import Img3 from "./Group 610.png";
const Box = styled.div`
  border-radius: 50px 50px 0px 0px;
  background: #f0f0f0;
  box-shadow: 0px 0px 70px 0px rgba(0, 0, 0, 0.25);
  width: 390px;
  height: 45%;
  position: fixed;
  bottom: 0;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  z-index: 5;
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 62px;
  background-color: white;
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
`;
const Middle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: bold;
  gap: 27px;
`;
const WhiteBox = styled.div`
  width: 157px;
  height: 32px;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const KickboardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Motionbox = styled(motion.div)`
  background-image:url(${Img3});
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  z-index: 10;
  position: absolute;
`
const KickboardText1 = styled.p`
  font-size: 10px;
  font-weight: bold;
`;
const KickboardText2 = styled.p`
  font-size: 10px;
  color: #9e9e9e;
  span {
    color: #a2cb28;
  }
`;
const Img = styled.div`
  background-image: url(${Kickboard});
  background-size: cover;
  width: 64px;
  height: 64px;
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
`;
const Box2 = styled.div`
  width: 350px;
  height: 32px;
  border-radius: 10px;
  background: #d3ff52;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const Text1 = styled.p`
  font-size: 13px;
  font-weight: bold;
  .v-line {
    border-left: solid black 0.5px;
    height: 25px;
  }
`;

function handleButtonClick(){
    
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // min 이상 max 미만의 랜덤 정수값 반환
}

const TractionInfor = () => {
  const navigate = useNavigate();
  const Kickid = localStorage.getItem('Kickid');
  const handleButtonClick = () => {
    localStorage.removeItem('Kickid');
    navigate('/parkingQR');
  };
  const random = getRandomInt(30,100);
  return (
    <>
            <Motionbox
    initial={{ rotate:90, scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 150,
      damping: 30,
      repeat: Infinity,
      repeatType: "reverse"
    }}
  />
      <Box>
        <Top>
          <div style={{ width: 54, height: 54 }}>
            <CircularProgressbar
              value={random}
              text={random+"%"}
              strokeWidth={15}
              styles={buildStyles({
                textColor: "black",
                pathColor: "#D3FF52",
                trailColor: "black",
              })}
            />
          </div>
          <KickboardInfo>
            <KickboardText1>Max Pro</KickboardText1>
            <KickboardText2>{Kickid}</KickboardText2>
            <KickboardText2>
              약 <span>24km</span>주행할 수 있어요!
            </KickboardText2>
          </KickboardInfo>
          <Img />
        </Top>
        <Middle>
              견인 중입니다.
        </Middle>
        <Box2>
          <Icon1 />
          <Text1>1분</Text1>
          <Text1>
            <div class="v-line"></div>
          </Text1>
          <Icon3 />
          <Text1>1km</Text1>
        </Box2>
        <Buttonbox3
          onClick={handleButtonClick}
        >
          주차하기
        </Buttonbox3>
      </Box>
    </>
  );
};

export default TractionInfor;
