import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate  } from 'react-router-dom';
import Home from '../pages/homePage/HomePage';
import Header from '../components/header/Header';
import Services from '../pages/servicePage/ServicePage';
import Products from '../pages/productPage/ProductPage';
import Contact from '../pages/contactPage/ContactPage';
import About from '../pages/aboutPage/AboutPage';
import Footer from '../components/footer/Footer';


const tabsData = [
    { label: 'Home', path: '/'},
    { label: 'Services', path: '/services'},
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
    { label: 'About', path: '/about'},
  ];

function AppRouter() {
    return (
      <div className="app-container">
      <Router>
        <Header tabsData={tabsData} />
        <Routes>
          <Route path="/" exact element={<Home />}  />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer className='footer' />
      </Router>
      </div>
    );
  }
  
  export default AppRouter;