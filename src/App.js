import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Communications from './components/container/communications/communications'
import Communication from './components/container/communication/communication'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Messenger</h1>
      </header>

      <BrowserRouter>
        <Route path="/communication/:uuid" component={Communication} />
        <Route exact path="/" component={Communications} />
      </BrowserRouter>

      <footer>
        <p>Daniela Kohls, 2019-05-26</p>
      </footer>
    </div>
  );
}

export default App;
