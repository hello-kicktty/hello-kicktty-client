import React from 'react';
import styled from 'styled-components';
import Qrimg from './img/qr.png';
import { Link } from 'react-router-dom';
const All = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -30px;
`
const Title = styled.p`
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 11px;
    margin-left: 5px;
`
const Title1 = styled.p`
    font-size: 15px;
    font-weight: 800;
    margin-left: 4px;
    margin-bottom: 9px;

`
const BoxWrapper = styled.div`
    display: flex;
    gap:20px;
    flex-direction: row;

    
`
const Box = styled(Link)`
    width: 165px;
    text-decoration: none;
    height: 165px;
    background-color: white;
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
height: 29px;
    background-color: #D3FF52;
    border-radius: 20px;
    color:black;
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
            <All>
                <Title1>QR 스캔하기</Title1>
                <Title> QR을 스캔 후 주행 견인을 시작하세요.</Title>
                <BoxWrapper>
                <Box to="/ridingqr"><Img/><Button>주행하기</Button></Box>
                <Box to="/tractionqr"><Img/><Button>견인하기</Button></Box>
                </BoxWrapper>
            </All>
        </div>
    );
};

export default ScanBox;