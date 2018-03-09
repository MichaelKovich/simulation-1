import React from 'react';
import logo from '../assets/logo.png';

function header() {
  return (
    <header className="home-header">
      <div className="logo-box">
        <img src={logo} className="home-logo" alt="Shelfie Logo" />
        <div className="header-title">SHELFIE</div>
      </div>
    </header>
  );
}
export default header;
