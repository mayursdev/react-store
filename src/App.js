import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="font-poppins">
      <div>Dummy navbar</div>
      <Outlet />
      <div>Dummy footer</div>
    </div>
  );
};

export default App;
