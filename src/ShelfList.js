import React from 'react';
import {Link} from 'react-router-dom';
import Header from './subcomponents/Header';
import Button from './subcomponents/Button';
import './styles/App.css';

function shelfList() {
  return (
    <div>
      <Header />
      <div className="App">
        <Link to="/bins/A">
          <Button title="Shelf A" />
        </Link>
        <Link to="/bins/B">
          <Button title="Shelf B" />
        </Link>
        <Link to="/bins/C">
          <Button title="Shelf C" />
        </Link>
        <Link to="/bins/D">
          <Button title="Shelf D" />
        </Link>
      </div>
    </div>
  );
}

export default shelfList;
