import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import homebtnimg from "./homebtnimg.png";

const HomebtnImg = styled.img`
  width: 40px;
  height: 40px;
  z-index: 500;
  position: absolute;
  transform: translate(350%, 70%);
`;

const Homebtnimg = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomebtnImg
        src={homebtnimg}
        onClick={() => {
          navigate("/main");
        }}
      ></HomebtnImg>
    </>
  );
};

export default Homebtnimg;
