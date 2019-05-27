import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import conversation from './modules/conversation';
import conversations from './modules/conversations';

const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore); // apply logger to redux

const reducer = combineReducers({
  conversation,
  conversations,
});

const configureStore = initialState => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
