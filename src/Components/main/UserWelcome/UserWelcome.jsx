import React, { useEffect } from "react";
import styled from "styled-components";

const UserWelcomeBox = styled.div`
  background-color: skyblue;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  margin-top: 48px;
`;

const ProfileImg = styled.img`
  background-color: #d9d9d9;
  border-radius: 2rem;
  width: 2rem;
  height: 2rem;
`;

const WelcomeMent = styled.div`
  margin-left: 1rem;
`;

const UserWelcome = (props) => {
  return (
    <>
      <UserWelcomeBox>
        <ProfileImg />
        <WelcomeMent>{props.username}님 반가워요!</WelcomeMent>
      </UserWelcomeBox>
    </>
  );
};

export default UserWelcome;
