import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from "redux";
import loginReducer from './store/loginReducer';
import prodReducer from './store/prodReducer';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
  pr: prodReducer,
  lr: loginReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);
