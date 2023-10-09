import './App.css';
import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import LoadingScreen from './pages/loadingScreen/LoadingScreen';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('isLoading:', isLoading);
    // Simulate data loading or any other initialization
    setTimeout(() => {
      setIsLoading(false);
    }, 4100); // Simulate a 2-second loading time
  }, []);

  return (
    <div className="App">
      {isLoading ? <LoadingScreen /> : (
       console.log('AppRouter displayed'),
        <AppRouter />
      )}
    </div>
  );
}

export default App;
