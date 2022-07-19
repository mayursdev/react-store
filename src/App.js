import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Outlet />
      <div>Dummy footer</div>
    </div>
  );
};

export default App;
