import AppDispatcher from '../Dispatcher/dispatcher'
var EventEmitter = require('events').EventEmitter;
import FluxCartConstants from '../Constants/constants'
import textAPI from '../API/textAPI'
import _ from 'underscore'

// Define initial data points
var _user = [];


// Add product to cart
function textAdd(name,address,number,password) {
  _user.push({ 
      name : name,
      address : address ,
      number : number,
      password : password
   });
   console.log(_user)
}


// // Remove item from cart
// function removeItem(img) {
//   _user.img = "";
// }

// function removeData(key) {
  
//   _user.splice(key, 1)
// }

function loadText(name,address,number) {
  textAPI.retrieveText(name,address,number);
}

function loadUser(data){
  _user=data
}

console.log(loadText)


// Extend Cart Store with EventEmitter to add eventing capabilities
var TextStore = _.extend({}, EventEmitter.prototype, {
  
    getText: function () {
        loadText("chirag", "chirag", "schirag");
        return _user;
      },
 
  // Emit Change event
  emitChange: function () {
    this.emit('change');
  },
  // Add change listener
  addChangeListener: function (callback) {
    this.on('change', callback);
  },
  // Remove change listener
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }
});

// Register callback with AppDispatcher
AppDispatcher.register(function (payload) {
  var action = payload.action;
//   var text;
  switch (action.actionType) {

    // case FluxCartConstants.ADD_TEXT:
    //   textAdd(action.data);
    //   break;

      case FluxCartConstants.RECIEVE_TEXT:
      // textAdd(action.name,action.address,action.number);
      loadUser(action.data)
      break;  

      case FluxCartConstants.ADD_TEXT:
      textAdd(action.name,action.address,action.number,action.password);
      break;

      // case FluxCartConstants.DELETE_STUFFS:
      // removeData(action.key);
      // break;
    //server dispatcher for check loggedIn and add/remove to/from favorite
    //functions to have = getUserLoggedIn(), addToFavorite(), removeFromFavorite()


    default:
      return true;
  }
  // If action was responded to, emit change event
  TextStore.emitChange();
  return true;
});


export default TextStore;
