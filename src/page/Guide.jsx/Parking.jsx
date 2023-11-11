import React from 'react';
import styled from 'styled-components';

const All = styled.div`
    display: flex;
    justify-content: center;
`
const Box = styled.div`
    width: 266px;
    height: 33px;
    border-radius: 10px;
    background: #000;
    font-size: 12px;
    font-weight: bold;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Parking = () => {
    return (
        <div>
            <All>
                <Box>주차하기</Box>
            </All>
        </div>
    );
};

export default Parking;