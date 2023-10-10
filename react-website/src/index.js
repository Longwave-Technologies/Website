import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// add logic to determine whether the animation should be applied initially or when the website is still loading. You can use a state variable and the localStorage API for this purpose.
// Set the localStorage flag to 'true' when the website loads for the first time or after a refresh
if (!localStorage.getItem('isWebsiteLoading')) {
  localStorage.setItem('isWebsiteLoading', 'true');
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
