import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <div className='top'>
      <header className="App-header">
        <Navbar />
      </header>
      </div>

      <div className='bottom'>
      <h1 className='body'>Hi! I'm Justin!</h1>
      <Button variant='contained'>This is a test button</Button>
      </div>
    </div>
  );
}

export default App;
