import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// TODO - Material UI throws "Warning: findDOMNode is deprecated in StrictMode.
//  findDOMNode was passed an instance of LoadingSpinner which is inside
//  StrictMode. Instead, add a ref directly to the element you want to
//  reference. Learn more about using refs safely here:
//  https://fb.me/react-strict-mode-find-node".
//  I'm turning off StrictMode for now
// With StrictMode
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
