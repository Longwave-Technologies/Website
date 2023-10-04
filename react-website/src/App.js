import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import LoadingScreen from './pages/loadingScreen/LoadingScreen';


function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
