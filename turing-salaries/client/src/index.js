import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(devTools);


const router = (

  <BrowserRouter>
    <Provider store= {store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
