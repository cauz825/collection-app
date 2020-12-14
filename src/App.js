import React from 'react';
import Inventory from './components/Inventory'
import Search from './components/Search'
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Collection App</h1>
      <Search /><br></br>
      {/* <Inventory /> */}
    </div>
  );
}

export default App;
