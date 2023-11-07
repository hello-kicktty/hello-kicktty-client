import React from 'react';
import styled from 'styled-components';
import Qrimg from './img/qr.png';
const BoxWrapper = styled.div`
    display: flex;
    gap:20px;
    flex-direction: row;
    
`
const Box = styled.div`
    width: 165px;
    height: 165px;
    background-color: #D3FF52;
    border-radius:20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
const Img = styled.div`
    background-image: url(${Qrimg});
    background-size: cover;
    width:100px;
    height:100px;
`
const Button = styled.div`
    width: 100px;
    height: 21px;
    background-color: black;
    border-radius: 20px;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 13px;
    margin-top: 10px;
`
const ScanBox = () => {
    return (
        <div>
            <BoxWrapper>
            <Box><Img/><Button>주행하기</Button></Box>
            <Box><Img/><Button>견인하기</Button></Box>
            </BoxWrapper>
        </div>
    );
};

export default ScanBox;