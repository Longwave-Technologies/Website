import './App.css';
import React from 'react';
import Header from './assets/js/components/Header';
// import Banner from './components/Banner';
// import Services from './components/Services';
// import Products from './components/Products';
// import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* <Banner />
      <Services />
      <Products />
      <Contact /> */}
    </div>
  );
}

export default App;
