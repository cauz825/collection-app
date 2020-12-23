import React from 'react';
import Search from './components/Search'
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Collection App</h1>
      <Search /><br></br>
    </div>
  );
}

export default App;
