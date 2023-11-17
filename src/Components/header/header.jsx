import React, { useEffect } from "react";
import styled from "styled-components";

import { AiOutlineSearch } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { filterProps } from "framer-motion";
import { ReactComponent as Logo } from "../KickboardInfo/Assets/로고.svg"
import { ReactComponent as Logo2 } from "../KickboardInfo/Assets/상단 바.svg"

const HeaderBox = styled.div`
  width: 390px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-top: 15px;
  position: absolute;
  z-index:1;
  padding-top:20px;
  padding-bottom: 100px;
  // padding: 30px 10px;
  background-color: #fff;

`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 21px;
`;


const RightBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 21px;
`;


const Header = (props) => {
  return (
    <>
      <HeaderBox>
        <LeftBox>
          <Logo />
        </LeftBox>
        <RightBox>
          <Logo2/>
          </RightBox>
      </HeaderBox>
    </>
  );
};

export default Header;
