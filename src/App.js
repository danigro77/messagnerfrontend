import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
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

      <BrowserRouter>
        <header className="App-header">
          <Link to='/'><h1>Messenger</h1></Link>
        </header>

        <Route exact path="/" component={Conversations} />
        <Route path="/conversations/:uuid/:name" component={Conversation} />

        <footer>
          <p>Daniela Kohls, 2019-05-26</p>
        </footer>
      </BrowserRouter>

      </div>
    </Provider>
  );
}

export default App;
