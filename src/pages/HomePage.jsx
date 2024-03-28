import React from "react";
import SideMenu from "../components/SideMenu";
import Dashboard from "../components/Dashboard";
import Highlights from "../components/Highlights";

const HomePage = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex ">
      <SideMenu />
      <Dashboard />
      <Highlights />
    </div>
  );
};

export default HomePage;
