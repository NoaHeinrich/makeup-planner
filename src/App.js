import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path='/' />
          <Route exact path='/brands'/>
          <Route exact path='/brands/:brandName'/>
          <Route exact path='categories'/>
          <Route exact path='categories/:categoryName' />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
