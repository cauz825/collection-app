import React from 'react';
import Inventory from './components/Inventory'
import Search from './components/Search'
import Results from './components/Results'
import './App.css';

function App() {
  return (
    <div>
      <h1>MTG Collection App</h1>
      {/* <Search /><br></br> */}
      {/* <Results /><br></br> */}
      <Inventory /><br></br>
    </div>
  );
}

export default App;
