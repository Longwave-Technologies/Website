import React from "react";
import "./AppRouter.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "../pages/homePage/HomePage";
import Header from "../components/header/Header";
import Services from "../pages/servicePage/ServicePage";
import Products from "../pages/productPage/ProductPage";
import Contact from "../pages/contactPage/ContactPage";
import Footer from "../components/footer/Footer";

const tabsData = [
   { label: "Services", path: "/services" },
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
    
      <Router>
        <Header tabsData={tabsData} />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services"  element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer className="footer" />
      </Router>
    </div>
  );
}

export default AppRouter;
