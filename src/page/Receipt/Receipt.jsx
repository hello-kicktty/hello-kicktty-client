import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import img from "../../Components/Box/img/Group 219.png";
import img1 from "../../Components/Box/img/Group 231.png";
import img2 from "../../Components/Box/img/Group 232.png";
import img3 from "../../Components/Box/img/킥보드 번호 날짜 시간 거리 적립된 리워드.png";
import img4 from "../../Components/Box/img/소계 할인.png";
import img5 from "../../Components/Box/img/Group 155.png";
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
`;
const Toptext1 = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 47px;
`;
const Img = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 317px;
  height: 44px;
`;
const Img1 = styled.div`
  background-image: url(${img1});
  background-size: cover;
  width: 320px;
  height: 34px;
  margin-bottom: 37px;
  margin-top: 23px;
`;
const Img2 = styled.div`
  background-image: url(${img2});
  background-size: cover;
  width: 320px;
  height: 34px;
`;
const Img3 = styled.div`
  background-image: url(${img3});
  margin-bottom: 32px;
  width: 70px;
  height: 135px;
`;
const Img4 = styled.div`
  background-image: url(${img4});
  width: 21px;
  height: 42px;
  margin-top: 18px;
  margin-bottom: 3px;
`;
const Img5 = styled.div`
  background-image: url(${img5});
  width: 210px;
  height: 13px;
`;
const Box = styled.div`
  width: 350px;
  height: 451px;
  background-color: white;
  border-radius: 20px;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Box1 = styled.div`
  width: 320px;
  height: 34px;
  background: #f0f0f0;
  border-radius: 10px;
  margin-top: 15px;
`;
const Box2 = styled.div`
  width: 350px;
  height: 58px;
  border-radius: 10px;
  background: rgba(205, 205, 205, 0.5);
  margin-top: 40px;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const Box3 = styled.div`
  width: 350px;
  height: 58px;
  border-radius: 10px;
  background: black;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const Receipt = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Top>
        <Toptext1>주행 상세 영수증</Toptext1>
        <Img />
      </Top>
      <Box>
        <Img1 />
        <Img3 />
        <Img2 />
        <Box1></Box1>
        <Img4 />
        <Img5 />
      </Box>
      <Box2
        onClick={() => {
          navigate("/main");
        }}
      >
        HOME
      </Box2>
      <Box3>리워드 확인하러가기</Box3>
    </div>
  );
};

export default Receipt;
