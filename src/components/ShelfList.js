import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../subcomponents/Header';
import Button from '../subcomponents/Button';
import '../styles/ShelfList.css';

function shelfList() {
  return (
    <div>
      <Header />
      <div className="App">
        <Link to="/bins/A">
          <div className="shelf">
            <Button title="Shelf A" />
          </div>
        </Link>
        <Link to="/bins/B">
          <div className="shelf">
            <Button title="Shelf B" />
          </div>
        </Link>
        <Link to="/bins/C">
          <div className="shelf">
            <Button title="Shelf C" />
          </div>
        </Link>
        <Link to="/bins/D">
          <div className="shelf">
            <Button title="Shelf D" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default shelfList;
