import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Shelf.css';
import logo from '../assets/logo.png';

function header(props) {
  return (
    <header className="shelf-header">
      <div className="shelf-logo-box">
        <Link to="/">
          <img src={logo} className="shelf-logo" alt="Shelfie Logo" />
        </Link>
      </div>
      <div className="shelf-title">Shelf {props.name}</div>
    </header>
  );
}
export default header;
