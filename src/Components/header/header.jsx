import React, { useEffect } from "react";
import styled from "styled-components";

import { AiOutlineSearch } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { filterProps } from "framer-motion";

const HeaderBox = styled.div`
  width: 100%;
  height: fit-content;
  background-color: wheat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  background-color: #d9d9d9;
  width: 2rem;
  height: 2rem;
`;

const UserName = styled.p`
  font-weight: bold;
  margin-left: 1rem;
`;

const IconBox = styled.div`
  display: flex;
  width: 35%;
  justify-content: space-evenly;
`;

const Header = (props) => {
  return (
    <>
      <HeaderBox>
        <LeftBox>
          <Logo />
          <UserName>Hello Kicktty</UserName>
        </LeftBox>
        <IconBox>
          <AiOutlineSearch size={30} />
          <FiBell size={30} />
          <AiOutlineMenu size={30} />
        </IconBox>
      </HeaderBox>
    </>
  );
};

export default Header;
