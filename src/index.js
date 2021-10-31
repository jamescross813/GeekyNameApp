import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
// import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// const store= createStore(userReducer, applyMiddleware(thunk))
const store=createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);


