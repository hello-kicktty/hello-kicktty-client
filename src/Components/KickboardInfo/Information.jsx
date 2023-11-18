import React, { useState } from "react";
import styled from "styled-components";
import "../KickboardInfo/Btn.css";
import Kickboard from "../Box/img/메이커톤 킥보드 1.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ReactComponent as Icon2 } from "./Assets/🦆 icon _coin_.svg";
import { ReactComponent as Icon4 } from "./Assets/🦆 icon _organic food_.svg";

const Box = styled.div`
  border-radius: 50px 50px 0px 0px;
  background: #f0f0f0;
  /* box-shadow: 0px 0px 70px 0px rgba(0, 0, 0, 0.25); */
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
  /* opacity: ${({ opacity }) => opacity}; */
  display: ${({ display }) => display};
  /* transition: opacity 0.5s ease; // 투명도 전환 시 부드럽게 애니메이션 적용 */
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
  flex-direction: column;
`;

const KickboardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

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

const MiddleTextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3px;
  font-weight: bold;
`;

const MiddleText = styled.div`
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const MiddleText1 = styled.div`
  font-size: 11px;
  margin-top: 10px;
`;

const MiddleText2 = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-left: 20%;
`;

const Buttonbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  height: 32px;
  background-color: white;
  border-radius: 10px;
`;

const Buttonbox1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  height: 42px;
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Buttonbox2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 90px;
  height: 30px;
  background-color: #e8e8e8;
  border-radius: 20px;
`;

const Bottom = styled.div``;

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

const Img = styled.div`
  background-image: url(${Kickboard});
  background-size: cover;
  width: 64px;
  height: 64px;
`;

const Information = (props) => {
  const [btnActive, setBtnActive] = useState("");
  const [btnActive1, setBtnActive1] = useState("");
  const [opacity, setOpacity] = useState(1);
  const [display, setDisplay] = useState("flex"); // 추가: 초기값 "flex"로 설정

  const data = ["분당 요금제", "거리 우선 요금제"];
  const data1 = ["ON", "OFF"];

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

  const startDriving = () => {
    setOpacity(0);
    setDisplay("none"); // 추가: display를 "none"으로 변경
    // 다른 로직 추가...
  };

  return (
    <div>
      <Box opacity={opacity} display={display}>
        <Top>
          <div style={{ width: 54, height: 54 }}>
            <CircularProgressbar
              value={66}
              text={"66%"}
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
            <KickboardText2>{props.Title}</KickboardText2>
            <KickboardText2>
              약 <span>24km</span>주행할 수 있어요!
            </KickboardText2>
          </KickboardInfo>
          <Img />
        </Top>
        <Middle>
          <MiddleTextBox>
            <MiddleText>
              <Icon2 />
              요금제
            </MiddleText>
            <MiddleText1>잠금해제 600원 + 주행요금 160 / 분</MiddleText1>
          </MiddleTextBox>
          <Buttonbox>
            {data.map((item, idx) => (
              <button
                key={idx}
                value={idx}
                className={"btn1" + (idx == btnActive ? " active" : "")}
                onClick={toggleActive}
              >
                {item}
              </button>
            ))}
          </Buttonbox>
        </Middle>
        <Bottom>
          <MiddleTextBox>
            <MiddleText>
              <Icon4 />
              리워드
            </MiddleText>
            <MiddleText1>내 잔여 리워드 : 4000P</MiddleText1>
          </MiddleTextBox>
          <Buttonbox1>
            <MiddleText2>리워드 사용해 할인받기</MiddleText2>
            <Buttonbox2>
              {data1.map((item, idx) => (
                <button
                  key={idx}
                  value={idx}
                  className={"btn2" + (idx == btnActive1 ? " active" : "")}
                  onClick={toggleActive1}
                >
                  {item}
                </button>
              ))}
            </Buttonbox2>
          </Buttonbox1>
        </Bottom>
        <Buttonbox3 onClick={startDriving}>주행하기</Buttonbox3>
      </Box>
    </div>
  );
};

export default Information;
