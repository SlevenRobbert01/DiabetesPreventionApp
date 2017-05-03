import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dispatcher from './dispatcher.js';
import constants from './constants.js';

const changeRoute = (route) => {
  dispatcher.handleViewAction({
    type: constants.ActionTypes.CHANGE_ROUTE,
    route: route
  })
}

window.appContainer = {
  navigateTo: (segmentOrRoute) => {
    changeRoute(segmentOrRoute);
    window.location.href = '#' + segmentOrRoute;
  },
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
