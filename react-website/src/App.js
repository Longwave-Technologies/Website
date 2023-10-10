import './App.css';
import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import LoadingScreen from './pages/loadingScreen/LoadingScreen';
import HomePage from './pages/homePage/HomePage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const isHomePage = '/';
  const currentPath = window.location.pathname;
  const isMatchingPath = currentPath === isHomePage;

  //In index.js and App.js, add logic to determine whether the animation should be applied initially or when the website is still loading. You can use a state variable and the localStorage API for this purpose.
  const isWebsiteLoading = localStorage.getItem('isWebsiteLoading');


  useEffect(() => {
    console.log('isLoading:', isLoading,isWebsiteLoading);
    // Check if the website is still loading (e.g., by checking a flag in localStorage)

    if (isWebsiteLoading === 'true') {
    // If it's still loading, add the class to trigger the animation
      setIsLoading(true);
    
      // After the animation, set the flag to indicate it's not loading anymore
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('isWebsiteLoading', 'false');
    }, 4100);
   } else {
      setIsLoading(false);
    }; // Simulate a 2-second loading time
  }, []);


  return (

    <div className="App">

      { isLoading ? <LoadingScreen /> : (
       console.log('AppRouter displayed'+ isMatchingPath),
        <AppRouter />
      )
      }
    </div>
  );
}

export default App;
