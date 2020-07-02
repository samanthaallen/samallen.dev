import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Name from './Name';
import HeaderLinks from './HeaderLinks';
import * as serviceWorker from './serviceWorker';
import PostContainer from './PostContainer';

ReactDOM.render(
  <React.StrictMode>
    <HeaderLinks />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
