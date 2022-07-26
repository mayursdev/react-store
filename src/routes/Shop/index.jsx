import React from "react";
import { Route, Routes } from "react-router-dom";
import Collection from "./Collection";
import Previews from "./Previews";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<Previews />} />
      <Route path=":collection" element={<Collection />} />
    </Routes>
  );
};

export default Shop;
