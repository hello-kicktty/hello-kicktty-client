import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    border-radius: 50px 50px 0px 0px;
    background: #F0F0F0;
    box-shadow: 0px 0px 70px 0px rgba(0, 0, 0, 0.25);
    width: 390px;
    height: 17%;  
    position: fixed;
    bottom: 0;
    z-index: 5;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
   
`
const Buttonbox = styled.div`
    width: 165px;
    height: 58px;
    border-radius: 10px;
    background: #202B00;
    color: white;
    font-size: 16px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
const FirstInfo = () => {
    return (
        <div>
            <Box>
            <Buttonbox>주행하기</Buttonbox>
            <Buttonbox>견인하기</Buttonbox>
            </Box>
        </div>
    );
};

export default FirstInfo;