import React, { useState } from "react";
import Hearder from "./component/Header.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/cart.jsx";
import Order from "./pages/ordres.jsx";
import Footer from "./component/Footer.jsx";
import NewUser from "./pages/NewUser.jsx"

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Product } from "./pages/Product.jsx";
import ProductDetail from "./component/ProductDetail.jsx";

function App() {
  return (
    <Router>
      <Hearder />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductView:id" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/NewUser" element={<NewUser />} />


      </Routes>

    </Router>
  );
}

export default App;
