import './App.css';
import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import LoadingScreen from './pages/loadingScreen/LoadingScreen';
import HomePage from './pages/homePage/HomePage';

function App() {
  const [isLoading, setIsLoading] = useState(localStorage.getItem('isWebsiteLoading') === 'true');

  useEffect(() => {
    //In index.js and App.js, add logic to determine whether the animation should be applied initially (isWebsiteLoading) or when the website is still loading. You can use a state variable and the localStorage API for this purpose.
    // Check if the website is still loading using localStorage
    const isWebsiteLoading = localStorage.getItem('isWebsiteLoading'); //animation should be applied initially 
    console.log('BEFORE: isLoading, isWebsiteLoading:', isLoading,isWebsiteLoading );

      // Add an event listener to the window's load event
      window.addEventListener('load', () => {
      // After the animation, set the flag to indicate it's not loading anymore
        setTimeout(() => {
          localStorage.setItem('isWebsiteLoading', 'false');
          setIsLoading(false);
        }, 4100); // Simulate a 4-second loading time   
      });
    console.log('AFTER: isLoading, isWebsiteLoading:', isLoading,isWebsiteLoading );

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', () => {});
    };
  }, []);


  return (

    <div className="App">

      { isLoading ? <LoadingScreen /> : (
       console.log('AppRouter displayed'),
        <AppRouter />
      )
      }
    </div>
  );
}

export default App;
