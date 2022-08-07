import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
import './index.css';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
let persistor = persistStore(store);

const container = document.getElementById('root');
const root = createRoot(container);
// const history = createHistory()

// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
var baseUrl = (document.querySelector('base') || {}).href;
console.log("baseUrl :", baseUrl)
// const history = createBrowserHistory({ basename: "/" });
const history = createBrowserHistory()
console.log("history :", history)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
      {/* </ConnectedRouter> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
