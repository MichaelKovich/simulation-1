import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Bin.css';
import logo from '../assets/logo.png';

function header(props) {
  return (
    <header className="bin-header">
      <div className="bin-logo-box">
        <Link to="/">
          <img src={logo} className="bin-logo" alt="Shelfie Logo" />
        </Link>
      </div>
      <div className="bin-shelf-title">
        <Link to={`/bins/${props.shelfid}`}>Shelf {props.shelfid}</Link>
      </div>
      <div className="bin-bin-title">Bin {props.binid}</div>
    </header>
  );
}
export default header;
