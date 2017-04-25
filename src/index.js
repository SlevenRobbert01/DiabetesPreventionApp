import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.appContainer = {
  navigateTo: (segmentOrRoute) => {
    window.location.href = '#' + segmentOrRoute;
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
