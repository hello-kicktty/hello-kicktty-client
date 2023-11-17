import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import homebtnimg from "./homebtnimg.png";

const HomebtnImg = styled.img`
  width: 50px;
  height: 50px;
  z-index: 500;
  position: absolute;
  transform: ${(props) => props.transform || "translate(350%, 70%)"};
`;

const Homebtnimg = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <HomebtnImg
        src={homebtnimg}
        transform={props.transform}
        onClick={() => {
          navigate("/main");
        }}
      ></HomebtnImg>
    </>
  );
};

export default Homebtnimg;
