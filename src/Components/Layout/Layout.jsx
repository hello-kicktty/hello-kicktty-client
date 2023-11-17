import styled from "styled-components";
import { Outlet } from "react-router-dom";
const Background = styled.div`
  width: 390px;
  background-color: #EFEFEF;;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

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
