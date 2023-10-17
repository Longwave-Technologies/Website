import React from "react";
import "./AppRouter.css";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/homePage/HomePage";
import Header from "../components/header/Header";
import Products from "../pages/productPage/ProductPage";
import Contact from "../pages/contactPage/ContactPage";
import Footer from "../components/footer/Footer";

const tabsData = [
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

function AppRouter() {
  return (
    <div className="app-container">
      <div className="app_background">
        <div class="dot3"></div>
        <div class="dot2"></div>
        <div class="dot1"></div>
      </div>

      <Router basename="/">
        <Header tabsData={tabsData} />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer className="footer" />
      </Router>
    </div>
  );
}

export default AppRouter;
