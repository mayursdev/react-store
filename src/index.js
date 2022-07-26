import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Login from "./routes/Login";
import Checkout from "./routes/Checkout";
import "./index.css";
import Register from "./routes/Register";
import { UserProvider } from "./contexts/UserContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/shop/*" element={<Shop />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>
);
