import React, { useState, useEffect }  from 'react';
import parallaxImg from '../../assets/images/home-parallax-background.png';
import './HomePage.css';
import ServicesInfo from '../../components/textAndImageList/TextAndImageList';

function HomePage () {
  return (
    <div className="content" id="content" >
      <div className="image-container">
        <img src={parallaxImg} className='background-image' alt='parallaxImg'></img>
        <div className="text-overlay">
          <p>Going between digital and paper has never been easier. <br/>
             Longwave provides the perfect office imaging solution for your organization. <br/>
              We prioritize quality services and exceeding customer expectations.
          </p>
        </div>
      </div>
      {/* <ServicesInfo className='servicesInfo' /> */}

      <div className='brands'>

      </div>
      <div className='boost'>

      </div>

    </div>
  );
};
export default HomePage;
