import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from "../../Components/KickboardInfo/Assets/Group 253.svg"
const All = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 40px;
`

const StyledIcon = styled(Icon)`
    margin-right: 15px; 
`;
const Riding = () => {
    return (
        <div>
            <All>
                <Box>리워드 안내</Box>
                <StyledIcon/>
            </All>
        </div>
    );
};

export default Riding;