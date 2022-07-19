import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
