import React from 'react';

import './App.css';
import Routes from './routes';
import Downloadapk from './pages/components/downloadapk';


import logo from './assets/logo.svg';

function App() {

  return (
    <div className="container">

      <Downloadapk></Downloadapk>
      
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <Routes />
      </div>

    </div>
  );

}

export default App;
