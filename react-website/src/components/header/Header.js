import React, { useState } from "react";
import logo from "../../assets/images/logoFinal.png";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import Home from "../../pages/homePage/HomePage";

function Header({ tabsData }) {
  const [activeTab, setActiveTab] = useState("home"); // Initially set to 'home', change as needed
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(tab);
  };

  return (
    <div className="header">
      <img src={logo} 
        alt="Home" 
        className="logo" 
        onClick={() => {
          // alert('Logo clicked!'); 
          navigate("/");
        }} 
      />
      <ul className="tabs">
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
  );
}

export default Header;
