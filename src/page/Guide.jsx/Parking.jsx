import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Img } from '../../Components//Box/img/Group 602.svg';
const All = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    margin-bottom: 37px;
`
const StyledIcon = styled(Img)`
    margin-right: 15px; 
`;
const Parking = () => {
    return (
        <div>
            <All>
                <Box>주차하기</Box>
                <StyledIcon/>
            </All>
        </div>
    );
};

export default Parking;