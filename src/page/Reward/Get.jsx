import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Img1 } from './Group 608.svg';
const Box = styled.div`
    width: 346px;
    height: 71px;
    border-radius: 20px;
    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const Text = styled.div`
    font-size: 10px;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    gap:9px;
    margin-left: 70px;
    margin-top: -3px;
`
const Text1 = styled.p`
    
`

const Get = () => {
    return (
        <>
        <Box>
            <Img1></Img1>
            <Text>
                <Text1>2023.11.12</Text1>
                <Text1>500P</Text1>
            </Text>
        </Box>
        </>
    );
};

export default Get;