import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
// import thunk from "redux-thunk";
import userReducer from './reducers/userReducer.js'
import usersReducer from './reducers/usersReducer.js'

// const store= createStore(userReducer, applyMiddleware(thunk))
const store=createStore(userReducer, usersReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);


