import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducer/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);