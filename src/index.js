import React from 'react';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
// import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import './index.css'

const store= createStore(userReducer, applyMiddleware(thunk))
// const store=createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);


