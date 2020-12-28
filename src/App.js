import React from 'react';
import Search from './components/Search'
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'


function App() {
  return (
      <BrowserRouter>
        <div>
          <Navbar />
            <Route path="/search" component={Search} />
        </div>
      </BrowserRouter>
  );
}

export default App;
