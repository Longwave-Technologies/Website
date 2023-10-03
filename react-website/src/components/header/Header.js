import React, { useState }  from 'react';
import logo from '../../assets/images/logoFinal.png';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import Home from '../../pages/homePage/HomePage';


function Header({ tabsData }) {
  const [activeTab, setActiveTab] = useState(''); // Initially set to 'home', change as needed
  const navigate = useNavigate();

  const handleTabClick = ({tab}) => {
    setActiveTab({tab});
    navigate({tab});
  };

  return (
    <div className="header">
      <img src={logo} alt="CompanyLogo" className="logo" />
      <ul className="tabs">
        {tabsData.map((tab, index) => (
          <li key={tab.label}>
            <div className="tab" onClick={() => handleTabClick(tab.path)} style={activeTab === tab.path ? { backgroundColor: '#f0f0f0' } : {}}> 
              {tab.label}
            </div>
          </li>
        ))}

      </ul>


    </div>
  );
}

export default Header;
