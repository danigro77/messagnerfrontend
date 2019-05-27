import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import createStore from './redux/configureStore';

import './App.css';

import Conversations from './components/container/conversations/conversations';
import Conversation from './components/container/conversation/conversation';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Container className="container">
            <Row className="header">
              <Link to="/"><h1>Messenger</h1></Link>
            </Row>

            <Row className="content">
              <Route exact path="/" component={Conversations} />
              <Route path="/conversations/:uuid/:name" component={Conversation} />
            </Row>

            <Row className="footer">
              <p>Daniela Kohls, 2019-05-26</p>
            </Row>
          </Container>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
