import React from 'react';
import Search from './components/Search'
import Navbar from './components/Navbar';
// import Search from './components/Search2';
import CardSearch from './components/CardSearch';
import './App.css';
// import {BrowserRouter, Route} from 'react-router-dom'


function App() {
  return (
      <div>
        <Navbar />
        <Search />
        <CardSearch />
      </div>
      
  );
}

export default App;
