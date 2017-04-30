const Constants = require('../constants.js');
const EventEmitter = require('events').EventEmitter;
const dispatcher = require('../dispatcher');
const _ = require('lodash');

let screeningData = {
  personAge: {value: ''},
  personWeight: {value: ''},
  personLength: {value: ''},
  personSmokes: false,
  personMoves: false,
  personMedication: false,
};

const store = _.extend({
  emitChange: function () {
    this.emit(Constants.Events.CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(Constants.Events.CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(Constants.Events.CHANGE_EVENT, callback);
  },
  getScreeningData: function() {
    return screeningData;
  },
  getBmiResult: function(){
    return Constants.ScreeningResult.GOOD;
  },
  dispatchToken: dispatcher.register(function (payload) {
    switch (payload.action.type) {
    case Constants.ActionTypes.SAVE_DATA:
      screeningData = payload.action.data;
      store.emitChange();
      break;
    default:
      break;
    }
  })
}, EventEmitter.prototype);

module.exports = store;
