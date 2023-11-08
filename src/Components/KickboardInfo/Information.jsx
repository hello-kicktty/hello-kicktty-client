import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    border-radius: 80px 80px 0px 0px;
    background: #F0F0F0;
    box-shadow: 0px 0px 70px 0px rgba(0, 0, 0, 0.25);
    width: 390px;
    height: 35%;  
    position: fixed;
    bottom: 0;
    z-index: 5;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;

`
const Top = styled.div`
    display: flex;
    flex-direction: row;
`
const Battery = styled.div`
    font-size: 25px;
font-weight: 700;
`
const Battery1 = styled.div`
    font-size: 12px;
font-weight: 700;
margin-top: 11px;
margin-left: 2px;
`
const Information = () => {
    return (
        <div>
            <Box>
                <Top>
                    <Battery>66</Battery>
                    <Battery1>%</Battery1>
                </Top>
                
            </Box>
        </div>
    );
};

export default Information;