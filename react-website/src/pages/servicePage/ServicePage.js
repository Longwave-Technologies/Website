import React from "react";
import "../../styles/styles.css";
import "./ServicePage.css";
import home_copier from "../../assets/images/home/copier.png";
import home_tech from "../../assets/images/home/technician.png";

function ServicePage() {
  return (
    <div> 
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
  );
}

export default ServicePage;
