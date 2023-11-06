import { styled } from "styled-components";
//import logo from ''
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const Back = styled(motion.div)`
  background-color: white;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const backvariants = {
  hidden: { backgroundColor: "#ffffff" },
  visible: {
    backgroundColor: "#00ffb3",
    transition: { type: "tween", duration: 2, delay: 1 },
  },
};
export default function LogoWelcome() {
    const navigate = useNavigate();
  
    const backani = useAnimation();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        // 페이지 전환코드
       navigate("/main");
      }, 4000);
      backani.start("visible");

      return () => {
        clearTimeout(timer);
      };
    }, []);
  
    return (
      <Back variants={backvariants} initial="hidden" animate={backani}>
        <img width="200" height="200" />
      </Back>
    );
  }
  