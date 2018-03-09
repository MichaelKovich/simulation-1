import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import './App.css';

function app() {
  return (
    <div>
      <Header />
      <div className="App">
        <Button title="Shelf A" />
        <Button title="Shelf B" />
        <Button title="Shelf C" />
        <Button title="Shelf D" />
      </div>
    </div>
  );
}

export default app;
