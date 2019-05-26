import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './redux/configureStore';

import './App.css';

import Conversations from './components/container/conversations/conversations'
import Conversation from './components/container/conversation/conversation'

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Messenger</h1>
        </header>

        <BrowserRouter>
          <Route path="/conv/:uuid" component={Conversation} />
          <Route exact path="/" component={Conversations} />
        </BrowserRouter>

        <footer>
          <p>Daniela Kohls, 2019-05-26</p>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
