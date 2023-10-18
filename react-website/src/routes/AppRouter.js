import React from "react";
import "./AppRouter.css";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/homePage/HomePage";
import Header from "../components/header/Header";
import Products from "../pages/productPage/ProductPage";
import Contact from "../pages/contactPage/ContactPage";
import Footer from "../components/footer/Footer";

import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

const tabsData = [
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Component = ({ title }) => {
  return (
    <div>
      <p style={{ paddingTop: "150vh" }}>{title}</p>
    </div>
  );
};
function AppRouter() {
  return (
    <div className="app-container">
      <div className="app_background">
        <div class="dot3"></div>
        <div class="dot2"></div>
        <div class="dot1"></div>
      </div>

      <Router basename="/">
        <Wrapper>
          <Header tabsData={tabsData} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer className="footer" />
        </Wrapper>
      </Router>
    </div>
  );
}

export default AppRouter;
