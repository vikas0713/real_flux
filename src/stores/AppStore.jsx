var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var AppConstants = require('../constants/AppConstants.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _productList = [];
var _accessToken = '';

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var AppStore = assign({}, EventEmitter.proptype,{
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

  isLoggedIn: function(){
    return _accessToken ? true : false;
  },

  productsList: function(){
    return _productList;
  }
});

AppStore.dispatchDetails = AppDispatcher.register(function(payload){
  // AppDispatcher.waitFor([])
  var action = payload.action;
  switch(action.type) {

    case ActionTypes.PRODUCT_LIST:
      if(action.json){
        action.json.map(function(product){
          _productList.push(product);
        });
      }else{ alert("Connection Error"+action.error);}
      break;

    case ActionTypes.LOGIN_RESPONSE:
      if(action.access_token){
        _accessToken = access_token;
      }
      break;

    case ActionTypes.LOGOUT:
      _accessToken = '';
      break;

    default:
        return true;
  }

  return true;
});
console.log(AppStore.productsList)
module.exports = AppStore;
