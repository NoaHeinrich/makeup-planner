import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import HomePage from './pages/HomePage'
import CategoryIndex from './pages/CategoryIndex'
import BrandIndex from './pages/BrandIndex'
import BrandDisplay from './pages/BrandDisplay'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/brands' component={BrandIndex}/>
          <Route exact path='/brands/:brandName'component={BrandDisplay}/>
          <Route exact path='/categories' component={CategoryIndex}/>
          <Route exact path='categories/:categoryName' />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
