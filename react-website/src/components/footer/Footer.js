import React, { useState, useEffect } from "react";
import "./Footer.css";
import logoFooter from "../../assets/images/logoFinal.png";
import "../../styles/styles.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logoFooter" onClick={scrollToTop}>
          <img
            src={logoFooter}
            className="logoFooter"
            onClick={scrollToTop}
            alt="logoFooter"
            size={10}
          ></img>
        </div>
        <h4>
          &copy; {year} Longwave Technologies L.I. Inc. All Rights Reserved.
        </h4>
      </div>
    </footer>
  );
}
export default Footer;
