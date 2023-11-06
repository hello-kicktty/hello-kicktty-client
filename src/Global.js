import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    
    ::-webkit-scrollbar{
      height: 3px;
      width: 5px;
      background: rgba(255, 255, 255, 1);
    }
    
    ::-webkit-scrollbar-thumb {
      background: #ec7538;
      -webkit-border-radius: 3ex;
    }
    ::-webkit-scrollbar-corner {
      background: rgba(255,255,255,1);
    }
  }
  
 
  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght&display=swap');
    font-weight:400;
  }
  html, body, #root {
      width: 100%;
      min-height: 100vh;
      background-image: url('/img/LogoBack5.jpg');
      background-size: auto;
      background-repeat: repeat;
      background-color: none;
      justify-content: center;
      display: flex;
      margin: 0;
      padding: 0;
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 16px;
      box-sizing: border-box;
  }
  `;

export default GlobalStyle;