import styled from "styled-components";
import { Outlet } from "react-router-dom";
const Background = styled.div`
  width: 40vw;
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 770px) {
    width: 100%;
  }
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
