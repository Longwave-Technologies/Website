import React, { useEffect, useState } from 'react';
import './LoadingScreen.css'; // Create this CSS file for styling
import { default as introSVG } from '../../assets/images/logoFinalAnimation.svg' ; 

const LoadingScreen = () => {
  const [animationComplete, setAnimationComplete] = useState(false);


  // Simulate an animation delay
  useEffect(() => {
    console.log('animationComplete:', animationComplete);

    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000); // Change the time as needed
    
    console.log('animationComplete:', animationComplete);

    return () => clearTimeout(animationTimeout);
  }, [animationComplete]);


  return (
    <div className={`loadingScreen${animationComplete ? ' animationComplete' : ''
    }`}>
        <img src={introSVG} alt="introSVG"  className="introSVG"/>
    </div>

  );
};

export default LoadingScreen;
