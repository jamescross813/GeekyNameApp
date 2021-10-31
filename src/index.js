import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

const store= createStore(applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);


