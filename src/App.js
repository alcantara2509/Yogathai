import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Index'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
