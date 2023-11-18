import React from "react";
import { ReactComponent as Icon } from "../../Components/KickboardInfo/Assets/Group 240.svg";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 130px;
  margin-top: 30px;
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-left: 80px;
  margin-top: -20px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  hr {
    border: solid 2px ${(props) => (props.active ? "#D3FF52" : "#D9D9D9")};
    width: 240%;
  }
`;
const SectionText = styled.div`
  font-size: 12px;
  margin: 3px;
`;
const Home = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [activeSection, setActiveSection] = useState(params.section || 'Riding');
    useEffect(() => {
        setActiveSection(params.section || 'Parking');
    }, [params.section]);

    const handleSectionClick = (section) => {
        navigate(`${section}`);
        setActiveSection(section);
    };
    const goBack = () => {
        navigate('/main'); 
      };
    return (
        <div>
            <Top>
            <Icon onClick={goBack}></Icon>
            <Text>이용가이드</Text>
            </Top>
            <Section>
                <SectionBox active={activeSection === 'Parking'} onClick={() => handleSectionClick('Parking')}>
                    <SectionText>주차하기</SectionText>
                    <hr/>
                </SectionBox>
                <SectionBox active={activeSection === 'Traction'} onClick={() => handleSectionClick('Traction')}>
                    <SectionText>견인하기</SectionText>
                    <hr/>
                </SectionBox>
                <SectionBox active={activeSection === 'Riding'} onClick={() => handleSectionClick('Riding')}>
                    <SectionText>리워드안내</SectionText>
                    <hr/>
                </SectionBox>
            </Section>
            <Outlet/>
        </div>
    );
};

export default Home;
