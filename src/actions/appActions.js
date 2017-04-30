const constants = require('../constants.js');
const dispatcher = require('../dispatcher');

module.exports = {
  saveData(data){
    dispatcher.handleViewAction({
      type: constants.ActionTypes.SAVE_DATA,
      data: data,
    });
  }
}