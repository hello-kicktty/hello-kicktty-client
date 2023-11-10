import styled from "styled-components";
import { Outlet } from "react-router-dom";
const Background = styled.div`
  width: 390px;
  background-color: #F3F3F3;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 770px) {
    width: 100%;
  }
  overflow-y: hidden;
  overflow-x: hidden;
`;

function Layout() {
  return (
    <>
      <Background>
        <Outlet />
      </Background>
    </>
  );
}
export default Layout;
