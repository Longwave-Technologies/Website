import React, { useState, useEffect } from "react";
import parallaxImg from "../../assets/images/home/parallax-background.png";
import "./HomePage.css";
import "../../styles/styles.css";
import ServicesInfo from "../../components/textAndImageList/TextAndImageList";
import canon from "../../assets/images/brands/canon.png";
import brother from "../../assets/images/brands/brother.png";
import hp from "../../assets/images/brands/hp.png";
import ricoh from "../../assets/images/brands/ricoh.png";
import konicaminolta from "../../assets/images/brands/konicaminolta.png";
import kyocera from "../../assets/images/brands/kyocera.png";
import nec from "../../assets/images/brands/nec.png";
import sharp from "../../assets/images/brands/sharp.png";
import toshiba from "../../assets/images/brands/toshiba.png";
import xerox from "../../assets/images/brands/xerox.png";

function HomePage() {
  return (
    <div className="content" id="content">
      <div className="parallax-container">
        <div className="text-overlay">
          <p>
            Going between digital and paper has never been easier. Longwave
            provides the perfect office imaging solution for your organization.
            We prioritize quality services and exceeding customer expectations.
          </p>
        </div>
      </div>
      <div className="brands-section">
        <h1>Brands We Support</h1>
        <div className="brand-imgs-section">
          <img src={canon} className="brand-imgs" alt="brand img"></img>
          <img src={kyocera} className="brand-imgs" alt="brand img"></img>
          <img src={sharp} className="brand-imgs" alt="brand img"></img>
          <img src={konicaminolta} className="brand-imgs" alt="brand img"></img>
          <img src={ricoh} className="brand-imgs" alt="brand img"></img>
          <img src={nec} className="brand-imgs" alt="brand img"></img>
          <img src={brother} className="brand-imgs" alt="brand img"></img>
          <img
            src={hp}
            className="brand-imgs"
            id="brand-img-hp"
            alt="brand img"
          ></img>
          <img src={xerox} className="brand-imgs" alt="brand img"></img>
          <img src={toshiba} className="brand-imgs" alt="brand img"></img>
        </div>
      </div>
      <div id="fpc_effect-back">
        <div id="fpc_box">
          <div id="fpc_content">
            <a
              className="contact-button"
              href="https://longwave-technologies.github.io/contact"
            >
              <h1> Ready to boost your productivity?</h1>
              <h3> Click here</h3>
            </a>
          </div>
          <div id="fpc_corner-box">
            <a id="fpc_page-tip" href="#">
              <div id="fpc_corner-contents">
                {/* 
                <div id="fpc_corner-button">
                  <strong>Click here </strong> to contact us
                </div> 
                */}
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <ServicesInfo className='servicesInfo' /> */}

      <div className="brands"></div>
      <div className="boost"></div>
    </div>
  );
}
export default HomePage;
