import React from "react";
import Header from "../../Components/header/header";
import UserWelcome from "../../Components/main/UserWelcome/UserWelcome";
import MiniMap from "../../Components/main/minimap/minimap";

const Main = () => {
  return (
    <>
      <Header />
      <UserWelcome />
      <MiniMap></MiniMap>
    </>
  );
};

export default Main;
