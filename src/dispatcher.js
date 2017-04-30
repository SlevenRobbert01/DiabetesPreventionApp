var Dispatcher = require('flux').Dispatcher;
var constants = require('./constants.js');
var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;
var isDispatching = false;

var FocusDispatcher = _.extend(_.extend(new Dispatcher(), {
  isDispatching: function(){
    return isDispatching;
  },

  dispatchPayload: function (payload) {
    if (payload.action.type) {
      isDispatching = true;
      this.dispatch(payload);
      isDispatching = false;
    } else {
      console.log('please provide a valid type for the dispatcher action');
    }
    this.emitChange();
  },

  handleViewAction: function(action) {
    var payload = {
      source: constants.PayloadSources.VIEW,
      action: action
    };
    this.dispatchPayload(payload);
  },

  handleBootAction: function(action) {
    var payload = {
      source: constants.PayloadSources.BOOT,
      action: action
    };
    this.dispatchPayload(payload);

  },

  handleServerAction: function(action) {
    var payload = {
      source: constants.PayloadSources.SERVER,
      action: action
    };
    this.dispatchPayload(payload);
  },
  emitChange: function () {
    this.emit('dispatchDone');
  },
  addDispatchDoneListener: function (callback) {
    this.on('dispatchDone', callback);
  },
  removeDispatchDoneListener: function (callback) {
    this.removeListener('dispatchDone', callback);
  },
}), EventEmitter.prototype);

module.exports = FocusDispatcher;
