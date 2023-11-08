import React from 'react';
import styled from 'styled-components';
import FooterImg from './IMG/Group 149.png'
import FooterImg1 from './IMG/Group 150.png'
import FooterImg2 from './IMG/Group 151.png'
const Box = styled.div`
    width: 350px;
    height: 78px;
    border-radius: 20px;
    background: #FFF;
    margin-top: 46px;
    margin-bottom: 72px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const Img1 = styled.div`
    background-image: url(${FooterImg});
    background-size: cover;
    width: 101px;
    height: 55px;   
`
const Img2 = styled.div`
    background-image: url(${FooterImg1});
    background-size: cover;
    width: 101px;
    height: 55px;  
`
const Img3 = styled.div`
    background-image: url(${FooterImg2});
    background-size: cover;
    width: 101px;
    height: 55px; 
`
const Footer = () => {
    return (
        <div>
            <Box>
                <Img1/>
                <Img2/>
                <Img3/>
            </Box>
        </div>
    );
};

export default Footer;