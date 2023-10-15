import React, { useEffect, useState, useRef } from 'react';
import './LoadingScreen.css'; // Create this CSS file for styling
import { default as introSVG } from '../../assets/images/logoFinalAnimation.svg' ; 
import { gsap } from 'gsap';


const LoadingScreen = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  // const imgRef = useRef(null);

  // Simulate an animation delay
  useEffect(() => {
    // const tl = imgRef.current;

    // gsap.to(tl, {introSVG});
    console.log('animationComplete:', animationComplete);

    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000); // Change the time as needed
    
    console.log('animationComplete:', animationComplete);

    return () => {
      clearTimeout(animationTimeout)

      // Clean up the animation when the component unmounts
      // tl.kill();
    };
  }, [animationComplete]);


  return (
    <div className={`loadingScreen${animationComplete ? ' animationComplete' : ''
    }`}>
        <img src={introSVG} alt="introSVG"  className="introSVG"     width="auto" height="auto" />

    </div>

  );
};

export default LoadingScreen;
