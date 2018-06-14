import AppDispatcher from '../Dispatcher/dispatcher'
import FluxConstants from '../Constants/constants'

// Define action methods
var FluxActions = {

  addText: function(name,address,number,password) {
      console.log('dispatching addText')
    AppDispatcher.handleAction({
      actionType: FluxConstants.ADD_TEXT,
        name : name,
        address : address ,
        number : number,
        password : password
    })
  },

//   recieveText: function(name,address,number) {
//     AppDispatcher.handleAction({
//       actionType: FluxConstants.RECIEVE_TEXT,
//       name : name,
//       address : address ,
//       number : number
//     })
//   },

  recieveText: function(data) {
    console.log('dispatching receiveText')
      
    AppDispatcher.handleAction({
      actionType: FluxConstants.RECIEVE_TEXT,
      data:data
    })
  },

//   deleteStuffs: function (key) {
//     AppDispatcher.handleAction({
//       actionType: FluxConstants.DELETE_STUFFS,
//       key: key,
//     })
//   },
};

module.exports = FluxActions;