import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dispatcher from './dispatcher.js';
import constants from './constants.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

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
  run: () => {
    injectTapEventPlugin();
  }
};

window.appContainer.run();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
