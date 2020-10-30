import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './components/devTools';

ReactDOM.render(
  <Provider store={store}>
    <App />
    {(process.env.NODE_ENV === 'development') && <DevTools />}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
