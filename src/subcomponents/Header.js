import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';

function header() {
  return (
    <header className="home-header">
      <div className="logo-box">
        <Link to="/">
          <img src={logo} className="home-logo" alt="Shelfie Logo" />
        </Link>
        <div className="header-title">SHELFIE</div>
      </div>
    </header>
  );
}
export default header;
