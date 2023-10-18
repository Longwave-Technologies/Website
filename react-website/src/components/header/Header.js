import React, { useState } from "react";
import logo from "../../assets/images/logoFinal.png";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
// import { Link } from 'react-scroll';
import "../../styles/styles.css";
import * as Scroll from "react-scroll";
import Fade from "react-reveal/Fade";

function Header({ tabsData }) {
  const [activeTab, setActiveTab] = useState("home"); // Initially set to 'home', change as needed
  const navigate = useNavigate();

  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const scroller = Scroll.scroller;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(tab);
  };

  const scrollToServicesAnchor = () => {
    scroller.scrollTo("services-anchor", {
      duration: 0,
      smooth: true,
      offset: -150,
    });
  };

  const goToHomeAndScrollServices = async () => {
    await navigate("/");
    await scroller.scrollTo("services-anchor", {
      duration: 0,
      smooth: true,
      offset: -150,
    });
  };
  return (
    <Fade>
      <div className="header">
        <ul className="tabs">
          <img
            src={logo}
            alt="Home"
            className="logo"
            onClick={() => {
              // alert('Logo clicked!');
              navigate("/");
            }}
          />
          <li>
            {location === "home" ? (
              <div className="tab" onClick={scrollToServicesAnchor}>
                Services
              </div>
            ) : (
              <div className="tab" onClick={goToHomeAndScrollServices}>
                Services
              </div>
            )}
          </li>
          {tabsData.map((tab, index) => (
            <li key={tab.label}>
              <div
                className="tab"
                onClick={() => {
                  handleTabClick(tab.path);
                }}
                style={activeTab === tab.path ? { color: "#159cf6" } : {}}
              >
                {tab.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Fade>
  );
}

export default Header;
