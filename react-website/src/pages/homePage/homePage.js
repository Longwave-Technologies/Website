import React, { useState, useEffect }  from 'react';
import parallaxImg from '../../assets/images/home-parallax-background.png';

function HomePage () {
  return (
    <div className="content" id="content" >
      <h1>header</h1>
      <img src={parallaxImg} className='parallaxImg' alt='parallaxImg'></img>
    </div>
  );
};
export default HomePage;
