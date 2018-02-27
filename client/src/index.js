import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers/rootReducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = applyMiddleware(thunk, promise, logger);
export const store = createStore(
  rootReducers,
  devTools,
  middleware,
  applyMiddleware()
);



const router = (

  <BrowserRouter>
    <Provider store= {store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
