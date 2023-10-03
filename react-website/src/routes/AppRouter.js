import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/homePage/HomePage';
import Header from '../components/header/Header';
import Services from '../pages/servicePage/ServicePage';
import Products from '../pages/productPage/ProductPage';
import Contact from '../pages/contactPage/ContactPage';
import About from '../pages/aboutPage/AboutPage';

const tabsData = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
    { label: 'About', path: '/about' },
  ];

function AppRouter() {
    return (
        <Router>
        <div className="AppRouter">
          <Header tabsData={tabsData} />
        {/* <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        </Routes> */}
        </div>
    </Router>
  
    );
  }
  
  export default AppRouter;