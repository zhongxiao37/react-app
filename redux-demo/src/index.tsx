import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counter from './reducers/counter';
import App from './App';
import { Provider } from 'react-redux';

const store = createStore(counter, { cnt: 1 });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
