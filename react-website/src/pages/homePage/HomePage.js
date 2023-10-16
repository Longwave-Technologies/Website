import React, { useState, useEffect } from "react";
import parallaxImg from "../../assets/images/home/parallax-background.png";
import "./HomePage.css";
import "../../styles/styles.css";
import { Link } from "react-router-dom";
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
import home_copier from "../../assets/images/home/copier.png";
import home_tech from "../../assets/images/home/technician.png";

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
      <div className="information-section">
        <h1>Services</h1>
        <div className="information-section-grid">
          <img
            src={home_copier}
            className="info-section-img"
            alt="copy img"
          ></img>
          <div className="info-section-text-div">
            <h2>Sales & Lease</h2>
            <ul classname="info-section-list">
              <li>New & refurbished multi-function printers (MFPs).</li>
              <li>Color or Monochrome options</li>
              <li>Delivery & installation within the Tri-state area</li>
              <li>Flexible equipment rental agreements</li>
              <li>Original & generic parts and toner cartridges</li>
              <li>
                Security features, Fax Machine, and additional add-on options
              </li>
              <li>
                <a className="button">
                  <strong>Click here to view our product offerings!</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="info-section-text-div">
            <h2>Repairs, Maintenance, & Supplies</h2>
            <ul classname="info-section-list">
              <li>On-site troubleshooting & repairs</li>
              <li>Printer & Scanner set up for Windows & Mac</li>
              <li>Networking troubleshooting</li>
              <li>Remote troubleshooting </li>
              <li>Service contracts for maintenance only</li>
            </ul>
          </div>
          <img
            src={home_tech}
            className="info-section-img"
            alt="copy img"
          ></img>
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
        <Link className="button" to="/Contact"></Link>
        <div id="fpc_box">
          <div id="fpc_content">
            <Link className="button" to="/Contact">
              <h1> Ready to boost your productivity?</h1>
              <h3> Click here</h3>
            </Link>
          </div>
          <div id="fpc_corner-box">
            <div id="fpc_page-tip">
              <div id="fpc_corner-contents">
                {/* If you want to add text behind the paper curl
                <div id="fpc_corner-button">
                  <strong>Click here </strong> to contact us
                </div> 
                */}
              </div>
            </div>
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
